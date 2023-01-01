import React,{useRef} from 'react'

export default function SearchComponent({onClick}) {
    const ref=useRef()
const handleSearch=()=>{
    onClick(ref.current.value||"")
}
  return (
    <div style={{display:'flex',gap:0.1,justifyContent:"center",marginTop:18}}>
    <div>
      <input type="search" ref={ref} placeholder="Search Title"/>
    </div>
    <div>
      <button onClick={handleSearch}>
      search
      </button>
      </div>
    </div>
  )
}
