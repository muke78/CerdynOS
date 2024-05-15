import { supabase, ObtenerIdAuthSupabase } from "../index";

export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").insert(p).select();
    return data;
  } catch (error) {}
};

export const MostrarUsuarios = async () => {
  try {
    const idAuthSupbase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase
      .from("usuarios")
      .select()
      .eq("idAuthSupabase", idAuthSupbase);
    if (error) {
      alert("MostrarUsuarios", error);
    }
    if (data) {
      return data[0];
    }
  } catch (error) {
    alert(error.error_description || error.message + "MostrarUsuarios");
  }
};
