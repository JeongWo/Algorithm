function solution(skill, skill_trees) {
    let answer = 0;

    let sTrees = skill_trees.map(tree => {
        return tree.split("").filter(ele => skill.includes(ele))
    });
    
    for(let i = 0; i < sTrees.length; i++) {
        let isValid = true;
        for(let j = 0; j < sTrees[i].length; j++) {
          if(skill[j] !== sTrees[i][j]) {
            isValid = false;
            break;
          }
        }
        if(isValid) answer++;
    }
    return answer;
}