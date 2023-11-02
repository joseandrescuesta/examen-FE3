import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { formulario, app, button } from './styles/App.module.css'
function App() {


  const [nombre, setNombre] = useState('')
  const [serie, setSerie] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleNombre = (event) => {
    setShow(false)
    setNombre(event.target.value.trimStart())
  }
  const handleSerie = (event) => {
    setShow(false)
    setSerie(event.target.value)
  }

  const handleSubmit = (event) => {

    if (nombre.length > 2 && serie.length > 6) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }

    event.preventDefault()
  }

  return (
    <div>
      <h1>¡Recomiendanos una serie!</h1>
      <div className={app}>
        <form className={formulario}>
          <label>Tu nombre</label>
          <input type="text" placeholder='nombre' onChange={handleNombre} />
          <label>Recomendación</label>
          <input type="text" placeholder='serie recomendada' onChange={handleSerie} />
          <button className={button} onClick={handleSubmit}>Enviar</button>
        </form>


        {show ?
          <Card nombre={nombre} serie={serie} /> : null
        }

        {error ?
          <h4 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h4> : null
        }
      </div>
    </div>
  )
}

export default App
