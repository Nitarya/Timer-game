import React, { useRef, useState } from 'react';

function TimerChallenge({title, targetTime}) {

    const timer = useRef()

const [timerStarted, setTimerStarted] = useState(false)
const [timerExpired, setTimerExpired] = useState(false)

function handleStart() {
    timer.current = setTimeout(() => {
        setTimerExpired(true)
        setTimerStarted(false); // Stop the timer and update state
    }, targetTime * 1000)
    setTimerStarted(true)
    setTimerExpired(false)
}

function handleStop() {
    clearTimeout(timer.current)
    setTimerStarted(false); // Stop the timer and update state
}

    return (
       <section className="challenge">
        <h2>{title}</h2>
        {timerExpired ? 'You Lost' : ''}
        <p className="challenge-time">
            {targetTime} second {targetTime > 1 ? 's' : ''}
        </p>

        <p>
            <button onClick = { timerStarted ? handleStop : handleStart}>
                { timerStarted ? 'Stop' : 'Start'}
                Challenge
            </button>
        </p>

        <p className= {timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>

       </section>
    )
}

export default TimerChallenge