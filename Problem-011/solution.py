def largest_grid_product(grid):
    rows = len(grid)
    cols = len(grid[0])
    largest = 0

    for i in range(rows):
        for j in range(cols):

            # Horizontal
            if j + 3 < cols:
                product = (
                    grid[i][j] *
                    grid[i][j + 1] *
                    grid[i][j + 2] *
                    grid[i][j + 3]
                )
                largest = max(largest, product)

            # Vertical
            if i + 3 < rows:
                product = (
                    grid[i][j] *
                    grid[i + 1][j] *
                    grid[i + 2][j] *
                    grid[i + 3][j]
                )
                largest = max(largest, product)

            # Diagonal Down-Right
            if i + 3 < rows and j + 3 < cols:
                product = (
                    grid[i][j] *
                    grid[i + 1][j + 1] *
                    grid[i + 2][j + 2] *
                    grid[i + 3][j + 3]
                )
                largest = max(largest, product)

            # Diagonal Down-Left
            if i + 3 < rows and j - 3 >= 0:
                product = (
                    grid[i][j] *
                    grid[i + 1][j - 1] *
                    grid[i + 2][j - 2] *
                    grid[i + 3][j - 3]
                )
                largest = max(largest, product)

    return largest
