
export async function buscarPaises() {
    const [respostaPaises, respostaPopulacao] = await Promise.all([
      fetch(
        'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
      ),
      fetch(
        'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&per_page=2000&date=2020:2025'
      ),
    ]);
  
    if (!respostaPaises.ok || !respostaPopulacao.ok) {
      throw new Error('Erro ao buscar os dados dos países.');
    }
  
    const paises = await respostaPaises.json();
    const dadosPopulacao = await respostaPopulacao.json();
  
    const registros = Array.isArray(dadosPopulacao[1])
      ? dadosPopulacao[1]
      : [];
  
    const populacoes: Record<string, number> = {};
  
    registros
      .sort((a: any, b: any) => Number(b.date) - Number(a.date))
      .forEach((item: any) => {
        if (
          item.countryiso3code &&
          item.value !== null &&
          item.value !== undefined &&
          populacoes[item.countryiso3code] === undefined
        ) {
          populacoes[item.countryiso3code] = item.value;
        }
      });
  
    return paises.map((pais: any) => ({
      names: {
        common: pais.name.common,
      },
      capitals: pais.capital ?? [],
      population: populacoes[pais.cca3],
      region: pais.region ?? '',
      flag: {
        emoji: pais.flag ?? '🌎',
        url_png: pais.flags?.png,
      },
      codes: {
        alpha_3: pais.cca3,
      },
    }));
  }
  