Para manejar memoria dinámica en el **heap**, usamos los siguientes operadores:

- `new`: asigna memoria en el heap
- `delete` libera memoria asignada por `new`

```cpp
int* ptr_i = new int(3.14); // Crea un entero en el heap

delete ptr_i; // Marca ptr_i como libre
```

**Siempre es necesario liberar memoria asignada con `new`**. De lo contrario, el uso de memoria se podría acumular enormemente.
