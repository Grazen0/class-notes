A la función que se quiere optimizar se le llama **función objetivo**.

La función que restringe las variables se llama **función ligadura**.

El método de los **multiplicadores de Lagrange** consiste en:

1. Resolver los sistemas de ecuaciones para $x$, $y$, $z$ y $\lambda$:

$$
\begin{align}
\nabla f(x,y,z) &= \lambda \nabla g(x,y,z) \\
g(x,y,z) &= k
.\end{align}
$$

2. Evaluar las soluciones $x$, $y$ y $z$ en $f(x,y,z)$ e identificar el mínimo y máximo, sea que existan y $\nabla g \neq 0$ en dichos puntos.

El proceso se puede realizar para la cantidad de variables que sea.

```ad-example
title: Ejemplo.
collapse: closed

Optimizar la función $f(x,y) = 9 - x^2 - y^2$ bajo la condición $x + y = 3$.

**Resolución:**

Usando $g(x,y) = x + y$, formamos las ecuaciones

$$
\nabla f = \left< -2x, -2y \right> = \lambda \left< 1, 1 \right> = \nabla g
$$

y

$$
g(x, y) = x + y = 3
,$$

con lo que tenemos

$$
\begin{align}
-2x &= \lambda \\
-2y &= \lambda \\
x + y &= 3
\end{align}
.$$

Este sistema tiene solución $(x,y,\lambda) = \left( \frac{3}{2}, \frac{3}{2}, -3 \right)$, por lo que $f$ tiene un extremo en $(x,y) = \left( \frac{3}{2}, \frac{3}{2} \right)$.

```
