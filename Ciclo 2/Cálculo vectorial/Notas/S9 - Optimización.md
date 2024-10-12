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

## Teorema de Lagrange
