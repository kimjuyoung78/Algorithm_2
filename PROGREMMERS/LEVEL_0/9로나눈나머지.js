function solution(number) {
  const sum = number.split("").reduce((acc, digit) => acc + Number(digit), 0);

  return sum % 9;
}
//return parseInt(Number(number)%9); 이 안되는 이유 : number의 최대 길이가 십만 자리이기 때문에, Number()러 변환하면 정수 오버플로우가 발생한다.
