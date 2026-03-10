

const App= ()=>{

  const board= Array(15).fill().map(()=> Array(15).fill(null));
  // 1st index. Column,
  //  2nd index. Row

  const colors={
    blue:{colStart:0, colEnd:5, rowStart:0, rowEnd:5, homePaths: [[7,1], [7,2], [7,3], [7,4], [7,5]], origin: [6,1], final: [7,6]},
    red:{colStart:9, colEnd:14, rowStart:0, rowEnd:5, homePaths: [[9,7], [10,7], [11,7], [12,7], [13,7]], origin: [13,6], final: [8,7]},
    yellow:{colStart:0, colEnd:5, rowStart:9, rowEnd:14, homePaths: [[1,7], [2,7], [3,7], [4,7], [5,7]], origin: [1,8], final: [6,7]},
    green:{colStart:9, colEnd:14, rowStart:9, rowEnd:14, homePaths: [[7,9], [7,10], [7,11], [7,12], [7,13]], origin: [8,13], final: [7,8]},
}

  const homeStartCors=[[1,1],[3,1],[1,4],[3,4]]

  for(const color in colors){
    const {colStart, colEnd, rowStart, rowEnd, homePaths, origin, final} = colors[color];

    homePaths?.map(([x,y])=>{
      board[x][y]= {type:`${color}Path`, color}
    })
    if(origin){
    board[origin[0]][origin[1]]= {type: `${color}Origin`, color}
    board[final[0]][final[1]]= {type: `${color}Final`, color}
  }

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
  green: "bg-green-500",
  unPath: "bg-gray-500"
};

  const getClickedCoors= (x, y, type)=>{
      console.log(`[${x}, ${y}], ${type}`)
  }

  console.log(board)
  


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-15 h-150 w-150 border-7 border-white rounded-lg">
        {board.map((cols, i)=>
          cols.map((rows, i2)=>
            <div 
            onClick={()=> getClickedCoors(i, i2, rows?.type)} 
            className={`${rows?.type==="Home" ? 'border-none' : 'border border-gray-700'} ${rows?.color ? getColor[rows?.color] : "bg-white"} w-full h-full`}
            >
              
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App
