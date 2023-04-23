import React from 'react';

export default function Search({tmp, searchKeyword}){

    const style={
        'borderRadius':'10px',
        'width':'75%',
        'height':'40px',
        'justify-content':'center',
        'padding':'3px'
    }

    function handleChange(e){
        searchKeyword(e.target.value);
    }
    return (
        <>
        <div style={{'width':'100%', 'height':'50px'}}>
            <input type='text' 
                placeholder="Search here"
                values={tmp} 
                onChange={handleChange}
                style={style}
            />
        </div>
        </>
    )
}