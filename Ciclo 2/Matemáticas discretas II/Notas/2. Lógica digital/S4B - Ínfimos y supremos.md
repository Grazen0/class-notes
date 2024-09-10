```ad-definition
title: Definición (cota inferior y superior).

Sea $(X, \preceq)$ un CPO y $S \subseteq X$ un conjunto no vacío. Entonces

1. $c \in X$ es **cota inferior** de $S$ si $\forall x \in S\ (c \preceq x)$.
2. $c \in X$ es **cota superior** de $S$ si $\forall x \in S\ (x \preceq c)$.

```

Una cota inferior es, por decirlo de cierta manera, un elemento que "une" a todos los elementos de $S$ por debajo.

```ad-definition
title: Definición (ínfimo y supremo).

Sea $(X, \preceq)$ un CPO y $S \subseteq X$ un conjunto no vacío. Entonces

1. $i \in X$ es **ínfimo** de $S$ si para todo $c$ que sea cota inferior de $S$ se cumple que $c \preceq i$.
2. $s \in X$ es **supremo** de $S$ si para todo $c$ que sea cota superior de $S$ se cumple que $s \preceq c$.

```

Es decir:

1. el **ínfimo** es la **máxima** cota inferior, y
2. el **supremo** es la **mínima** cota superior.
