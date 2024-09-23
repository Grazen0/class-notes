```ad-definition
title: Definición (espacio vectorial).

Un espacio vectorial es un **espacio euclidiano** $\R^m$ junto con dos operaciones en $\R^m$:

1. **Suma:** $\mathbf{x} + \mathbf{y} = (x_1+y_1,x_2+y_2,\ldots,x_m+y_m)$
2. **Producto por escalar:** $\lambda \mathbf{x} = (\lambda x_1, \lambda x_2, \ldots, \lambda x_m)$

```

En otras palabras, un espacio vectorial es **un conjunto de vectores** equipado con reglas de suma y multiplicación por números reales.

Los elementos de $\R^m$ son llamados **vectores** de $m$ dimensiones.

Cumplen las siguientes propiedades:

- $\mathbf{x} + (\mathbf{y} + \mathbf{z}) = (\mathbf{x} + \mathbf{y}) + \mathbf{z}$.
- $\mathbf{x} + \mathbf{y} = \mathbf{y} + \mathbf{x}$.
- Existe un elemento $\mathbf{0}$ tal que $\mathbf{x} + \mathbf{0} = \mathbf{x}$.
- Existe un elemento $\mathbf{1}$ tal que $\mathbf{1}\mathbf{x} = \mathbf{x}$.
- Para todo $\mathbf{x}$ existe un $\mathbf{y}$ tal que $\mathbf{x} + \mathbf{y} = \mathbf{0}$.
- $a(b\mathbf{x}) = (ab)\mathbf{x}$.
- $a(\mathbf{x} + \mathbf{y}) = a\mathbf{x} + a\mathbf{y}$.
- $(a + b)\mathbf{x} = a\mathbf{x} + b\mathbf{x}$.

```ad-definition
title: Definición (subespacio vectorial).

Sean $V \subseteq \R^m$. Entonces, $V$ es un **subespacio vectorial** de $\R^m$ si y sólo si

1. $\mathbf{0} \in V$, y
2. $V$ está **cerrado** bajo la suma y producto por escalar.

```

Los subespacios vectoriales de $\R^2$, por ejemplo, son

1. el mismo $\R^2$,
2. todas las rectas que pasan por el oriGen, y
3. el conjunto unitario $\left\{ \mathbf{0} \right\}$.

## Combinaciones lineales

```ad-definition
title: Definición (combinación lineal).


Un vector $\mathbf{v} \in \R^m$ es una **combinación lineal** de los vectores $\mathbf{u}_1, \mathbf{u}_2,\ldots, \mathbf{u}_n \in \R^m$ si y sólo si existen $x_1,x_2,\ldots,x_n$ tales que

$$
\mathbf{v} = x_1\mathbf{u}_1 + x_2\mathbf{u}_2 + \ldots + x_n\mathbf{u}_n
.$$

```

Como resultado, podemos observar que un vector $\mathbf{v}$ es combinación lineal de $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_n$ si y sólo si el sistema

$$
\begin{bmatrix}
\mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_n
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix} = \mathbf{v}
$$

es consistente.

## Independencia lineal

```ad-definition

Decimos que los vectores $\mathbf{v}_1, \mathbf{v}_2,\ldots \mathbf{v}_n$ son **linealmente independientes** si y sólo si el sistema

$$
\begin{bmatrix}
\mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix} \begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix} = \mathbf{0}
$$

tiene **solución única**.

```

Nótese que esto es equivalente a decir que un conjunto de vectores son linealmente independientes cuando, por así decirlo, "no se puede regresar al $0$" con ellos.

Comprobar la independencia lineal de un conjunto de vectores es **analizar un sistema de ecuaciones homogéneo**.

## Base y dimensión

```ad-definition
title: Definición (espacio generado).

Sea $\left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\} \subseteq \R^m$ un conjunto de vectores. Entonces, el **espacio generado** de estos vectores es el conjunto de **todas las combinaciones lineales** de ellos. Esto es,

$$
\operatorname{Gen}(\left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\}) = \left\{ \mathbf{x} \in \R^m \lmid \mathbf{x} = x_1\mathbf{v}_1 + x_2\mathbf{v}_2 + \ldots + x_n\mathbf{v}_n, x_i \in \R \right\}
$$

```

Es decir, el espacio generado de un conjunto de vectores es todo el espacio que pueden "alcanzar" con combinaciones lineales.

```ad-definition
title: Definición (base).

Sea $V \subseteq \R^m$ un subespacio vectorial y $\left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\} \subseteq V$ un conjunto de vectores. Entonces, estos vectores forman una **base** de $V$ si y sólo si

1. $\left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\}$ son linealmente independientes, y
2. $\operatorname{Gen}(\left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\}) = V$ (es decir, los vectores generan $V$).

```

Es decir, la base de un subespacio vectorial es un conjunto de vectores que lo generan.

```ad-definition
title: Definición (dimensión).

La **dimensión** de un espacio vectorial $V$, denotado como $\operatorname{dim}(V)$ es la cantidad de vectores que tiene su base.

```

La noción de "dimensión" encaja con la noción intuitiva de "dimensiones" de un espacio. Un subespacio vectorial que consiste de una recta, por ejemplo, tiene dimensión 1.
