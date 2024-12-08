```ad-definition

Sean $A$ y $B$ conjuntos. Entonces, una **función de $A$ en $B$**, denotada por $f : A \to B$ es una relación que cumple lo siguiente:

Para todo $a \in A$ existe un *único* $b \in B$ tal que $(a, b)$ pertenece a la relación.

```

Por ejemplo, sean $A = \left\{ 1, 2, 3 \right\}$ y $B = \left\{ 4, 5 \right\}$ y las siguientes relaciones de $A$ en $B$

$$
\begin{align}
R_{1} &= \left\{ (2, 4), (3, 4), (1, 5) \right\} \\
R_{2}  &= \left\{ (2, 4), (3, 4) \right\} \\
R_{3} &= \left\{ (1, 4), (2, 4), (3, 4) \right\}
\end{align}
.$$

Entonces, $R_{1}$ y $R_{3}$ son funciones. $R_{2}$ no es una función, porque el $1$ no está incluido en ningún par ordenado.

```ad-important
title: Importante

Para demostrar que una relación $R$ es una función, hay que demostrar dos cosas para cada $a \in A$:

1. Existencia: $\forall a \in A, \exists b \in B : (a, b) \in R$
2. Unicidad: $(a, b) \in R \land (a, c) \in R \implies b = c$

```
