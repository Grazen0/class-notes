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

## Ejemplos y ejercicios

Sea $n$ un entero positivo. Entonces

$$
1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2}
$$

**Demostración**: Nótese que la proposición cumple para $n = 1$, ya que $1 = \frac{1(1+1)}{2}$.

Ahora, supongamos que la proposición se cumple para algún entero positivo $n = k$. Entonces

$$
\begin{align}
1 + 2 + 3 + \ldots + k &= \frac{k(k+1)}{2} \\
1 + 2 + 3 + \ldots + k + (k + 1) &= \frac{k(k+1)}{2} + (k + 1) \\
&= \frac{k^{2} + k}{2} + \frac{2k + 2}{2} \\
&= \frac{k^{2} + 3k + 2}{2} \\
&= \frac{(k + 2)(k + 1)}{2} \\
1 + 2 + 3 + \ldots + k + (k + 1) &= \frac{(k + 1)((k + 1) + 1)}{2}
.\end{align}
$$

Entonces, hemos demostrado que la proposición se cumple para $n = k + 1$.
$$\qed$$

````ad-example
title: Otro ejemplo
Sea $n$ un entero positivo. Entonces

$$
1 + 3 + 5 + \ldots + (2n - 1) = n^{2}
.$$

```ad-proof
collapse: closed

Primero, nótese que la proposición es verdadera para $n = 1$, ya que $1 = 1^{2}$.

Ahora, supongamos que la proposición es verdadera para algún entero positivo $k$. Entonces

$$
\begin{align}
1 + 3 + 5 + \ldots + (2k - 1) &= k^{2} \\
1 + 3 + 5 + \ldots + (2k - 1) + (2k + 1) &= k^{2} + (2k + 1) \\
&= k^{2} + 2k + 1 \\
&= (k + 1)^{2} \\
1 + 3 + 5 + \ldots + (2k - 1) + (2k + 1) &= (k + 1)^{2} \\
1 + 3 + 5 + \ldots + (2k + 1) &= (k + 1)^{2} \\
1 + 3 + 5 + \ldots + (2(k + 1) - 1) &= (k + 1)^{2}
,\end{align}
$$

con lo cual la inducción está completa.
$$\qed$$

```

````

````ad-exercise
title: Ejercicio.

Sea $n$ un entero positivo. Entonces

$$
n + 1 \leq 2^{n}
.$$

```ad-proof
collapse: closed

Primero, nótese que la proposición es verdadera para $n = 1$, ya que $1 + 1 \leq 2^{1}$.

Ahora, supongamos que la proposición es cierta para algún entero positivo $k$. Entonces

$$
\begin{align}
k + 1 &\leq 2^{k} \\
2(k + 1) &\leq 2(2^{k}) \\
2k + 2 &\leq 2^{k+1}
.\end{align}
$$

Sin embargo, $k + 2 \leq 2k + 2$ ya que $k$ es positivo. Por lo tanto,

$$
k + 2 \leq 2^{k+1}
,$$

con lo cual la inducción está completa.

$$\qed$$
```

````

````ad-exercise

Sea $n$ un entero positivo. Entonces

$$
2n + 1 \leq 3^{n}
.$$

```ad-proof
collapse: closed

Nótese que la proposición es verdadera para $n = 1$, ya que $2(1) + 1 \leq 3^{1}$.

Ahora, supongamos que la proposición es cierta para algún entero positivo $k$. Entonces

$$
\begin{align}
2k + 1 \leq 3^{k} \\
3(2k + 1) \leq 3(3^{k}) \\
6k + 3 \leq 3^{k+1}
.\end{align}
$$

Sin embargo, como $k$ es positivo, entonces $2k + 3 \leq 6k + 3$. Por lo tanto,

$$
2k + 3 \leq 3^{k+1}
,$$

con lo que la inducción está completa.

```

````

````ad-exercise

Sea $S$ un conjunto de $n$ elementos, entonces $|\Ps(S)| = 2^{n}$.

```ad-proof
collapse: closed

Nótese que la proposición es cierta para un conjunto de $1$ elemento, porque cualquier conjunto de un elemento $\left\{ x \right\}$ tiene $2^{1}$ subconjuntos: $\varnothing$ y $\left\{ x \right\}$.

Ahora, supongamos que la proposición es cierta para cualquier conjunto de $k$ elementos. Esto es: supongamos que cualquier conjunto de $k$ elementos tiene $2^{k}$ elementos.

Ahora, sea $S$ un conjunto de $k+1$ elementos, que denotaremos en la forma

$$
S = \left\{ x_{1}, x_{2}, \ldots, x_{k}, x_{k+1} \right\} 
.$$

Aquí definimos dos clases de subconjuntos de $S$:

- Subconjuntos que no contienen a $x_{k+1}$.
	- Estos son $2^{k}$ subconjuntos, por la hipótesis inductiva.
- Subconjuntos que sí contienen a $x_{x+1}$.
	- Son de la forma $\left\{ x_{x+1} \right\} \cup A$, donde $A$ es subconjunto de $\left\{ x_{1},x_{2},\ldots,x_{k} \right\}$.
	- También son $2^{k}$ subconjuntos, por la hipótesis inductiva.

De esta forma, $S$ tiene $2^{k} + 2^{k} = 2^{k+1}$ subconjuntos en total.

```

````
