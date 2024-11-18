```ad-definition

Una **relación lineal homogénea** de orden $k$ tiene la forma

$$
a_n = r_1a_{n-1} + r_2a_{n-2} + \ldots + r_ka_{n-k}
,$$

donde $r_i$ son constantes (reales) y $r_k \neq 0$.

```

Es decir, es una sucesión donde cada término es algún combinación lineal de los términos anteriores.

Algunos ejemplos de relaciones lineales homogéneas son:

- $F_n = F_{n-1} + F_{n-2}$ (orden 2)
- $F_{n+2} = F_n + F_{n+1}$ (orden 2)
- $a_n = 2a_{n-1}$ (orden 1)

## Ecuación característica

```ad-definition

Sea la RLH

$$
a_n = r_1a_{n-1} + r_2a_{n-2} + \ldots + r_ka_{n-k}
.$$

Entonces, la **ecuación característica** de esta recurrencia es

$$
x^k = r_1x^{k-1} + r_2x^{k-2} + \ldots + r_k
.$$

```

La ecuación característica es crucial para resolver una RLH.

## RLH de orden 1

También son llamadas **progresiones geométricas**. Son del tipo

$$
a_n = ca_{n-1}
,$$

y su solución general (demostrable por inducción) es

$$
a_n = c^n a_0
.$$

## RLH de orden 2

Son de la forma

$$
a_n = c_1a_{n-1} + c_2a_{n-2}
,$$

donde $c_2 \neq 0$.

Su ecuación característica es

$$
x^2 = c_1x + c_2
,$$

cuyas raíces $s_1$ y $s_2$

Sin embargo, debemos tomar en cuenta dos posibles casos para estas raíces.

### Para raíces diferentes

```ad-theorem

Si $s_1 \neq s_2$, entonces la fórmula general para $a_n$ es de la forma

$$
a_n = A(s_1)^n + B(s_2)^n
,$$

donde $A$ y $B$ son constantes.

```

Para hallar $A$ y $B$, formamos un sistema de ecuaciones con los términos iniciales.

```ad-example
title: Ejemplo.
collapse: closed

Sea la sucesión definida por

$$
c_n = \begin{cases}
5 & n = 1 \\
3 & n = 2 \\
3c_{n-1} - 2c_{n-2} & n > 2
\end{cases}
.$$

Su ecuación característica es

$$
x^2 = 3x - 2
,$$

cuyas raíces son $(s_1, s_2) = (2, 1)$. Por lo tanto, la sucesión tiene la forma

$$
\begin{align}
c_n &= A \cdot 2^n + B \cdot 1^n \\
   &= A \cdot 2^n + B
.\end{align}
$$

Usando los valores iniciales $c_1$ y $c_2$, formamos el sistema de ecuaciones

$$
\begin{cases}
5 = 2A + B & (n = 1) \\
3 = 4A + B & (n = 2)
.\end{cases}
,$$

cuya solución es $(A, B) = (-1, 7)$.

Finalmente, obtenemos que la fórmula general de $c_n$ es

$$
c_n = -2^n + 7
.$$

```

### Para raíces iguales

```ad-theorem

Si $s_1 = s_2 = s$, entonces $a_n$ tiene la forma

$$
a_n = s^n(A + Bn)
.$$

```

Nuevamente, para hallar $A$ y $B$ tenemos que formar un sistema de ecuaciones con los términos iniciales.

## RLH de orden 3

No practicaremos mucho con esto, pero vale la pena saberlo.

### Para raíces distintas

Si $s_1 \neq s_2$, $s_1 \neq s_3$ y $s_2 \neq s_3$, entonces $a_n$ tiene la forma

$$
a_n = A(s_1)^n + B(s_2)^n + C(s_3)^n
.$$

### Para dos raíces iguales

Si $s_1 = s_3 \neq s_2$, entonces $a_n$ tiene la forma

$$
a_n = (s_1)^n(An + b) + C(s_2)^n
.$$

### Para raíces iguales

Si $s_1 = s_2 = s_3 = s$, entonces $a_n$ tiene la forma

$$
a_n = s^n(An^2 + Bn + C)
.$$

## Solución general

En general, para una RLH de grado $n$, hacemos el siguiente procedimiento:


1. Hallar las raíces de la ecuación característica.
2. Agrupar las raíces en grupos de valores iguales.
3. A cada grupo, sea que tenga $k$ raíces iguales $s$, le toca un sumando $s^n P(n)$, donde $P(n)$ es un polinomio de grado $k - 1$.
4. Armar y resolver el sistema con los valores iniciales.
