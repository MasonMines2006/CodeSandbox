import React, { useState } from 'react';

function Parent() {
    const [childName, setChildName] = useState("");
    const handleInput = (name) => {
        setChildName(name);
        }
        return (
            <div>
                <h1>Hello, {childName}</h1>
                <Child onNameSubmit={handleInput} />
            </div>
            
        )
}

function Child({onNameSubmit}) {
    const [name, setName] = useState("");
    function onSubmit(e) {
        e.preventDefault();
        onNameSubmit(name);
    }
    return (
        //form that returns the submitted name
        <form onSubmit = {onSubmit}>
            <label>Enter your name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>  
        </form>  
    )
}