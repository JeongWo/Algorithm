function solution(cards) {
    
    const openBoxes = (start, opened) => {
        let box = start;
        let count = 0;
        
        while (!opened[box]) {
            opened[box] = true;
            box = cards[box] - 1;
            count++;
        }
        return count;
    };
    
    let maxScore = 0;
    
    for (let i = 0; i < cards.length; i++) {
        let opened = Array(cards.length).fill(false);
        let group1 = openBoxes(i, opened);
        
        for (let j = 0; j < cards.length; j++) {
            if (opened[j]) {
                continue;
            }
            let group2 = openBoxes(j, opened);
            maxScore = Math.max(maxScore, group1 * group2);
        }
    }
    
    return maxScore;
}