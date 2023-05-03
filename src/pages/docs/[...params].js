import { useRouter } from 'next/router'

function Doc(){
  const router = useRouter()
  const { params = [] } = router.query

  if(params.length === 2){
    return (<h1>feature {params[0]} concept {params[1]}</h1>)
  }


  return <h1>Docs home page</h1>
}

export default Doc
