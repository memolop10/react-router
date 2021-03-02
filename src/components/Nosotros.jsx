import React from 'react'

const Nosotros = () => {

    const [equipo,setEquipo] = React.useState([])
      
    React.useEffect(() => {
        obtenerDatos()
    },[]);

    const obtenerDatos = async() => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()

        setEquipo(users.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.expansion   }
                        </li>
                    ))
                }
            </ul> 
        </div>
    )
}

export default Nosotros
