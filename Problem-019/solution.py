import datetime

def counting_sundays():
    count = 0

    for year in range(1901, 2001):
        for month in range(1, 13):

            date = datetime.date(year, month, 1)

            if date.weekday() == 6:
                count += 1

    return count


print(counting_sundays())
