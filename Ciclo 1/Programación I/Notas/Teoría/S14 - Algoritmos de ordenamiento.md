## Bubble sort

Complejidad: $O(n^{2})$

Es eficiente en listas **casi ordenadas**.

```python
def bubble_sort(arr: list[int]):
	for top in range(len(arr) - 1, 0, -1):
		for i in range(0, top):
			if arr[i] > arr[i + 1]:
				arr[i], arr[i + 1] = arr[i + 1], arr[i]
				swap_made = True

my_list = [4, 2, 5, 3, 1]
bubble_sort(my_list)
print(my_list)
```

## Merge sort

Complejidad: $O(n\log(n))$ ($n\log_{2}(n)$ operaciones)

```python
def merge_sort(arr: list[int]) -> list[int]:
	if len(arr) <= 1:
		return arr

	mid = len(arr) // 2

	left = merge_sort(arr[:mid])
	right = merge_sort(arr[mid:])

	l = 0
	r = 0

	result = []

	# Merge left and right
	while l < len(left) or r < len(right):
		if l < len(left) and (r == len(right) or left[l] < right[r]):
			result.append(left[l])
			l += 1
		else:
			result.append(right[r])
			r += 1

	return result

my_list = [4, 2, 5, 3, 1]
sorted_list = merge_sort(my_list)
print(sorted_list)
```
