// URL da API que você deseja chamar
let apiUrl = 'https://raw.githubusercontent.com/le314u/LoremIpsum-PTBR/main/perfil/harry_potter.json';

// Fazendo a requisição usando fetch
const get = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erro de rede: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error; // Você pode optar por relançar o erro ou manipulá-lo de outra forma
  }
};

export default get