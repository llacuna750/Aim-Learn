import React from 'react'

function DeliciousFood() {
    const foods = [
        {
            id: 1,
            name: 'Pizza',
            cuisine: 'Italian',
            price: '$50.50'
        },
        {
            id: 2,
            name: 'Sushi',
            cuisine: 'Japanese',
            price: '$30.00'
        },
        {
            id: 3,
            name: 'Tacos',
            cuisine: 'Mexican',
            price: '$20.00'
        },
        {
            id: 4,
            name: 'Pasta',
            cuisine: 'Italian',
            price: '$25.00'
        }
    ]

    const foodSell = foods.map(food => { 
        return <li>{food.name} - {food.price}</li>
    })

    return (
        <div>
            <ul>
                {foodSell}
            </ul>
        </div>
    )
}

export default DeliciousFood