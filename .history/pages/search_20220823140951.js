import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

export default function search(){
    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>

            {/*Search Header*/}
                <SearchHeader/>

            {/*Search Result*/}

        </div>
    )
}

export async function getServerSideProps(context) {
    const data = await fetch(
        'GET https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures'
    )
}