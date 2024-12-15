// https://school.programmers.co.kr/learn/courses/30/lessons/120924
function solution(common) {
    let A = common[1] - common[0];
    let B = common[1] / common[0];
     
     if(common[2] - common[1] === A) return common[common.length - 1] + A;
     else return common[common.length - 1] * B;
 }