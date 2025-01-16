---
id: 1725987985-infimos-y-supremos
aliases:
  - Ínfimos y supremos
tags:
  - mates/discretas-2/logica-digital
createdAt: 2024-09-10 12:06
---

# Ínfimos y supremos

> [!DEFINITION] Definición (cota inferior y superior).
> Sea $(X, \preceq)$ un CPO y $S \subseteq X$ un conjunto no vacío. Entonces
> 
> 1. $c \in X$ es **cota inferior** de $S$ si $\forall x \in S\ (c \preceq x)$.
> 2. $c \in X$ es **cota superior** de $S$ si $\forall x \in S\ (x \preceq c)$.

Una cota inferior es, por decirlo de cierta manera, un elemento que "une" a todos los elementos de $S$ por debajo.

> [!DEFINITION] Definición (ínfimo y supremo).
> Sea $(X, \preceq)$ un CPO y $S \subseteq X$ un conjunto no vacío. Entonces
> 
> 1. Una cota inferior $i \in X$ de $S$ es **ínfimo de $S$** si para toda cota inferior $c$ de $S$ se cumple que $c \preceq i$.
> 2. Una cota superior $j \in X$ de $S$ es **supremo de $S$** si para toda cota superior $c$ de $S$ se cumple que $j \preceq c$.

En otras palabras:

1. el **ínfimo** es la **máxima cota inferior**, y
2. el **supremo** es la **mínima cota superior**.

> [!NOTE] Observación.
> No siempre existe un ínfimo y un supremo.
