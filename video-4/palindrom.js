function palindrom(str, leftPointer) {
  const rightPointer = str.length - leftPointer - 1
  // console.log(`String:${str} left:${leftPointer} length:${Math.floor(str.length/2)} right:${rightPointer}`)

  if (leftPointer == Math.floor(str.length / 2)) {
    return true
  }


  if (str[leftPointer] != str[rightPointer]) return false

  return palindrom(str, leftPointer + 1)
}

console.log(palindrom('madam', 0))
