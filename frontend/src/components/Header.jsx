import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../user/UserContext";
import Avatar from "./Avatar";

function closeMenu(event) {
  event.currentTarget.closest("details").open = false;
}

function Header() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  function handleLogout(event) {
    closeMenu(event);
    logout();
    navigate("/login");
  }

  return (
    <nav className="topbar">
      <Link className="brand" to="/a">
        Team Tasks
      </Link>

      {user ? (
        <details className="user-menu">
          <summary aria-label="Menu utilisateur">
            <Avatar user={user} />
            <span>{user.name}</span>
          </summary>

          <div className="user-menu-panel">
            <Link to="/profile" onClick={closeMenu}>
              Mon profil
            </Link>
            <button type="button" onClick={handleLogout}>
              Se déconnecter
            </button>
          </div>
        </details>
      ) : (
        <Link className="login-link" to="/login">
          Se connecter
        </Link>
      )}
    </nav>
  );
}

export default Header;
