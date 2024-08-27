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


## Condicionales `if`

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
## Condicionales `switch`

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