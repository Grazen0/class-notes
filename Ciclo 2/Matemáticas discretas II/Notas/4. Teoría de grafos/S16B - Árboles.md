```ad-definition

Un **árbol** es un grafo simple que es conexo y no contiene ciclos.

```

Una definición alternativa de árbol es un grafo que se puede construir a partir de un vértice **raíz** y añadiendo nuevas aristas por niveles.

````ad-theorem

Sea $T$ un árbol y $a,b$ vértices de $T$.

Entonces, existe un único camino que une a $a$ y a $b$.

```ad-proof
collapse: closed

Primero, existe un camino entre $a$ y $b$ porque $T$ es conexo.

Ahora, supongamos que existen dos caminos que unen a $a$ y $b$. Si estos caminos fuesen diferentes, se generaría un ciclo en $T$, lo cual contradice que $T$ sea un árbol. Por lo tanto, estos dos caminos son el mismo.

```

````
