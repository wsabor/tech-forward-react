import "../css/Content.css";
import "../App.css";

export default function Content() {
  return (
    <section id="palestras-detalhes" className="section">
      <h2 className="section-title">O Que Você Vai Aprender</h2>
      <div className="container">
        <div className="palestras-grid-container">
          <article className="palestra-detalhe">
            <h3 className="palestra-title">IA Generativa</h3>
            <p>
              Explore o universo da inteligência artificial que cria, desde
              textos e imagens até músicas e códigos. Entenda o impacto dos
              Grandes Modelos de Linguagem (LLMs) e como eles estão
              revolucionando as indústrias.
            </p>
            <ul>
              <li>Fundamentos de Redes Neurais e Transformers.</li>
              <li>Aplicações práticas em marketing e design.</li>
              <li>O futuro da criação de conteúdo automatizado.</li>
            </ul>
          </article>

          <article className="palestra-detalhe">
            <h3 className="palestra-title">Web3 & Blockchain</h3>
            <p>
              Vá além das criptomoedas e descubra o potencial da web
              descentralizada. Aprenda sobre contratos inteligentes, NFTs e como
              a blockchain está construindo uma nova era de propriedade digital.
            </p>
            <ul>
              <li>Princípios da descentralização e segurança.</li>
              <li>Desenvolvimento de DApps (Aplicações Descentralizadas).</li>
              <li>O papel dos NFTs na arte, games e identidade digital.</li>
            </ul>
          </article>

          <article className="palestra-detalhe">
            <h3 className="palestra-title">Computação Quântica</h3>
            <p>
              Prepare-se para a próxima fronteira da computação. Desvende os
              mistérios dos qubits, superposição e entrelaçamento, e entenda
              como os computadores quânticos prometem resolver problemas hoje
              insolúveis.
            </p>
            <ul>
              <li>Diferenças fundamentais para a computação clássica.</li>
              <li>Potenciais impactos em medicina, finanças e IA.</li>
              <li>Os desafios e o estado atual da tecnologia.</li>
            </ul>
          </article>

          <article className="palestra-detalhe">
            <h3 className="palestra-title">Cibersegurança na Era da IA</h3>
            <p>
              Com grandes poderes vêm grandes riscos. Saiba como proteger
              sistemas contra ameaças cada vez mais sofisticadas e como a
              própria IA está sendo usada para fortalecer as defesas digitais.
            </p>
            <ul>
              <li>Novas ameaças: Deepfakes e ataques automatizados.</li>
              <li>Arquitetura Zero Trust como novo padrão de segurança.</li>
              <li>Privacidade de dados e conformidade com a LGPD.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
