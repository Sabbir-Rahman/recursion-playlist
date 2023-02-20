function fibonacci(n,fibArray) {
  if (n ==0) return 0
  if (n==1) return 1
  if (!fibArray[n])  
    fibArray[n] = fibonacci(n - 1,fibArray) + fibonacci(n - 2,fibArray)
  return fibArray[n]
}

console.log(fibonacci(3,[]))