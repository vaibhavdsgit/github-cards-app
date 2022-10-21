import React from 'react'

const Card = (props) =>{
    const profile = props
    return(
        <>
            <div className='github-profile'>
                <img src={profile.avatar_url} />
                <div className='info'>
                    <div className='name'>
                        <a href={`https://github.com/${profile.name}`} target="_blank">{profile.name}</a>
                    </div>
                    <div className='company'>{profile.company}</div>
                </div>
            </div>
        </>
    )
}
export default Card;