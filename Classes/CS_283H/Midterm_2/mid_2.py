import numpy as np

def binary_count(n, printflag = False):
    printflag and print( n , "-bit binary numbers, least significant bit first")
    A = np.zeros(n, 'int')
    count = 0
    i = 0
    while i < n:
        printflag and print(A)
        count += 1
        A[0] += 1
        i = 0
        while A[i] > 1:
            A[i] = 0
            i = i+1
            if i == n: break
            A[i] += 1
    return count

def n_count(n, printflag = False):
    printflag and print(f'{n}-tuples from [0..{n-1}].  Order matters, repetition allowed.')
    A = np.zeros(n, 'int')
    count = 0
    i = 0
    while i < n:
        printflag and print(A)
        count += 1
        A[0] += 1
        i = 0
        while A[i] >= n:
            A[i] = 0
            i = i+1
            if i == n: break
            A[i] += 1
    return count

def nondecr_count(n, printflag = False):
    printflag and print(f'Choose {n} from  [0..{n-1}] with repetition.  List as non-decreasing {n}- tuple.')
    A = np.zeros(n, 'int')
    count = 0
    i = 0
    while A[n-1] < n:
        printflag and print(A)
        count += 1
        A[0] += 1
        i = 0
        while i < n-1 and A[i] > A[i+1]:
            A[i] = 0
            i = i+1
            A[i] += 1
    return count

def i_count(n, printflag = False):
    printflag and print(f'{n}-tuples where the ith element is from  [0..{n}-i].  Order matters, repetition allowed.')
    A = np.zeros(n, 'int')
    count = 0
    i = 0
    while i < n:
        printflag and print(A)
        count += 1
        A[0] += 1
        i = 0
        while A[i] >= n-i:
            A[i] = 0
            i = i+1
            if i == n: break
            A[i] += 1
    return count

def incr_count(n, printflag = False):
    printflag and print(f'Choose {n} from  [0..{2*n-1}] without repetition.  List as increasing {n}- tuple.')
    A = np.arange(n)
    count = 0
    i = 0
    while A[n-1] < 2*n:
        printflag and print(A)
        count += 1
        A[0] += 1
        i = 0
        while i < n-1 and A[i] >= A[i+1]:
            A[i] = i
            i = i+1
            A[i] += 1
    return count

binary_count(4, True)