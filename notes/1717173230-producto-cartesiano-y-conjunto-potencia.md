---
id: 1717173230-producto-cartesiano-y-conjunto-potencia
aliases:
  - Producto cartesiano y conjunto potencia
tags:
  - mates/discretas-1/conjuntos
createdAt: 2024-05-31 11:33
---

# Producto cartesiano y conjunto potencia

> [!DEFINITION]
> Sean $A$ y $B$ dos conjuntos. Se le llama **producto cartesiano** de $A$ y $B$ al conjunto formado por todos los pares ordenados $(a, b)$ donde $a \in A$ y $b \in B$.
> 
> $$
> A \times B := \left\{ (a, b) \lmid a \in A \land b \in B \right\}
> $$

Por ejemplo, supongamos que tenemos un conjunto de camisas $C = \left\{ C_{1}, C_{2}, C_{3}, C_{4} \right\}$ y un conjunto de pantalones $P = \left\{ P_{1}, P_{2}, P_{3} \right\}$. Entonces, las posibles combinaciones de camisa-pantalón que tenemos son:

$$
\begin{align}
C \times P = \{ & (C_{1}, P_{1}), (C_{1}, P_{2}), (C_{1}, P_{3}), \\
& (C_{2}, P_{1}), (C_{2}, P_{2}), (C_{2}, P_{3}),  \\
& (C_{3}, P_{1}), (C_{3}, P_{2}), (C_{3}, P_{3}) \\
& (C_{4}, P_{1}), (C_{4}, P_{2}), (C_{4}, P_{3})\} \\
\end{align}
$$

> [!PROPERTY] Propiedades
> 1. Si $A$ y $B$ son conjuntos finitos, entonces $|A \times B| =|A|\cdot|B|$
> 2. Si alguno de $A$ o $B$ es **vacío**, entonces $A \times B = \varnothing$

También se consideran productos cartesianos de **varios conujntos**. Por ejemplo, con 3 conjuntos:

$$
A \times B \times C := \left\{ (a, b, c) \lmid a \in A \land b \in B \land c \in C \right\}
$$

### Representación en el plano cartesiano

![[Producto cartesiano en el plano.excalidraw|width:75%]]

## Conjunto potencia

> [!DEFINITION]
> Sea $A$ un conjunto. Se define el **conjunto potencia** de $A$ como el conjunto formado por todos los subconjuntos de $A$.
> 
> $$
> \operatorname{\mathscr{P}}(A) := \left\{ S : S \subseteq A \right\}
> $$

Por ejemplo:

$$
\operatorname{\mathscr{P}}(\left\{ 1, 2, 3 \right\}) = \left\{ \varnothing, \left\{ 1 \right\}, \left\{ 2 \right\}, \left\{ 3 \right\}, \left\{ 1, 2 \right\}, \left\{ 1, 3 \right\}, \left\{ 2, 3 \right\}, \left\{ 1, 2, 3 \right\} \right\}
$$

## Propiedades

Sea $A$ un conjunto:

1. $\varnothing \in \operatorname{\mathscr{P}}(A)$
2. $|\operatorname{\mathscr{P}}(A)| = 2^{|A|}$
3. $\operatorname{\mathscr{P}}(\varnothing) = \left\{ \varnothing \right\}$
4. $A \subseteq B \iff A \in \operatorname{\mathscr{P}}(B)$

> [!NOTE] Notación adicional
> El conjunto potencia de $A$ también se escribe como:
> 
> $$
> \operatorname{\mathscr{P}}(A) = 2^{A} = P(A) = \mathbb{P}(A)
> $$
