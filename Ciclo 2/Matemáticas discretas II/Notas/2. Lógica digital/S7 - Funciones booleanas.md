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

## Min-términos y max-términos

```ad-definition

Un **min-término** de las variables booleanas $x_1,x_2,\ldots,x_n$ es un producto booleano $y_1,y_2,\ldots,y_n$ donde $y_i = x_i$ o $y_i = \overline{x_i}$.


Un **max-término** de las variables booleanas $x_1,x_2,\ldots,x_n$ es una suma booleana $y_1 + y_2 + \ldots + y_n$ donde $y_i = x_i$ o $y_i = \overline{x_i}$.

```

Por ejemplo, algunos min-términos de $x$, $y$ y $z$ son $x \cdot \overline{y} \cdot z$, $x \cdot y \cdot z$ y $\overline{x} \cdot \overline{y} \cdot z$.

```ad-proposition
title: Observación.

Un conjunto de $n$ variables booleanas posee $2^n$ min-términos y max-términos.

```

```ad-exercise
collapse: closed

Represente $f(x,y) = \overline{x}$ como suma de min-términos.

**Resolución:**

$$
\begin{align}
f(x,y) &= \overline{x} \\
       &= \overline{x} \cdot 1 \\
       &= \overline{x} \cdot (y + \overline{y}) \\
f(x,y) &= \overline{x} \cdot y + \overline{x} \cdot \overline{y}
.\end{align}
$$

```

### Representación en FND y FNC

Cualquier función booleana se puede representar como

1. una **suma** de **min-términos**, y
2. un **producto** de **max-términos**.

Esencialmente, se trata de usar la [[S5 - Forma normal conjuntiva y disyuntiva|forma normal conjuntiva/disyuntiva]] que vimos en lógica proposicional, sólo que con símbolos diferentes.

Los procesos para hallar estas formas de una función booleana son los siguientes:

1. **FND:** Generamos min-términos a partir de cada $1$, complementando los $0$s.
2. **FNC:** Generamos max-términos a partir de cada $0$, complementando los $1$s.

```ad-example
title: Ejemplo.
collapse: open

Sea la función $f: B^2 \to B$ definida por:


| $x$ | $y$ | $f(x,y)$ |
| :-: | :-: | :------: |
| $0$ | $0$ | $1$      |
| $0$ | $1$ | $0$      |
| $1$ | $0$ | $1$      |
| $1$ | $1$ | $1$      |

Entonces, esta función se puede representar como

$$
\begin{align}
f(x,y) &= (\overline{x} \cdot \overline{y}) + (x \cdot \overline{y}) + (x \cdot y) \\
f(x,y) &= x + \overline{y}
.\end{align}
$$

```

```ad-proposition
title: Observación.

La FND de una función es única (salvo el orden).

```
