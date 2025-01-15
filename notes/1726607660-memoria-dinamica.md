---
id: 1726607660-memoria-dinamica
aliases:
  - Memoria dinámica
tags:
  - cs/progra-2
createdAt: 2024-09-17 16:14
---

# Memoria dinámica

Para manejar memoria dinámica en el **heap**, usamos los siguientes operadores:

- `new`: asigna memoria en el heap
- `delete` libera memoria asignada por `new`

```cpp
int* ptr_i = new int(42); // Crea un entero en el heap

int* arr = new int[]{ 1, 2, 3 };

// Liberar la memoria ocupada
delete ptr_i;
delete[] arr;
```

**Siempre es necesario liberar memoria asignada con `new`**. De lo contrario, el uso de memoria se podría acumular enormemente.
