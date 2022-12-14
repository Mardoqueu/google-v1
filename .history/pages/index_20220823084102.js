import Head from 'next/head'
import Header from '../components/Header'
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google v1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   

    {/*Header*/  }
    <Header/>
    

    {/*Body*/}

    <form className="flex flex-col items-center mt-40"> 
    <Image
          width="300"
          objectFit="cover"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />

        <div className="">
          <SearchIcon className="h-5"/>
          <input type="text"/>
          <MicrophoneIcon className="h-5"/>
        </div>
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
    </form>

    {/*Footer */} 

    </div>
  )
}
