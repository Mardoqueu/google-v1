import Image from "next/image";
import { useRouter } from "next/router";
import {useRef} from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
export default function SearchHeader(){
    const router = useRouter();
    const searchInputRef = useRouter(null);
    return (
        <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
            <Image
                onClick={() => router.push("/")}
                width="120"
                objectFit="contain"
                height="40"
                className="cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            />    
            </div>
            <form>
                <input type="text" defaultValue={router.query.term} ref={searchInputRef}/>
                <XIcon className="h-6"/>
                <MicrophoneIcon className="h-6"/>
                <User/>
           </form>

        </header>
    )
}