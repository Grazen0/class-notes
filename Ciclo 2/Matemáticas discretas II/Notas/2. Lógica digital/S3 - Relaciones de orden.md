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

Sea $\preceq$ una relación de orden parcial sobre un conjunto no vacío $A$. Entonces, $\preceq$ es una **relación de orden total (o lineal)** si cumple que para todo $a,b \in A$, se cumple que $a \preceq b$ o $b \preceq a$.

```

En otras palabras, un orden total es un orden parcial donde **cualquier par de elementos es comparable**.

## Diagramas de Hasse

Es una forma de representar visualmente un CPO (de un conjunto finito).

Es una versión reducida de una digráfica, donde

1. Se ignoran los ciclos (es decir, la reflexividad).
2. Se coloca los elementos en orden **de abajo hacia arriba**.
3. Debido al punto anterior, se ignora la dirección de las flechas.

Por ejemplo, sea $A = \left\{ 2,3,4,6,8 \right\}$ y $R = (A, \mid)$.

![[hasse.excalidraw|width:30%]]

```ad-tip
title: Observación.

El diagrama de Hasse de un CTO es una **línea recta** (y de ahí la denominación de "orden lineal").

```

## Elementos extremos

### Minimales y maximales

```ad-definition

Sea $(A, \preceq)$ un CPO. Entonces:

1. Se dice que un elemento $a \in A$ es **maximal** si y sólo si no existe un $x \in A$ tal que $x \preceq a$ (con $x \neq a$).
2. Se dice que un elemento $a \in A$ es **minimal** si y sólo si no existe un $x \in A$ tal que $a \preceq x$ (con $x \neq a$).

```

Un CPO puede tener varios elementos maximales o minimales al mismo tiempo. Esta definición lleva una noción de **relatividad**.

```ad-example
title: Ejemplo.
collapse: open

Sea la relación definida por el siguiente diagrama de Hasse:

![[Maximales y minimales.excalidraw|width:40%]]

Aquí se cumple

- **Maximales:** $\left\{ d \right\}$
- **Minimales:** $\left\{ a, f \right\}$

```

### Mínimos y máximos

```ad-definition

Sea $(A, \preceq)$ un CPO. Entonces:

1. Se dice que un elemento $a \in A$ es **máximo** si y sólo si para todo $x \in A$ se cumple que $x \preceq a$.
2. Se dice que un elemento $a \in A$ es **mínimo** si y sólo si para todo $x \in A$ se cumple que $a \preceq x$.

```

Contrario a los minimales y maximales, los máximos y mínimos llevan la noción de **globalidad**.
