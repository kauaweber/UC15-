import React, { createContext, useContext, useState } from "react";
import { Pokemon } from "../types/Pokemon";

interface AppContextType {
  favoritos: Pokemon[];
  adicionarFavorito: (pokemon: Pokemon) => void;
  removerFavorito: (id: number) => void;
  temaEscuro: boolean;
  alternarTema: () => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppProvider({ children }: any) {
  const [favoritos, setFavoritos] = useState<Pokemon[]>([]);
  const [temaEscuro, setTemaEscuro] = useState(false);

  function adicionarFavorito(pokemon: Pokemon) {
    setFavoritos((lista) => {
      if (lista.some((p) => p.id === pokemon.id)) {
        return lista;
      }

      return [...lista, pokemon];
    });
  }

  function removerFavorito(id: number) {
    setFavoritos((lista) => lista.filter((p) => p.id !== id));
  }

  function alternarTema() {
    setTemaEscuro((atual) => !atual);
  }

  return (
    <AppContext.Provider
      value={{
        favoritos,
        adicionarFavorito,
        removerFavorito,
        temaEscuro,
        alternarTema,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}