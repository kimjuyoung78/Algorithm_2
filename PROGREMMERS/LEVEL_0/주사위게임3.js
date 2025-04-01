function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counts = {};
  dice.forEach((num) => (counts[num] = (counts[num] || 0) + 1));
  const keys = Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b);
  const values = Object.values(counts);

  // 모든 주사위가 동일한 경우
  if (keys.length === 1) return 1111 * keys[0];

  // 세 개 동일하고 하나 다른 경우
  if (values.includes(3)) {
    const p = keys.find((k) => counts[k] === 3);
    const q = keys.find((k) => counts[k] === 1);
    return (10 * p + q) ** 2;
  }

  // 두 쌍의 동일한 경우
  if (keys.length === 2 && values.every((v) => v === 2)) {
    const [p, q] = keys;
    return (p + q) * Math.abs(p - q);
  }

  // 한 쌍과 두 개의 다른 숫자
  if (values.includes(2)) {
    const p = keys.find((k) => counts[k] === 2);
    const others = keys.filter((k) => k !== p);
    return others[0] * others[1];
  }

  // 모든 숫자가 다름
  return Math.min(...dice);
}
// https://school.programmers.co.kr/learn/courses/30/lessons/181916
