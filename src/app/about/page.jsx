"use client"
import Button from '@/components/Button/Button';
import React from 'react';

const page = () => {
    const port = process.env.NEXT_PUBLIC_DEMO_PORT;
    console.log(port)
    return (
        <div>
            This is my About next app. 
            <Button></Button>
        </div>
    );
};

export default page;