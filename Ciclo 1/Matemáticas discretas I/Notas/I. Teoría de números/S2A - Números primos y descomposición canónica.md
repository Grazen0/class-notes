```ad-definition

Un número **primo** es un entero positivo que tiene exactamente dos divisores positivos.

```

**Ejemplos:**

- $2$ es primo. (Sus divisores positivos son $1$ y $2$)
- $1$ no es primo. (Su único divisor positivo es $1$)

Los primeros números primos son $2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$, $29$, $31$, ...

Los números primos son los "ladrillos" de los demás números, ya que **todo número entero se puede descomponer en producto de números primos.**

```ad-definition

Un número **compuesto** es un entero positivo que tiene más de dos divisores positivos.

```

**Ejemplo:** $6$ es compuesto. (Sus 3 divisores son $1$, $2$, $3$ y $6$)

```ad-note
title: Observación

El $1$ no es ni primo ni compuesto.

```


![[Clasificacion Numeros Primos.excalidraw|width:80%]]

```ad-proposition
title: Propiedad

Todo número compuesto se puede expresar como el producto de dos números enteros mayores que $1$.

```

**Ejemplos:**

- $6 = 2 \cdot 3$
- $25 = 5 \cdot 5$
- $9 = 3 \cdot 3$
- $12 = 2 \cdot 6$

## Descomposición canónica

```ad-theorem
title:  Teorema (Teorema Fundamental de la Aritmética).

Todo número entero $n \geq 2$ puede ser expresado **de forma única** como
$$
 n = p_{1}^{a_{1}} \cdot p_{2}^{a_{2}} \cdot \ldots \cdot p_{k}^{a_{k}}
$$

donde $p_{1},p_{2},\ldots,p_{k}$ son números primos distintos y $a_{1},a_{2},\dots,a_{k}$ son enteros positivos.

```

A esta representación de un número se le llama **descomposición canónica**. (D.C.)

### Divisores de un número

```ad-theorem

Dado un número entero $n$ en su descomposición canónica

$$
n = p_{1}^{a_{1}} \cdot p_{2}^{a_{2}} \cdot \ldots \cdot p_{k}^{a_{k}}
$$

el conjunto de sus divisores positivos es el siguiente:

$$
D(n) = \left\{ p_{1}^{e_{1}} \cdot p_{2}^{e_{2}} \cdot \ldots p_{k}^{e_{k}} \mid 0 \leq e_{i} \leq a_{i} \right\}
$$

```

**Ejemplos:**

1. Los divisores positivos de $7^{10}$ son $7^{0}$, $7^{1}$, $7^{2}$, ..., $7^{10}$.
2. Los divisores positivos de $2^{1} \cdot 7^{10}$

|         |       $7^{0}$       |       $7^{1}$       |       $7^{2}$       | $\dots$ |       $7^{10}$       |
| :-----: | :-----------------: | :-----------------: | :-----------------: | :-----: | :------------------: |
| $2^{0}$ | $2^{0} \cdot 7^{0}$ | $2^{0} \cdot 7^{1}$ | $2^{0} \cdot 7^{2}$ | $\dots$ | $2^{0} \cdot 7^{10}$ |
| $2^{1}$ | $2^{1} \cdot 7^{0}$ | $2^{1} \cdot 7^{1}$ | $2^{1} \cdot 7^{2}$ | $\dots$ | $2^{1} \cdot 7^{10}$ |

### Cantidad de divisores positivos

```ad-theorem

Dado un número entero $n$ en su descomposición canónica

$$
n = p_{1}^{a_{1}} \cdot p_{2}^{a_{2}} \cdot \ldots \cdot p_{k}^{a_{k}}
$$

su cantidad de divisores positivos es $(a_{1} + 1)(a_{2} + 1)\ldots(a_{k} + 1)$.

```

**Ejemplos:**

- $2^{11} \cdot 7^{10}$ tiene $(11 + 1)(10 + 1) = 132$ divisores positivos.
- $6^{100} = \underbrace{2^{100} \cdot 3^{100}}_{\text{D.C.}}$ tiene $(100 + 1)(100 + 1) = 10201$ divisores positivos.

```ad-exercise
title:  Ejercicio (cantidad de divisores pares)
collapse: closed

Hallar la cantidad de divisores positivos **pares** de los siguientes números:
	1. $2^{1} \cdot 3^{15}$ tiene $(1)(15 + 1) = 16$ divisores pares.
	2. $2^{2} \cdot 3^{13}$ tiene $(2)(13 + 1) = 28$ divisores pares.
	
	**Explicación de 1:** Los divisores positivos de $2^{1} \cdot 3^{15}$ tienen la forma $2^{a} \cdot 3^{b}$. Como queremos considerar únicamente los pares, entonces $a \geq 1$ para incluir un $2$ en el divisor. Por ello, no se le suma $1$ a la potencia del $2$ en la fórmula de cantidad de divisores positivos, ya que no consideramos los casos donde $a = 0$.

```
