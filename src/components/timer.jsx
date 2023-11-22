import React, { useState, useEffect } from 'react';

export const Timer = () => {
    const [seconds, setSeconds] = useState(30);
    const [isActive, setIsActive] = useState(false);

    const startTimer = () => {
        setIsActive(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setSeconds(30);
    };

    useEffect(() => {
        let timer;

        if (isActive && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            resetTimer();
        }

        return () => {
            clearInterval(timer);
        };
    }, [isActive, seconds]);

    return (
        <div className="timer w-40 h-52">
            <div className="countdown">{seconds}s</div>
            {!isActive && (<button className='border-green-800 text-green-800 border-2 font-semibold mt-4 px-6 py-2 rounded-2xl w-full' onClick={startTimer} disabled={isActive}>
                Start
            </button>)}
            <style jsx>{`
        .timer {
          text-align: center;
          margin: 20px;
        }

        .countdown {
          font-size: 72px;
          margin-bottom: 10px;
        }

      `}</style>
        </div>
    );
};