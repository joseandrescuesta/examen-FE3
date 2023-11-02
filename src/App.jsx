import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { formulario, app, button } from './styles/App.module.css'
function App() {


  const [nombre, setnombre] = useState('')
  const handlenombre = (event) => console.log(event.target.value)

  return (
    <div>
      <h1>Carga de estudiantes</h1>
      <div className={app}>
        <form className={formulario}>
          <label>Nombre</label>
          <input type="text" placeholder='nombre' onChange={handlenombre} />
          <button className={button}>Ingresar</button>
        </form>
        <Card />
      </div>
    </div>
  )
}

export default App
