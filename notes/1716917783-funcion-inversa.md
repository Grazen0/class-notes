---
id: 1716917783-funcion-inversa
aliases:
  - Función inversa
tags:
  - mates/discretas-1/funciones
createdAt: 2024-05-28 12:36
---

# Función inversa

> [!DEFINITION]
> Sea $f: A \to B$ una función *biyectiva*, la **inversa de $f$**, denotada por $f^{-1}$ es una función de $B$ en $A$ definida por
> 
> $$
> f(x) = y \iff f^{-1}(y) = x
> $$

Para que una función tenga inversa, tiene que ser **inyectiva** y **sobreyectiva**.

Por ejemplo, sean $A = \left\{ 1, 2, 3 \right\}$, $B = \left\{ 3, 4, 5 \right\}$ y la función $f: A \to B$ definida por la regla de correspondencia

$$
f(x) = x + 2
.$$

Entonces, $f$ es biyectiva y su inversa $f^{-1}: B \to A$ se puede escribir como

$$
f^{-1}(x) = x - 2
.$$

O alternativamente

$$
\begin{aligned}
f &= \left\{ (1, 3), (2, 4), (3, 5) \right\} \\
\implies f^{-1} &= \left\{ (3, 1), (4, 2), (5, 3) \right\}
.\end{aligned}
$$
