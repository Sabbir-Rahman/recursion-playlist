function reverseArray(ar,leftPointer,rightPointer){
  if(leftPointer>rightPointer){
    return
  }

  const temp = ar[leftPointer]
  ar[leftPointer] = ar[rightPointer]
  ar[rightPointer] = temp

  reverseArray(ar,leftPointer+1,rightPointer-1)
}

const ar = [1,2,3,4,5]
reverseArray(ar,0,ar.length-1)
// array dont need to return because it is pass by reference
console.log(ar)


