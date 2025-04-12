my_list = ['a', 'b', 'c', 'd', 'e']

# Access by index (0-based)
print(my_list[0])  # 'a'
print(my_list[2])  # 'c'

# Negative indexing (starts from end)
print(my_list[-1])  # 'e'
print(my_list[-3])  # 'c'

# Slicing [start:end:step]
print(my_list[1:3])   # ['b', 'c']
print(my_list[:3])    # ['a', 'b', 'c']
print(my_list[2:])     # ['c', 'd', 'e']
print(my_list[::2])    # ['a', 'c', 'e'] (every other element)
print(my_list[::-1])   # ['e', 'd', 'c', 'b', 'a'] (reverse)