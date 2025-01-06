function solution(ineq, eq, n, m) {
  // 조건에 따라 비교 수행
  if (ineq === "<" && eq === "=") {
    return n <= m ? 1 : 0;
  } else if (ineq === ">" && eq === "=") {
    return n >= m ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    return n < m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    return n > m ? 1 : 0;
  }
  return 0;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/181934
