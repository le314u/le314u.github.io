import React, { useState } from 'react';

function AttComp() {
  const options = [
    { value: 'option1', label: 'Opção 1' },
    { value: 'option2', label: 'Opção 2' },
    { value: 'option3', label: 'Opção 3' },
    // Adicione mais opções conforme necessário
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <h2>Selecione Múltiplas Opções</h2>
      <select
        multiple
        value={selectedOptions}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Opções Selecionadas: {selectedOptions.join(', ')}</p>
    </div>
  );
}

export default AttComp;
