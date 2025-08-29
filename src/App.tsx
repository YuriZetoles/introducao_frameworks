import "./App.css"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { dados } from "./dados.ts"

export default function App() {
  return (
    <div className="titulo">
      <Header />
      <ul>
        {dados.map(d => (
          <li key={d.id}>{d.nome}</li>
        ))}
      </ul>
      <Card
        titulo="Produção de uva"
        texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam eu egestas felis, et auctor neque. Vestibulum vel lorem velit. Sed ut fermentum odio."
        imagem="public/images/alface.png"
        link="https://github.com/YuriZetoles/PB_Compass/tree/main"
      />
      <Footer />
    </div>
  )
}
