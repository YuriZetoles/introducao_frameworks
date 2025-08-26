import "./style.css"

interface ICard {
  titulo: string;
  texto: string;
  imagem: string;
  link: string;
}

export default function Card({titulo, texto, imagem, link}: ICard) {

  return (
    <main className="card-galeria">
      <div className="card">
        <div>
          <img src={imagem} alt="Produção de uva" className="card-image" />
          <h2 className="card-titulo">{titulo}</h2>
        </div>
        <div>
          <p className="card-texto">{texto}</p>
        </div>
        <div>
          <a href={link} className="card-link">Saiba mais</a>
        </div>
      </div>
    </main>
  )
}