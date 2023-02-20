function sum_sub_sequence(index, arr, seqAr, seqArSum, sum) {
  if (index >= arr.length) {
    if (seqArSum == sum) {
      console.log(seqAr)
      return true
    }
    return false
  }

  //pick
  seqAr.push(arr[index])
  seqArSum += arr[index]
  // returning true will off the below recursion as soon as it found sum equal
  if (sum_sub_sequence(index + 1, arr, seqAr, seqArSum, sum) == true)
    return true
  // not pick
  seqAr.pop()
  seqArSum -= arr[index]
  if (sum_sub_sequence(index + 1, arr, seqAr, seqArSum, sum) == true)
    return true
  
  return false
}

sum_sub_sequence(0, [3, 1, 2], [], 0, 3)
