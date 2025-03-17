function solution(n_str) {
  let index = 0;
  while (n_str[index] === "0") index++;

  return n_str.slice(index);
}
// https://school.programmers.co.kr/learn/courses/30/lessons/181847
