import React from 'react';


const EditExpencePage = (props)=>{
    console.log(props);
    return(
        <div>EditExpencePage{props.match.params.id}</div>
        );
};

export default EditExpencePage;