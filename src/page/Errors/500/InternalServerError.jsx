import { Link } from "react-router-dom";

function InternalServerError() {
  return (
    <main className="error-page">
      <section className="error-content" aria-labelledby="error-title">
        <p className="error-code">500</p>
        <h1 id="error-title">Erreur interne du serveur</h1>
        <p className="error-message">
          Une erreur inattendue est survenue. Vous pouvez revenir à l’accueil.
        </p>
        <Link className="error-home-link" to="/">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}

export default InternalServerError;