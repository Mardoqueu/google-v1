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
            <Link href="https://store.google.com/">
                 <a className="link">Store</a>
           </Link>            
           </div>
           <div className="flex space-x-4 items-center">
          <Link href="https://mail.google.com">
            <a className="link">Gmail</a>
          </Link>

            <a onClick={()=>router.push(`/search?term=${router.query.term || "google"}&searchType=image`)} className="link">Images</a>
            <User/>
        </div>
    </header>
  )
}