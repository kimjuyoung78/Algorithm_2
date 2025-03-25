function solution(num_list) {
  const A = num_list.reduce((acc, curr) => acc * curr, 1);
  const B = num_list.reduce((acc, curr) => acc + curr, 0) ** 2;

  return A > B ? 0 : 1;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/181929
