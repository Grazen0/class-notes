La inducción fuerte es otro de los "esquemas" de la [[S1A - Inducción simple|inducción simple]].

```ad-theorem
title: Teorema (inducción fuerte).

Sea $P(n)$ una proposición definida para cualquier entero positivo $n$. Entonces, si se cumple que

1. $P(1)$ es verdadera, y
2. si $P(1) \land P(2) \land \ldots \land P(k)$ entonces $P(k + 1)$ es verdadera,

entonces $P(n)$ es verdadera para todo entero positivo $n$.

```

El uso de la inducción fuerte permite hacer uso no solamente del caso antecesor, sino de alguno o varios de los casos anteriores.

## Ejemplos y ejercicios

````ad-exercise
title: Ejercicio.

Un entero positivo $n$ se puede representar como $4p + 5q$ si y sólo si $n \in \left\{ 4,5,8,9 \right\}$ o $n \geq 12$.

```ad-proof

Trivialmente, la proposición es cierta para $n \in \left\{ 4,5,8,9 \right\}$.

Además, nótese que la proposición es cierta para $n = 12$, ya que $12 = 3 \cdot 4$.

Ahora supongamos que la proposición es cierta para algún $n = k$. Como $k \geq 12$, entonces $k$ 

```

````

```ad-exercise
title: Ejercicio.

Cualquier entero positivo $n$ se puede representar como una suma de potencias de $2$ (siendo las potencias distintas entre sí).

```

````ad-exercise
title: Ejercicio (teorema fundamental de la aritmética).

Todo entero entero $n \geq 2$ se puede expresar como producto de uno o más números primos.

```ad-proof
collapse: closed

Nótese que la proposición es cierta para $n = 2$, ya que $2$ es producto de un numero primo (si mismo).

Ahora, supongamos que la proposición es cierta para todo entero $n$ tal que $2 \leq n \leq k$.

**Caso 1:** $k + 1$ es primo.

Entonces la proposición es cierta, ya que $k + 1$ es producto de un primo: si mismo

**Caso 2:** $k + 1$ es compuesto.

Entonces, $k + 1$ se puede representar como el producto de dos enteros mayores que $1$. Esto es

$$
k + 1 = m \cdot n
,$$

donde $m$ y $n$ son enteros mayores que 1. Como $1 < m,n \leq k$ (ya que dividen a $k + 1$ y son mayores que $1$), entonces la hipótesis inductiva cumple para $m$ y $n$.

Como tanto $m$ como $n$ son ambos productos de uno o más primos, entonces $k + 1 = m \cdot n$ también es producto de uno o más primos.
$$\qed$$

```

````

````ad-exercise

Cualquier entero positivo $n$ se puede representar como

$$
n = d_{0} + d_{1} \cdot 10 + d_{2} \cdot 10^{2} + \ldots + d_{k} \cdot 10^{k}
,$$

donde $0 \leq d_{k} \leq q$.

```ad-proof
collapse: closed

Nótese que la proposición es cierta para $n = 1$.

Ahora, supongamos que la proposición es cierta para todo $n$ tal que $1 \leq n \leq k$. Entonces, por el algoritmo de la división,

$$
n = 10q + r
$$

donde $0 \leq r \leq 9$.

**Caso 1:** $q = 0$

Trivial, ya que $n = r$ y queda expresado como afirma la proposición.

**Caso 2:** $q \geq 1$

Entonces, $1 \leq q \leq k$, por lo que la proposición es cierta para $n = q$. Esto es,

$$
q = d_{0} + d_{1} \cdot 10 + d_{2} \cdot 10^{2} + \ldots + d_{r} \cdot 10^{r}
.$$

Por lo tanto,

$$
\begin{align}
10q &= d_{0} \cdot 10 + d_{1} \cdot 10^{2} + d_{2} \cdot 10^{3} + \ldots + d_{r+1} \cdot 10^{r + 1} \\
10q + r &= r + d_{0} \cdot 10 + d_{1} \cdot 10^{2} + d_{2} \cdot 10^{3} + \ldots + d_{r+1} \cdot 10^{r + 1} \\
&= k + 1
\end{align}
$$

De esta manera, la proposición se cumple para $k + 1$.
$$\qed$$

```

````

````ad-exercise

Una triangulización de un polígono de $n$ lados utiliza $n - 3$ diagonales.

```ad-proof
collapse: closed

Sea $P$ un polígono de $k + 1$ lados. Entonces, $P$ se puede dividir mediante una diagonal en dos polígonos $A$ y $B$, cuyos números de lados $a$ y $b$ respectivamente cumplen con $3 \leq a,b, < k + 1$.

Por la hipótesis inductiva entonces, $A$ y $B$ usaron $a - 3$ y $b - 3$ diagonales respectivamente. Entonces, en total hemos empleado $(a - 3) + (b - 3) + 1 = a + b - 5$ diagonales para triangulizar a $P$.

Sin embargo, como $A$ y $B$ surgen de dividir $P$ con alguna diagonal, entonces $k + 1 = (a - 1) + (b - 1) = a + b - 2$. Con lo anterior, tenemos que la cantidad de diagonales empleadas es igual a $(k + 1) - 3$.
$$\qed$$

```

````
