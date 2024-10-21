Una **permutación** es una forma particular de ordenar un conjunto de elementos. Es decir, "cambiar de orden".

Si queremos contar las permutaciones de elementos distintos, contamos con el siguiente resultado fundamental:

```ad-theorem

Si tenemos $n$ elementos **distintos** que van a ser ubicados en $n$ lugares, esto se puede realizar de $n!$ formas.

```

(Por ejemplo, $6$ personas se pueden sentar de $6!$ formas en un sillón para $6$ personas exactamente)

La siguiente propiedad particular de las permutaciones también es interesante.

```ad-proposition
title: Propiedad (permutaciones en una mesa redonda).

Dada una cantidad $n$ de personas en una mesa circular de $n$ sillas, las personas se pueden ordenar de

$$
(n-1)!
$$

maneras posibles (donde dos ordenamientos se consideran iguales si simplemente se tratan del mismo pero con la mesa rotada).

```

## Ordenamientos con tamaño

El siguiente principio responde a la pregunta "¿De cuántas formas podemos permutar cualquier subconjunto de $r$ elementos de un conjunto?"

````ad-proposition
title: Propiedad (permutaciones de tamaño $r$).

Dada una cantidad $n$ de elementos, el número de permutaciones de tamaño $r$ de dichos elementos es igual a

$$
P_r^n = n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot (n - r + 1) = \frac{n!}{(n-r)!}
.$$

```ad-proof
collapse: closed

Trivial.
$$\qed$$

```

````
