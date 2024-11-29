```ad-definition
title: Definición (grafo no dirigido).

Un **grafo no dirigido** $G = (V, E)$ consiste de:

- $V$: Un conjunto finito no vacío de **vértices**.
- $E$: Un conjunto de **aristas**.

Se dice que una arista $e$ que conecta al par de vértices $v$ y $w$ es **incidente sobre $v$ y $w$**, y se dice que $v$ y $w$ son **incidentes sobre $e$** y son **vértices adyacentes**.

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

````ad-theorem

Un grafo no dirigido tiene un número par de vértices de grado impar.

```ad-proof
collapse: closed

Sea $(V, E)$ un grafo de $m$ aristas. Entonces, sabemos que

$$
2m = \sum_{v \in V} \operatorname{grad}(v)
.$$

Dividamos ahora los vértices en aquellos de grado par e impar ($V_\text{par}$ y $V_\text{impar}$ respectivamente). Entonces,

$$
2m = \sum_{v \in V_\text{par}} \operatorname{grad}(v) + \sum_{v \in V_\text{impar}} \operatorname{grad}(v)
.$$

Sin embargo, la suma de los grados pares siempre es par. Por lo tanto, analizando la paridad de la expresión:

$$
\underbrace{2m}_\text{par} = \underbrace{\sum_{v \in V_\text{par}} \operatorname{grad}(v)}_{\text{par}} + \underbrace{\sum_{v \in V_\text{impar}} \operatorname{grad}(v)}_\text{tiene que ser par}
.$$

Como la suma de los grados impares tiene que ser par, deducimos que la cantidad de estos vértices debe ser par.
$$\qed$$

```

````

```ad-definition
title: Definición (grado de un vértice en grafo dirigido).

En un grafo dirigido, se le llama el **grado de entrada** de un vértice $v$, denotado como $\operatorname{grad}^-(v)$, al número de aristas que inciden en $v$.

Análogamente, se le llama el **grado de salida** de un vértice $v$, denotado como $\operatorname{grad}^+(v)$, al número de aristas que nacen de de $v$.

```

```ad-theorem

Sea $(G, E)$ un digrafo de $m$ aristas. Entonces,

$$
\sum_{v \in V} \operatorname{grad}^-(v)  = \sum_{v \in V} \operatorname{grad}^+(v) = m
.$$

```

Este último teorema se cumple intuitivamente porque cada arista que se añada a un grafo tiene necesariamente que nacer en algún vértice e incidir en alguno.

## Trayectorias

```ad-definition
title: Definición (trayectoria).

Una **trayectoria** es una secuencia de vértices $x_0, x_1, x_2, \ldots, x_n$ tal que $x_i$ y $x_{i+1}$ son adyacentes para todo $0 \leq i < n$. La **longitud** de esta trayectoria es $n$.

```

La longitud de una trayectoria coincide con el número de aristas que utiliza.

Por ejemplo, sea el siguiente grafo:

![[Trayectoria.excalidraw]]

Algunos ejemplos de trayectorias en este grafo son:


| Trayectoria                  | Longitud |
| ---------------------------- | :------: |
| $a$, $c$, $f$, $e$, $d$      |    4     |
| $a$, $c$, $a$                |    2     |
| $d$, $c$, $b$, $c$, $f$, $c$ |    5     |

```ad-note
title: Nota.

En multigrafos, es necesario especificar las aristas que usamos para la trayectoria.

```

Nótese que las trayectorias pueden repetir vértices. Para eliminar esta característica, definimos los **caminos**.

### Caminos

```ad-definition
title: Definición (camino).

Un **camino** es una trayectoria que no repite vértices.

```

Equivalentemente, un camino tampoco repite aristas.

```ad-proposition
title: Observación.

Todo grafo no dirigido tiene al menos un camino de longitud máxima.

```

Esta observación se cumple porque un camino puede incluir, a lo mucho, todos los vértices del grafo, por lo que no puede haber caminos "infinitos".

### Ciclos

```ad-definition
title: Definición (ciclo).

Un **ciclo** (o circuito) es un camino en el que el primer y último vértice son iguales.

Similar a la longitud de una trayectoria, la **longitud** de un circuito es el número de aristas que contiene.

```

Los ciclos se pueden denotar en varios órdenes. Por ejemplo, un ciclo $a$, $b$, $c$ es igual a un ciclo $b$, $c$, $a$.

```ad-definition
title: Definición (unión por trayectoria).

Decimos que dos vértices $a$ y $b$ están **unidos por una trayectoria** si y sólo si existe alguna trayectoria que comienza en $a$ y termina en $b$.

```

Se define análogamente este término para los caminos.

```ad-proposition
title: Propiedad.

Si $a$ y $b$ están unidos por una trayectoria, entonces están unidos por un camino.

```

## Conexidad

```ad-definition
title: Definición (conexidad).

Un grafo $G$ es **conexo** si y sólo si cualquier par de vértices $v$ y $w$ en $G$ están unidos por algún camino.

De lo contrario, se dice que $G$ es **disconexo**, y las diversas conexas partes de $G$ son sus componentes (conexas).


```

Una forma de demostrar conexidad es mostrar caminos que incluyan varios vértices del grafo, de forma que se observa que existen caminos entre todos ellos. De aquí, podemos considerar los otros vértices que quedaron fuera del camino y unirlos a él.

```ad-proposition
title: Observación.

Sea $G$ un grafo. Si existe algún vértice $v$ en $G$ tal que $v$ está unido por algún camino con todo los otros vértices de $G$, entonces $G$ es conexo.

```

## Subgrafos y supergrafos

```ad-definition

Sean $G = (V, E)$ y $H = (W, F)$ grafos. Entonces, $H$ es **subgrafo** de $G$ si y sólo si $W \subseteq V$ y $F \subseteq E$.

Equivalentemente, se dice que $G$ es **supergrafo** de $H$.

```

Es decir, se trata del análogo en grafos de los subconjuntos (y los menos conocidos "superconjuntos").
