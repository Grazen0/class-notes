---
id: 1719846450-composicion-de-funciones
aliases:
  - Composición de funciones
tags:
  - mates/discretas-1/funciones
createdAt: 2024-07-01 10:07
---

# Composición de funciones

![[Composicion de funciones.excalidraw]]

> [!DEFINITION]
> Sean $f: B \to C$ y $g: A \to B$ funciones. Entonces, la **composición de $f$ y $g$**, denotado por $f \circ g$ se define como
> 
> $$
> f \circ g := f(g(x))
> .$$

> [!PROPOSITION] Observaciones
> 1. $\dom(f \circ g) = \left\{ x \in \dom(g) \lmid g(x) \in \dom(f) \right\}$
> 2. Para que exista $f \circ g$ se debe cumplir que $\ran(g) \subseteq \dom(f)$.
> 3. En general, se cumple que $f \circ g \neq g \circ f$.

Por ejemplo, sean $A = \left\{ 1, 2, 3 \right\}$ y las siguientes funciones en $A$:

$$
\begin{align}
f = \left\{ (1, 1), (2, 3), (3, 2) \right\} \\
g = \left\{ (1, 3), (2, 2), (3, 1) \right\}.
\end{align}
$$

Entonces

$$
\begin{align}
f \circ g = \left\{ (1, 2), (2, 3), (3, 1) \right\} \\
g \circ f = \left\{ (1, 3), (2, 1), (3, 2) \right\}.
\end{align}
$$

> [!THEOREM]
> Si $f: A \to B$ y $g: B \to C$ son inyectivas, entonces $g \circ f: A \to C$ es inyectiva.

> [!THEOREM]
> Si $f: A \to B$ y $g: B \to C$ son sobreyectivas, entonces $g \circ f: A \to C$ es sobreyectiva.
