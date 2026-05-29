import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
    const persons = [
        {
            id: 1,
            name: 'Alice', 
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Bob',
            age: 30,
            skill: 'Angular'
        }, 
        {
            id: 3,
            name: 'Charlie',
            age: 35,
            skill: 'Vue'
        },
    ]

    const personList = persons.map(person =>
        <Person key={person.id} person={person} />
    )

    return (
        <div>
            <ul>
                {names.map(name => <h2 key={name}> {name}</h2>)}
            </ul>

            <div>{personList}</div>
        </div>
    )
}

export default NameList

