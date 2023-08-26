import { useState } from "react"


export const AddCenterCategory = ({onNewCenter}) => {

    const [centerCategory, setCenterCategory] = useState('')

    const onInputCenter = (event)=>{
        setCenterCategory(event.target.value)
    }

    const onHandleSubmit =(event)=>{

        if(centerCategory.trim().length <=1) return;
        event.preventDefault();
        onNewCenter(centerCategory.trim())
        setCenterCategory('')
    }

  return (
    <>
    <form action="" onSubmit={(event)=>onHandleSubmit(event)}>
        <input 
        type="text" 
        placeholder="Center Gifs"
        value={centerCategory}
        onChange={(event)=>onInputCenter(event)}
        />


    </form>
    </>
  )
}
