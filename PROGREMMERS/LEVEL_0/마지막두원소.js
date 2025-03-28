function solution(A) {
  const length = A.length;
  if (A[length - 1] - A[length - 2] > 0) {
    A.push(A[length - 1] - A[length - 2]);
  } else A.push(A[length - 1] * 2);
  return A;
}
