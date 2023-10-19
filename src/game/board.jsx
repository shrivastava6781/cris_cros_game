import React, { useState } from 'react'
import Square from './square'

const Board = () => {
  const [data, setData] = useState(
    Array(9).fill(null)
  )
  const checkWinner=()=>{
    const winner = [
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
    ]
    for(let logic of winner){
      const [a,b,c] = logic;
      if(data[a] !== null && data[a] === data[b] && data[a] === data[c]){
        return data[a];
      }
      else  if(data.every((Square)=> Square !== null)){
        return "draw"
      }
    }
    // if(data.every((Square)=> Square !== null)){
    //   return "draw"
    // }
    return false
  }
  const iswinner = checkWinner() ;

  const [isTurn, setisTurn] = useState(true)
  const handleClicke=(index)=>{
    if(data[index] !== null){
      return
    }
    const copyState = [...data]
    copyState[index] = isTurn ? "❌" : "⭕"
    setData(copyState)
    setisTurn(!isTurn)
  }

  return (
    <div>
      <h1 className='heading'>Tic Tac Toe Game :- </h1>
      <div className='board-container'>
        <div className='each-row row1'>
          <Square onClick={()=>{handleClicke(0)}} value = {data[0]}/>
          <Square onClick={()=>{handleClicke(1)}} value = {data[1]}/>
          <Square onClick={()=>{handleClicke(2)}} value = {data[2]}/>
        </div>
        <div className='each-row row2'>
          <Square onClick={()=>{handleClicke(3)}} value = {data[3]}/>
          <Square onClick={()=>{handleClicke(4)}} value = {data[4]}/>
          <Square onClick={()=>{handleClicke(5)}} value = {data[5]}/>
        </div>
        <div className='each-row row3'>
         <Square onClick={()=>{handleClicke(6)}} value = {data[6]}/>
         <Square onClick={()=>{handleClicke(7)}} value = {data[7]}/>
         <Square onClick={()=>{handleClicke(8)}} value = {data[8]}/>
        </div>
      </div>
     <div className='winner'>
     {iswinner ? <><div className='winnercheck'><h1>
          {iswinner === "draw" ? (<>It's a draw match 😮‍💨 <button className='btn' onClick={()=>{setData(Array(9).fill(null))}}>Play Again</button></> ) : (<>{iswinner} is the winner <button className='btn' onClick={()=>{setData(Array(9).fill(null))}}>Play Again</button> <img className='crown' src="https://cdn-icons-png.flaticon.com/128/1232/1232579.png" alt="" /></>)}</h1></div></> : <><div className='chance'><h1>Player {isTurn ? "❌":"⭕"} please move </h1></div></>}
     </div>
    </div>
  )
}

export default Board