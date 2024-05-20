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
A = \left\{ a \lmid \text{$a$ verifica la propiedad $P$} \right\}
$$

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

- **Pertenencia:** Se dice que $x \in A$ si y solo si $x$ **pertenece** al conjunto $A$. Caso contrario, se escribe $x \notin A$.
- **Igualdad:** Dos conjuntos $A$ y $B$ son **iguales** si y solo si poseen los mismos elementos. Esto se denota como $A = B$.
- **Conjunto vacío:** Se asume la existencia del conjunto vacío ($\varnothing$), conjunto que no posee elementos.
- **Cardinal:** Dado un conjunto finito $A$, denotamos con $|A|$ la **cantidad de elementos** de $A$. Este es el **número cardinal** de $A$.

## Inclusión / subconjunto

Dados dos conjuntos $A$ y $B$, decimos que **$A$ está incluido en $B$** si y solo si cada elemento de $A$ es un elemento de $B$. Ello se denota como $A \subseteq B$, y y se dice que **$A$ es subconjunto de $B$**.

Si $A$ no es subconjunto de $B$, denotamos $A \nsubseteq B$.
