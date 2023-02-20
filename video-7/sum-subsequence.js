function sum_sub_sequence(index, arr, seqAr, seqArSum, sum) {
  if (index >= arr.length) {
    if (seqArSum == sum) {
      console.log(seqAr)
    }
    return
  }

  //pick
  seqAr.push(arr[index])
  seqArSum += arr[index]
  sum_sub_sequence(index + 1, arr, seqAr, seqArSum, sum)
  // not pick
  seqAr.pop()
  seqArSum -= arr[index]
  sum_sub_sequence(index + 1, arr, seqAr, seqArSum, sum)
}

sum_sub_sequence(0, [3, 1, 2], [], 0, 3)
