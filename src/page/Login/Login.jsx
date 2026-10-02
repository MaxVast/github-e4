import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../user/UserContext";
import { MIN_PASSWORD_LENGTH } from "../../user/userStorage";

function Login() {
  const { user, login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from ?? "/profile";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Le nom est obligatoire.");
      return;
    }

    if (!(await login({ name, email, password }))) {
      setError("Mot de passe incorrect.");
      return;
    }

    navigate(redirectTo, { replace: true });
  }

  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">GitHub Team Workshop</p>
        <h1>Connexion</h1>
        <p>Connecte-toi pour accéder à ton profil.</p>
      </header>

      <section className="card">
        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="login-name">Nom</label>
          <input
            id="login-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="login-email">Adresse e-mail</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="login-password">Mot de passe</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            minLength={MIN_PASSWORD_LENGTH}
            required
          />

          {error && (
            <p className="form-message error" role="alert">
              {error}
            </p>
          )}

          <button type="submit">Se connecter</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
