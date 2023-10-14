function solution(price) {
    if(100000<=price && 300000>price){
        return Math.floor(price*0.95);
    }else if (300000<=price && 500000>price) {
        return Math.floor(price*0.9);
    }else if (500000<=price){
        return Math.floor(price*0.8);
    } else{ 
        return price;
    }
}