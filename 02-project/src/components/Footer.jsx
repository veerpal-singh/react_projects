import { Button } from './Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from 'react';

export const Footer = () => {

    const [name, setName] = useState("veer singh")

    const [email, setEmail] = useState("veer.veeru68@gmail.com")

    const onSubmit = (e) => {

        e.preventDefault();

        setName(e.target[0].value);

        setEmail(e.target[1].value);
    }


    return (
        <div className='flex justify-between items-center h-[400px] max-w-[1100px] mx-auto mt-[24px]'>
            <div>
                <div className='flex gap-5'>
                    <Button name="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />} />
                    <Button name="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
                </div>
                <form onSubmit={onSubmit}>
                    <div className='flex flex-col mt-[24px]'>
                        <label className='text-[18px]' htmlFor="name">Name</label>
                        <input className='border border-black h-[35px] rounded-[5px] py-5 px-3' type="text" id='name' />
                    </div>

                    <div className='flex flex-col mt-[10px]'>
                        <label className='text-[18px]' htmlFor="email">Email</label>
                        <input className='border border-black h-[35px] rounded-[5px] py-5 px-3' type="email" id='email' />
                    </div>
                    <div className='flex justify-end mt-5'>
                        <Button name="SUBMIT" />
                    </div>
                    <div>
                        {
                            name + " " + email + " "
                        }
                    </div>
                </form>
            </div>
            <div>
                <img src="./images/dices.png" alt="dices" />
            </div>
        </div>
    )
}
