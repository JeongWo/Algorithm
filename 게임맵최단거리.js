function solution(maps) {
    const xLength = maps.length;
    const yLength = maps[0].length;
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
    
    const bfs = () => {
        let queue = [[0, 0, 1]];
        while (queue.length) {
            let [x, y, count] = queue.shift();
            if (x === xLength - 1 && y === yLength - 1) {
                return count;
            }
            if (maps[x][y]) {
                maps[x][y] = 0;
                dx.forEach((dx, i) => {
                    let nx = x + dx;
                    let ny = y + dy[i];
                    if (nx >= 0 && nx < xLength && ny >= 0 && ny < yLength && maps[nx][ny]) {
                        queue.push([nx, ny, count + 1]);
                    }
                });
            }
        }
        return -1;
    };
    return bfs();
}