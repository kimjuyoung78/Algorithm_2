function solution(num, total) {
    let mid = Math.floor(total/num);
    var answer = [mid];
    console.log(mid); 
    
    for(let i = 1 ; i <= Math.floor(num/2) ; i++){
        answer.unshift(mid - i);
    }
    for(let i = 1 ; i <= Math.floor(num/2) ; i++){
        answer.push(mid + i);
    }
    if(num % 2 === 0){
        answer.shift();
    }
    console.log("최종 answer : ", answer);
    
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120923