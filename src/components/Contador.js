import React, { useState } from 'react'
import '../Style/Contador.css'

function Contador()
{
    //manejar el estado de una variable/constante
    const [cont, setcont] = useState(0);
    //cont almacena el valor
    //setcont se usa para cambiar el valor

    function handleDisminuir()
    {
        setcont(cont -1)
    }

    function handleAumentar()
    {
        setcont(cont +1)
    }
    
    function handleReiniciar()
    {
        setcont(0)
    }

  return (
    <div className='app'>
        Contador
        <div className='box'>
            <p>{cont}</p>
            <button onClick={handleDisminuir}>Disminuir</button>
            <button onClick={handleReiniciar}>Reiniciar</button>
            <button onClick={handleAumentar}>Aumentar</button>
        </div>


    </div>
  )
}

export default Contador