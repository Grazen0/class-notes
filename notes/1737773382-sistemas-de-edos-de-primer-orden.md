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

Un ejemplo de sistema de EDOs de primer orden es

$$
\begin{cases}
\frac{dx}{dt} = x + y - z \\
\frac{dy}{dt} = 2y \\
\frac{dz}{dt} = y - z
.\end{cases}
$$

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
