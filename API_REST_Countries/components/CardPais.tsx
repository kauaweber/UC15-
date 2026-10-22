
import { View, Text, StyleSheet } from 'react-native';

export interface Pais {
  names: {
    common: string;
  };
  capitals?: (string | { name: string })[];
  population?: number;
  region?: string;
  flag?: {
    emoji?: string;
  };
  codes: {
    alpha_3: string;
  };
}

interface Props {
  pais: Pais;
}

export default function CardPais({ pais }: Props) {
  const capital = pais.capitals?.[0];

  const nomeCapital =
    typeof capital === 'string'
      ? capital
      : capital && typeof capital === 'object'
        ? JSON.stringify(capital)
        : 'Não informada';

  return (
    <View style={styles.card}>
      <Text style={styles.bandeira}>
        {pais.flag?.emoji ?? '🌎'}
      </Text>

      <Text style={styles.nome}>
        {pais.names.common}
      </Text>

      <Text>Capital: {nomeCapital}</Text>

      <Text>
        População:{' '}
        {pais.population?.toLocaleString('pt-BR') ?? 'Não informada'}
      </Text>

      <Text>Região: {pais.region ?? 'Não informada'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },
  bandeira: {
    fontSize: 45,
    marginBottom: 8,
  },
  nome: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
  },
});
