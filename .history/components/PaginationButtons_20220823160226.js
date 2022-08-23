import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationButtons() {
    const router = useRouter();
    const startIndex= Number(router.query.start) || 1;
  return (
    <div>
        {startIndex < 90 &&(

        )}        
          <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >        
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronRightIcon className='h-5'/>
            <p>Next</p>
        </div>
        </Link>
    </div>
  )
}
