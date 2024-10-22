def one_loop(n):
    ''' One loop, from 0 to n-1 '''
    count = 0
    for i in range(n):
        count += 1
    return count

def nested2(n):
    ''' Two nested loops from 0 to n-1 '''
    count = 0
    for i in range(n):
        for j in range(n):
            count += 1
    return count

def nested_ij(n):
    ''' Nested loops: outer i from 0 to n-1; inner from 0 to i-1 '''
    count = 0
    for i in range(n):
        for j in range(i):
            count += 1
    return count

def nested_ijk(n):
    ''' Nested loops: outer i from 0 to n-1; middle j from 0 to i-1; inner k from 0 to j-1 '''
    count = 0
    for i in range(n):
        for j in range(i):
            for k in range(j):
                count += 1
    return count

def nested3(n):
    ''' Three nested loops from 0 to n-1 '''
    count = 0
    for i in range(n):
        for j in range(n):
            for k in range(n):
                count += 1
    return count

print(nested3(4))