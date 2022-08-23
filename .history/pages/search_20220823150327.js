import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

export default function search({results}){
    console.log(results);
    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>

            {/*Search Header*/}
             <SearchHeader/>

            {/*Search Result*/}

            <SearchResults results={results}/>

        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "1";
    const mockData = false;
    const data = mockData
      ? Response
      : await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${
            process.env.API_KEY
          }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
            context.query.searchType && "&searchType=image"
          }&start=${startIndex}`
        ).then((response) => response.json());
    return {
      props: {
        results: data,
      },
    };
  }