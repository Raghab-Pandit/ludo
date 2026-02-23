

const App= ()=>{

  const board= Array(15).fill().map(()=> Array(15).fill(null));
  // 1st index. Column,
  //  2nd index. Row

  const colors={
    blue:{colStart:0, colEnd:5, rowStart:0, rowEnd:5},
    red:{colStart:9, colEnd:14, rowStart:0, rowEnd:5},
    yellow:{colStart:0, colEnd:5, rowStart:9, rowEnd:14},
    green:{colStart:9, colEnd:14, rowStart:9, rowEnd:14},
}

  const homeStartCors=[[2,1],[3,1],[2,3],[3,3]]

  for(const color in colors){
    const {colStart, colEnd, rowStart, rowEnd} = colors[color];
    for(let i=colStart; i<=colEnd; i++){
      for(let j= rowStart; j<=rowEnd; j++ ){
          const hsRow= j- rowStart;
          const hsCol= i- colStart;
        if(homeStartCors.some(([x,y])=> x===hsCol && y===hsRow)){
          board[i][j]={type:"homeStart", color}
        }
        else{
        board[i][j]={type:"Home", color}
        }
      }
    }
  }

  console.log(board)
  


  return (
    <></>
  )
}

export default App
