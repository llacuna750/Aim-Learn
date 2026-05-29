import React from 'react'

function List() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

    return (
        fruits.map((fruit, index) => <h2 key={index}> {fruit}</h2>)
    )
}

export default List