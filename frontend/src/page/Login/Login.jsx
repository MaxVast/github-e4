import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ user: "", password: "" });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "User ou mot de passe incorrect.");
      }

      setStatus({
        loading: false,
        error: "",
        success: data.message || "Connexion réussie.",
      });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: "" });
    }
  };

  return (
    <main style={styles.page}>
      <section style={styles.card} aria-labelledby="login-title">
        <h1 id="login-title" style={styles.title}>
          Connexion
        </h1>
        <p style={styles.subtitle}>Connectez-vous à votre compte</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="User" style={styles.label}>
            User
          </label>
          <input
            id="User"
            name="User"
            type="User"
            autoComplete="Username"
            value={form.User}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="password" style={styles.label}>
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
            style={styles.input}
          />

          {status.error && (
            <p style={styles.error} role="alert">
              {status.error}
            </p>
          )}
          {status.success && (
            <p style={styles.success} role="status">
              {status.success}
            </p>
          )}

          <button type="submit" disabled={status.loading} style={styles.button}>
            {status.loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "24px",
    background: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    padding: "36px",
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 12px 35px rgba(15, 23, 42, .12)",
  },
  title: { margin: "0 0 8px", color: "#172033", textAlign: "center" },
  subtitle: { margin: "0 0 28px", color: "#64748b", textAlign: "center" },
  form: { display: "grid", gap: "10px" },
  label: { marginTop: "8px", color: "#334155", fontWeight: 600 },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    marginTop: "14px",
    padding: "13px",
    border: 0,
    borderRadius: "8px",
    color: "#fff",
    background: "#2563eb",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
  error: { margin: "8px 0 0", color: "#dc2626" },
  success: { margin: "8px 0 0", color: "#15803d" },
};
