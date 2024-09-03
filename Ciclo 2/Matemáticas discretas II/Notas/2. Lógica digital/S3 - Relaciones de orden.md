Ver también: **[[S12A - Relaciones de equivalencia y orden#Relaciones de orden|Relaciones de orden en Matemáticas Discretas I]]**

```ad-definition
title: Definición (orden parcial).

Sea $R$ una relación sobre un conjunto no vacío $A$. Entonces, $R$ es una **relación de orden parcial** si cumple las siguientes propiedades:

1. **Reflexiva**: Para todo $a \in A$, $(a, a) \in R$.
2. **Antisimétrica**: Si $(a, b) \in R$ y $(b, a) \in R$, entonces $a = b$.
3. **Transitiva**: Si $(a, b) \in R$ y $(b, c) \in R$, entonces $(a, c) \in R$.

```

Nótese que en una relación de orden parcial **pueden existir elementos no comparables**.

A un conjunto $A$ equipado con una relación de orden parcial en $A$, $R$ se les llama un **conjunto parcialmente ordenado (CPO)**.

Algunos ejemplos de CPOs son $(\R, \leq)$ y $(\N, \mid)$.

Una definición más estricta del orden parcial es el **orden total**.

```ad-definition
title: Definición (orden total).

Sea $R$ una relación sobre un conjunto no vacío $A$. Entonces, $R$ es una **relación de orden total (o lineal)** si cumple las siguientes propiedades:

1. $R$ es una relación de orden parcial.
2. Para todo $a,b \in A$, se cumple que $(a,b) \in R$ o $(b,a) \in R$.

```

En otras palabras, un orden total es un orden parcial donde **cualquier par de elementos es comparable**.

## Diagramas de Hasse

Es una forma de representar visualmente un CPO (de un conjunto finito).

Es una versión reducida de una digráfica, donde

1. Se ignoran los ciclos (es decir, la reflexividad).
2. 

Por ejemplo, sea $A = \left\{ 2,3,4,6,8 \right\}$ y $R = (A, \mid)$.

![[hasse.excalidraw|width:30%]]

```ad-tip
title: Observación.

El diagrama de Hasse de un CTO es una **línea recta** (y de ahí la denominación de "orden lineal").

```
