import "./App.css";
import SpeakerCard from "./components/SpeakerCard";
import imageAda from "./assets/lovelace.jpg";
import imageTuring from "./assets/turing.webp";
import imageHopper from "./assets/hopper.jpg";

export default function App() {
  return (
    <div className="page-container">
      <h1 className="main-title">Tech Forward 2025</h1>
      <section className="section">
        <div className="container">
          <h3 className="section-title text-gray-700">Palestrantes</h3>
          <div className="speakers-grid">
            <SpeakerCard
              name="Ada Lovelace"
              title="Pioneira da Computação"
              imageUrl={imageAda}
              bio="Ada Lovelace, uma matemática e escritora inglesa, é amplamente reconhecida como a primeira programadora de computador do mundo. Em meados do século XIX, ela escreveu o primeiro algoritmo destinado a ser processado por uma máquina, a Máquina Analítica de Charles Babbage, prevendo um futuro para os computadores que ia muito além de meros cálculos."
            />
            <SpeakerCard
              name="Alan Turing"
              title="Matemático e Criptógrafo"
              imageUrl={imageTuring}
              bio="Alan Turing foi um matemático britânico pioneiro, considerado o pai da ciência da computação teórica e da inteligência artificial. Durante a Segunda Guerra Mundial, seu trabalho foi crucial para decifrar os códigos da máquina Enigma alemã. Suas contribuições teóricas, como a Máquina de Turing, estabeleceram os fundamentos para o computador moderno."
            />
            <SpeakerCard
              name="Grace Hopper"
              title="Almirante da Marinha e Cientista da Computação"
              imageUrl={imageHopper}
              bio="Grace Hopper, uma cientista da computação americana e Almirante da Marinha dos EUA, foi pioneira no desenvolvimento de compiladores e sua visão levou à criação da linguagem de programação COBOL, tornando a programação mais acessível. Hopper também popularizou o termo 'debugging' para corrigir falhas em programas após encontrar um inseto real em um computador."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-200">
        <div className="container">
          <h3 className="section-title text-gray-700">Sobre o Evento</h3>
          <p className="mt-4 text-lg text-gray-700 max-w-5xl mx-auto">
            O Tech Forward 2025 é uma conferência dedicada a explorar as últimas
            tendências e inovações no mundo da tecnologia. Reunindo
            especialistas renomados, entusiastas e profissionais da indústria, o
            evento oferece uma plataforma para compartilhar conhecimentos,
            discutir desafios e celebrar avanços tecnológicos. Com palestras
            inspiradoras, painéis de discussão e oportunidades de networking, o
            Tech Forward 2025 visa fomentar a colaboração e impulsionar o futuro
            da tecnologia.
          </p>
        </div>
      </section>

      <footer className="footer">
        &copy; 2025 Tech Forward. Todos os direitos reservados.
      </footer>
    </div>
  );
}
