Formalmente, la integral doble se define de la siguiente manera.

```ad-definition

Sea $f(x,y)$ una función. Entonces, la **integral de $f$ sobre la región $D$** es igual a

$$
\iint_D f(x,y) \, dA = \sum_{j=1}^{m} \sum_{i=1}^{n}f(x_i^*, y_j^*) \Delta A
.$$

```

La integral doble representa el **volumen** por debajo de una función de dos variables en un dominio dado.

Para calcular integrales en un dominio rectangular, podemos usar el siguiente teorema.

```ad-theorem

Sea $D$ una región delimitada por

$$
\begin{align}
a \leq x \leq b \\
c \leq y \leq d
.\end{align}
$$

Entonces, se cumple que

$$
\iint_D f(x,y) dA = \int_a^b \int_c^d f(x,y) \, dy \, dx
.$$

```

Es decir, para integrar sobre una región rectangular, podemos simplemente integrar iteradamente.

```ad-note
title: Nota

Por alguna razón, ahora estamos obligados a calcular el área entre curvas con integrales dobles de la siguiente manera:

$$
\int_a^b f(x) - g(x) \, dx = \int_a^b \int_{g(x)}^{f(x)}  dy \, dx
.$$

```
