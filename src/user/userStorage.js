const ACCOUNT_KEY = "team-user";
const SESSION_KEY = "team-session";

export const MIN_PASSWORD_LENGTH = 8;

export function loadAccount() {
  const savedAccount = localStorage.getItem(ACCOUNT_KEY);

  return savedAccount ? JSON.parse(savedAccount) : null;
}

export function storeAccount(account) {
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
}

export function hasSession() {
  return localStorage.getItem(SESSION_KEY) === "true";
}

export function storeSession(isLoggedIn) {
  if (isLoggedIn) {
    localStorage.setItem(SESSION_KEY, "true");
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

export function createAccount(
  { name, email, passwordHash },
  createdAt = new Date().toISOString()
) {
  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    avatarUrl: "",
    passwordHash,
    createdAt
  };
}

export function updateProfile(account, { name, email, avatarUrl }) {
  return {
    ...account,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    avatarUrl: avatarUrl.trim()
  };
}

export function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function formatSignupDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("fr-FR", { dateStyle: "long" });
}

// Pas de backend : on évite au moins de stocker le mot de passe en clair.
export async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
