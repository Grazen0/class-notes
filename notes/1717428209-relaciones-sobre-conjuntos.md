---
id: 1717428209-relaciones-sobre-conjuntos
aliases:
  - Relaciones sobre conjuntos
tags:
  - mates/discretas-1/conjuntos
createdAt: 2024-06-03 10:23
---

# Relaciones sobre conjuntos

> [!DEFINITION]
> Sean $A$ y $B$ dos conjuntos. Entonces definimos $R$ como una **relación** entre $A$ y $B$ si y sólo si $R \subseteq A \times B$.
> 
> $$
> R \text{ es relación entre $A$ y $B$} \iff R \subseteq A \times B
> $$

Es decir, una relación es formalmente un subconjunto del producto cartesiano.

Si $(a, b) \in R$, decimos que **$a$ está relacionado con $b$ con respecto a $R$**, o en $R$. Esto se suele escribir también como $a \mathop{R} b$.

Por ejemplo, si tenemos $A = \left\{ 1, 2 \right\}$ y $B = \left\{ 1, 3 \right\}$:

$$
\begin{align}
A \times B &= \left\{ (1,1), (1,3), (2,1), (2,3) \right\} \\
\end{align}
$$

Entonces, algunos ejemplos de relaciones entre $A$ y $B$ serían:

$$
\begin{align}
R_{1} &= \left\{ (1,1), (2,1) \right\} \\
R_{2} &= \left\{ (1,1), (1,3), (2,3) \right\} \\
R_{3} &= \left\{ (2,1) \right\} \\
R_{4} &= \left\{ (x,y) \in A \times B \lmid x + y = 8 \right\} \\
&= \varnothing
\end{align}
$$

## Representación visual

Si tenemos $A = \left\{ x, y \right\}$, $B = \left\{ m, n, p \right\}$ y la relación entre $A$ y $B$ $R = \left\{ (x, m), (x, n), (y, n), (y, p) \right\}$, entonces se puede graficar lo siguiente:

![[Representación visual de relación.excalidraw|width:30%]]

## Relaciones en $A \times A$

Se le llama simplemente una **relación en $A$**.

Al graficar, se utiliza un **grafo dirigido** para indicar el orden de cada par ordenado.

Por ejemplo, para $A = \left\{ 1, 2, 3 \right\}$ y la relación en $A$ $R = \left\{ (1, 2), (2, 2), (2,3) \right\}$

![[Relación en AxA.excalidraw|width:25%]]
