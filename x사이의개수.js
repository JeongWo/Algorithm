function solution(myString) {
    let lengthArr = [];
    let length = 0;

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'x') {
            lengthArr.push(length);
            length = 0;
        } else {
            length++;
        }
    }

    lengthArr.push(length); 

    return lengthArr;
}