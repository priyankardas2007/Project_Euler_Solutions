ef large_sum(arr):
    total = 0

    for num in arr:
        total += int(num)

    return int(str(total)[:10])
