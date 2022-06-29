import React,{useState} from 'react'
import axios from 'axios';

export default function Account() {
    const [name , setName]= useState("")
    const [description , setDescription]= useState("")

    const submithandler = async(e) => {
        e.preventDefault();
        console.log(name,description);

        try{
            const response = await axios.get('http://localhost:4501/test')
            console.log(response)
        }catch(err){
            console.log(err);
        }
        
    }

    
  return (
    <div>
        <form onSubmit={submithandler}>
            <input type="text" placeholder="name" value={name} onChange = {(e)=>setName(e.target.value)} />
            <input type="text" placeholder="description" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}
