import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const NavBarOwner = () => {
    const user = useAppContext()
    return (
        <div className='flex items-center justify-between px-6
        md:px-10 py-4 text-gray-500 border-b border-borderColor
        relative transition-all'>
            <Link to='/'>
                <img src="/CarDekho.png" alt='' className="h-16 md:h-18 bg-gray-800 rounded-full" />
            </Link>
            <p>Welcome,{user?.name || "Owner"}</p>

        </div>
    )
}

export default NavBarOwner
