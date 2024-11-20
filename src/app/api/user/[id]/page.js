'use client'
import React, { useState } from 'react';

const Page = ({params}) => { 
    const [count , setcount] = useState(0);

    const id = params?.id;
    return (
        <div>
            This is my User page. {id}
        </div>
    );
};

export default Page;