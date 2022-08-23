import React from "react";

export default function SearchResults(results){
    return(
        <div>
            <p>About {results.searchInformation.formattedSearchTime}</p>
        </div>
    )
}