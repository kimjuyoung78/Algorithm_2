// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
    if (A === B) return 0; // 초기 상태 비교

    let lng = A.length;

    for (let i = 1; i <= lng; i++) {
        A = A.slice(-1) + A.slice(0, -1); // 문자열 오른쪽으로 회전
        if (A === B) return i;
    }
    return -1; // 어떤 회전으로도 B를 만들 수 없는 경우
}
