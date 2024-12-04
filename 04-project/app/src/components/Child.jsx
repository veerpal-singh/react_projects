// import React, { memo } from 'react'

export const Child =({name, onClick}) => {
    console.log("re-render again");
    
    return (
        <div>
            <button onClick={onClick} className='border p-2 mt-5'>
                {name}
            </button>
        </div>
    )
}
