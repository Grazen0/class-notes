## Relaciones de equivalencia

```ad-definition

Sea $R$ una relación en un conjunto $A$. Entonces, se llama a $R$ una **relación de equivalencia** si es reflexiva, simétrica y transitiva.

```

Por ejemplo, sea $E$ el conjunto de estudiantes de este salón y sea la relación

$$
R := \left\{ (a, b) \in E \times E \lmid \text{$a$ y $b$ tienen el mismo primer nombre} \right\}
.$$

Entonces, se cumple que $R$ es una relación de equivalencia.

Las relaciones de equivalencia forman grupos dentro del dominio, donde los elementos de cada grupo están relacionados entre sí. A estos grupos se les llama **clases de equivalencia**.

## Relaciones de orden

```ad-definition
title: Definición (orden parcial).

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es una **relación de orden parcial** si y sólo si

1. $R$ es **reflexiva**.
2. $R$ es **antisimétrica**.
3. $R$ es **transitiva**.

```

(Pro tip: **RAT 🐭**)

En un orden parcial, existen elementos que no son comparables.

### Conjuntos parcialmente ordenados (CPO)

```ad-definition
title: Definición.

Sea $A$ un conjunto y $R$ una relación de orden parcial en $A$. Entonces, $(A, R)$ se denomina un **conjunto parcialmente ordenado**, y se define de la siguiente manera:

$$
(A, R) := \left\{ (x,y) \in A \times A \lmid x \mathbin{R} y \right\}
.$$

```

#### Observaciones

- Un CPO establece una **jerarquía** entre sus elementos.
- No todos los los elementos son comparables entre sí.
- Decimos que dos elementos $a$ y $b$ son **incomparables** cuando $(a,b) \notin R$ y $(b,a) \notin R$.
- En ocasiones, se suele escribir $a \mathbin{R} b$ como $a \preceq b$.
