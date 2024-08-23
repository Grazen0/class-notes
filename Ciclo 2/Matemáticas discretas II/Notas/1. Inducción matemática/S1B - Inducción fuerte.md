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

```ad-exercise
title: Ejercicio (teorema fundamental de la aritmética).

Todo entero entero $n \geq 2$ se puede expresar como producto de uno o más números primos.

```
