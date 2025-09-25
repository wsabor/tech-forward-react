import "../css/About.css";
import "../App.css";

export default function About() {
  return (
    <section className="section bg-gray-200">
      <div className="container" id="about">
        <h3 className="section-title">Sobre o Evento</h3>
        <p className="section-text">
          O <strong>Tech Forward 2025</strong> é uma conferência dedicada a
          explorar as últimas tendências e inovações no mundo da tecnologia.
          Reunindo <strong>especialistas renomados</strong>, entusiastas e
          profissionais da indústria, o evento oferece uma plataforma para{" "}
          <strong>
            compartilhar conhecimentos, discutir desafios e celebrar avanços
            tecnológicos
          </strong>
          . Com palestras inspiradoras, painéis de discussão e oportunidades de
          networking, o Tech Forward 2025 visa{" "}
          <strong>
            fomentar a colaboração e impulsionar o futuro da tecnologia
          </strong>
          .
        </p>
        <p className="section-text">
          Junte-se a nós para uma <strong>experiência enriquecedora</strong>,
          onde você poderá <strong>aprender com os melhores, </strong>
          <strong>conectar-se com colegas da indústria</strong> e descobrir as{" "}
          <strong>ferramentas e estratégias que estão moldando o futuro</strong>
          . Seja você um desenvolvedor, empreendedor ou simplesmente um
          entusiasta de tecnologia, o Tech Forward 2025 tem algo a oferecer para
          todos.
        </p>
      </div>
    </section>
  );
}
