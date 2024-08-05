import {useState} from 'react'

export default function Root() {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <h1>Type something</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <p>{inputValue}</p>
        </>
    )
}

