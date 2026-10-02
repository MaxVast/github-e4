import { useState } from "react";
import { UserContext } from "./UserContext";
import {
  createAccount,
  hasSession,
  hashPassword,
  loadAccount,
  storeAccount,
  storeSession
} from "./userStorage";

function UserProvider({ children }) {
  const [account, setAccount] = useState(loadAccount);
  const [isLoggedIn, setIsLoggedIn] = useState(hasSession);

  function saveAccount(nextAccount) {
    setAccount(nextAccount);
    storeAccount(nextAccount);
  }

  function saveSession(nextIsLoggedIn) {
    setIsLoggedIn(nextIsLoggedIn);
    storeSession(nextIsLoggedIn);
  }

  // Authentification simulée : un seul compte, enregistré dans le navigateur.
  async function login({ name, email, password }) {
    const passwordHash = await hashPassword(password);
    const isKnownEmail = account?.email === email.trim().toLowerCase();

    if (isKnownEmail && account.passwordHash !== passwordHash) {
      return false;
    }

    if (!isKnownEmail) {
      saveAccount(createAccount({ name, email, passwordHash }));
    }

    saveSession(true);
    return true;
  }

  function logout() {
    saveSession(false);
  }

  async function changePassword(currentPassword, newPassword) {
    if ((await hashPassword(currentPassword)) !== account.passwordHash) {
      return false;
    }

    saveAccount({ ...account, passwordHash: await hashPassword(newPassword) });
    return true;
  }

  const user = isLoggedIn ? account : null;

  return (
    <UserContext.Provider
      value={{ user, login, logout, saveUser: saveAccount, changePassword }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
