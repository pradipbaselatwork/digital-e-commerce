"use client"; // Add this line to make this a Client Component

import React, { useEffect } from 'react';
import axios from 'axios';  // ✅ Import axios here
import Header from './_components/Header';
import { useUser } from '@clerk/clerk-react';

function Provider({ children }) {
    const { user } = useUser();

    useEffect(() => {
        if (user) CheckIsNewUser();
    }, [user]);

    const CheckIsNewUser = async () => {
        try {
            const result = await axios.post('/api/user', {
                user: user
            });
            console.log(result.data); // Log the response from your API
        } catch (error) {
            console.error("Error checking user:", error);
        }
    }

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
