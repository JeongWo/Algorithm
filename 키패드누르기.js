function solution(numbers, hand) {
    let [leftRow, leftCol] = [3, 0];
    let [rightRow, rightCol] = [3, 2];
    let result = "";
  
    numbers.forEach((e) => {
      if (e === 1 || e === 4 || e === 7) {
        [leftRow, leftCol] = [Math.floor((e - 1) / 3), 0];
        result += "L";
      } else if (e === 3 || e === 6 || e === 9) {
        [rightRow, rightCol] = [Math.floor((e - 1) / 3), 2];
        result += "R";
      } else {
        if (e === 0) e = 11;
        
        let [nextRow, nextCol] = [Math.floor((e - 1) / 3), 1];
        let leftDistance = Math.abs(leftRow - nextRow) + Math.abs(leftCol - nextCol);
        let rightDistance = Math.abs(rightRow - nextRow) + Math.abs(rightCol - nextCol);
  
          if (
          leftDistance < rightDistance ||
          (leftDistance == rightDistance && hand === "left")
        ) { [leftRow, leftCol] = [nextRow, nextCol];
          result += "L";
        } else { [rightRow, rightCol] = [nextRow, nextCol];
          result += "R";
        }
      }
    });
    return result;
  }