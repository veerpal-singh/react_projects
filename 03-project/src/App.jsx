import { useState } from 'react'
import { PlayGame } from './components/PlayGame'
import { StartGame } from './components/StartGame'

export const App = () => {

    const [isStartedGame, setIsStartedGame] = useState(true)

    const toggleGamePlay = () =>{

        setIsStartedGame((prev) => !prev);
    }


    return (
        <div>
            {
                isStartedGame ? <PlayGame /> : <StartGame toggle = {toggleGamePlay} />
            }            
        </div>
    )
}
