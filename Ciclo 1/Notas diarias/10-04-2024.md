## Matemáticas Discretas: Descomposición canónica

[TEOREMA FUNDAMENTAL DE LA ARITMÉTICA]

A esta representación de un número se le llama **descomposición canónica**.

### Divisores de un número

```ad-theorem

Dado un número entero $n$ en su descomposición canónica

$$
n = p_{1}^{a_{1}} \cdot p_{2}^{a_{2}} \cdot \ldots \cdot p_{k}^{a_{k}}
$$

el conjunto de sus divisores positivos será el siguiente:

$$
D(n) = \left\{ p_{1}^{e_{1}} \cdot p_{2}^{e_{2}} \cdot \ldots p_{k}^{e_{k}} \mid 0 \leq e_{i} \leq a_{i} \right\}
$$

```


```ad-example
title: Ejemplo: Divisores positivos de $7^{10}$

Los divisores positivos de $7^{10}$ son $7^{0}$, $7^{1}$, $7^{2}$, ..., $7^{10}$.

```

```ad-example
title: Ejemplo: Divisores positivos de $2 \cdot 7^{10}$

Los divisores positivos de $2^{1} \cdot 7^{10}$ son:


|         |       $7^{0}$       |       $7^{1}$       |       $7^{2}$       | $\dots$ |       $7^{10}$       |
| :-----: | :-----------------: | :-----------------: | :-----------------: | :-----: | :------------------: |
| $2^{0}$ | $2^{0} \cdot 7^{0}$ | $2^{0} \cdot 7^{1}$ | $2^{0} \cdot 7^{2}$ | $\dots$ | $2^{0} \cdot 7^{10}$ |
| $2^{1}$ | $2^{1} \cdot 7^{0}$ | $2^{1} \cdot 7^{1}$ | $2^{1} \cdot 7^{2}$ | $\dots$ | $2^{1} \cdot 7^{10}$ |


```

#### Cantidad de divisores positivos

```ad-theorem

Dado un número entero $n$ en su descomposición canónica

$$
n = p_{1}^{a_{1}} \cdot p_{2}^{a_{2}} \cdot \ldots \cdot p_{k}^{a_{k}}
$$

su cantidad de divisores positivos es $(a_{1} + 1)(a_{2} + 1)\ldots(a_{k} + 1)$.

```

##### Ejemplos

1. Hallar la cantidad de divisores positivos de los siguientes números:

- $2^{11} \cdot 7^{10}$ tiene $(11 + 1)(10 + 1) = 132$ divisores positivos.
- $6^{100} = 2^{100} \cdot 3^{100}$ tiene $(100 + 1)(100 + 1) = 10201$ divisores positivos.

2. Hallar la cantidad de divisores positivos **pares** de los siguientes números:

- $2^{1} \cdot 3^{15}$ tiene $(1)(15 + 1) = 16$ divisores pares.
- $2^{2} \cdot 3^{13}$ tiene $(2)(13 + 1) = 28$ divisores pares.

En ambos casos se utiliza la propiedad de que un número par tiene que tener la forma $2k$ para algún entero $k$. 

Por ello, se tiene que eliminar los divisores que incluyan al $2$ como $2^{0} = 1$, ya que estos serían los divisores impares. Esto se logra no sumándole $1$ a la potencia del $2$ en la fórmula de cantidad de divisores positivos.
