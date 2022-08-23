import Head from 'next/head'
import Header from '../components/Header'
import Footer from "../components/Footer";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event){
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return
    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  async function randomSearch(event) {
    event.preventDefault();
    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((response) => response.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  }
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

        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:">
          <SearchIcon className="h-5 text-gray-500 mr-3"/>
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none'/>
          <MicrophoneIcon className="h-5"/>
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-0 mt-8 sm:space-x-4 justify-center">
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={randomSearch} className='btn'>I&apos;m Feeling Lucky</button>
        </div>
    </form>

    {/*Footer */} 
    <Footer/>
    </div>
  )
}
