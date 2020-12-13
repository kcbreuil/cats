import React from 'react'


const Card = ({data}) => {
    console.log(data)
    return (
    <div>
        <h1>{data.text}</h1>
    </div>)
}

export default Card