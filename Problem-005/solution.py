from math import gcd

def smallest_multiple(n):
    lcm = 1

    for i in range(1, n + 1):
        lcm = lcm * i // gcd(lcm, i)

    return lcm
