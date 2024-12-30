// https://school.programmers.co.kr/learn/courses/30/lessons/181936?language=javascript
function solution(number, n, m) {
  // number가 n의 배수이고 m의 배수인지 확인
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else {
    return 0;
  }
}
