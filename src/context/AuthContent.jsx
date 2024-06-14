import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertarUsuarios } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertarUsuarios(session?.user.user_metadata, session?.user.id);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("idAuthSupabase", idAuthSupabase);

    if (error) {
      console.error("Error al consultar la base de datos:", error.message);
      return;
    }
    if (data && data.length > 0) {
      console.log("El usuario ya existe en la base de datos", data[0]);
      return;
    }

    const p = {
      nombres: dataProvider.name,
      foto: dataProvider.picture,
      idAuthSupabase: idAuthSupabase,
    };
    
    await InsertarUsuarios(p);
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
