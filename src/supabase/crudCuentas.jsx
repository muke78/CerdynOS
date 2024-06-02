import { supabase } from "../index";
export async function MostrarCuentas(p) {
  try {
    const { data } = await supabase
      .from("cuentas")
      .select()
      .eq("idusuario", p.idusuario)
      .maybeSingle();
    if (data) {
      return data;
    }
    return data;
  } catch (error) {}
}
  