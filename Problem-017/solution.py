def number_letter_counts(limit):
    ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]

    tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ]

    def number_to_words(n):
        if n < 20:
            return ones[n]

        if n < 100:
            return tens[n // 10] + ones[n % 10]

        if n < 1000:
            result = ones[n // 100] + "hundred"

            if n % 100 != 0:
                result += "and" + number_to_words(n % 100)

            return result

        if n == 1000:
            return "onethousand"

    total = 0

    for n in range(1, limit + 1):
        total += len(number_to_words(n))

    return total


print(number_letter_counts(1000))
