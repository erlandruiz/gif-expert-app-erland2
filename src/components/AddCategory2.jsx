import { useState } from "react"

export const AddCategory2 = ({onNewCategoryErland}) => {

    const [valueErland, setValueErland] = useState('');

    const onInputChangeErland = (event)=>{

        setValueErland(event.target.value)

    } 

    const onSubmit = (event)=>{
        event.preventDefault();
        if(valueErland.trim().length <=1) return;
        onNewCategoryErland(valueErland.trim());

        setValueErland('')


    }


  return (
    <>
    <form action="" onSubmit={(event)=> onSubmit(event)}>
        <input 
        type="text" 
        placeholder="Erland Gifs"
        value={valueErland}
        onChange={(event)=>onInputChangeErland(event)}/>


    </form>

    </>
  )
}
