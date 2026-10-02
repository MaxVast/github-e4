import { useState } from "react";
import { MIN_PASSWORD_LENGTH } from "../../user/userStorage";

function ChangePasswordForm({ onChangePassword }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ text: "", isError: false });

  async function handleSubmit(event) {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage({ text: "Les mots de passe ne correspondent pas.", isError: true });
      return;
    }

    if (!(await onChangePassword(currentPassword, newPassword))) {
      setMessage({ text: "Mot de passe actuel incorrect.", isError: true });
      return;
    }

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setMessage({ text: "Mot de passe modifié.", isError: false });
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Sécurité</h2>

      <label htmlFor="current-password">Mot de passe actuel</label>
      <input
        id="current-password"
        type="password"
        value={currentPassword}
        onChange={(event) => setCurrentPassword(event.target.value)}
        autoComplete="current-password"
        required
      />

      <label htmlFor="new-password">Nouveau mot de passe</label>
      <input
        id="new-password"
        type="password"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
        autoComplete="new-password"
        minLength={MIN_PASSWORD_LENGTH}
        required
      />

      <label htmlFor="confirm-password">Confirmer le mot de passe</label>
      <input
        id="confirm-password"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        autoComplete="new-password"
        minLength={MIN_PASSWORD_LENGTH}
        required
      />

      {message.text && (
        <p
          className={message.isError ? "form-message error" : "form-message"}
          role={message.isError ? "alert" : "status"}
        >
          {message.text}
        </p>
      )}

      <button type="submit">Modifier le mot de passe</button>
    </form>
  );
}

export default ChangePasswordForm;
