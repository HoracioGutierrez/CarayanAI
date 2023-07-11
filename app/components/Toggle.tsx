'use client'
import { useState } from "react";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

type AvatarProps = {
    src: string
    userName: any
}


function ToggleMenu({ src, userName }: AvatarProps) {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (

        <div className="flex flex-col relative">
            <button onClick={handleClick}>
                <Image src={src} alt="user image" width={65} height={65} className="rounded-full" />
            </button>
            {toggle && (
                <div className="flex flex-col w-max text-left absolute bg-slate-900 divide-y-2 divide-slate-400/25 border-2 border-slate-700 top-[68px] right-0 rounded-md z-20">
                    <h3 className="py-2 px-1">{userName}</h3>
                    <Link className="px-2 py-1 hover:bg-slate-800" href="/history">History</Link>
                    <LogoutButton className="px-2 py-1 hover:bg-slate-800" />
                </div>
            )}
        </div>

    )
}

export default ToggleMenu