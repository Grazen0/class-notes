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
