import { History } from "history";
import * as React from "react";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type State = {
  token: string;
  setAuthState: (authInfo: AuthInfo) => void;
  isAuthenticated: () => boolean;
  logout: (history: History) => void;
};

type AuthInfo = {
  token: string;
};

const authStateContext = React.createContext<State | undefined>(undefined);

const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}: AuthContextProviderProps) => {
  const token = window.localStorage.getItem("token") || "";

  const [authState, setAuthState] = React.useState<AuthInfo>({
    token,
  });

  const isAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
    return true;
  };

  const logout = (history: History) => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userInfo");
    window.localStorage.removeItem("expiresAt");
    setAuthState({ token: "" });

    history.push("/auth/login");
  };

  const setAuthInfo = async (authInfo: AuthInfo) => {
    if (authInfo) {
      await window.localStorage.setItem("token", authInfo?.token);
      setAuthState(authInfo);
    }
  };

  return (
    <authStateContext.Provider
      value={{
        ...authState,
        setAuthState: setAuthInfo,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </authStateContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(authStateContext);

  if (context === undefined) {
    throw new Error("useAuth should be used within a authProvider ");
  }

  return context;
};

export { AuthProvider, useAuth, authStateContext };
