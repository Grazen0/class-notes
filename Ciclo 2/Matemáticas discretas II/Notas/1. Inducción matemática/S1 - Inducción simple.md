La inducción matemática sirve para demostrar proposiciones que dependen de alguna variable $n$ que dependa de valores naturales.

```ad-proposition
title: Principio de inducción matemática.

Sea $P(n)$ una proposición definida para cualquier entero positivo $n$. Entonces, si se cumple que

- $P(1)$ es verdadera, y
- si $P(k)$ es verdadera entonces $P(k + 1)$ es verdadera

entonces $P(n)$ es verdadera para todo entero positivo $n$.

```

La idea de demostrar por inducción es:

1. Demostrar un caso inicial de la proposición.
2. Encontrar un mecanismo para demostrar el siguiente caso de la proposición a partir del caso anterior.

La primera condición es llamada **caso inicial**, **caso base** o **base de la inducción**.

La segunda condición es llamada **paso inductivo**.

## Ejemplo de inducción

Sea $n$ un entero positivo. Entonces

$$
1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2}
$$

**Demostración**: Notemos primero que la proposición cumple para $n = 1$, ya que $1 = \frac{1(1+1)}{2}$.

Ahora, supongamos que la proposición se cumple para algún entero positivo $k$. Entonces

$$
\begin{align}
1 + 2 + 3 + \ldots + k &= \frac{k(k+1)}{2} \\
1 + 2 + 3 + \ldots + k + (k + 1) &= \frac{k(k+1)}{2} + (k + 1) \\
&= \frac{k^{2} + k}{2} + \frac{2k + 2}{2} \\
&= \frac{k^{2} + 3k + 2}{2} \\
&= \frac{(k + 2)(k + 1)}{2} \\
1 + 2 + 3 + \ldots + k + (k + 1) &= \frac{(k + 1)((k + 1) + 1)}{2}
\end{align}
$$
$$\qed$$
