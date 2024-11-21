```ad-definition
title: Definición (grafo no dirigido).

Un **grafo no dirigido** $G = (V, E)$ consiste de:

- $V$: Un conjunto finito no vacío de **vértices**.
- $E$: Un conjunto de **aristas**.

Se dice que ua arista $e$ que conecta al par de vértices $v$ y $w$ es **incidente sobre $v$ y $w$**, y se dice que $v$ y $w$ son **incidentes sobre $e$** y son **vértices adyacentes**.

```

En corto, un grafo (no dirigido) es una estructura matemática que contiene **vértices** unidos por **aristas**.

Los grafos se clasifican en varios tipos:

- **Grafo no dirigido:** Las aristas no tienen una dirección particular.
- **Multigrafo:** Puede contener más de una arista entre dos vértices dados.
- **Pseudografo:** Pueden existir aristas de un vértices a si mismo.
- **Grafo dirigido:** Las aristas tienen dirección particular.
- **Grafo etiquetado (o con peso):** Cada arista está asociada a un número real.

```ad-definition
title: Definición (grado de un vértice).

El **grado** de un vértice, denotado por $\operatorname{grad}(v)$, es la cantidad de veces que es extremo de alguna arista.

```

Nótese que si un vértice está conectado con si mismo, dicha arista le añade grado $2$, y no $1$.

```ad-theorem
title: Teorema (teorema del apretón de manos).

Sea $(V, E)$ un grafo de $m$ aristas. Entonces,

$$
2m = \sum_{v \in V} \operatorname{grad}(v)
.$$

```

Es decir, la suma de los grados de un grafo es igual al doble de su cantidad de aristas.