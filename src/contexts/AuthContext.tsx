import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";
import { auth, provider } from "../firebase";
import { useLocation, useNavigate } from "react-router";
// import { doc, setDoc } from "firebase/firestore";
// import PageLoading from "../components/PageLoading";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  async function signup(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password);
    // setDoc(doc(db, `users/${userRef.user.uid}`), {
    //   email: userRef.user.email,
    //   role: userType,
    // });
  }

  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function continueWithGoogle() {
    const result: any = await signInWithRedirect(auth, provider);
    console.log(result);
  }

  function logout() {
    return signOut(auth);
  }

  async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser: any) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const nonProtectedPaths = ["/sign-in", "/sign-up", "/forgot-password"];
    if (!loading) {
      (async () => {
        if (user === null) {
          if (!nonProtectedPaths.includes(location.pathname))
            navigate("/sign-in");
        } else {
          if (nonProtectedPaths.includes(location.pathname)) {
            navigate("/dashboard");
          }
        }
      })();
    }
  }, [user, loading, location.pathname]);
  

  const value: AuthContextProps = {
    user,
    logout,
    login,
    signup,
    continueWithGoogle,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
