import "../css/Agenda.css";
import "../App.css";

export default function Agenda() {
  return (
    <section id="agenda" className="section">
      <h2 className="section-title">Agenda</h2>
      <div className="container">
        <p className="section-text mb-8">
          Confira a programação completa do evento:
        </p>
        <table>
          <tr>
            <th>Hora</th>
            <th>Palestra</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>09:00 - 10:45</td>
            <td>IA Generativa</td>
            <td>
              Exploração das últimas tendências em inteligência artificial
              generativa e suas aplicações práticas.
            </td>
          </tr>
          <tr>
            <td>11:00 - 12:30</td>
            <td>Web3 & Blockchain</td>
            <td>
              Introdução ao Web3 e como a tecnologia blockchain está
              revolucionando a internet.
            </td>
          </tr>
          <tr>
            <td>12:30 - 14:00</td>
            <td>Almoço</td>
            <td>Intervalo para almoço e networking.</td>
          </tr>
          <tr>
            <td>14:00 - 15:45</td>
            <td>Computação Quântica</td>
            <td>
              Uma introdução ao mundo da computação quântica e suas implicações
              para o futuro da tecnologia.
            </td>
          </tr>
          <tr>
            <td>16:00 - 18:00</td>
            <td>Cibersegurança</td>
            <td>
              Discussão sobre as melhores práticas em cibersegurança e como
              proteger dados e sistemas em um mundo digital.
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}
