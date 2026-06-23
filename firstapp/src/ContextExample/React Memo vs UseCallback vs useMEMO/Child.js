import React from 'react'
import sqlSample from './noSql.json'

function Child(props) {
    
    function changeNumber() {
        // Call the parent function as props.changeNumber()
        props.changeNumber(Math.floor(Math.random() * 10) + 1)
    }
    
    console.table(sqlSample);
    console.log('log here')
    return (
        <div>
            <div>
                <b>
                    {/* Parent childNumber is pass here*/}
                    Child: {props.number}
                </b>
            </div>
            <button onClick={changeNumber}>
                Click to change <b>Child</b> number
            </button>
        </div>
    )
}

/* 
    React.memo is a higher-order component used to wrap a child component to prevent it from re-rendering if its props haven't changed
    But if you pass a function as a prop to a child component that is wrapped in React.memo, it will re-render every time the parent re-renders because the function reference changes on every render.
    so to prevent this, we can use useCallback() to memoize the function and maintain the same reference in memory across re-renders.
*/
export default React.memo(Child)
