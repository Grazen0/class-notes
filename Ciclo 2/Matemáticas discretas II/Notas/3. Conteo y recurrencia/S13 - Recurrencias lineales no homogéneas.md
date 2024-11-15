```ad-definition

Una **relación lineal no homogénea** de orden $k$ tiene la forma

$$
a_n + r_1a_{n-1} + r_2a_{n-2} + \ldots + r_ka_{n-k} = g(n)
,$$

donde $r_i$ son constantes (reales), $r_k \neq 0$ y $g(n) \neq 0$.

```

En general, se cumple que la solución de una RLNH es la suma de una solución asociada a una RLH y una solución particular. Esto es,

$$
a_n = a^{(h)}_n + a^{(h)}_n
,$$

donde $a^{(h)}_n$ es la solución de $a_n + r_1a_{n-1} + r_2a_{n-2} + \ldots + r_ka_{n-k} = 0$.

```ad-example
title: Ejemplo.
collapse: closed

Sea la RLNH

$$
a_{n+1} = 5a_n + 3^n
.$$

Si consideramos la posibilidad de una solución particular de la forma $k \cdot 3^n$, podemos reemplazar esto en la ecuación anterior y despejar $k$:

$$
k \cdot 3^{n+1} = 5k \cdot 3^n + 3^n \implies k = -\frac{1}{2}
.$$

Por lo tanto, una solución particular de $a_n$ es

$$
a_n = -\frac{1}{2} \cdot 3^n
.$$

Sin embargo, **queremos la solución general**, no una particular. Por lo tanto, realizamos el siguiente cambio de variable:

$$
a_n = b_n - \frac{1}{2} \cdot 3^n
.$$

Reemplazándolo en la recurrencia original, este cambio siempre va a convertir la recurrencia en homogénea porque contiene a la solución particular.

Obtenemos entonces,

$$
b_{n+1} - \frac{1}{2} \cdot 3^{n+1} = 5\left( b_n - \frac{1}{2} \cdot 3^n \right)  + 3^n
,$$

lo que se reduce a

$$
b_{n+1} = 5b_n
,$$

cuya solución general es $b_n = c \cdot 5^n$.

Finalmente, la **solución general** de $a_n$ es

$$
a_n + c \cdot 5^n - \frac{1}{2} 3^n
.$$

```

En la práctica, este proceso se resume a:

1. Hallar una solución particular para la recurrencia.
2. Hallar una solución general ignorando la parte no homogénea de la recurrencia.
