---
id: 1725904856-sistemas-de-ecuaciones
aliases:
  - Sistemas de ecuaciones lineales
tags:
  - mates/alg-lineal
createdAt: 2024-09-09 13:00
---

# Sistemas de ecuaciones lineales

Un sistema de ecuaciones de la forma

$$
\begin{gather}
a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n = b_1 \\
\qquad \vdots \\
a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n = b_m
\end{gather}
$$

se puede representar equivalentemente como la **ecuación matricial**

$$
Ax = b
,$$

donde:

- $A = (a_{ij})$ es la **matriz de coeficientes**.
- $x = \begin{bmatrix} x_1 & x_2 & \dots & x_n \end{bmatrix}^{T}$  es el **vector de variables**.
- $b = \begin{bmatrix} b_1 & b_2 & \dots & b_n \end{bmatrix}^{T}$ es el **vector de constantes**.

## Consistencia de un sistema

> [!THEOREM] Teorema (soluciones de un sistema de ecuaciones).
> Sea el sistema de ecuaciones $Ax = b$ con $n$ incógnitas. Entonces:
> 
> - Si $\operatorname{rank}(A) = \operatorname{rank}([A | b]) = n$, entonces el sistema tiene **una solución**.
> - Si $\operatorname{rank}(A) = \operatorname{rank}([A | b]) \neq n$, entonces el sistema tiene **infinitas soluciones**.
> - Si $\operatorname{rank}(A) \neq \operatorname{rank}([A | b])$, entonces el sistema **no tiene solución**.

Sólo para aclarar terminología, un sistema se denomina de la siguiente manera según su cantidad de soluciones:

| Soluciones           | Denominación              |
| -------------------- | ------------------------- |
| Una solución         | Consistente determinado   |
| Infinitas soluciones | Consistente indeterminado |
| Sin soluciones       | Inconsistente             |

## Resolución de un sistema

Un sistema de ecuaciones se soluciona con **eliminación Gaussiana**. Esto significa que la matriz aumentada se lleva mediante [[S2A - Operaciones elementales y matriz escalonada|operaciones elementales]] a una matriz **triangular superior**. En ese punto, el sistema equivalente se puede resolver fácilmente de abajo hacia arriba.

> [!TIP] Estrategia de pivoteo
> Computacionalmente, resulta más eficiente **escoger el pivote de mayor magnitud posible** en cada columna.

## Espacio nulo

> [!DEFINITION]- Definición (sistema homogéneo).
> Un sistema de ecuaciones es **homogéneo** si y sólo si su vector de constantes es cero. Es decir, es de la forma
> 
> $$
> Ax = 0
> .$$

> [!DEFINITION]
> Sea $A$ una matriz de $n \times n$. Entonces, el **espacio nulo** de $A$ es igual a
> 
> $$
> N(A) = \left\{ x \in \R^{n} \lmid Ax = 0 \right\}
> .$$

Es decir, el espacio nulo de una matriz es **el conjunto de los vectores que la matriz lleva al $0$** con su transformación lineal.

También se le llama **núcleo** o **kernel** de la matriz.

> [!PROPERTY] Observación.
> Toda matriz tiene un elemento trivial en su espacio nulo: el $\mathbf{0}$.
