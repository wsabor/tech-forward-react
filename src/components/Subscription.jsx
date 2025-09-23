import React, { useState, useEffect } from "react";
import "../css/Subscription.css";
import "../App.css";

export default function Subscription() {
  // 1. Estado para os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    termos: false,
  });

  // 2. Estado para as mensagens de erro
  const [errors, setErrors] = useState({});

  // 3. Estado para controlar se o formulário é válido e o botão pode ser ativado
  const [isFormValid, setIsFormValid] = useState(false);

  // 4. useEffect para validar o formulário sempre que os dados mudam
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};

      // Validação do nome
      if (formData.nome.trim().length < 3) {
        newErrors.nome = "O nome deve ter no mínimo 3 caracteres.";
      }

      // Validação do email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Por favor, insira um e-mail válido.";
      }

      // Validação dos termos
      if (!formData.termos) {
        newErrors.termos = "Você deve aceitar os termos.";
      }

      setErrors(newErrors);
      // O formulário é válido se o objeto de erros estiver vazio
      setIsFormValid(Object.keys(newErrors).length === 0);
    };

    validateForm();
  }, [formData]); // Este array faz o useEffect rodar sempre que 'formData' mudar

  // 5. Handler para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 6. Handler para o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    if (isFormValid) {
      alert("Inscrição realizada com sucesso!");
      // Limpa o formulário resetando o estado
      setFormData({
        nome: "",
        email: "",
        termos: false,
      });
    }
  };

  return (
    <section id="inscricao" className="section">
      <h2 className="section-title">Faça sua Inscrição</h2>
      <div className="container">
        {/* Usamos o evento onSubmit do formulário */}
        <form id="form-inscricao" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome} // Conecta o valor ao estado
              onChange={handleChange} // Atualiza o estado ao digitar
            />
            {/* Exibe a mensagem de erro do estado */}
            <span className="error-message">{errors.nome}</span>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              value={formData.email} // Conecta o valor ao estado
              onChange={handleChange}
            />
            <span className="error-message">{errors.email}</span>
          </div>

          <div className="form-control checkbox-control">
            <input
              type="checkbox"
              id="termos"
              name="termos"
              checked={formData.termos} // Para checkboxes, usamos 'checked'
              onChange={handleChange}
            />
            <label htmlFor="termos">Concordo com os termos e condições.</label>
            <span className="error-message checkbox-error">
              {errors.termos}
            </span>
          </div>

          {/* O botão é desabilitado com base no estado 'isFormValid' */}
          <button type="submit" id="submit-btn" disabled={!isFormValid}>
            Garanta já sua Vaga!
          </button>
        </form>
      </div>
    </section>
  );
}
