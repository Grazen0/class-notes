Una **función** es un conjunto de instrucciones que realizan una tarea específica.

## Funciones embebidas

- `abs(x)`: Valor absoluto de `x`.
- `round(x, [n])`: Redondear `x` a `n` dígitos decimales, `1` si no se especifica.
- `max(x, y)`: Valor máximo de `x` y `y`.
- `min(x, y)`: Valor mínimo de `x` y `y`.

## Funciones propias

```python
import math

def distance(x1, y1, x2, y2):
	return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
```