function solution(strArr) {
    const groupMap = new Map();
  
    for (let str of strArr) {
      const length = str.length;
      if (groupMap.has(length)) {
        groupMap.set(length, groupMap.get(length) + 1);
      } else {
        groupMap.set(length, 1);
      }
    }
  
    let maxSize = 0;
    for (let count of groupMap.values()) {
      maxSize = Math.max(maxSize, count);
    }
  
    return maxSize;
  }