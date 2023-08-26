import { useState } from "react";

export const InputCenter = ({onInputCenter}) => {

        const [inputCenter, setInputCenter] = useState('')

        const onHandleChange=(event)=>{
            setInputCenter(event.target.value)
        }

        const onHandleSubmit =(event)=>{
            event.preventDefault();
            if(inputCenter.trim().length <=1) return

            onInputCenter(inputCenter.trim());
            setInputCenter('')

        }


  return (
    <>
      <form action="" onSubmit={(event)=>onHandleSubmit(event)}>
        <input 
        type="text" 
        placeholder="Center Gifs C"
        value={inputCenter}
        onChange={(event)=> onHandleChange(event)}
        
        />
      </form>
    </>
  );
};
