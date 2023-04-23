import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }){
    let pageNumbers = [];
   // console.log(totalPosts);
  //  console.log(Math.ceil(totalPosts / postsPerPage));
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      //console.log("Hello")
      pageNumbers.push(i);
    }
    //console.log(pageNumbers);
    return(

      <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    )

}