import { create } from "zustand";
import {
  MostrarCategorias,
  InsertarCategorias,
  EditarCategorias,
  EliminarCategorias,
  EliminarCategoriasTodas,
} from "../index";

export const useCategoriasStore = create((set, get) => ({
  datacategoria: [],
  categoriaItemSelect: [],
  parametros: {},
  mostrarCategorias: async (p) => {
    const res = await MostrarCategorias(p);
    set({ datacategoria: res });
    set({ categoriaItemSelect: res[0] });
    return res;
  },

  insertarCategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias } = get();
    const { parametros } = get();
    set(mostrarCategorias(parametros));
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
  eliminarCategoriasTodas: async (p) => {
    await EliminarCategoriasTodas(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
}));
