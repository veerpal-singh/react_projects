export const Header = () => {
    return (
        <div className='h-[72px] max-w-[1200px] mx-auto flex justify-between items-center mt-5'>
            <div>
                <img src="./images/logo.png" alt="logo" />
            </div>
            <div className='flex list-none gap-9 cursor-pointer text-[18px]'>
                <li>Home</li>
                <li>About</li>
                <li>Location</li>
            </div>
            <button className='bg-teal-500 py-[5px] px-[10px] rounded-[5px] text-[18px]'>Login</button>
        </div>
    )
}
