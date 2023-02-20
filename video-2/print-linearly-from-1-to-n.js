function print_linear(i,n){
  console.log(i)
  if (i==n) return
  print_linear(i+1,n)
}

print_linear(1,10)