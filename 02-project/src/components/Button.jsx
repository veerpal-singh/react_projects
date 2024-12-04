import React from 'react'

export const Button = ({name, icon}) => {
    return (
        <div>
            <button className='bg-teal-500 min-w-[220px] h-9 rounded-[5px] flex items-center justify-center gap-1 text-[18px]'>
                {icon}
                {name}
            </button>
        </div>
    )
}
