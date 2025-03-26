function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    // s부터 e까지의 부분 배열 추출
    const subArray = arr.slice(s, e + 1);
    // k보다 큰 요소 필터링
    const filtered = subArray.filter((num) => num > k);
    // 최소값 반환 또는 -1
    return filtered.length ? Math.min(...filtered) : -1;
  });
}
//어렵다 한번 더 보기
// https://school.programmers.co.kr/learn/courses/30/lessons/181923
