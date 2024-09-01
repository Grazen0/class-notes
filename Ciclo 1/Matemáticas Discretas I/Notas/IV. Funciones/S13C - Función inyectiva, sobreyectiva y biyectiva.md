---
id: S13C - Función inyectiva, sobreyectiva y biyectiva
aliases: []
tags: []
---

## Función inyectiva

```ad-definition

Sea $f: A \to B$. Entonces, $f$ es **inyectiva** si y sólo si

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
.
$$

### Gráfica de una función inyectiva

![[Funcion inyectiva.excalidraw]]

Cualquier recta horizontal intersecta con la función en a lo mucho **un solo punto**.

## Función sobreyectiva

```ad-definition

Sea $f: A \to B$. Entonces, $f$ es **sobreyectiva** si y sólo si

$$
\ran(f) = B
$$

o equivalentemente

$$
B \subseteq \ran(f)
$$

que es lo mismo que

$$
\forall y \in B, \exists x \in A : (x,y) \in f
.$$

```

## Función biyectiva

```ad-definition

Sea $f: A \to B$. Entonces, $f$ es **biyectiva** si y sólo si es **inyectiva y sobreyectiva** a la vez.

```

Por ejemplo, sea $A = \left\{ 1, 2, 3, 4 \right\}$ y $f$ una función en $A$ definida como

$$
f = \left\{ (1, 2), (2, 1), (3, 4), (4, 3) \right\}
.
$$

Entonces, $f$ es una función biyectiva.

```ad-example
title: Ejemplo de demostración

Sea $F: \Z \times \Z \to \Z \times Z$ una función definida mediante la regla de correspondencia

$$
F(x,y) = (x, x + y)
.$$

Demostrar que $F$ es biyectiva.

**Demostración:** (Inyectividad) Sean $(x_{1}, y_{1})$, $(x_{2}, y_{2})$ pares ordenados en $\Z \times \Z$ tales que $F(x_{1}, y_{1}) = F(x_{2}, y_{2})$. Entonces

$$
\begin{align}
& (x_{1}, x_{1} + y_{1}) = (x_{2}, x_{2} + y_{2}) \\
\implies & x_{1} = x_{2} \\
\implies & x_{1} + y_{1} = x_{1} + y_{2} \\
\implies & y_{1} = y_{2}
\end{align}
.$$

(Sobreyectividad) Sea $(a, b) \in \Z \times \Z$. Entonces, existe un elemento (x, y) en $\Z \times \Z$ expresable como

$$
(x, y) = (a, b - a)
$$

que cumple $F(x, y) = (a, a + (b - a)) = (a, b)$.
$$\qed$$

```
