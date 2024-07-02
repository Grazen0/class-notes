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
