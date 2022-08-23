import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchHeader(){
    const router = useRouter();
    const searchInputRef = useRouter(null);
    return (
        <header className="sticky top-0 bg-white">
            <div className="">
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
                <input type="text" defaultValue={router.query.term} ref={searchInputRef}></input>

            </form>

        </header>
    )
}