// import useSWR from 'swr'
// const fetcher=(url)=>fetch(url).then((res)=>res.json());
// export default function GetD(){
//     const{data,error} = useSWR("https://api.github.com/repos/vercel/swr",fetcher)
//     if(error){return(<h1>Error</h1>)}
//     else if(!data){return(<h1>...Loading</h1>)}
//     else{return(<h1>{data.stargazers_count}</h1>)}
// }
export async function getStaticProps(){
  const lin = await fetch("https://api.github.com/repos/vercel/swr")
  const data = await lin.json()
  return{
      props:{
          star:data.stargazers_count
      },
      revalidate: 5
  }
}
export default function index({star}){
  return(<h1>{star}</h1>)
}