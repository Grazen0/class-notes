````ad-note
title: Nota: Precisión de la salida

Se puede establecer la precisión con la que se imprimen `float`s a la terminal.

Por ejemplo, para imprimir números hasta los 3 dígitos decimales:

```cpp
/////////////////////////
#include <iomanip>
/////////////////////////

std::cout << std::fixed << std::setprecision(3);
std::cout << 3.14159 << std::endl; // 3.142
```

````

## Condicionales

### Condicional `if`

Así como en Python, C++ permite el uso de bloques de código condicionales.

```cpp
if (condition)
{
	std::cout << "La condición es verdadera!" << std::endl;
} else
{
	std::cout << "La condición es falsa!" << std::endl;
}
```

![[Condicional.excalidraw]]
### Bloque `switch`

```cpp
switch (n) {
	case 1:
		std::cout << "Primavera" << std::endl;
		break;
	case 2:
		std::cout << "Verano" << std::endl;
		break;
	case 3:
		std::cout << "Otoño" << std::endl;
		break;
	case 4:
		std::cout << "Invierno" << std::endl;
		break;
	default:
		std::cout << "Estación no válida" << std::endl;
}
```

## Bucles

### Bucle `while`

```cpp
int i = 0;

while (i < 7) {
	std::cout << "UTEC" << std::endl;
	i++;
}
```

### Bucle `do ... while`

Esta instrucción ejecuta el bloque de código sí o sí **al menos una vez**, y luego recién evalúa la condición para seguir en el bucle.

```cpp
int i = 0;

do {
	std::cout << "UTEC" << std::endl;
	i++;
} while (i < 7);
```

### Bucle `for`

```cpp
for (int i = 0; i < 7; i++) {
	std::cout << "UTEC" << std::endl;
}

std::string my_str = "Hello there";

for (auto ch : my_str) {
	std::cout << ch << std::endl;
}
```
