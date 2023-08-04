import React, { useState, useEffect } from 'react';
import './App.scss';

export function TabTitle() {

    const [ title, setTitle ] = useState('');

    useEffect(() => {
        document.title = title;
    }, [title])

    const handleChange = ({target}) => {
        const typedInput = target.value;
        setTitle(typedInput);
    }

    return (
        <>
            <p>Type to change tab title</p>
            <input onChange={handleChange} placeholder="Type to change tab title" value={title} type="text" />
        </>
    )
}

export function BodyThought(props) {

    const [ text, setText ] = useState('') 
    // if we don't put empty string, it'll throw TypeError
    // because we're gonna use variable text.length to check whether it's 0 or not
    // and it's not gonna work it's undefined

    const handleTextChange = ({ target }) => {
        setText(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // event.preventDefault() prevents default setting where it loads the page, so we prevent it
        
        if (text.length > 0) {
            const thought = { // creating a new thought object
                thoughtId : 3,
                thoughtText: text,
            }
            props.addThought(thought); // the new object is passed through props.addthought
            setText('');
        } 
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                className="textInput"
                type="text" 
                onChange={handleTextChange} // if we don't fill onChange, we can't type
                value={text} 
                placeholder='Type your thought'/>
            <input type="submit" value="Add thought"/>
        </form>
        </>
    )
}
