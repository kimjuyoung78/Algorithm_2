function solution(n) {
  let sum = 0;
  if (n % 2 === 1) {
    // 홀수인 경우: 1부터 n까지 2씩 증가하며 합 계산
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
  } else {
    // 짝수인 경우: 2부터 n까지 2씩 증가하며 제곱의 합 계산
    for (let i = 2; i <= n; i += 2) {
      sum += i * i;
    }
  }
  return sum;
}
