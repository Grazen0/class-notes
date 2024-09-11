Un array es un **arreglo** de **tamaño constante**.

```cpp
int arr[10] = { 0 };
```

En C++, la variable del array es un **puntero**. Por ello, cuando pasamos un array como parámetro de una función, lo que se pasa por valor es el puntero mismo.

```cpp
void modify_first(int arr[]) {
	arr[0] = 42;
}

int my_arr[] = { 1, 2, 3 };

// No hay un '&', pero esto va a modificar my_arr
modify_first(my_arr);

for (int i = 0; i < 3; i++) {
	std::cout << my_arr[i] << ' ';
}

std::cout << std::endl;
```

Por lo tanto, las siguientes expresiones son equivalentes entre sí:

- `arr[0]` $\leftrightarrow$ `*arr`
- `arr[1]` $\leftrightarrow$ `*(arr + 1)`
- `arr[2]` $\leftrightarrow$ `*(arr + 2)`
- `arr[3]` $\leftrightarrow$ `*(arr + 3)`
- Etc...