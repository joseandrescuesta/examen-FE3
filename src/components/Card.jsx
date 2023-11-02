import React from 'react'
import CardStyles from '../styles/Card.module.css'
const Card = ({ nombre, serie }) => {
    return (
        <div className={CardStyles.card}>
            <h3>Hola {nombre}! </h3>
            Gracias por recomendarnos <br />
            <h2>{serie}</h2>
        </div>

    )
}

export default Card