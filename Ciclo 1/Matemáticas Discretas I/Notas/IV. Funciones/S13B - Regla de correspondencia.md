```ad-definition
title: Definiciones.

Sea $f: A \to B$ una función. Entonces, $(x,y) \in f$ se puede escribir como
$$
y = f(x)
.$$

A esto se le llama **regla de correspondencia**.

Se le llama a $x$ la **variable independiente** y a $y$ la **variable dependiente**.

Además, sea $x \in A$ un elemento particular del dominio. Entonces se le llama a $x$ una **preimagen de $f(x)$** y a $f(x)$ la **imagen** de $x$.

```

Por ejemplo, podemos decir:

"Sea $f: \R \to \R$ la función definida por $f(x) = 2x$."

```ad-note
title: "Demostración" de rango

En este curso, podemos argumentar el rango de una función mediante su **gráfica**. De todas maneras, no es una demostración formal.

```

## Ejemplo

Sea $A = \left\{ 1, 2, 3, \ldots, 1000 \right\}$ y sean las siguientes relaciones en $A$:

$$
\begin{align}
R_{1} = \left\{ (x,y) \in A \times A \lmid x + y = 1001 \right\} \\
R_{2} = \left\{ (x,y) \in A \times A \lmid x + y = 1002 \right\}
\end{align}
$$

Entonces:

$R_{1}$ es una función, ya que

$$
R_{1} = \left\{ (1, 1000), (2, 999), (3, 998), \ldots, (1000, 1) \right\}
$$

y cubre todo el dominio $A$. De aquí:

$$
\begin{align}
\dom(f) = \left\{ 1, 2, 3, \ldots, 1000 \right\} = A \\
\ran(f) = \left\{ 1, 2, 3, \ldots, 1000 \right\} = A
\end{align}
$$

Por otro lado, $R_{2}$ no es una función porque $1 \in A$ y $1001 \notin A$.
