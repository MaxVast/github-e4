import { createContext, useContext, useEffect, useState } from "react";

import { authClient } from "../lib/auth-client";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupération de la session au chargement de l'application
    async function fetchSession() {
      try {
        const { data, error } = await authClient.getSession();
        if (data) {
          setSession(data);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération de la session", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSession();
  }, []);

  // Propriétés pratiques pour vos routes protégées
  const isAuthenticated = !!session;

  return (
    <AuthContext.Provider value={{ session, isAuthenticated, loading, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};