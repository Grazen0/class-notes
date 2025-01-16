---
id: 1719846450-funcion-inyectiva-sobreyectiva-y-biyectiva
aliases:
  - Función inyectiva
  - sobreyectiva y biyectiva
tags:
  - mates/discretas-1/funciones
createdAt: 2024-07-01 10:07
---

# Función inyectiva

## Función inyectiva

> [!DEFINITION]
> Sea $f: A \to B$. Entonces, $f$ es **inyectiva** si y sólo si
> 
> $$
> \forall x,y \in A : f(x) = f(y) \implies x = y
> $$
> 
> o equivalentemente
> 
> $$
> \forall x,y \in A : x \neq y \implies f(x) \neq f(y)
> .$$

> [!EXAMPLE] Ejemplo
> Sea $h: \mathbb{R} \to \mathbb{R}$, definida por $h(x) = 7 + 3x$. Entonces, $h$ es inyectiva.
> 
> **Demostración:** Sean $x,y \in \mathbb{R}$ tales que $h(x) = h(y)$. Entonces:
> 
> $$
> \begin{align}
> 7 + 3x &= 7 + 3y \\
> 3x &= 3y \\
> x &= y
> \end{align}
> $$

Para demostrar que una función $f: A \to B$ no es inyectiva, basta con encontrar dos elementos $x$ y $y$ tales que

$$
x \neq y \land f(x) = f(y)
.
$$

### Gráfica de una función inyectiva

![[Funcion inyectiva.excalidraw]]

Cualquier recta horizontal intersecta con la función en a lo mucho **un solo punto**.

## Función sobreyectiva

> [!DEFINITION]
> Sea $f: A \to B$. Entonces, $f$ es **sobreyectiva** si y sólo si
> 
> $$
> \ran(f) = B
> $$
> 
> o equivalentemente
> 
> $$
> B \subseteq \ran(f)
> $$
> 
> que es lo mismo que
> 
> $$
> \forall y \in B, \exists x \in A : (x,y) \in f
> .$$

## Función biyectiva

> [!DEFINITION]
> Sea $f: A \to B$. Entonces, $f$ es **biyectiva** si y sólo si es **inyectiva y sobreyectiva** a la vez.

Por ejemplo, sea $A = \left\{ 1, 2, 3, 4 \right\}$ y $f$ una función en $A$ definida como

$$
f = \left\{ (1, 2), (2, 1), (3, 4), (4, 3) \right\}
.
$$

Entonces, $f$ es una función biyectiva.

> [!EXAMPLE] Ejemplo de demostración
> Sea $F: \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z} \times Z$ una función definida mediante la regla de correspondencia
> 
> $$
> F(x,y) = (x, x + y)
> .$$
> 
> Demostrar que $F$ es biyectiva.
> 
> **Demostración:** (Inyectividad) Sean $(x_{1}, y_{1})$, $(x_{2}, y_{2})$ pares ordenados en $\mathbb{Z} \times \mathbb{Z}$ tales que $F(x_{1}, y_{1}) = F(x_{2}, y_{2})$. Entonces
> 
> $$
> \begin{align}
> & (x_{1}, x_{1} + y_{1}) = (x_{2}, x_{2} + y_{2}) \\
> \implies & x_{1} = x_{2} \\
> \implies & x_{1} + y_{1} = x_{1} + y_{2} \\
> \implies & y_{1} = y_{2}
> .\end{align}
> $$
> 
> (Sobreyectividad) Sea $(a, b) \in \mathbb{Z} \times \mathbb{Z}$. Entonces, existe un elemento (x, y) en $\mathbb{Z} \times \mathbb{Z}$ expresable como
> 
> $$
> (x, y) = (a, b - a)
> $$
> 
> que cumple $F(x, y) = (a, a + (b - a)) = (a, b)$.
> $$\qed$$
