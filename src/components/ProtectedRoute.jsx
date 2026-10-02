import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../user/UserContext";

function ProtectedRoute({ children }) {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
