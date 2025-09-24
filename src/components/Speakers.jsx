import SpeakerCard from "./SpeakerCard";

import imageAda from "../assets/lovelace.jpg";
import imageTuring from "../assets/turing.webp";
import imageHopper from "../assets/hopper.jpg";

export default function Speakers() {
  const speakers = [
    {
      id: 1,
      name: "Ada Lovelace",
      title: "Pioneira da Computação",
      imageUrl: imageAda,
      bio: "Ada Lovelace, uma matemática e escritora inglesa, é amplamente reconhecida como a primeira programadora de computador do mundo. Em meados do século XIX, ela escreveu o primeiro algoritmo destinado a ser processado por uma máquina, a Máquina Analítica de Charles Babbage, prevendo um futuro para os computadores que ia muito além de meros cálculos.",
    },
    {
      id: 2,
      name: "Alan Turing",
      title: "Matemático e Criptógrafo",
      imageUrl: imageTuring,
      bio: "Alan Turing foi um matemático britânico pioneiro, considerado o pai da ciência da computação teórica e da inteligência artificial. Durante a Segunda Guerra Mundial, seu trabalho foi crucial para decifrar os códigos da máquina Enigma alemã. Suas contribuições teóricas, como a Máquina de Turing, estabeleceram os fundamentos para o computador moderno.",
    },
    {
      id: 3,
      name: "Grace Hopper",
      title: "Almirante da Marinha e Cientista da Computação",
      imageUrl: imageHopper,
      bio: "Grace Hopper, uma cientista da computação americana e Almirante da Marinha dos EUA, foi pioneira no desenvolvimento de compiladores e sua visão levou à criação da linguagem de programação COBOL, tornando a programação mais acessível. Hopper também popularizou o termo 'debugging' para corrigir falhas em programas após encontrar um inseto real em um computador.",
    },
  ];

  return (
    <section className="section bg-gray-200">
      <div className="container">
        <h3 className="section-title text-gray-700">Palestrantes</h3>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              title={speaker.title}
              imageUrl={speaker.imageUrl}
              bio={speaker.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
