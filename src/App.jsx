

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

  const homeStartCors=[[1,1],[3,1],[1,4],[3,4]]

  for(const color in colors){
    const {colStart, colEnd, rowStart, rowEnd} = colors[color];
    for(let i=colStart; i<=colEnd; i++){
      for(let j= rowStart; j<=rowEnd; j++ ){
          const hsRow= j- rowStart;
          const hsCol= i- colStart;
        if(homeStartCors.some(([x,y])=> x===hsCol && y===hsRow)){
          board[i][j]={type: "homeStart"}
        }
        else{
        board[i][j]={type:"Home", color}
        }
      }
    }
  }

  const stylebyTypes= {
    "homeStart": '',
    "Home": '',
  }

  const getColor = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  green: "bg-green-500"
};

  console.log(board)
  


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-15 h-150 w-150 border-7 border-white rounded-lg">
        {board.map((cols, i)=>
          cols.map((rows, i2)=>
            <div className={`${rows?.type==="Home" ? 'border-none' : 'border-4 border-gray-700'} ${rows?.color ? getColor[rows?.color] : "bg-gray-500"} w-full h-full`}>
              
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App
