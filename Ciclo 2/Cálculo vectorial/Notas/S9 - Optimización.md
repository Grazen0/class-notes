## Extremos mediante puntos críticos

Los **puntos críticos** de una función $f(x,y)$ son aquellos donde

$$
\nabla f = \mathbf{0} \qquad \text{o} \qquad \text{$\nabla f$ es indefinido}
.$$

Es decir, para hallar los puntos críticos de una función, necesitamos:

1. Derivar con respecto a $x$ y $y$.
2. Igualar ambas expresiones a $0$.
3. Hallar todos los $(x,y)$ que satisfagan ambas ecuaciones.

### Matriz Hessiana

Definimos la **[[S1 - Matrices|matriz]] Hessiana** de $f$ como

$$
H_f(x,y) = \begin{bmatrix}
f_{xx} & f_{xy} \\
f_{xy} & f_{yy} \\
\end{bmatrix}
,$$

y definimos al **discriminante** de $f$ como

$$
D(x,y) = |H_f(x,y)| = f_{xx} f_{yy} - (f_{xy})^2
.$$

```ad-theorem
title: Teorema (prueba de la segunda derivada).

- Si $D(a,b) > 0$ y $f_{xx}(a,b) > 0$, entonces $(a,b)$ es un **mínimo local**.
- Si $D(a,b) > 0$ y $f_{xx}(a,b) < 0$, entonces $(a,b)$ es un **máximo local**.
- Si $D(a,b) < 0$, entonces $(a,b)$ es un **punto silla**.

```

Nótese que si $D(a,b) = 0$, entonces no podemos concluir nada en particular.

## Multiplicadores de Lagrange

El método de multiplicadores de Lagrange se usa para optimizar una función **bajo alguna restricción** particular.

```ad-proposition
title: Método de multiplicadores de Lagrange.

Sea $f$ la función objetivo, y $g(x,y,z) = k$ la función restricción. Entonces, para optimizar $f$, realizamos lo siguiente:

1. Resolver los sistemas de ecuaciones para $x$, $y$, $z$ y $\lambda$:

$$
\begin{align}
\nabla f(x,y,z) &= \lambda \nabla g(x,y,z) \\
g(x,y,z) &= k
.\end{align}
$$

2. Evaluar las soluciones $x$, $y$ y $z$ en $f(x,y,z)$ e identificar el mínimo y máximo, sea que existan y $\nabla g \neq 0$ en dichos puntos.


```

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
