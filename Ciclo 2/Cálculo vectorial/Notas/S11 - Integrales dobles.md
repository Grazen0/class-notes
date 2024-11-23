Formalmente, la integral doble se define de la siguiente manera.

```ad-definition

Sea $f(x,y)$ una función. Entonces, la **integral de $f$ sobre la región $D$** es igual a

$$
\iint_D f(x,y) \, dA := \lim_{m,n \to \infty}  \sum_{i=1}^{m} \sum_{j=1}^{n}f(x_i^*, y_j^*) \Delta A
.$$

```

La integral doble representa el **volumen** por debajo de una función de dos variables en un dominio dado.

Para calcular integrales en un dominio rectangular, podemos usar el siguiente teorema.

```ad-theorem

Sea $D$ una región delimitada por

$$
\begin{align}
a &\leq x \leq b \\
c &\leq y \leq d
.\end{align}
$$

Entonces, se cumple que

$$
\iint_D f(x,y) dA = \int_a^b \int_c^d f(x,y) \, dy \, dx
.$$

```

Es decir, para integrar sobre una región rectangular, podemos simplemente integrar iteradamente.

Las integrales iteradas también nos permiten integrar sobre un dominio delimitado por constantes en una dimensión y funciones en la otra.

```ad-theorem

Sea $D$ una región delimitada por

$$
\begin{align}
a &\leq x \leq b \\
f(x) &\leq y \leq g(x)
.\end{align}
$$

Entonces, se cumple que

$$
\iint_D f(x,y) \, dA = \int_{a}^{b} \int_{f(x)}^{g(x)} f(x,y) \, dy \, dx
.$$

```

Este teorema se cumple análogamente para cuando la variable delimitada por funciones es $x$ en lugar de $y$.

```ad-note
title: Nota

Por alguna razón, ahora estamos obligados a calcular el área entre curvas con integrales dobles de la siguiente manera:

$$
\int_a^b f(x) - g(x) \, dx = \int_a^b \int_{g(x)}^{f(x)}  dy \, dx
.$$

```

## Áreas de superficies

El área de la superficie formada por $f(x,y)$ sobre la región $D$ se puede calcular mediante

$$
A = \iint_D \sqrt{(f_x)^2 + (f_y)^2 + 1} \, dA
.$$
