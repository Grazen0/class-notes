Las relaciones se pueden clasificar según algunas propiedades específicas.

## Relación reflexiva

```ad-definition

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es **reflexiva** si y solo si

$$
\forall a \in A : (a,a) \in R
.$$

O de la misma manera

$$
\forall a \in A : a \mathbin{R} a
.$$

```

Por ejemplo, la siguiente relación en $A = \left\{ 1, 2, 4 \right\}$ es reflexiva:

$$
\begin{align}
R_{1} &= \left\{ (1, 1), (2, 4), (4, 4), (2, 1), (2, 2) \right\} \\
\end{align}
$$

Y la siguiente relación en $\R$ también es reflexiva:

$$
R_{2} = \left\{ (x, y) \in \R^{2} \lmid x \leq y \right\}
$$

### Observaciones

Sea $R$ una relación en $A$.

1. Para demostrar que $R$ no es reflexiva, basta con encontrar un elemento $a \in A$ tal que $(a, a) \notin R$.
2. Al realizar la **digráfica** de $R$, si $R$ es reflexiva entonces todos los puntos en la gráfica tendrán un "bucle" de cada punto a sí mismo.

## Relación simétrica

```ad-definition

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es **simétrica** si y solo si

$$
\forall a,b \in A : \left( (a, b) \in R \implies (b, a) \in R \right)
.$$

O de la misma manera

$$
\forall a,b \in A : \left( a \mathbin{R} b \implies b \mathbin{R} a \right)
.$$

```

Al ubicar una relación simétrica en el plano cartesiano, existirá una simetría en con respecto a la diagonal.

![[Relacion simetrica.excalidraw]]

## Relación transitiva
