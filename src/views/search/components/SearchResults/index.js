import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({ results, isSearching }){
return(
    <div style={{width:"100%",
    padding:"0rem 2rem 0rem 2rem"}}>
        {!results?.length && isSearching && <p style={{backgroundColor:"#e00d0d",
        width:"100%",
        padding:10,
        textAlign:"center",
        alignItems:"center",
        flexDirection:"row"}}>
            No existen resultados
            </p>}
        {results?.map((value) =>
      <SearchResultsItem key={value.id} {...value} />)
    }
    </div>
    );
}