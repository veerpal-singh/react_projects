export const RoleDice = ({currentDice, roleDice}) => { 
    
    return (
        <div className="flex flex-col items-center mt-[48px]">
            <div onClick={roleDice}>
                <img className="cursor-pointer" src={`./images/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p className="text-[20px] font-bold">Click on Dice to role</p>
        </div>
    )
}

