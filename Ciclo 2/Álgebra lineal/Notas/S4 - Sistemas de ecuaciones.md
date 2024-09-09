## Consistencia de un sistema

```ad-theorem
title: Teorema (soluciones de un sistema de ecuaciones).

Sea el sistema de ecuaciones $Ax = b$ con $n$ incógnitas. Entonces:

- Si $\operatorname{rang}(A) = \operatorname{rang}([A | b]) = n$, entonces el sistema tiene **una solución**.
- Si $\operatorname{rang}(A) = \operatorname{rang}([A | b]) \neq n$, entonces el sistema tiene **infinitas soluciones**.
- Si $\operatorname{rang}(A) \neq \operatorname{rang}([A | b])$, entonces el sistema **no tiene solución**.

```

Sólo para aclarar terminología, un sistema se denomina de la siguiente manera según su cantidad de soluciones:

| Soluciones           | Denominación              |
| -------------------- | ------------------------- |
| Una solución         | Consistente determinado   |
| Infinitas soluciones | Consistente indeterminado |
| Sin soluciones       | Inconsistente             |

## Espacio nulo

```ad-definition
title: Definición (sistema homogéneo).
collapse: closed

Un sistema de ecuaciones es **homogéneo** si y sólo si su vector de constantes es cero. Es decir, es de la forma

$$
Ax = 0
.$$

```


```ad-definition

Sea $A$ una matriz de $n \times n$. Entonces, el **espacio nulo** de $A$ es igual a

$$
N(A) = \left\{ x \in \R^{n} \lmid Ax = 0 \right\}
.$$

```

Es decir, el espacio nulo de una matriz es **el conjunto de los vectores que la matriz lleva al $0$** con su transformación lineal.
