import React from 'react'
import Card from './card'

const CardList = ({profiles}) =>{
    return(
        <>
            {profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </>
        
    )
}

export default CardList