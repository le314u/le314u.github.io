import React, { useEffect, useState, useRef} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Tema escuro


const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false); // Estado para controlar o texto do botão
  const codeRef = useRef(null); // Referência ao código para copiar

  useEffect(() => {
    // Após o componente ser montado, destacar o código
    Prism.highlightAll();
  }, [code]); // Re-executa quando o código mudar

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code); // Copia o código para a área de transferência
      setCopied(true); // Muda o estado para "copiado"
      setTimeout(() => setCopied(false), 2000); // Reseta o estado para "Copiar" após 2 segundos
    } catch (err) {
      console.error('Falha ao copiar o código: ', err);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
    
    <button
      onClick={handleCopy}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '3px',
      }}
    >
      {copied ? 'Copiado!' : 'Copiar'}
    </button>

    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>

    </div>
  );
};

export default CodeBlock;
