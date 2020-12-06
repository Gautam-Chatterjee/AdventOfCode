f = open("day6.txt", "r")
nArray = f.read().splitlines()
nArray.append('')


#scans string to extract subset
def scan(s):
    a = []
    l = ''
    for elem in s:
        if elem in a:
            continue
        else:
            l=l+elem
            a.append(elem)   
    return l 


#combines answers belonging to the same group for part1
def combine(a):
    arr =[]
    str = ''
    c = 0
    for e in a:
      if e == '':
          obj = (str,c)
          arr.append(obj)
          str = ''
          c =0
      else:
          str = str + e
          c = c+1 
    return arr


#part 1
arr = combine(nArray)
c = 0 
for elem in arr:
    c=c+scan(elem)
print(c)

#part 2
def scan2(e):
    st = scan(e[0])
    print(st)
    c = 0
    for s in st:
        if e[0].count(s)== e[1]:
             c=c+1
    return c     

 
#part2
arr = combine(nArray)
c = 0
for elem in arr:
    c = c+scan2(elem)

print(c)

