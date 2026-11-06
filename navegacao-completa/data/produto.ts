export type Produto = {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
  };
  
  export const produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado Mecânico',
      preco: 249.9,
      descricao: 'Teclado para trabalhar, estudar e jogar.',
    },
    {
      id: 2,
      nome: 'Mouse Sem Fio',
      preco: 89.9,
      descricao: 'Mouse confortável para uso diário.',
    },
    {
      id: 3,
      nome: 'Headset',
      preco: 159.9,
      descricao: 'Fone com microfone para chamadas e jogos.',
    },
  ];