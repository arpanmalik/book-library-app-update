import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from './Loader';
import './comp.css';
import {useParams} from "react-router-dom";

 const SearchBySubject = ()=>{
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = React.useState(false);
    const {text} = useParams();

    const getBooks = async()=>{
        setBooks([]);
       const url = `https://openlibrary.org/subjects/${text}.json`
       console.log(url);
        setLoading(true);
        try{
            const res = await axios.get(url);
            setBooks(res?.data?.works);
            setLoading(false);
        }catch(err){
            console.log(err.message);
            alert(err.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getBooks();
    },[])


    return (
        <>
            {
                loading ? <Loader />
                :
                    books.length>0? 
                    <div className="container cont-name">
                    <h2 className="heading">Top Tending Book/s in {text} subject</h2>
                    <div className="gride">
                   {books.slice(0,10).map((item)=>{
                    return (
                        
                            <div className="carde" style={{height:"100%"}}>
                                <h2 class="book-title">{item.title}</h2>
                                {
                                    item.authors.length>1 ?
                                     <p className="book-auth">By {item.authors[0].name} and {item.authors[1].name}</p>
                                    :
                                    <p className="book-auth">By {item.authors[0].name}</p>
                                }
                            </div>
                    )
                   })}
                   </div>
    
                </div>
                    :
                        <h6 style={{marginTop:"4%", textAlign:"center"}}>No search result</h6>
            }

        </>
    )
 }

 export default SearchBySubject;