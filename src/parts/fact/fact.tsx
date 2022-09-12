import useFetch from "../../fetchApi/fetch";

const Fact=()=>{
    const[facts]=useFetch();
    
    return(
    <p className="mt-10 text-center">
        {facts?.data}
    </p>
    )
}
export default Fact;