```ad-definition
title: Definición (grafo simple).

Un grafo $G$ es **simple** si y sólo si se cumple los siguiente:

1. Solo existe a lo mucho una arista entre cada par de vértices.
2. No existen aristas de un vértice a sí mismo.

```

Existen varios tipos de grafos simples:

- Grafos completos
- Grafos ciclo
- Grafos rueda
- $n$-Cubo
- Grafos bipartidos
- Grafos bipartidos completos

## Grafos completos

```ad-definition

Un **grafo completo** es un grafo donde cualquier par de vértices en él son adyacentes. Se denota como $K_n$, donde $n$ es el número de vértices.

```

En los grafos completos, se cumple que el número de aristas es igual a

$$
m = \frac{n(n-1)}{2}
.$$

## Grafos ciclo

```ad-definition

Un **grafo ciclo**, denotado por $C_n$ para $n \geq 3$, se conforma de $n$ vértices $v_1, v_2, \ldots, v_n$ y aristas $\left\{ v_1, v_2 \right\}, \left\{ v_2, v_3 \right\}, \ldots, \left\{ v_{n-1}, v_n \right\}$ y $\left\{ v_n, v_1 \right\}$

```

El grafo ciclo $C_n$ tiene $n$ aristas.

## Grafo rueda

```ad-definition

Un **grafo rueda**, denotado por $W_n$, es un grafo ciclo formado por un vértice adicional unido a todos los vértices del ciclo.

```

El grafo rueda $W_n$ tiene $n + 1$ vértices y $2n$ aristas.

## $n$-cubo dimensional

```ad-definition

Un **$n$-cubo dimensional**, denotado por $Q_n$, se define como $Q_n = (V, E)$, donde $V$ es el conjunto de todas las cadenas de bits de longitud $n$ y

$$
E = \left\{ c_i c_j \lmid \text{$c_i$ y $c_j$ difieren en exactamente un bit} \right\}
.$$

```

Se cumple que un cubo $n$-dimensional tiene $2^n$ vértices.
