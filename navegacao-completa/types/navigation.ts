import type { NavigatorScreenParams } from '@react-navigation/native';

export type InicioStackParamList = {
  Produtos: undefined;
  Detalhes: { produtoId: number };
};

export type AppTabParamList = {
  Inicio: NavigatorScreenParams<InicioStackParamList>;
  Favoritos: undefined;
  Configuracoes: undefined;
};