import React from 'react';
import Image from 'next/image';

function Companies(){
    return (<div className='flex items-center justify-center text-gray-400 text-2xl font-bold min-h-811vh9'>
        Trusted by: &nbsp;
        <ul className = "flex justify-center gap-14 ml-10">
            {[1,2,3,4,5].map((num) => <li key = {num} className="relative h-[4.5rem] w-[4.5rem]">
                <Image alt ="trusted brands" fill src ={`/trusted${num}.png`} ></Image>
            </li>)}
        </ul>
    </div>
    )
}

export default Companies;