export const SelectNumber = ({ selectedNumber, setSelectedNumber, error }) => {

    const array = [1, 2, 3, 4, 5, 6]


    return (
        <div className='flex flex-col items-end'>
            <p className="text-red-500 font-bold text-[20px] mb-[10px]">{error}</p>
            <div className='flex gap-6'>
                {
                    array.map((value, i) => {
                        return <p onClick={() => setSelectedNumber(value)} key={i} className='h-[72px] w-[72px] border border-black flex items-center justify-center text-[24px] font-bold cursor-pointer' style={selectedNumber === value ? { backgroundColor: 'black', color: "white" } : { backgroundColor: "white", color: "black" }}>{value}</p>
                    })
                }
            </div>
            <p className='text-[24px] font-bold'>Select Number</p>
        </div>
    )
}
