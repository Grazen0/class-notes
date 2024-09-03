Ver también: **[[S12A - Relaciones de equivalencia y orden#Relaciones de orden|Relaciones de orden en Matemáticas Discretas I]]**

```ad-definition
title: Definición (orden parcial).

Sea $R$ una relación sobre un conjunto no vacío $A$. Entonces, $R$ es una **relación de orden parcial** si cumple las siguientes propiedades:

1. **Reflexiva**: Para todo $a \in A$, $(a, a) \in R$.
2. **Antisimétrica**: Si $(a, b) \in R$ y $(b, a) \in R$, entonces $a = b$.
3. **Transitiva**: Si $(a, b) \in R$ y $(b, c) \in R$, entonces $(a, c) \in R$.

```

Nótese que en una relación de orden parcial **pueden existir elementos no comparables**.

Una definición más estricta del orden parcial es el **orden total**.

```ad-definition
title: Definición (orden total).

Sea $R$ una relación sobre un conjunto no vacío $A$. Entonces, $R$ es una **relación de orden total (o lineal)** si cumple las siguientes propiedades:

1. $R$ es una relación de orden parcial.
2. Para todo $a,b \in A$, se cumple que $(a,b) \in R$ o $(b,a) \in R$.

```

En otras palabras, un orden total es un orden parcial donde **cualquier par de elementos es comparable**.