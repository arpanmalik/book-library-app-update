import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import BookList from './BookList';
import Pagination from './Pagination';
import Search from './Search';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchBook(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [query, setQuery] = useState("");

    const url = "https://openlibrary.org/search.json?author=tolkien&sort=new";

    const getAllBooks = async()=>{
       // console.log("Api called")
        try{
            const res = await axios.get(url);
            setBooks(res?.data);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        if(query?.length>0) handleSearchClick();
        else getAllBooks();
        //console.log(books.docs)
        
    },[currentPage])

  //  console.log(books.docs.length);

  if(query?.length===0){
    getAllBooks();
  }



  const handleSearchClick = async()=>{
    console.log("clicked");
    setLoading(true);
    const urlsh = `https://openlibrary.org/search.json?q=${query}`
    if(query?.length==0){
        getAllBooks();
    } 
    try{
        const res = await axios.get(urlsh);
        console.log(res?.data);
        setBooks(res?.data);
        setLoading(false);

    }catch(err){
        console.log(err.message);
    }
  }

    const paginate = page=>setCurrentPage(page);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage+1;
    //const allBooks = searchData?.slice(indexOfFirstPost, indexOfLastPost+1);
    const currentBooks = books?.docs?.slice(indexOfFirstPost, indexOfLastPost+1);
   // console.log(indexOfFirstPost, indexOfLastPost )
  // console.log(allBooks);

   // console.log(currentPage);
    const [itemOffset, setItemOffset] = useState(0);

    const style={
        'borderRadius':'10px',
        'width':'75%',
        'height':'40px',
        'justify-content':'center',
        'padding':'3px'
    }



    return(
        <div className='container mt-5'>
            <input type="text" style={style} onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={handleSearchClick} style={{height:"40px", marginLeft:"20px",width:"20%",border:"none"}}>Search</button>
            <BookList loading={loading} books = {currentBooks}   query={query}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={books?.docs?.length}
                paginate={paginate}
            />
            
            <p>Note:-Latest and last published are shown same because it is given in the api as well.</p>
        </div>
    )

}