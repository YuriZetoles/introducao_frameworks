import "./style.css"

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Serviços</h3>
            <ul>
              <li><a href="#">Sobre o IFRO</a></li>
              <li><a href="#">Comunicação</a></li>
              <li><a href="#">Ouvidoria</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Site Antigo</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">IFRO Mobile</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>RSS</h3>
            <ul>
              <li><a href="#">O que é?</a></li>
              <li><a href="#">Assine</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sobre o site</h3>
            <ul>
              <li><a href="#">Acessibilidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>Instituto Federal de Educação, Ciência e Tecnologia de Rondônia REITORIA</p>
        <p>Av. Lauro Sodré, 6500 - Aeroporto, Porto Velho - RO, 76803-260</p>
        <p>Fone/Fax: (69) 2182-9600</p>
        <p>Horário de atendimento: de segunda a sexta-feira - das 08h às 12h e das 14h às 18h</p>
      </div>
    </footer>
  )
}