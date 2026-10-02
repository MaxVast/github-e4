import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="error-page">
      <section className="error-content" aria-labelledby="error-title">
        <p className="error-code">404</p>
        <h1 id="error-title">Page non trouvée</h1>
        <p className="error-message">
          Cette adresse ne correspond à aucune page de l’application.
        </p>
        <Link className="error-home-link" to="/">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}

export default NotFound;