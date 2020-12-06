f = open("day5.txt", "r")
nArray = f.read().splitlines()


def row(str):
    low = 0
    high = 127
    for e in str:
        if e=='F':
            high = (high +low) // 2    
        else:
            low =  (high + low) // 2 + 1
    return high

def col(str):
    low = 0
    high = 7
    for e in str:
        if e =='L':
            high = (high +low) // 2 
        else:
            low =  (high + low) // 2 +1
    return high


    


def scanner(str):
     r = row(str[0:7])
     c = col(str[7:10])
     return r*8+c   
   

#print(scanner('BBFFBBFRLL'))

a = []
for i in nArray:
    a.append(scanner(i))


print(max(a))    