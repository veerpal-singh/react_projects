import React, { useState } from 'react'
import { TotalScore } from './TotalScore'
import { SelectNumber } from './SelectNumber'
import { RoleDice } from './RoleDice'

export const PlayGame = () => {

    const [score, setScore] = useState(0)

    const [selectedNumber, setSelectedNumber] = useState()

    const [currentDice, setCurrentDice] = useState(1)

    const [erroe, setError] = useState()

    const generateRandomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min)
    }

    const roleDice = () => {

        if (!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        setError("")

        const randomNumber = generateRandomNumber(1, 7)

        setCurrentDice((prev) => randomNumber)

        if (selectedNumber === randomNumber) {

            setScore((prev) => prev + randomNumber)

        } else {

            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)
    }

    const resetScore = () => {
        setScore(0)
    }


    return (
        <div className='mt-[48px]'>
            <div className='flex justify-around items-end'>
                <TotalScore score={score} />
                <SelectNumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={erroe} />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div onClick={resetScore} className='flex justify-center'>
                <button className='bg-black text-white min-w-[190px] rounded-[5px] h-[35px] text-[18px] mt-[10px] hover:bg-white hover:text-black border border-black duration-[0.3s]'>Reset</button>
            </div>
        </div>
    )
}
