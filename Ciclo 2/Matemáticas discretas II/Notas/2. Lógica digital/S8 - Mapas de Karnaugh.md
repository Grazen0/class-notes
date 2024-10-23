Nuestro objetivo es hallar las **sumas minimales de productos**.

Usaremos **mapas de Karnaugh** (K-Maps): un método visual para simplificar expresiones booleanas.

En un mapa de Karnaugh:

- Se crea una celda para cada min-término.
- Se dice que dos min-términos son **adyacentes** cuando difieren en exactamente un literal (variable).

El proceso es el siguiente:

1. Colocar $1$s en la celda correspondiente a cada min-término.
2. Agrupar los $1$s en **rectángulos** de $2^k$ celdas.
	1. Debe haber la **mínima cantidad** posible de rectángulos.
	2. Los rectángulos **pueden superponerse** sobre otros.
	3. Los rectángulos pueden **ir de un extremo de la tabla al otro**.
3. A cada rectángulo le corresponde un producto conformado por los **literales comunes de sus celdas**.

```ad-example
title: Ejemplo 1 (2 variables).
collapse: closed

El mapa de Karnaugh de la función booleana

$$
f(x,y) = (x \cdot \overline{y}) + (\overline{x} \cdot y)
$$

es el siguiente:
![[2 variable kmap.excalidraw]]

Por lo tanto, la suma minimal de productos de $f$ es

$$
f(x,y) = \overline{x} + \overline{y}
.$$


```

```ad-example
title: Ejemplo 2 (4 variables).
collapse: closed

El mapa de Karnaugh de la función

$$
g(x,y,z) = (x \cdot \overline{y} \cdot z) + (x \cdot \overline{y} \cdot \overline{z}) + (\overline{x} \cdot y \cdot z) + (\overline{x} \cdot \overline{y} \cdot z) + (\overline{x} \cdot \overline{y} \cdot \overline{z})
$$

es el siguiente:

![[4 variable kmap.excalidraw]]

Por lo tanto, la suma minimal de productos de $g$ es igual a

$$
g(x,y,z) = \overline{y} + (\overline{x} \cdot z)
.$$


```

```ad-example
title: Ejemplo 3 (8 variables).
collapse: closed

El mapa de Karnaugh de la expresión

$$
wxyz + wxy\overline{z} + wx\overline{y}\overline{z} + w\overline{x}yz + w\overline{x}\overline{y}z + w\overline{x}\overline{y}\overline{z} + \overline{w}x\overline{y}z + \overline{w}\overline{x}yz + \overline{w}\overline{x}y\overline{z}
$$

es el siguiente:

![[8 variable kmap.excalidraw]]

Por lo tanto, esta expresión se reduce a

$$
wyz + \overline{w}\overline{x}y + wx\overline{z} + w\overline{x}\overline{y} + \overline{w}x\overline{y}z
.$$

```
