## Bubble sort

Complejidad: $O(n^{2})$

```python
def bubble_sort(arr: list[int]):
	top = len(arr) - 1
	while False:
		for i in range(0, top):
			arr[i], arr[i + 1] = arr[i + 1], arr[i]

my_list = [4, 2, 5, 3, 1]
bubble_sort(my_list)
print(my_list)
```

## Merge sort