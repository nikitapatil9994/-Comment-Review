import { useEffect, useState } from 'react'

import './App.css'


function App() {
  const [value, setValue] = useState([])
  const [loading,setloading] =useState([false])
  const [page,setpage] =useState(1)

  function fetchData()
  {
    setloading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    .then((res)=>res.json())
    .then((data)=>
      {
        setloading(false)
        setValue(data)

      })
    .catch((err)=>console.log(err))
  }
   
  useEffect(()=>
  {
    fetchData()
  },[page])



  return loading?<h1>Loading....</h1> :(

<>
    {
     value.map((el)=><div key={el.id}>
     <h1>{el.id}</h1>
     <p>{el.title}</p>
     <p>{el.body}</p>
     </div>)
    }

    <button style={{fontSize : '25px' , backgroundColor : 'black' , color : 'white'}} onClick={ ()=> setpage (page -1)}>Pre</button>
     <h1>{page}</h1>
    <button  style={{fontSize : '25px' ,  backgroundColor : 'black',color:'white'}} onClick={ ()=>setpage (page +1)}>Next</button>
    </>
  )
}

export default App