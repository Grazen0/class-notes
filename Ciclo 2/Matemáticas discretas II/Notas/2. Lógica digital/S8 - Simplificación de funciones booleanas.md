Nuestro objetivo es hallar las **sumas minimales de productos**.

Usaremos **mapas de Karnaugh** (k-maps): un método visual para simplificar expresiones booleanas.

## Mapas de Karnaugh

- Se crea una celda para cada min-término.
- Se dice que dos min-términos son **adyacentes** cuando difieren en exactamente un literal (variable).

Por ejemplo, el mapa de Karnaugh de la función booleana

$$
f(x,y) = (x \cdot \overline{y}) + (\overline{x} \cdot y)
$$

es el siguiente:
![[2 variable kmap.excalidraw]]

Por lo tanto, la suma minimal de productos de $f$ es

$$
f(x,y) = \overline{x} + \overline{y}
.$$

Por otro lado, el mapa de Karnaugh de la función booleana

$$
g(x,y,z) = (x \cdot y \cdot \overline{z})
$$