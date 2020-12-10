import React, { useState } from 'react';
import { render } from 'react-dom';
// importando ícones que serão exibidos no lugar de fotos inexistentes de alunos
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { SearchContainer, Form } from './styled';

// importando componente de loading da página
import Loading from '../../components/Loading';

export default function Consultas() {
  // definindo estado isLoading da página
  const [isLoading, setIsLoading] = useState(false);
  // definindo os estados da string
  const [palavra, setPalavra] = useState('');

  function handlePalindromo(e) {
    e.preventDefault();
    // validação do input
    let formErrors = false;
    if (palavra.length < 1 || palavra.length > 20) {
      toast.error('Deve ser informado uma string entre 1 e 20 caracteres');
      formErrors = true;
    }
    if (formErrors) return render(<></>, document.getElementById(`result`));

    // eslint-disable-next-line consistent-return
    const checkPalindromo = function () {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - i - 1]) return false;
        return true;
      }
    };
    const exibeResultado = (
      <div>
        <span className="result">
          {checkPalindromo()
            ? `"${palavra}" é palíndromo`
            : `"${palavra}" não é palíndromo`}
        </span>
      </div>
    );
    // eslint-disable-next-line consistent-return
    return render(exibeResultado, document.getElementById(`result`));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Pesquisas</h1>
      {/* exibindo dados da api na página */}
      <Form onSubmit={(e) => handlePalindromo(e)}>
        <input
          type="text"
          placeholder="Digite a string"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />{' '}
        <button type="submit">é palindromo?</button>
      </Form>
      <SearchContainer id="result" />
    </Container>
  );
}
