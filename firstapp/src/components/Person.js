import React from 'react'

function Person({ person }) {
    return (
        
        <p>
            I am <b> {person.name}</b>, im <b> {person.age}</b> years old.and my favorite Programming skill is <b> {person.skill}</b>
        </p>
    )
}

export default Person