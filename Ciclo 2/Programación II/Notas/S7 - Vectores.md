En C++, un **vector** es básicamente un **arreglo dinámico** (una lista de longitud variable).

```cpp
#include <vector>

std::vector<int> vec(10); // Vector con 10 ceros
```

Los vectores se pasan **por valor** en las funciones. Contrario a los arrays, pasar un vector a una función que lo pueda modificar implica **pasar una referencia o puntero**, no sólamente el vector.

```cpp
#include <vector>
				  
void print_vector(std::vector<int>& vec) {
	for (int n : vec)
		std::cout << n << ' ';

	std::cout << std::endl;
}
				   
void pass_by_value(std::vector<int> vec) {
	vec.push_back(42);
}

void pass_by_reference(std::vector<int>& vec) {
	vec.push_back(42);
}

void pass_by_reference_2(std::vector<int>& vec) {
	vec.push_back(42);
}

std::vector<int> my_vec { 1, 2, 3 };

// No modifica al vector
pass_by_value(my_vec);
print_vector(my_vec);

// Sí modifica al vector
pass_by_reference(my_vec);
print_vector(my_vec);
```

En general, se recomienda **pasar siempre vectores por referencia**. Si no queremos modificar el vector pasado, **debemos usar `const`**.

## Métodos

- `begin()`: Dirección de memoria del inicio del vector.
- `end()`: Dirección de memoria del final del vector (pasado el último elemento).
- `size()`: Cantidad de elementos en el vector.
- `capacity()`: