import React from "react";

export default function SearchResults(results){
    return(
        <div>
            <p>About {results.searchInformation.formattedTotalResults}</p>
        </div>
    )
}