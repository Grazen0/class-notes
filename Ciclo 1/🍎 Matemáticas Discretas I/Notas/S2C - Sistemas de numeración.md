Además de la base 10, que usamos en la vida cotidiana, los números se pueden representar en múltiples otras bases numéricas.

```ad-definition

Sea $k \geq 2$ un número entero, la **base $k$** utiliza los símbolos $0,1,2,\dots, k-1$ y representamos los números enteros utilizando esos símbolos.

$$
n = \overline{a_{1}a_{2}\dots a_{t}}_{(k)}
$$

donde $0 \leq a_{i} \leq k - 1$ y $a_{1} \neq 0$.

```

Cuando $k > 10$, se usan los símbolos $\text{A},\text{B},\text{C},\text{D},\text{E},\text{F}$.

## Descomposición polinómica

Un número $n$ en base $k$ representado en la forma anterior se puede descomponer en la suma:

$$
n = a_{1}k^{t-1} + a_{2}k^{t-2} + \ldots + a_{t-1}k + a_t
$$

**Ejemplos:**

- $201_{(4)} = 2 \cdot 4^{2} + 0 \cdot 4^{1} + 1 \cdot 4^{0} = 33$
- $111_{(2)} = 1 \cdot 2^{2} + 1 \cdot 2^{1} + 1 \cdot 2^{0} = 7$

```ad-theorem
title: Teorema (Representación única en base $k$).

Para cualquier $k \geq 2$, todo entero positivo se puede representar **de forma única** en la base $k$.

```

## Cambio de base

Para convertir un número $n$ a a una base $k$, se emplea un proceso de **divisiones repetidas** a $n$, donde cada residuo sucesivo se concatena al número desde la izquierda hacia la derecha.

```ad-example
title: Ejemplo: 91 en base 2

![[93 a binario.excalidraw]]

$$
\therefore 91 = 1011011_{(2)}
$$

```
