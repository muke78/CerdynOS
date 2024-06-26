import Swal from "sweetalert2";
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
      .eq("idAuthSupabase", idAuthSupbase)
      .maybeSingle();
    // if (error) {
    //   alert("MostrarUsuarios", error);
    // }
    if (data) {
      return data;
    }
  } catch (error) {
    // alert(error.error_description || error.message + "MostrarUsuarios");
  }
};

export async function EditarTemaMonedaUser(p) {
  try {
    const { error } = await supabase.from("usuarios").update(p).eq("id", p.id);
    if (error) {
      alert("Error al editar usuarios", error);
    }

    Swal.fire({
      title: "Datos modificados",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    alert(error.error_description || error.message + "EditarTemaMonedaUser");
  }
}
