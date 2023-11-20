function solution(board, k) {
    let rows = board.length;
    let cols = board[0].length;
    let sum = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i + j <= k) {
                sum += board[i][j];
            }
        }
    }

    return sum;
}