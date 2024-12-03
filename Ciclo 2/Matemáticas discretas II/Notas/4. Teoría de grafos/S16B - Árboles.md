```ad-definition
title: Definición (1).

Un **árbol** es un grafo simple que es conexo y no contiene ciclos.

```


````ad-theorem

Sea $T$ un árbol y $a,b$ vértices de $T$.

Entonces, existe un único camino que une a $a$ y a $b$.

```ad-proof
collapse: closed

Primero, existe un camino entre $a$ y $b$ porque $T$ es conexo.

Ahora, supongamos que existen dos caminos que unen a $a$ y $b$. Si estos caminos fuesen diferentes, se generaría un ciclo en $T$, lo cual contradice que $T$ sea un árbol. Por lo tanto, estos dos caminos son el mismo.
$$\qed$$

```

````

De hecho, esta propiedad también puede tomarse como definición de árbol.

Otra definición equivalente de árbol es la siguiente:

```ad-definition
title: Definición (2).

Un árbol es un grafo cuyos vértices se pueden dividir en "niveles", siendo todos conectados en el nivel $0$ por una raíz.

```

Los árboles también se pueden dividir en **sub-árboles**.

````ad-theorem

Un árbol de $n$ vértices tiene exactamente $n - 1$ aristas.

```ad-proof
collapse: closed

Como un árbol tiene $n$ vértices, entonces tiene $n - 1$ vértices distintos de la raíz. Cada uno de ellos tiene una arista correspondiente que lo conecta a su vértice padre.

Por lo tanto, el árbol tiene $n - 1$ aristas.

$$\qed$$

```

````

## Árbol generador

También llamado árbol **recubridor** y árbol **de expansión**.

````ad-theorem

Todo grafo simple y conexo tiene como subgrafo a un árbol que contiene todos sus vértices.

```ad-proof
collapse: closed

Sea el grafo conexo inicial $G_0$. Si $G_0$ es acíclico, entonces ya es un árbol.

Caso contario, tomamos un ciclo de $G_0$ y quitamos una arista de este ciclo. Este proceso preserva la conexidad del grafo.

Repetimos este proceso hasta que no queden ciclos. Al final, obtendremos un grafo acíclico $T$ que sigue siendo conexo, lo cual es un árbol.
$$\qed$$

```

````

Resulta que el algoritmo mostrado en la demostración de este teorema produce el grafo de menos aristas que todavía sea conexo, preservando todos sus vértices originales.

De aquí deducimos un corolario importante:

```ad-proposition
title: Corolario.

Todo grafo simple conexo de $n$ vértices tiene al menos $n - 1$ aristas.

```

Otra forma interesante de interpretar este resultado es el siguiente: dados $n$ vértices, se necesita al menos $n - 1$ para formar un grafo conexo con todos ellos.

Por ello, podemos decir que los árboles son una especie de **grafo conexo mínimo**.