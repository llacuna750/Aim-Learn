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

    // const foodSell = foods.map(food => {
    //     return <li key={food.id}> {food.name} - {food.price}</li>
    // })

    // we create a function getPrice that takes a food object as an argument and returns the price of the food as a number by removing the '$' symbol and converting it to a number.
    const getPrice = (food) => Number(food.price.replace('$', ''))

    // we use Chain method to sort the food by price and then map it to display the name and price of each food item in a list.
    const sortFood = [...foods]
        .sort((a, b) => getPrice(a) - getPrice(b))
        .map(food => (
            <li key={food.id}>
                {food.name} - {food.price}
            </li>
        ))

    return (
        <div>
            <ul>
                {sortFood}
            </ul>
        </div>
    )
}

export default DeliciousFood