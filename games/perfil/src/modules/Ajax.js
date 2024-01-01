// URL da API que você deseja chamar
const base_url = 'https://raw.githubusercontent.com/le314u/LoremIpsum-PTBR/main'

// Fazendo a requisição usando fetch
const get = async () => {
  try {
    const apiUrl = sessionStorage.getItem("thema");
    const url = `${base_url}${apiUrl?apiUrl:'/perfil/default.json'}`
    const response = await fetch(url);
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