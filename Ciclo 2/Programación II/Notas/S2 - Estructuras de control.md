````ad-note
title: Nota: Precisión de la salida

Se puede establecer la precisión con la que se imprimen `float`s a la terminal.

Por ejemplo, para imprimir números hasta los 3 dígitos decimales:

```cpp
std::cout << std::fixed << std::setprecision(3);
```

````


## Condicionales "if"

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