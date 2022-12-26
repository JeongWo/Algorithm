function solution(board) {
    let result = Array.from(board);
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[i].length; j++){
            if(result[i][j] === 1) {
                result = warningArea(result, [i, j]);                
            }
        }
    }

    let count = 0;
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result[i].length; j++) {
            if(result[i][j] !== 1 && result[i][j] !== ""){
                count++;
            }
        } 
    }

    return count;
}

const warningArea = (board, position) => {
    const i = position[0];
    const j = position[1];

    const area = [
        [i-1, j-1], [i-1, j], [i-1, j+1],
        [i, j-1], [i, j], [i, j+1],
        [i+1, j-1], [i+1, j], [i+1, j+1]
    ];


    for(let i = 0; i < area.length; i++){
        const horizon = area[i][0];
        const vertical = area[i][1];

        if(horizon < 0 || vertical < 0 || board.length <= horizon || board.length <= vertical) { continue }

        if(board[horizon][vertical] !== 1) {
            board[horizon][vertical] = "";
        }
    }

    return board;
}