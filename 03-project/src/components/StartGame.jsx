export const StartGame = ({toggle}) => {
    return (
        <div className="max-w-[1200px] mx-auto flex h-[100vh] items-center">
            <div>
                <img src="./images/dices.png" alt="dices" />
            </div>
            <div onClick={toggle}>
                <h1 className="uppercase text-[92px] font-bold">dice game</h1>
                <div className="flex justify-end">
                    <button className="capitalize bg-black text-white min-w-[220px] h-[40px] rounded-[5px] text-[19px] hover:bg-white hover:text-black duration-[0.4s] border border-black">plya now</button>
                </div>
            </div>
        </div>
    )
}
