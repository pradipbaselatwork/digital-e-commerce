// app/Provider.js
"use client"; // Add this line to make this a Client Component

import React from 'react';
import Header from './_components/Header';

function Provider({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default Provider;
