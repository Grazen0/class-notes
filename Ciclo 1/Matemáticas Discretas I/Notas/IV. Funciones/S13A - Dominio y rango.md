```ad-definition

Sea $f: A \to B$ una función de $A$ en $B$. Entonces se define al **dominio de $f$** como

$$
\dom(f) = A
,$$

y al **rango de $f$** como

$$
\ran(f) = \left\{ y \in B \lmid \exists x \in A : (x, y) \in f \right\}
$$

```

Para diferenciar, a $B$ se le llama **conjunto de llegada**.

Un ejemplo gráfico con $A = \left\{  a, b, c\right\}$ y $B = \left\{ x, y, z \right\}$:

![[Dominio y rango.excalidraw|width:75%]]

Aquí, $\ran(f) = \left\{ x, z \right\}$.

```ad-proposition
title: Observación

En general, se cumple que 

$$
\ran(f) \subseteq B
$$

```

Por ejemplo, sea $f = \left\{ (x,y) \in \R^{2} \lmid y = x^{2}\right\}$. Entonces

$$
\begin{align}
\dom(f) &= \R \\
\ran(f) &= [0, +\infty)
\end{align}
$$

y el conjunto de llegada de $f$ es $\R$.
