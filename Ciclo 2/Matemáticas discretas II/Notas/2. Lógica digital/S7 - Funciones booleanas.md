```ad-definition

Dado $B = \left\{ 0, 1 \right\}$, sea $B^n = \left\{ (x_1,x_2,\ldots,x_n) \lmid x_i \in B \right\}$. Entonces, una **functión booleana** es una función de la forma $f: B^n \to B$.

```

Es decir, una función booleana toma uno o más variables $0$ o $1$ y produce un $0$ o $1$ como salida.

La igualdad de funciones booleanas se define intuitivamente.

```ad-definition
title: Definición (igualdad de funciones booleanas).

Dos funciones booleanas $f: B^n \to B$ y $g: B^n \to B$ son **iguales** si y sólo si

$$
\forall (b_1,b_2,\ldots,b_n) \in B^n \, (f(b_1,b_2,\ldots,b_n) = g(b_1,b_2,\ldots,b_n))
.$$

```

Resulta que para cada $n$ específico, en realidad no existen muchas funciones booleanas.

```ad-proposition
title: Observación.

Existen $2^{2n}$ funciones booleanas de $n$ variables.

```

Esto implica que es posible caracterizar por completo a una función booleana en base a sus valores de salida.

## Mintérminos y maxtérminos

```ad-definition

Un **mintérmino** de las variables booleanas $x_1,x_2,\ldots,x_n$ es un producto booleano $y_1,y_2,\ldots,y_n$ donde $y_i = x_i$ o $y_i = \overline{x_i}$.


Un **maxtérmino** de las variables booleanas $x_1,x_2,\ldots,x_n$ es una suma booleana $y_1 + y_2 + \ldots + y_n$ donde $y_i = x_i$ o $y_i = \overline{x_i}$.

```

Por ejemplo, algunos mintérminos de $x$, $y$ y $z$ son $x \cdot \overline{y} \cdot z$, $x \cdot y \cdot z$ y $\overline{x} \cdot \overline{y} \cdot z$.

```ad-proposition
title: Observación.

Un conjunto de $n$ variables booleanas posee $2^n$ mintérminos y maxtérminos.

```

Cualquier función booleana se puede representar como

1. una **suma** de **mintérminos**, y
2. un **producto** de **maxtérminos**.

Esencialmente, se trata de usar la [[S5 - Forma normal conjuntiva y disyuntiva|forma normal conjuntiva/disyuntiva]].
