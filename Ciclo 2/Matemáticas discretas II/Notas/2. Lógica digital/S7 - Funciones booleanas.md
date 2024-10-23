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

Existen $2^{2^n}$ funciones booleanas para una cantidad $n$ de variables.

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

## Representación en código

Al haber una cantidad determinada de funciones booleanas para una cantidad $n$ de variables, resulta que podemos ponerle un "código" a cada una.

### Como suma de min-términos

Dada una función booleana como suma de min-términos, le podemos asignar a cada variable un $1$ o $0$ dependiendo de si está complementada o no.

$$
\begin{align}
x &\to 1 \\
\overline{x} &\to 0
\end{align}
$$

A cada min-término entonces le asignamos un número binario en base a esto.

Luego, denotamos la función como

$$
\sum_{m}(k_1,k_2,\ldots,k_n)
$$

donde $k_i$ es la representación binaria del $i$-ésimo min-término.

Algunos ejemplos son:

- $f(x,y,z) = (x \cdot y) + (\overline{x} \cdot z) = \sum_{m}(1,3,6,7)$.
- $g(x,y,z) = 1 = \sum_{m}(0,1,2,3,4,5,6,7)$.
- $h(x,y,z) = 0 = \sum_{m}()$.

```ad-example
title: Ejemplo.
collapse: closed

Sea la función booleana

$$
f(x,y,z) = x \cdot (y + \overline{y}) \cdot \overline{z} + (x + \overline{x}) \cdot y \cdot \overline{z}
.$$

Como suma de min-términos, es igual a

$$
f(x,y,z) = (x \cdot y \cdot \overline{z}) + (x \cdot \overline{y} \cdot \overline{z}) + (\overline{x} \cdot y \cdot \overline{z})
.$$

Estos min-términos tienen los siguientes "códigos":

$$
\begin{align}
x \cdot y \cdot \overline{z} \to 110_{(2)} &= 6 \\
x \cdot \overline{y} \cdot \overline{z} \to 100_{(2)} &= 4 \\
\overline{x} \cdot y \cdot \overline{z} \to 010_{(2)} &= 2
.\end{align}
$$

Por ende, podemos expresar $f$ como

$$
f(x,y,z) = \sum_{m}(2,4,6)
.$$

```

### Como producto de max-términos

El proceso es análogo al de los min-términos, sólo que se invierte el dígito binario asignado a las variables:

$$
\begin{align}
x &\to 0 \\
\overline{x} &\to 1
.\end{align}
$$

Además, una función $f$ se denota en este caso como

$$
\prod_{M}(k_1,k_2,\ldots,k_n)
.$$

### Relación entre las dos representaciones

La dualidad de la suma y producto en el álgebra booleana nos da algunos resultados interesantes.

```ad-proposition
title: Propiedad.

Sea $f$ una función booleana. Entonces, la representación de $f$ como producto de max-términos utiliza los min-términos que $f$ no contiene.

```

```ad-proposition
title: Propiedad.

Sea $f$ una función booleana. Entonces, $\overline{f}$ es la función que usa los **min-términos que $f$ no contiene**.

```

Es decir, uno puede obtener la FND a partir de los códigos que le faltan a la FNC, y viceversa.

Por ejemplo, si

$$
f = \sum_m (0,2,3,4,7)
,$$

entonces

$$
f = \prod_{M}(1,5,6) \qquad \text{y} \qquad \overline{f} = \sum_{m}(1,5,6)
.$$
