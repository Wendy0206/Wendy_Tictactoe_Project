import { element } from "prop-types";
import React from "react";
import { useState,useRef, useEffect } from "react";


//create your first component
export const TicTacToe= ()=> {
    const [boardValue, setBoardValue] = useState(['','','','','','','','','']);
    const [countMove, setCountMove] = useState(0);
    const [cellStatus, setCellStatus] = useState([2,2,2,2,2,2,2,2,2]);
    const winner = useRef('O');

    useEffect(()=>{
      
     
check_winner();

},[countMove]);
  


const check_winner=()=>{
 
  const winner_pattern= [boardValue[0]+boardValue[1]+boardValue[2], boardValue[3]+boardValue[4]+boardValue[5],boardValue[6]+boardValue[7]+boardValue[8],  boardValue[0]+boardValue[3]+boardValue[6], 
   boardValue[1]+boardValue[4]+boardValue[7], boardValue[2]+boardValue[5]+boardValue[8],boardValue[0]+boardValue[4]+boardValue[8],boardValue[2]+boardValue[4]+boardValue[6]];
   const dialog = document.getElementById('modal_dialog');
  
if(winner_pattern.includes('XXX')){

    setCountMove(0);
    setBoardValue(boardValue.map((element,ind)=> (ind==ind)? '': element));  
    winner.current='X';
    dialog.showModal();
  
}
else if(winner_pattern.includes('OOO')){


setCountMove(0);
setBoardValue(boardValue.map((element,ind)=> (ind==ind)? '': element));  
dialog.showModal();
}
else if(countMove==9){
setBoardValue(boardValue.map((element,ind)=> (ind==ind)? '': element)); 

}




}

          
function Move_cell (index){

// verify the status of the cell
    if(boardValue[index])
    {
      alert('You cant play here again');    
    }

    else{
        
        if(countMove%2!=0){
      setBoardValue(boardValue.map((element,ind)=>ind==index? 'O': element));
        }

        if(countMove%2==0){
            setBoardValue(boardValue.map((element,ind)=> (ind==index)? 'X': element));   
        }
        setCountMove(countMove+1);

    }
  }

   


function reset_board (){
setBoardValue(boardValue.map((element,ind)=> (ind==ind)? '': element)); 
winner.current=='O';
}
  
   

	return	(
        <div class="container_div">
          <h1 className="mt-3">Tic Tac Toe</h1>
          <div className="theBoard">
        <div className="c1 white"><span onClick={()=>Move_cell(0)}>{boardValue[0]}</span></div>
        <div className="c12 black" ><span onClick={()=>Move_cell(1)}>{boardValue[1]}</span></div>
        <div className="c13 white"><span onClick={()=>Move_cell(2)}>{boardValue[2]}</span></div>
        <div className="c21 black"><span onClick={()=>Move_cell(3)}>{boardValue[3]}</span></div>
        <div className="c22 white"><span onClick={()=>Move_cell(4)}>{boardValue[4]}</span></div>
        <div className="c23 black"><span onClick={()=>Move_cell(5)}>{boardValue[5]}</span></div>
        <div className="c31 white"><span onClick={()=>Move_cell(6)}>{boardValue[6]}</span></div>
        <div className="c32 black"><span onClick={()=>Move_cell(7)}>{boardValue[7]}</span></div>
        <div className="c33 white"><span onClick={()=>Move_cell(8)}>{boardValue[8]}</span></div>
       </div>

	  <button type="button " class="button-17" onClick={()=>reset_board()}>Start Over</button>
  


    <dialog id="modal_dialog" className="rounded dialog_margin">

<div class="modal-content">
  <div class="modal-body">
    <p>Congratulations!!!  <i className={winner.current=='O' ? "fa-solid fa-mosquito" : "fa-solid fa-mosquito"}></i> wins !!! </p>
  </div>
  <div class="modal-footer d-flex justify-content-center">
    <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{ fontFamily: "arial" }} onClick={() => {
     reset_board();
      const dialog = document.getElementById('modal_dialog');
     winner.current='O';
      dialog.close();
    }}>Close</button>
  </div>

</div>

</dialog>


</div>
    );
	
};


