```ad-definition

Una **relación lineal no homogénea** de orden $k$ tiene la forma

$$
a_n + r_1a_{n-1} + r_2a_{n-2} + \ldots + r_ka_{n-k} = g(n)
,$$

donde $r_i$ son constantes (reales), $r_k \neq 0$ y $g(n) \neq 0$.

```

En general, se cumple que la solución de una RLNH es la suma de una solución asociada a una RLH y una solución particular. Esto es,

$$
a_n = a^{(h)}_n + a^{(p)}_n
,$$

donde $a^{(h)}_n$ es la solución de la parte homogénea de $a_n$.

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

1. Hallar una solución particular.
2. Hallar una solución general para la parte homogénea.
3. Sumar (muy difícil).

Sin embargo, lo que se complica es hallar una solución particular.

## Para productos de polinomio y exponente

Consideremos la RLNH

$$
a_n + r_1a_{n-1} + r_2a_{n-2} + \ldots + r_ka_{n-k} = q(n) b^n
,$$

donde $q(n)$ es un polinomio de grado $m$, y sea $C(x)$ la ecuación característica de la parte homogénea de $a_n$.

Entonces, una solución particular de $a_n$ es

$$
a_n^{(p)} = n^s(k_0 + k_1n + \ldots + k_m n^m)b^n
,$$

donde $s$ es la multiplicidad que tiene $b$ como raíz de $C(x)$. (Si $b$ no es raíz, entonces consideramos $s = 0$)
