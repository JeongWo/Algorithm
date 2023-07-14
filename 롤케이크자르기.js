function solution(topping) {
    let map = new Map();
    let b = new Set(); 
    let answer = 0;
    
    for(let i=0; i<topping.length; i++){
        map.has(topping[i]) ? map.set(topping[i], map.get(topping[i])+1) : map.set(topping[i], 1);
    }

    for(let i=0; i<topping.length; i++){
        let count = map.get(topping[i])-1;
        b.add(topping[i]);
        count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
        if(b.size === map.size) answer++;
    }
    return answer;
}