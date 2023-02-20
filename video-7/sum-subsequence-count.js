function sum_sub_sequence(index, arr, seqAr, seqArSum, sum) {
  if (index >= arr.length) {
    if (seqArSum == sum) {
      return 1
    }
    return 0
  }

  //pick
  seqAr.push(arr[index])
  seqArSum += arr[index]
  
  const leftSubTree = sum_sub_sequence(index + 1, arr, seqAr, seqArSum, sum)
    
  // not pick
  seqAr.pop()
  seqArSum -= arr[index]
  const rightSubTree = sum_sub_sequence(index + 1, arr, seqAr, seqArSum, sum)
  
  return leftSubTree+rightSubTree
}

console.log(sum_sub_sequence(0, [3, 1, 2], [], 0, 3))
