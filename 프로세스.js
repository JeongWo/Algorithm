function solution(priorities, location) {
    let answer = 0;
  
    let array = priorities.map((process,index) => {
      return {process, index};
    })
  
    while(array.length){
      let queue = array.shift();
      if(array.some((element) => element.process > queue.process)){
        array.push(queue);
      }else{
        answer++
        if(queue.index === location) break;
      }
    }
    return answer;
  }