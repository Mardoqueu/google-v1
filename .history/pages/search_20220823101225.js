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