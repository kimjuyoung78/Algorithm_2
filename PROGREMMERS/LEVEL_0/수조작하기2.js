function solution(numLog) {
  let answer = "";
  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];
    switch (diff) {
      case 1:
        answer += "w";
        break;
      case -1:
        answer += "s";
        break;
      case 10:
        answer += "d";
        break;
      case -10:
        answer += "a";
        break;
    }
  }
  return answer;
}
// https://www.perplexity.ai/search/munje-seolmyeong-jeongsu-ngwa-3GfyT5I6SrGjuf3TT2Yl_A
