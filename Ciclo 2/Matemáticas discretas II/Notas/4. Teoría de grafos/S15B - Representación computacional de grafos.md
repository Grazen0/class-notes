Existen dos formas comunes de representar un grafo computacionalmente:

- Matrices de **adyacencia**.
- Matrices de **incidencia**.

## Matriz de adyacencia

```ad-definition

Sea $G = (V, E)$ un grafo simple donde $V = \left\{ v_1, v_2, \ldots, v_n \right\}$ son vértices con cierto orden, y sea $n = |V|$. Sea la arista $a_{ij} \in E$ incidente $v_i$ en $v_j$.

Entonces, la **matriz de adyacencia** de $G$, denotada como $\operatorname{Ad}(G)$ es una matriz cuadrada de $n \times n$ cuyos elementos $a_{ij}$ se definen como

$$
a_{ij} = \begin{cases}
1 & \text{si $a_{ij} \in E$} \\
0 & \text{en caso contrario}
.\end{cases}
$$

```

Si $G$ es un grafo dirigido, entonces la matriz de adyacencia es simétrica.

Por ejemplo, sea el grafo $G_0$

![[grafo random.excalidraw|width:10%]]

donde el orden de los vértices es $a,b,c,d$. Entonces, su matriz de adyacencia es

$$
\operatorname{Ad}(G) = \begin{bmatrix}
0 & 1 & 1 & 1 \\
1 & 0 & 1 & 0 \\
1 & 1 & 0 & 0 \\
1 & 0 & 0 & 0
\end{bmatrix}
.$$

### Para grafos no-simples

Los grafos de adyacencia se pueden extender para representar grafos con aristas múltiples y lazos.

- Un lazo se representa con un $1$ en la diagonal de la matriz.
- Las aristas múltiples se representan como números diferentes de $1$.

## Matriz de incidencia

```ad-definition

Sea $G = (V, E)$ un grafo simple donde $V = \left\{ v_1, v_2, \ldots, v_n \right\}$ son vértices con cierto orden, y sean $n = |V|$ y $m = |E|$.

Entonces, la **matriz de incidencia** de $G$, denotada como $\operatorname{In}(G)$ es una matriz cuadrada de $n \times m$ cuyos elementos $a_{ij}$ se definen como

$$
m_{ij} = \begin{cases}
1 & \text{si $v_i$ es incidente con $e_j$} \\
0 & \text{en caso contrario}
.\end{cases}
$$

```

Se cumple que las columnas de una matriz de incidencia (para un grafo simple) tienen exactamente $2$ elementos cada una.