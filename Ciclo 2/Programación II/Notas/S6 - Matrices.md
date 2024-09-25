Las matrices son arrays de arrays.

```cpp
#include <iomanip>

int mat[2][3] = {
	{ 1, 2, 3 },
	{ 4, 5, 6 },
};

for (int i = 0; i < 2; i++) {
	for (int j = 0; j < 3; j++)
		std::cout << std::setw(3) << mat[i][j] << ' ';

	std::cout << std::endl;
}
```

Al igual que los arrays, las matrices también se pueden **alojar dinámicamente**. El ejemplo anterior es equivalente a lo siguiente:

```cpp
#include <iomanip>

int** mat = new int*[2];

for (int i = 0; i < 2; i++) {
	mat[i] = new int[] { 1 + 3*i, 2 + 3*i , 3 + 3*i };
}

for (int i = 0; i < 2; i++) {
	for (int j = 0; j < 3; j++)
		std::cout << std::setw(3) << mat[i][j] << ' ';

	std::cout << std::endl;
}

// Liberar el espacio
for (int i = 0; i < 2; i++)
	delete[] mat[i];

delete[] mat;

```

Al hacer esto, estamos

1. inicializando un array de punteros en el heap, y
2. asignando cada puntero de ese array a *otro* array en el heap.

Esto nos permite obtener una matriz de filas desperdigadas por el heap.
