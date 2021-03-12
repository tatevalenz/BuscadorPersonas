export default function SearchResultsItem({name,email}){
    return(

        <div style={{ backgroundColor:"rgb(199 146 146)",
             marginTop:5,
             marginBottom:5,
             padding: 10,
            width:"100%"
            }}>
                <p>{name}</p>
                <p> {email}</p>
            </div>
    );

}