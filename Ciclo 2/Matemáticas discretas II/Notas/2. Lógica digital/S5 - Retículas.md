```ad-definition

Un CPO $(A, \preceq)$ es una **retícula** si y sólo si todo par de elementos de $A$ tiene supremo e ínfimo. Esto es:

$$
\forall a,b \in A \, (\exists i,j \in A \, (i = \operatorname{sup}({a,b}) \land j = \operatorname{inf}({a,b})))
$$

```

Algunos ejemplos de retículas son $(\N, \leq)$, $(\N, \mid)$ y $(\mathscr{P}(\left\{ a,b,c \right\}), \subseteq)$.

En una retícula, se cumple lo siguiente:

1. $\operatorname{inf}\left\{ a,b \right\} \preceq a,b \preceq \operatorname{sup}\left\{ a,b \right\}$.
3. Si $a \preceq c$ y $b \preceq c$, entonces $\operatorname{sup}\left\{ a,b \right\} \preceq c$.
4. $a \preceq b$ si y sólo si $\operatorname{sup}\left\{ a,b \right\} = b$.
4. $a \preceq b$ si y sólo si $\operatorname{inf}\left\{ a,b \right\} = a$.

```ad-proposition
title: Observación.

Todo conjunto totalmente ordenado es un retículo.

```

## Verificando retículas

Debido a la propiedad 4, para verificar si un CPO es una retícula basta **determinar los ínfimos y supremos de elementos no relacionados** (no comparables).

```ad-example
title: Ejemplo.
collapse: closed

Sea el siguiente CPO:

![[ejemplo de reticula.excalidraw|width:25%]]

Este CPO es una retícula, ya que:

- $\operatorname{sup}\left\{ b,c \right\} = d$
- $\operatorname{inf}\left\{ b,c \right\} = a$
- $\operatorname{sup}\left\{ e,c \right\} = f$
- $\operatorname{inf}\left\{ e,c \right\} = a$
- $\operatorname{sup}\left\{ e,d \right\} = f$
- $\operatorname{inf}\left\{ e,d \right\} = b$

```
