## Stack y heap

La memoria se almacena en 2 secciones:

- **Pila (stack):** Asignación de memoria *estática*.
- **Montón (heap):** Asignación de memoria *dinámica*.

![[Memoria en C++.png]]

## Punteros

Un **puntero** no es más que un **número** que punta a una **dirección en la memoria**.

```cpp
int a = 3;
int* ptr_a = &a;

std::cout << "a: " << a << std::endl;
std::cout << "address: " << ptr_a << std::endl;

int copy_of_a = *ptr_a;
std::cout << "copy of a: " << copy_of_a << std::endl;
```

### Punteros vs. referencias

- **Referencia:** es un constructo del *compilador*. Actúa como *alias* de una variable.
- **Puntero:** "existe" de verdad en la memoria: es un número.

```ad-tip

En general, es mejor usar **referencias antes que punteros** a menos que no sea posible.

```
