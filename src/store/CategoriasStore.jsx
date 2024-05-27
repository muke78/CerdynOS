import { create } from "zustand";
import {
  MostrarCategorias,
  InsertarCategorias,
  EditarCategorias,
  EliminarCategorias,
} from "../index";

export const useCategoriasStore = create((set, get) => ({
  datacategoria: [],
  mostrarCategorias: async (p) => {
    const res = await MostrarCategorias(p);
    set({ datacategoria: res });
    return res;
  },

  insertarCategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  editarCategoria: async (p) => {
    await EditarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  eliminarCategoria: async (p) => {
    await EliminarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
}));
