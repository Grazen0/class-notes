Un **puntero** no es más que un **número** que punta a una **dirección en la memoria**.

## Stack y heap

La memoria se almacena en 2 secciones:

- **Pila (stack):** Asignación de memoria *estática*.
- **Montón (heap):** Asignación de memoria *dinámica*.

```cpp
int a = 3;
int* pointer_to_a = &a;

std::cout << "a: " << a << std::endl;
std::cout << "address: " << pointer_to_a << std::endl;
```
