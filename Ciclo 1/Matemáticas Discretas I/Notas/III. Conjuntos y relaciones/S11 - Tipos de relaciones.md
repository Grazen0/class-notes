Las relaciones se pueden clasificar según algunas propiedades específicas.

## Relación reflexiva

```ad-definition

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es **reflexiva** si y sólo si

$$
\forall a \in A : (a,a) \in R
.$$

O de la misma manera

$$
\forall a \in A : a \mathbin{R} a
.$$

```

Por ejemplo, la siguiente relación en $A = \left\{ 1, 2, 4 \right\}$ es reflexiva:

$$
\begin{align}
R_{1} &= \left\{ (1, 1), (2, 4), (4, 4), (2, 1), (2, 2) \right\} \\
\end{align}
$$

Y la siguiente relación en $\R$ también es reflexiva:

$$
R_{2} = \left\{ (x, y) \in \R^{2} \lmid x \leq y \right\}
$$

### Observaciones

Sea $R$ una relación en $A$.

1. Para demostrar que $R$ no es reflexiva, basta con encontrar un elemento $a \in A$ tal que $(a, a) \notin R$.
2. Al realizar la **digráfica** de $R$, si $R$ es reflexiva entonces todos los puntos en la gráfica tendrán un "bucle" de cada punto a sí mismo.

## Relación simétrica

```ad-definition

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es **simétrica** si y sólo si

$$
\forall a,b \in A : \left( (a, b) \in R \implies (b, a) \in R \right)
.$$

O de la misma manera

$$
\forall a,b \in A : \left( a \mathbin{R} b \implies b \mathbin{R} a \right)
.$$

```

Al ubicar una relación simétrica en el plano cartesiano, existirá una simetría en con respecto a la diagonal.

![[Relacion simetrica.excalidraw]]

### Observaciones

1. Puede ocurrir en la definición que $a = b$. No se asume necesariamente que $a \neq b$.
2. Al trazar la digráfica de una relación simétrica, si se traza $a \to b$ entonces también se traza $b \to a$.
3. Si $R = \varnothing$, entonces $R$ es simétrica por defecto.

## Relación transitiva

```ad-definition

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es **transitiva** si y sólo si

$$
\forall a,b,c \in A : \left( (a, b) \in R \land (b, c) \in R \right) \implies (a, c) \in R
.$$

O de la misma manera

$$
\forall a,b,c \in A : (a \mathbin{R} b \land b \mathbin{R} c) \implies a \mathbin{R} c
.$$

```

Por ejemplo: $R_{1 \ldots 3}$ son relaciones transitivas, y $R_{4}$ no es transitiva.

$$
\begin{align}
R_{1} &= \left\{ (1, 2), (3, 3), (2, 4), (1, 4) \right\} \\
R_{2} &= \left\{ (3, 5) \right\} \\
R_{3} &= \left\{ (3, 6), (2, 4) \right\} \\
R_{4} &= \left\{ (2, 3), (2, 2), (3, 2) \right\}
\end{align}
$$

```ad-hint
title: Observación

Al analizar la transitividad de una relación, **podemos ignorar los pares ordenados de componentes iguales (de la forma $(a,a)$)**.

Es decir, cualquier elemento $(a, a) \in R$ emparejado con cualquier otro cumple automáticamente la propiedad de transitividad.

```

## Relación antisimétrica

```ad-definition
title: Definición.

Sea $A$ un conjunto y $R$ una relación en $A$. Entonces, $R$ es una **relación antisimétrica** si y sólo si:

$$
\forall a, b \in A : ((a, b) \in R \land a \neq b) \implies (b, a) \notin R
.$$

O de la misma manera:

$$
\forall a,b \in A : (a \mathbin{R} b \land a \neq b) \implies b \mathbin{\not R} a
.$$

Otra definición equivalente es

$$
\forall a,b \in A : ((a,b) \in R \land (b,a) \in R) \implies a = b
,$$

es decir

$$
\forall a,b \in A : (a \mathbin{R} b \land b \mathbin{R} a) \implies a = b
.$$

```

En la digráfica de una relación antisimétrica, **no existen puntos unidos en ambas direcciones**.
