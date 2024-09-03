```ad-important
title: Nota

Cuando se pasan argumentos a una función en C++, se pasa **por valor**, no por referencia.

Esto significa que lo que sea que se pase a una función es **una copia**, y cambios en el parámetro no afectarán nada fuera del contexto de la función.

```

## Organización en diferentes archivos

```cpp
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
#ifndef FUNCIONES
#define FUNCIONES

int read_input();
int add();

#endif
```

```cpp
int read_input() {
	int x;
	cin >> x;
	return x;
}

int add(int a, int b) {
	return a + b;
}
```