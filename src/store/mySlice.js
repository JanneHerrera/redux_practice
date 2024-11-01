import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: [],
  },
  reducers: {
    addCandidate: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload];
    },
    modificarUnValor: (state, action) => {
      const { index, nuevoContinente } = action.payload;
      state.trabajadores[index].departamento = nuevoContinente;
    },
    eliminarUnValor: (state, action) => {
      const { nombre, apellido, telefono } = action.payload;
      state.trabajadores = state.trabajadores.filter(
        (valor) =>
          valor.name.fisrt != nombre &&
          valor.name.last != apellido &&
          valor.cell != telefono
      );
    },
  },
});

export const departamentoSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    departamentos: ["africa (ventas)", "America(organizacion)"],
  },
  reducer: {},
});

export const { addCandidate, modificarUnValor, eliminarUnValor } =
  mySlice.actions;
