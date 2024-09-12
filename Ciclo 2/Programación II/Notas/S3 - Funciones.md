## Paso por referencia vs. por valor

- **Paso por referencia:** Se pasa la variable tal cual, en su propio espacio de memoria. (`void foo(int& bar)`)
- **Paso por valor:** Se pasa *una copia local* de la variable. (`void foo(int bar)`)

```ad-important
title: Nota

Cuando se pasan argumentos a una función en C++, se pasa **por valor**, no por referencia.

Esto significa que lo que sea que se pase a una función es **una copia**, y cambios en el parámetro no afectarán nada fuera del contexto de la función.

```

## Organización en diferentes archivos

```cpp
// main.cpp
#include <iostream>
#include "functions.h"

int main() {
	int a = read_input();
	int b = read_input();
	int result = add(a, b);

	std::cout << result << std::endl;
}
```

```cpp
// functions.h
#ifndef FUNCIONES
#define FUNCIONES

int read_input();
int add();

#endif
```

```cpp
// functions.cpp
int read_input() {
	int x;
	cin >> x;
	return x;
}

int add(int a, int b) {
	return a + b;
}
```

## Recursividad

Al igual que en Python, las funciones en C++ pueden ser recursivas.

```cpp
int factorial(int n) {
	if (n <= 0)
		return 1;
	else
		return n * factorial(n - 1);
}
```