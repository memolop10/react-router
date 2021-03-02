import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams();

    const [pueblo, setPueblo] = React.useState([])
      
    React.useEffect(() => {
        const obtenerDatos = async() => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const faccion = await data.json()
    
            setPueblo(faccion)
        }
        obtenerDatos()
    },[id]);

    


    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
            <h4>{pueblo.civilization_bonus}</h4>
        </div>
    )
}

export default User
