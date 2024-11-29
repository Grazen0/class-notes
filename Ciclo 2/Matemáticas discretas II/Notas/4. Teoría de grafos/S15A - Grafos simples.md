```ad-definition
title: Definición (grafo simple).

Un grafo $G$ es **simple** si y sólo si se cumple los siguiente:

1. Solo existe a lo mucho una arista entre cada par de vértices.
2. No existen aristas de un vértice a sí mismo.

```

## Tipos de grafos simples

### Grafos especiales

Existen algunos grafos importantes que merecen su propia notación.

#### Grafos completos

```ad-definition

Un **grafo completo** es un grafo donde cualquier par de vértices en él son adyacentes. Se denota como $K_n$, donde $n$ es el número de vértices.

```

En los grafos completos, se cumple que el número de aristas es igual a

$$
|E| = \frac{n(n-1)}{2}
.$$

#### Grafos ciclo

```ad-definition

Un **grafo ciclo**, denotado por $C_n$ para $n \geq 3$, se conforma de $n$ vértices $v_1, v_2, \ldots, v_n$ y aristas $\left\{ v_1, v_2 \right\}, \left\{ v_2, v_3 \right\}, \ldots, \left\{ v_{n-1}, v_n \right\}$ y $\left\{ v_n, v_1 \right\}$

```

El grafo ciclo $C_n$ tiene $n$ aristas.

#### Grafo rueda

```ad-definition

Un **grafo rueda**, denotado por $W_n$, es un grafo ciclo formado por un vértice adicional unido a todos los vértices del ciclo.

```

El grafo rueda $W_n$ tiene $n + 1$ vértices y $2n$ aristas.

#### $n$-cubo dimensional

```ad-definition

Un **$n$-cubo dimensional**, denotado por $Q_n$, se define como $Q_n = (V, E)$, donde $V$ es el conjunto de todas las cadenas de bits de longitud $n$ y

$$
E = \left\{ c_i c_j \lmid \text{$c_i$ y $c_j$ difieren en exactamente un bit} \right\}
.$$

```

Se cumple que un cubo $n$-dimensional tiene $2^n$ vértices, y su número de aristas es igual a

$$
|E| = n \cdot 2^{n-1}
.$$

### Grafo bipartito

```ad-definition

Un **grafo bipartito** es un grafo $G = (V, E)$ cuyos vértices se pueden representar como una unión disjunta $V = V_1 \cup V_2$ tal que no existan aristas dentro de $V_1$ y $V_2$ respectivamente.

```

En otras palabras, un grafo bipartito es un grafo que se puede dividir en dos partes de vértices disjuntos.

Los grafos bipartitos también se pueden ver desde un punto de vista de **coloración**: son grafos donde se le pueden asignar uno de dos colores a cada vértice de tal forma que no haya vértices adyacentes del mismo color.

### Grafo bipartito completo

```ad-definition

Un **grafo bipartito completo**, denotado por $K_{m,n}$, es un grafo bipartito donde cada vértice de una parte es adyacente a todos los vértices de la otra parte.

```

Se cumple que un grafo bipartito completo tiene $m \cdot n$ aristas.

### Grafo $k$-regular

```ad-definition

Un **grafo $k$-regular** es un grafo cuyos vértices tienen todos grado $k$.

```

Se cumple que un grafo $k$-regular de $n$ vértices tiene $\frac{kn}{2}$ aristas.

Por ejemplo, todo grafo ciclo es $2$-regular.

## Grafo complementario

```ad-definition

Dado un grafo simple $G = (V, E)$, el **grafo complementario** de $G$, denotado por $\overline{G}$, es el grafo simple que contiene los mismos vértices de $G$ y sus aristas son todas aquellas que le faltan a $G$ para que sea completo.

```

Intuitivamente, se cumple que la cantidad de aristas el complemento de un grafo de $m$ aristas y $n$ vértices es igual a

$$
m' = \binom{n}{2} - m
.$$
