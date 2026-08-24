from math import gcd


def digit_cancelling_fractions():
    numerator_product = 1
    denominator_product = 1

    for numerator in range(10, 100):
        for denominator in range(numerator + 1, 100):

            n_str = str(numerator)
            d_str = str(denominator)

            
            if n_str[1] == "0" and d_str[1] == "0":
                continue

            for digit in n_str:
                if digit == "0":
                    continue

                if digit in d_str:

                    new_n = n_str.replace(digit, "", 1)
                    new_d = d_str.replace(digit, "", 1)

                    if new_d == "0":
                        continue

                    if numerator / denominator == int(new_n) / int(new_d):
                        numerator_product *= numerator
                        denominator_product *= denominator

                    break

    divisor = gcd(numerator_product, denominator_product)

    return denominator_product // divisor


print(digit_cancelling_fractions())
