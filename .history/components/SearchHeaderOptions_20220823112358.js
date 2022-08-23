import {useRouter} from "next/router"
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOption({ title, Icon, selected }) {
    return(
        <div>
      <SearchHeaderOption title="All" Icon={SearchIcon} selected={router.query.searchType === "" || !router.query.searchType}/>
      <SearchHeaderOption title="Images" Icon={PhotographIcon} selected={router.query.searchType === "image"}/>
s        </div>
    )
}