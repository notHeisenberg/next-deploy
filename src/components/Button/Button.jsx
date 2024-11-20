import Link from 'next/link';
import React from 'react';

const Button = () => {
    return (
        <div>
            <Link href='/'>
                <button className='bg-slate-500 p-10 rounded-r-2xl ml-10 hover:bg-slate-300'>Click me</button>
            </Link>
        </div>
    );
};

export default Button;