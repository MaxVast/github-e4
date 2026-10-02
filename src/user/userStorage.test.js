// @vitest-environment node
import { describe, expect, it } from "vitest";
import {
  createAccount,
  getInitials,
  hashPassword,
  updateProfile
} from "./userStorage";

describe("createAccount", () => {
  it("creates an account with trimmed fields", () => {
    expect(
      createAccount(
        { name: "  Ada Lovelace ", email: " Ada@Example.com ", passwordHash: "h" },
        "2026-10-02T00:00:00.000Z"
      )
    ).toEqual({
      name: "Ada Lovelace",
      email: "ada@example.com",
      avatarUrl: "",
      passwordHash: "h",
      createdAt: "2026-10-02T00:00:00.000Z"
    });
  });
});

describe("updateProfile", () => {
  it("updates profile fields and keeps the rest", () => {
    const account = createAccount(
      { name: "Ada", email: "ada@example.com", passwordHash: "h" },
      "2026-10-02T00:00:00.000Z"
    );

    expect(
      updateProfile(account, {
        name: " Grace ",
        email: "Grace@Example.com",
        avatarUrl: " https://example.com/a.png "
      })
    ).toEqual({
      ...account,
      name: "Grace",
      email: "grace@example.com",
      avatarUrl: "https://example.com/a.png"
    });
  });
});

describe("getInitials", () => {
  it("returns up to two initials", () => {
    expect(getInitials("ada king lovelace")).toBe("AK");
    expect(getInitials("Ada")).toBe("A");
  });
});

describe("hashPassword", () => {
  it("never returns the password in clear", async () => {
    const hash = await hashPassword("motdepasse");

    expect(hash).toHaveLength(64);
    expect(hash).not.toContain("motdepasse");
    expect(await hashPassword("motdepasse")).toBe(hash);
  });
});
