def count(num):
  count = 0
  i= 1
  while i *i < num :
    if num %i ==0:
      count+= 1
      if i != num // i:
        count += 1
    i+=1
  return count 

def divisible_triangular_number(n):
  triangular =0 
  i = 1
  while true:
    triangle += 1
    if count(triangle) > n :
      return triangle
    i++
    
