import { useState } from 'react'
import "../styles/styles.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input className="inputText" type="text" placeholder="Digite o Nome..." />
      <input className="inputSubmit" type="submit" value="Enviar" />
    </div>
  )
}

export default App