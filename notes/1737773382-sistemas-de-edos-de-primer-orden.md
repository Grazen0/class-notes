---
id: 1737773382-sistemas-de-edos-de-primer-orden
aliases:
  - Sistemas de EDOs de primer orden
  - Sistemas de ecuaciones diferenciales de primer orden
tags:
  - mates/edo
createdAt: 2025-01-24 21:49
---

# Sistemas de ecuaciones diferenciales de primer orden

Un conjunto de [[1736190391-ecuaciones-diferenciales-clasificacion|ecuaciones diferenciales]] como, por ejemplo, el siguiente:

$$
\begin{cases}
\frac{dx}{dt} = x + y - z \\
\frac{dy}{dt} = 2y \\
\frac{dz}{dt} = y - z
\end{cases}
$$

forman un **sistema de ecuaciones diferenciales**. Obviamente, existen varios métodos para resolver estos sistemas.

## Eliminación sistemática

Este método consiste en expresar el sistema en función del [[1737145455-operador-diferencial|operador diferencial]] y aplicar técnicas de despeje similares a aquellas usadas para resolver [[1725904856-sistemas-de-ecuaciones|sistemas de ecuaciones lineales]].

Por ejemplo, el sistema

$$
\begin{cases}
\frac{dx}{dt} = 2x + 3y \\
\frac{dy}{dt} = 5x + 4y
,\end{cases}
$$

reorganizando los términos, se puede expresar como

$$
\begin{cases}
(D - 2)x - 3y = 0 \\
-5x + (D - 4)y = 0
.\end{cases}
$$

Ahora, podemos multiplicar estas ecuaciones por ciertos valores para eliminar $y$:

$$
\begin{align}
(D - 2)(D - 4)x - 3(D - 4)y &= 0 \quad + \\
-15x + 3(D - 4)y &= 0 \\
\hline
((D - 2)(D - 4) - 15)x &= 0
.\end{align}
$$

De esta manera, obtenemos una EDO de una sola variable que ya sabemos resolver:

$$
\begin{align}
(D^2 - 6D - 7)x &= 0 \\
x'' - 6x' - 7x &= 0
,\end{align}
$$

de donde obtenemos la $x(t) = c_1e^{7t} + c_2e^{-t}$.

Como hemos obtenido una de las funciones incógnitas, podemos reemplazarla en alguna de las ecuaciones originales del sistema para despejar la función faltante. En este caso, usaremos

$$
\frac{dx}{dt} = 2x+ 3y \implies y = \frac{1}{3}(x' - 2x)
.$$

Reemplazando la solución que encontramos para $x$ (y su derivada), obtenemos

$$
\begin{align}
y(t) &= \frac{1}{3}(7c_1e^{7t} - c_2e^{-t} - 2c_1e^{7t} - 2c_2e^{-t}) \\
y(t) &= \frac{5}{3}c_1e^{7t} - c_2e^{-t}
\end{align}
.$$

## Proceso de resolución

**Paso 1:** Representar la ecuación como un [[1725904856-sistemas-de-ecuaciones|sistema matricial]].

El sistema anterior se puede expresar como

$$
\begin{bmatrix}
\frac{dx}{dt} \\ \frac{dy}{dt} \\ \frac{dz}{dt}
\end{bmatrix} = \begin{bmatrix}
1 & 1 & -1 \\
0 & 2 & 0 \\
0 & 1 & -1
\end{bmatrix} \begin{bmatrix}
x \\ y \\ z
\end{bmatrix} = A\mathbf{x}
.$$

**Paso 2:** Hallar los [[1728143506-vectores-y-valores-propios|valores y vectores propios]] de la matriz $A$.
\`\`
La matriz anterior tiene polinomio característico

$$
p_A(\lambda) = \begin{vmatrix}
1 - \lambda & 1 & -1 \\
0 & 2 - \lambda & 0 \\
0 & 1 & -1 - \lambda
\end{vmatrix} = (1 - \lambda)(2 - \lambda)(-1 - \lambda)
,$$

por lo que los valores propios de $A$ son $\lambda_1 = -1$, $\lambda_2 = 1$ y $\lambda_3 = 2$.

> [!IMPORTANT]
> La forma de la solución generada a partir de estos valores propios dependerá de si algunos de ellos son iguales. En este ejemplo, todos son diferentes.

Ahora, hallamos los vectores propios de $A$:

$$
E_{\lambda_1} = \operatorname{Gen}\left\{ \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \right\}, \quad
E_{\lambda_2} = \operatorname{Gen}\left\{ \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} \right\}, \quad
E_{\lambda_3} = \operatorname{Gen}\left\{ \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} \right\}
.$$

**Paso 3:** Formar la solución del sistema como

$$
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = c_1 e^{\lambda_1 t} \mathbf{v}_1 + c_2 e^{\lambda_2 t} \mathbf{v}_2 + c_3 e^{\lambda_3 t} \mathbf{v}_3
$$

(sea que los tres valores propios sean diferentes), donde $\mathbf{v}_i$ sea el vector propio asociado a $\lambda_i$.

En este ejemplo, la solución general sería

$$
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} = c_1 e^{-t} \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} + c_2 e^{t} \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + c_3 e^{2t} \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix}
.$$
