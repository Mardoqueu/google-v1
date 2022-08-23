import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationButtons() {
    const router = useRouter();
  return (
    <div>
        <Link href={'/search/?term=${router.query.term}&searchType=${router.query.searchType}'}>

        </Link>
    </div>
  )
}
