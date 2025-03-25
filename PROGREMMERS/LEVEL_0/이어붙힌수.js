function solution(num_list) {
  let even = "";
  let odd = "";

  for (const num of num_list) {
    if (num % 2 === 0) {
      even += num.toString();
    } else {
      odd += num.toString();
    }
  }

  return Number(odd) + Number(even);
}
