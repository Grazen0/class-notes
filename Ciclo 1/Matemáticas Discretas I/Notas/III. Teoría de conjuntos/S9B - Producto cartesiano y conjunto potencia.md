## Producto cartesiano

```ad-definition

Sean $A$ y $B$ dos conjuntos. Se le llama **producto cartesiano** de $A$ y $B$ al conjunto formado por todos los pares ordenados $(a, b)$ donde $a \in A$ y $b \in B$.

$$
A \times B := \left\{ (a, b) \lmid a \in A \land b \in B \right\}
$$

```

Por ejemplo, supongamos que tenemos un conjunto de camisas $C = \left\{ C_{1}, C_{2}, C_{3}, C_{4} \right\}$ y un conjunto de pantalones $P = \left\{ P_{1}, P_{2}, P_{3} \right\}$. Entonces, las posibles combinaciones de camisa-pantalón que tenemos son:

$$
\begin{align}
C \times P = \{ & (C_{1}, P_{1}), (C_{1}, P_{2}), (C_{1}, P_{3}), \\
& (C_{2}, P_{1}), (C_{2}, P_{2}), (C_{2}, P_{3}),  \\
& (C_{3}, P_{1}), (C_{3}, P_{2}), (C_{3}, P_{3}) \\
& (C_{4}, P_{1}), (C_{4}, P_{2}), (C_{4}, P_{3})\} \\
\end{align}
$$

```ad-proposition
title: Propiedades.

1. Si $A$ y $B$ son conjuntos finitos, entonces $|A \times B| =|A|\cdot|B|$
2. Si alguno de $A$ o $B$ es **vacío**, entonces $A \times B = \varnothing$

```

También se consideran productos cartesianos de **varios conujntos**. Por ejemplo, con 3 conjuntos:

$$
A \times B \times C := \left\{ (a, b, c) \lmid a \in A \land b \in B \land c \in C \right\}
$$

### Representación en el plano cartesiano
 
![[Producto cartesiano en el plano.excalidraw|width:75%]]

## Conjunto potencia

```ad-definition

Sea $A$ un conjunto. Se define el **conjunto potencia** de $A$ como el conjunto formado por todos los subconjuntos de $A$.

$$
\Ps(A) := \left\{ S : S \subseteq A \right\}
$$

```

Por ejemplo:

$$
\Ps(\left\{ 1, 2, 3 \right\}) = \left\{ \varnothing, \left\{ 1 \right\}, \left\{ 2 \right\}, \left\{ 3 \right\}, \left\{ 1, 2 \right\}, \left\{ 1, 3 \right\}, \left\{ 2, 3 \right\}, \left\{ 1, 2, 3 \right\} \right\}
$$

### Propiedades

Sea $A$ un conjunto:

1. $\varnothing \in \Ps(A)$
2. $|\Ps(A)| = 2^{|A|}$
3. $\Ps(\varnothing) = \left\{ \varnothing \right\}$
4. $A \subseteq B \iff A \in \Ps(B)$

```ad-note
title: Notación adicional

El conjunto potencia de $A$ también se escribe como:

$$
\Ps(A) = 2^{A} = P(A) = \mathbb{P}(A)
$$

```
