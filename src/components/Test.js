import React, { useEffect, useRef } from 'react'
import '../css/Test.css';
function Test() {
    const FETC_HAPI = 'http://api.quotable.io/random';
    const displayQuote = useRef();
    const inputRef = useRef();
    const changes = () => {
        const arrayQuote = displayQuote.current.querySelectorAll('span');
        const arrayValue = inputRef.current.value.split('');
        let correct = true;
        arrayQuote.forEach((characterSpan, index) => {
            const character = arrayValue[index];
            if (character === null) {
                characterSpan.classList.remove('correct');
                characterSpan.classList.remove('incorrect');
                correct = false;
            }
            else if (character === characterSpan.innerText) {
                characterSpan.classList.add('correct');
                characterSpan.classList.remove('incorrect');
            } else {
                characterSpan.classList.add('incorrect');
                characterSpan.classList.remove('correct');
                correct = false;
            }
        })
        if (correct) renderNewQuote();
    }
    function getApi() {
        return fetch(FETC_HAPI)
            .then(response => response.json())
            .then(data => data.content)
    }
    async function renderNewQuote() {
        const quote = await getApi();
        displayQuote.current.innerHTML = ''
        // displayQuote.innerText = quote;
        quote.split('').forEach(character => {
            const characterSpan = document.createElement('span');
            characterSpan.innerText = character;
            displayQuote.current.appendChild(characterSpan);

        })
        inputRef.current.value = null;

    }
    useEffect(() => {
        renderNewQuote()
        inputRef.current.focus();
    })
    return (
        <div className="test">
            <h1 style={{ textAlign: 'center' }}>Let's GO 🚀</h1>
            <div className="display-quote" ref={displayQuote}></div>
            <textarea
                name="text"
                ref={inputRef}
                onInput={changes}
            ></textarea>
        </div>
    )
}

export default Test