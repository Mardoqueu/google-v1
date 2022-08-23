import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchHeader(){
    const router = useRouter();

    return (
        <header className="sticky top-0 bg-white">
            <div className="">
            <Image

                width="120"
                objectFit="contain"
                height="40"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            />    
            </div>
        </header>
    )
}