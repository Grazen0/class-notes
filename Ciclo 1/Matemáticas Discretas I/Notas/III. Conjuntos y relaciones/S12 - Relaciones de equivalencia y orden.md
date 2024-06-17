## Relaciones de equivalencia

```ad-definition

Sea $R$ una relación en un conjunto $A$. Entonces, se llama a $R$ una **relación de equivalencia** si es reflexiva, simétrica y transitiva.

```

Por ejemplo, sea $E$ el conjunto de estudiantes de este salón y sea la relación

$$
R := \left\{ (a, b) \in E \times E \lmid \text{$a$ y $b$ tienen el mismo primer nombre} \right\}
.$$

Entonces, se cumple que $R$ es una relación de equivalencia.

Las relaciones de equivalencia forman **grupos** dentro del dominio, donde los elementos de cada grupo están relacionados entre sí. A estos grupos se les llama **clases de equivalencia**.

## Relaciones de orden

```ad-definition
title: Definición (relación antisimétrica).

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es una **relación antisimétrica** si y solo si:

$$
\forall a, b \in A : ((a, b) \in R \land a \neq b) \implies (b, a) \notin R
.$$

O de la misma manera:

$$
\forall a,b \in A : (a \mathbin{R} b \land a \neq b) \implies b \mathbin{\not R} a
$$

```
	