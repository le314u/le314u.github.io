import * as React from "react"
import { Link } from "gatsby"
import Main from "../layout/main"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  const blablabla = `Certamente, algo não está certo, pois a certeza, sendo um conceito intrinsecamente subjetivo, coloca em xeque a nossa capacidade de compreender o que está além da mera percepção da realidade. Nesse contexto, é importante destacar que o entendimento de um fenômeno nunca é unívoco, pois o significado é moldado por fatores externos que transcendem a simplicidade do aparente. Logo, é possível afirmar que aquilo que julgamos ser verdade, muitas vezes, não passa de uma construção mental, fruto de nossas próprias limitações cognitivas. Em última instância, o que é real? Seria o real aquele que percebemos com nossos sentidos, ou o que intuimos a partir de um entendimento mais profundo, mesmo que esse entendimento nos escape constantemente?
    De fato, quando nos deparamos com tais questões, somos forçados a reconhecer a fragilidade de nossas certezas, como se cada resposta fosse apenas uma porta que se fecha à medida que novas dúvidas surgem, criando um ciclo contínuo de indagações e respostas que nunca atingem o ponto final da totalidade. Dessa maneira, a busca pelo conhecimento torna-se um processo sem fim, onde cada passo dado em direção ao entendimento parece, paradoxalmente, nos afastar da plenitude que almejamos. Em um mundo onde a dúvida parece ser a única certeza, é curioso como nos apegamos a elementos que julgamos sólidos, mas que, na verdade, podem ser tão efêmeros quanto a própria consciência do ser.
    É nesse contexto de incertezas que o papel da reflexão se torna fundamental, pois ao refletirmos sobre o nosso próprio pensamento, abrimos uma brecha para o questionamento das premissas que sustentam nossas suposições. Contudo, é justamente nessa brecha que reside a verdadeira essência do conhecimento: não em respostas definitivas, mas na contínua disposição para aceitar a mudança do ponto de vista e, quem sabe, até a possibilidade de que o que consideramos certo hoje possa ser questionado amanhã, ou até mesmo desacreditado por novas perspectivas que surgem com o passar do tempo. Em suma, a reflexão não é apenas um exercício intelectual, mas uma prática constante de desconstrução das certezas que, paradoxalmente, nos mantêm na prisão do pensamento limitado.
  `

  return (
    <Main>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Página não encontrada</h1>
        <p style={paragraphStyles}>
          Desculpe 😔, não encontramos o que você procurava.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Tente criar uma página em <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Vá para a pagina inicial</Link>.
        </p>
        {blablabla}
      </main>
    </Main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
