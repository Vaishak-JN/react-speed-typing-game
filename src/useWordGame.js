import { useState, useEffect, useRef } from 'react';

function useWordGame(startingTime = 10) {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function wordCounter(text) {
        const count = text.trim().split(" ")
        return count.filter(word => word !== "").length
    }

    function startGame() {
        setTimeRemaining(startingTime)
        setIsTimeRunning(true)
        setText("")


        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        const numWords = wordCounter(text)
        setWordCount(numWords)
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(timeRemaining - 1)
            }, 1000);
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return { inputRef, text, handleChange, isTimeRunning, timeRemaining, startGame, wordCount }
}

export default useWordGame