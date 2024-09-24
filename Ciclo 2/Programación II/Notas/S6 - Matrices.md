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
int** mat = new int*[2];

for (int i = 0; i < 2; i++) {
	mat[i]
}
```