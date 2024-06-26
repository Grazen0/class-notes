## Función inyectiva

```ad-definition

Sea $f: A \to B$. Entonces, $f$ es **inyectiva** si y solo si

$$
\forall x,y \in A : f(x) = f(y) \implies x = y
$$

o equivalentemente

$$
\forall x,y \in A : x \neq y \implies f(x) \neq f(y)
.$$

```

```ad-example
title: Ejemplo

Sea $h: \R \to \R$, definida por $h(x) = 7 + 3x$. Entonces, $h$ es inyectiva.

**Demostración:** Sean $x,y \in \R$ tales que $h(x) = h(y)$. Entonces:

$$
\begin{align}
7 + 3x &= 7 + 3y \\
3x &= 3y \\
x &= y
\end{align}
$$

```

Para demostrar que una función $f: A \to B$ no es inyectiva, basta con encontrar dos elementos $x$ y $y$ tales que

$$
x \neq y \land f(x) = f(y)
.$$

### Gráfica de una función inyectiva

![[Funcion inyectiva.excalidraw]]

Cualquier recta horizontal intersecta con la función en a lo mucho **un solo punto**.

## Función sobreyectiva

```ad-definition

Sea $f: A \to B$. Entonces, $f$ es **sobreyectiva** si y solo si

$$
\ran(f) = B
$$

o equivalentemente

$$
\forall y \in B, \exists x \in A : (x,y) \in f
.$$

```
