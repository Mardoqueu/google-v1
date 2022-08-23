import Link from "next/link"


import React from "react";
import User from "../components/User";

export default function Header(){
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
            <Link href="https://about.google/">
                <a className="link">About</a>
            </Link>
                <a className="link">Store</a>
            </div>
            <div className="flex space-x-4 items-center">
                <a className="link">Gmail</a>
                <a className="link">Images</a>
                <User/>
            </div>
        </header>
    )
}