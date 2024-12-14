function solution(babbling) {
    const validWords = ["aya", "ye", "woo", "ma"]; // 발음 가능한 단어 목록
    let answer = 0;

    for (let word of babbling) {
        let temp = word;

        // 발음 가능한 단어를 모두 제거
        for (let validWord of validWords) {
            temp = temp.replace(validWord, " ");
        }

        // 제거 후 남은 문자열이 공백이라면 발음 가능한 단어로 간주
        if (temp.trim() === "") {
            answer++;
        }
    }

    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120956