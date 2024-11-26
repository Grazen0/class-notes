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

![[grafo random.excalidraw|width:20%]]

donde el orden de los vértices es $a,b,c,d$. Entonces, su matriz de adyacencia es

$$
\operatorname{Ad}(G) = 
$$