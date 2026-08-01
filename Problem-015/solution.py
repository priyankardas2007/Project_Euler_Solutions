def lattice_paths(grid_size):
    result = 1

    for i in range(1, grid_size + 1):
        result = result * (grid_size + i) // i

    return result
  
