function solution(book_time) {
    book_time.sort();
    let room = [];
  
    book_time.forEach((t) => {
      let tmp = t[0].split(":");
        
      let startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
  
      let idx = room.findIndex((e) => e <= startTime);
      if (idx === -1) room.push(getNextTime(t[1]));
      else room[idx] = getNextTime(t[1]);
    });
  
    return room.length;
  }
  
  function getNextTime(endTime) {
    let next = endTime.split(":");
  
    return Number(next[0]) * 60 + Number(next[1]) + 10;
  }