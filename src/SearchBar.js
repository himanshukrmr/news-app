import React,{useState} from 'react'

const SearchBar = (props) =>{
  const[text,setText] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

return(
  <div class="flex justify-center">
    <form onSubmit={handleSubmit}>
    <input type='text' 
    placeholder='eg., politics'
    className='py-1 px-2 rounded-l-lg style: border 20px black'
    onChange={(e) => setText(e.target.value)}

    ></input>
    <button onClick={(event)=> setText(props.event.target.value)} type='submit'
    className='bg-green-400 py-1 px-2 rounded-r-lg text-white'
    
    >Search</button>

    </form>

  </div>
)
}

export default SearchBar
