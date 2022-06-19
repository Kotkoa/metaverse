import React from 'react'
import {Logo} from "../Logo/index";

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-[#2B2E35] p-6">
            <div>
                <Logo className="p-28"/>
            </div>
            <div></div>
        </div>
    )
}