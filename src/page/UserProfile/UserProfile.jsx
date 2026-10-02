import Avatar from "../../components/Avatar";
import { useUser } from "../../user/UserContext";
import { formatSignupDate } from "../../user/userStorage";
import ChangePasswordForm from "./ChangePasswordForm";
import EditProfileForm from "./EditProfileForm";

function UserProfile() {
  const { user, saveUser, changePassword } = useUser();

  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">Mon compte</p>
        <h1>Profil</h1>
        <p>Consulte tes informations personnelles et gère ton compte.</p>
      </header>

      <section className="card profile-summary">
        <Avatar user={user} size="large" />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className="muted">Inscrit le {formatSignupDate(user.createdAt)}</p>
        </div>
      </section>

      <section className="card">
        <EditProfileForm user={user} onSave={saveUser} />
      </section>

      <section className="card">
        <ChangePasswordForm onChangePassword={changePassword} />
      </section>

      <footer>
        <span>React + Vite</span>
        <span>•</span>
        <span>GitHub Flow</span>
      </footer>
    </main>
  );
}

export default UserProfile;
