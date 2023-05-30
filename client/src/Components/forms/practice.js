import {useState } from 'react';

export const Search = () =>{
    const [name, setname] = useState("");

    return(
<>
<div className="container">
    <form>
        <input  onChange={(e)=>{setname(e.target.value);}} type="text" 
        placeholder="name" name="name" value={name}/><br/><br/>
        <button onClick={console.log(name)} type="button">click</button>
    </form>
</div>
</>
    );
}