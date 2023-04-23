import React, {useState} from 'react';
import './comp.css';
import {useNavigate} from 'react-router-dom';
export default function SubjectDetail(){
    const navigate = useNavigate();
    const style = {
        "cursor":'pointer'
    }

    const [query, setQuery] = useState("");

    return (
        <div className="container">
            <h1 className="mt-5">Trending Subjects</h1>
                <div className="container">
                    <div stle={{display:"flex", gap:"20px"}}>
                        <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
                        <button onClick={()=>navigate(`/search-by-subject/${query}`)}>Search</button>
                    </div>
                    <div onClick={()=>navigate('/javascript')} style={style}><h6>Javascript</h6></div>
                    <div onClick={()=>navigate('/harry_potter')} style={style}><h6>Harry Potter</h6></div>
                    <div onClick={()=>navigate('/comedy')} style={style}><h6>Comedy</h6></div> 
                    <div onClick={()=>navigate('/love')} style={style}><h6>Love</h6></div> 
                    <div onClick={()=>navigate('/politics')} style={style}><h6>Politics</h6></div>             
                </div>
        </div>
    )
}