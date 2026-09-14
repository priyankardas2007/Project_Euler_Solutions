def prime_pair_sets():

    def is_prime(num):

        if num < 2:
            return False

        if num == 2:
            return True

        if num % 2 == 0:
            return False

        i = 3

        while i * i <= num:

            if num % i == 0:
                return False

            i += 2

        return True


    def compatible(a, b):

        ab = int(str(a) + str(b))
        ba = int(str(b) + str(a))

        return is_prime(ab) and is_prime(ba)


    primes = []

    for i in range(3, 10000, 2):


        if i != 5 and is_prime(i):
            primes.append(i)


    answer = float("inf")


    def search(selected, candidates, total):

        nonlocal answer
        if len(selected) == 5:

            answer = min(answer, total)
            return


        for i in range(len(candidates)):

            p = candidates[i]
            if total + p >= answer:
                break


            next_candidates = []

            
            for j in range(i + 1, len(candidates)):

                q = candidates[j]

                if compatible(p, q):
                    next_candidates.append(q)


            search(
                selected + [p],
                next_candidates,
                total + p
            )


    search([], primes, 0)

    return answer


print(prime_pair_sets())
