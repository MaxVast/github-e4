import { useState } from "react";
import { updateProfile } from "../../user/userStorage";

function EditProfileForm({ user, onSave }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [message, setMessage] = useState({ text: "", isError: false });

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setMessage({ text: "Le nom est obligatoire.", isError: true });
      return;
    }

    onSave(updateProfile(user, { name, email, avatarUrl }));
    setMessage({ text: "Profil enregistré.", isError: false });
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Modifier le profil</h2>

      <label htmlFor="profile-name">Nom</label>
      <input
        id="profile-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        autoComplete="name"
        required
      />

      <label htmlFor="profile-email">Adresse e-mail</label>
      <input
        id="profile-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
        required
      />

      <label htmlFor="profile-avatar">URL de l'avatar</label>
      <input
        id="profile-avatar"
        type="url"
        value={avatarUrl}
        onChange={(event) => setAvatarUrl(event.target.value)}
        placeholder="https://…"
      />

      {message.text && (
        <p
          className={message.isError ? "form-message error" : "form-message"}
          role={message.isError ? "alert" : "status"}
        >
          {message.text}
        </p>
      )}

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default EditProfileForm;
