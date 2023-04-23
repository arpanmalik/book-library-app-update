import React from 'react';
import {useEffect} from "react";
import axios from "axios";
import './comp.css';
import Loader from './Loader';

export default function Subject(props){

    const [book, setBook] = React.useState([]);

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    //const ut = love
    const tmp = props.tmp;
    const url = `https://openlibrary.org/subjects/${tmp}.json`
    console.log(url)

    const getAllSubjectBook = async()=>{
        try{
            const res = await axios.get(url);
            setBook(res?.data);
            setLoading(false);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        setLoading(true);
        getAllSubjectBook();
        },[]);

    if(loading){
        return <Loader />
    }


    else {
        if(book){
        const style = {
            'align-items':'center',
            'background-color':'red'
        }
        return (
            <div className="container cont-name">
                <h2 className="heading">Top Tending Books in {tmp} subject</h2>
                <div className="gride">
               {book.works?.slice(0,10).map((item)=>{
                return (
                    
                        <div className="carde">
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

        )
        }
        else{
            return (
       
                <ul>
                   element
                </ul>
               
           )
        }
    }


}