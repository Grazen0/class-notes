Para manejar memoria dinámica en el **heap**, usamos los siguientes operadores:

- `new`: asigna memoria en el heap
- `delete` liberar memoria asignada por `new`

```cpp
int* ptr_i = new int(3.14); // Crea un entero en el heap

delete ptr_i; // Marca ptr_i como libre
```