Una **función** es un conjunto de instrucciones que realizan una tarea específica.

## Funciones embebidas

- `abs(x)`: Valor absoluto de `x`.
- `round(x, [n])`: Redondear `x` a `n` dígitos decimales, `1` si no se especifica.
- `max(x, y)`: Valor máximo de `x` y `y`.
- `min(x, y)`: Valor mínimo de `x` y `y`.

## Funciones propias

Ejemplo: Función distancia entre dos puntos

```python
import math

def distance(x1, y1, x2, y2):
	return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

x1 = float(input("x1: "))
y1 = float(input("y1: "))
x2 = float(input("x2: "))
y2 = float(input("y2: "))

d = distance(x1, y1, x2, y2)
print("La distancia es", round(d, 2))
```