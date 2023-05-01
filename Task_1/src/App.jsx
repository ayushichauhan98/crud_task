import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App(){
  const [data, setData] = useState([])

  useEffect(()=>{
    let url = "http://localhost:5000/products"

    fetch(url).then((res)=>{
      return res.json()
    }).then((data)=>{
        setData (data)
    }).catch((error)=>{
      console.log(error)
    })

  },[])
  let userdata = JSON.parse(window.localStorage.getItem('cart'))||[]

  function add(id){
    let url = "http://localhost:5000/products/"+id

    fetch(url).then((res)=>{
      return res.json()
    }).then((data)=>{
        userdata.push(data)
        window.localStorage.setItem('cart',JSON.stringify(userdata))
    }).catch((error)=>{
      console.log(error)
    })
  }
  function Delete(id){
    if (window.confirm('do you want to remove user..')) {
    // let userdata = JSON.parse(window.localStorage.getItem('cart'))||[]
      userdata.splice(id, 1)
      window.localStorage.setItem('cart', JSON.stringify(data))
      window.location.reload()

  }
  }

  return(
    <>
       <div className="container">
        {data.map((item,index)=>{

          return(
            <div className="card">
            <div className="card-title text-center">
               <h3>{item.name}</h3>
            </div>
            <div className="card-body d-flex justify-content-around">
              <b>{item.id}</b>
              <b>{item.name}</b>
              <b>{item.Quality}</b>
              <img src={item.path} height="100px" width="100px" alt="" />
              <button className="btn btn-primary" onClick={()=>{add(item.id)}}>Add cart</button>
              <button className="btn btn-danger" onClick={()=>{Delete(index)}}>Delete</button>
            </div>
          </div>
          )
        })}
       </div>
    </>
  )
}
    
    