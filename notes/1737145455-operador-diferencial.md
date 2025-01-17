---
id: 1737145455-operador-diferencial
aliases:
  - Operador diferencial
tags: []
createdAt: 2025-01-17 15:24
---

# Operador diferencial

> [!DEFINITION]
> Definimos al **operador diferencial** (denotado por $D$) mediante
>
> $$
> Dy = \frac{dy}{dx}
> .$$

A primera vista, puede parecer simplemente una notación diferente para la derivada (pues, en realidad, sí).

Sin embargo, es conveniente como notación para pensar en la derivada como un **operador** que toma una función y produce una nueva función.
Cabe destacar que las derivadas de orden superior se denotan como $D^n$ (por ejemplo, $y'' = D^2 y$).
Una propiedad importante y fácil de verificar es que el operador diferencial es un **lineal**. Es decir,

$$
D(\alpha f + \beta g) = \alpha Df + \beta Dg
.$$

Al analizar [[1736190391-ecuaciones-diferenciales-clasificacion#ecuaciones-diferenciales#linealidad#edos-lineales-homogneas| EDs lineales homogéneas]], se utiliza (bueno, "abusa" un poco de) esta notación para escribirlas de una forma más concisa. Por ejemplo, la ED

$$
4y''' - 3y'' + 2y' - 7y = 3\cos(x) + x^2 - x \\
$$

se puede escribir con el operador diferencial como

$$
(4D^3 - 3D^2 + 2D - 7)y = 3\cos(x) + x^2 - x
.$$

Claramente, entonces, cualquier ED lineal se puede escribir como

$$
Ly = g(x)
.$$

> [!NOTE]
> No tengo ni idea cuál será el uso para esto tbh.
