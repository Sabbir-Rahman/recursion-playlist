function printSubSequence(index,arr,subAr) {
  if (index >= arr.length) {
    console.log(subAr)
    return
  }
  


  // taking the elemnt
  subAr.push(arr[index])
  printSubSequence(index+1,arr,subAr)
  // not taking r=theme ement
  subAr.pop()
  printSubSequence(index+1,arr,subAr)

}

printSubSequence(0,[3,1,2],[])