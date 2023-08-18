function solution(board, moves) {
    let basket = [];
    let result = 0;
    
    moves.forEach(order => {
        let doll = pickup(board, order-1);
        if(doll){
            if(basket[basket.length-1] === doll){
                basket.pop();
                result +=2;
            }else{
                basket.push(doll);
            }
        }
    });
    return result;
}

function pickup(board, order){
    for(let i = 0; i < board.length ; i++){
        if(board[i][order] !== 0){
            let doll = board[i][order];
            board[i][order]= 0;
            return doll;
        }
    }
}