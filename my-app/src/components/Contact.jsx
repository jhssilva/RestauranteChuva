import React from "react";

const Title = () => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2 className="text-center">Contacto</h2>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="col-lg-4">
      <div className="info">
        <div className="address">
          <i className="icofont-google-map text-white"></i>
          <h4>Localização:</h4>
          <p>Av. de São João, 4755-065 Barcelos, Portugal</p>
        </div>

        <div className="open-hours">
          <i className="icofont-clock-time icofont-rotate-90 text-white"></i>
          <h4>Horário:</h4>
          <p>
            Quarta-Feira - Segunda-Feira:
            <br />
            11:00 - 22:00
            <br />
            Terça-Feira - Encerrado
          </p>
        </div>

        <div className="email">
          <i className="icofont-envelope text-white"></i>
          <h4>Email:</h4>
          <p>info@restaurantechuva.pt</p>
        </div>

        <div className="phone">
          <i className="icofont-phone text-white"></i>
          <h4>Telefone:</h4>
          <p>+351 253 831 242</p>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="col-lg-8 mt-5 mt-lg-0">
      <form action="" method="post" className="email-form">
        <div className="form-row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Nome"
              data-rule="minlen:4"
              data-msg="Por favor introduza pelo menos 4 caracteres."
            />
            <div className="validate"></div>
          </div>
          <div className="col-md-6 form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="E-mail"
              data-rule="email"
              data-msg="Por favor introduza um email válido."
            />
            <div className="validate"></div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Assunto"
            data-rule="minlen:4"
            data-msg="Por favor introduza pelo menos 8 caracteres."
          />
          <div className="validate"></div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            rows="8"
            data-rule="required"
            data-msg="Escreva uma mensagem"
            placeholder="Message"
          ></textarea>
          <div className="validate"></div>
        </div>
        <div className="mb-3">
          <div className="loading">Carregando</div>
          <div className="error-message"></div>
          <div className="sent-message">
            A sua mensagem foi enviada. Obrigado!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact pt-5 pb-5">
      <Title />
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <Info />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
