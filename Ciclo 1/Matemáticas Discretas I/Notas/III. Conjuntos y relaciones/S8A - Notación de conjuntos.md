```ad-definition
title: Definición (conjunto).

Un conjunto es una colección **no ordenada** y bien definida de objetos **distintos**.

Los objetos de un conjunto son llamados **elementos**.

```

Un conjunto *es* sus elementos. Es decir, un conjunto se define completamente en base de ellos.

## Representaciones

### Por extensión

$$
A = \left\{ a_{1}, a_{2}, \ldots, a_{n} \right\}
$$

### Por comprensión

$$
A = \left\{ a \lmid P(a) \right\}
$$

para alguna función proposicional $P(x)$.

```ad-example
title: Ejemplos

- $\N = \left\{ 1, 2, 3, \ldots \right\}$
- $\N = \left\{ a \lmid \text{\(a\) es un entero positivo} \right\}$
- $A_{1} = \left\{ \square, \triangle \right\}$
- $A_{2} = \left\{ 2, 4, 5, 7, 8, 9 \right\}$
- $A_{3} = \left\{ x \in A \lmid x > 3 \right\}$

```

### Por intervalos

**[[S1A - Conjuntos numéricos#Recordemos Intervalo|Ver en semana 1A]]**

## Terminología
### Pertenencia

Se dice que $x \in A$ si y sólo si $x$ **pertenece** al conjunto $A$. Caso contrario, se escribe $x \notin A$.

### Igualdad

Dos conjuntos $A$ y $B$ son **iguales** si y sólo si poseen los mismos elementos. Esto se denota como $A = B$.

Es posible demostrar igualdad por **inclusión mutua**:

```ad-proposition
title: Propiedad.

Dos conjuntos $A$ y $B$ son iguales si y sólo si $A \subseteq B$ y $B \subseteq A$.

```

### Existencia del conjunto vacío ($\varnothing$)

Se asume la existencia del conjunto vacío ($\varnothing$), conjunto que no posee elementos.

$$
\forall x (x \notin \varnothing)
$$

- **Cardinal:** Dado un conjunto finito $A$, denotamos con $|A|$ la **cantidad de elementos** de $A$. Este es el **número cardinal** de $A$.
- **Disjunción:** Dos conjuntos $A$ y $B$ son llamados **disjuntos** si y sólo si $A \cap B = \varnothing$.

### Inclusión ($\subseteq$)

Dados dos conjuntos $A$ y $B$, decimos que **$A$ está incluido en $B$** si y sólo si cada elemento de $A$ es un elemento de $B$. Ello se denota como $A \subseteq B$, y y se dice que **$A$ es subconjunto de $B$**.

Si $A$ no es subconjunto de $B$, lo denotamos como $A \nsubseteq B$.

```ad-proposition
title: Propiedad.

Cualquier conjunto es subconjunto de si mismo. Es decir, para todo conjunto $A$:

$$
A \subseteq A
$$

```

````ad-proposition
title: Propiedad.

$\varnothing \subseteq A$ para todo conjunto $A$.

```ad-proof
collapse: closed

Por contradicción, supongamos que existe un conjunto $A$ tal que $\varnothing \nsubseteq A$. Entonces, existe un elemento $x$ tal que $x \in \varnothing$ y $x \notin A$.

Sin embargo, esto es una contradicción porque $\varnothing$ no tiene elementos.
$$\qed$$

```

````

````ad-proposition
title: Propiedad (transitividad).

Sean $A, B, C$ conjuntos tales que $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$.

```ad-proof
collapse: closed

Sean $A, B, C$ conjuntos tales que $A \subseteq B$ y $B \subseteq C$.

Entonces, sea $x$ un elemento cualquiera de $A$. Como $A \subseteq B$, entonces $x \in B$. Sin embargo, como $B \subseteq C$, entonces además $x \in C$.
$$\qed$$

```

````
