
  // Função para calcular a diferença entre a hora de criação e a hora atual
  export const timeDiff = (createdTime, currentTime) => {
    const diffInSeconds = Math.floor((currentTime - createdTime) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);

    // Se a diferença for menor que 5 segundos, mostrar em segundos
    if (diffInSeconds < 25) {
      return `${diffInSeconds} seg`;
    }

    // Mostra a diferença a cada 5 segundos
    if (diffInSeconds < 60) {
        const roundedSeconds = Math.floor(diffInSeconds / 5) * 5;
        return `${roundedSeconds} seg`;
      }


    // Se a diferença for menor que 5 minutos, mostrar em minutos
    if (diffInMinutes < 5) {
      return `${diffInMinutes} min`;
    }

    // Se a diferença for menor que 60 minutos, mostrar a cada 5 minutos
    if (diffInMinutes < 60) {
      const roundedMinutes = Math.floor(diffInMinutes / 5) * 5;
      return `${roundedMinutes} min`;
    }

    // Se a diferença for maior que 60 minutos, mostrar por hora
    if (diffInHours < 24) {
      return `${diffInHours} h`;
    }

    // Se a diferença for maior que 24 horas, mostrar por dia
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} dia${diffInDays !== 1 ? 's' : ''} `;
};