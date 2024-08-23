```ad-theorem
title: Inducción fuerte.

1. Demostrar el caso base.
2. Demostrar que $P(1) \land P(2) \land \ldots \land P(k) \implies P(k + 1)$ para todo entero $k$ sobre el caso base.

```

El uso de la inducción fuerte permite (en la inducción) hacer uso no solamente del caso antecesor, sino de cualquier caso anterior.

## Ejemplos y ejercicios

````ad-exercise
title: Ejercicio.

Un entero positivo $n$ se puede representar como $4p + 5q$ si y solo si $n \in \left\{ 4,5,8,9 \right\}$ o $n \geq 12$.

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

```ad-exercise

Cualquier entero positivo $n$ se puede representar como

$$
n = d_{0} + d_{1} \cdot 10 + d_{2} \cdot 10^{2} + \ldots + d_{k} \cdot 10^{k}
,$$

donde $0 \leq d_{k} \leq q$.

```
