// school.programmers.co.kr/learn/courses/30/lessons/181939
https: function solution(a, b) {
  // a ⊕ b를 계산
  const ab = Number(String(a) + String(b));
  // b ⊕ a를 계산
  const ba = Number(String(b) + String(a));

  // 더 큰 값을 반환, 같으면 ab를 반환
  return ab >= ba ? ab : ba;
}

// function solution(a, b) {
//     // b의 자릿수 계산
//     const bLength = Math.floor(Math.log10(b)) + 1;
//     const aLength = Math.floor(Math.log10(a)) + 1;

//     // a ⊕ b 계산 (a * 10^bLength + b)
//     const ab = a * Math.pow(10, bLength) + b;

//     // b ⊕ a 계산 (b * 10^aLength + a)
//     const ba = b * Math.pow(10, aLength) + a;

//     // 더 큰 값을 반환
//     return ab >= ba ? ab : ba;
// }
