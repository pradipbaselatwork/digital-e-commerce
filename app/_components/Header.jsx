// app/_components/Header.jsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react'

function Header() {
    const MenuList = [
        { name: 'Home', path: '/' },
        { name: 'Store', path: '/store' },
        { name: 'Explore', path: '/explore' }
    ]

    return (
        <div className="flex justify-between p-4 px-10 md:px-32 lg:px-48 bg-gradient-to-r from-black via-gray-900 to-black items-center">
            <h2 className="font-bold text-xl text-white">
                <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-all px-3 py-1">
                    DIGI STORE
                </Button>
            </h2>

            <ul className="flex gap-5">{
                MenuList.map((menu, index) => (
                    <li key={index}>
                        <Button className="text-white hover:text-blue-400 transition-all">
                            {menu.name}
                        </Button>
                    </li>
                ))
            }
            </ul>

            <div className="flex items-center gap-3">
                <ShoppingBag className="text-white" size={24} />
                <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all px-3 py-1">
                    Start Selling
                </Button>
                <UserButton></UserButton>
            </div>
        </div>
    )
}

export default Header
