import React from 'react'

const Button = ({ item }) => {
    return (
        <a href={item.url} target="_blank" className="btn" rel="noreferrer">{item.name}</a>
    )
}

export default Button
