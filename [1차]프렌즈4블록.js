function solution(m, n, board) {
    let boardArr = [];
    let count = 0;
    let arr = [];
    
    for(let i = 0; i < board.length; i++) boardArr.push(board[i].split(""));
    while(true){
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(i !== m - 1 && j !== n-1 && boardArr[i][j] !== 0 
                   && (boardArr[i][j].repeat(3) === boardArr[i][j+1] + boardArr[i+1][j] + boardArr[i+1][j+1])
                  )
                {  arr.push({x : j, y : i, value : boardArr[i][j]});
                   arr.push({x : j+1, y : i, value : boardArr[i][j]});
                   arr.push({x : j, y : i+1, value : boardArr[i][j]});
                   arr.push({x : j+1, y : i+1, value : boardArr[i][j]});    
                }
            }
        }
        if(arr.length === 0) break; 
        
        for(let i = 0; i < arr.length; i++){
           for(let j = 0; j < arr.length; j++){
               if(i !== j && arr[i].x === arr[j].x && arr[i].y === arr[j].y && arr[i].value === arr[j].value)
                   arr.splice(i, 1);
           }
        } 
        count += arr.length;
        for(let i = 0; i < arr.length; i++) {
            boardArr[arr[i].y][arr[i].x] = 0;
        }
        for(let i = m-1; i >= 0; i--){
            for(let j = 0; j < n; j++){
                if(boardArr[i][j] === 0){
                   for(let k = i - 1; k >= 0; k--){
                       if(boardArr[k][j] !== 0){
                           boardArr[i][j] = boardArr[k][j];
                           boardArr[k][j] = 0;
                           break;
                       }
                   }
                }
            }
        } 
        
        arr = []; 
    }
    
    return count;
}