En C++, un **vector** es básicamente un **arreglo dinámico** (una lista de longitud variable).

```cpp
#include <vector>

std::vector<int> vec_1(10); // { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
std::vector<int> vec_2(3, 5); // { 5, 5, 5 }
```

Los vectores se pasan **por valor** en las funciones. Contrario a los arrays, pasar un vector a una función que lo pueda modificar implica **pasar una referencia o puntero**, no solamente el vector.

```cpp
#include <vector>
				  
void print_vector(const std::vector<int>& vec) {
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
- `capacity()`: La capacidad que tiene el vector (es decir el espacio que tiene reservado)
- `clear()`: Vacía el vector.
- `resize(size_t new_size)`: Cambia la capacidad del vector a `new_size`.
- `shrink_to_fit()`: Encoge la capacidad del vector a su tamaño.
- `erase(T* pos)`: Borra el elemento en la dirección `pos`.
- `insert(T* pos, T el)`: Inserta `el` en la dirección `pos`.

## Tips

- Se recomienda **reservar algo de memoria** desde la declaración del vector para mayor eficiencia.
- Se recomienda **pasar vectores por referencia** (para evitar hacer clones). Si no se quiere mutar el vector original, se puede usar `const`.

## Iterando con iteradores

Un vector se puede iterar de varias maneras.

```cpp
#include <vector>

std::vector<int> vec { 42, 13, 121 };

for (int i = 0; i < vec.size(); i++) {
	std::cout << vec[i] << ' ';
}
std::cout << std::endl;

for (auto n : vec) {
	std::cout << n << ' ';
}
std::cout << std::endl;

for (auto it = vec.begin(); it < vec.end(); it++) {
	std::cout << *it << ' ';
}
std::cout << std::endl;

```