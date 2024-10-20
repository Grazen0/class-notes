```ad-definition
title: Definición (espacio columna).

El **espacio columna** de una matriz es el **subespacio generado** por sus columnas. Es decir, sea

$$
A = \begin{bmatrix}
\mathbf{c}_1 & \mathbf{c}_2 & \cdots & \mathbf{c}_n
\end{bmatrix}
,$$

entonces

$$
\operatorname{col}(A) = \operatorname{Gen}(\left\{ \mathbf{c}_1, \mathbf{c}_2, \ldots, \mathbf{c}_n \right\})
.$$

```

```ad-definition
title: Definición (espacio fila).

El **espacio fila** de una matriz es el **subespacio generado por sus filas**. Es decir, sea

$$
A = \begin{bmatrix}
\mathbf{f}_1 \\
\mathbf{f}_2 \\
\vdots \\
\mathbf{f}_n
\end{bmatrix}
,$$

entonces

$$
\operatorname{row}(A) = \operatorname{Gen}(\left\{ \mathbf{f}_1, \mathbf{f}_2, \ldots, \mathbf{f}_n \right\})
.$$

```

Al espacio columna, fila y nulo se les conoce como **subespacios fundamentales** de la matriz $A$.

A partir de este punto, podemos comenzar a pensar en las matrices como *colecciones de vectores* (ya sea en vertical u horizontal) y analizar sus propiedades con esto en mente.

```ad-proposition
title: Propiedad.

Las operaciones elementales **por filas** no cambian el espacio fila de una matriz.

Análogamente, las operaciones elementales **por columnas** no cambian el espacio columna de una matriz.

```

### Relación con los sistemas de ecuaciones

Resulta que el sistema

$$
A\mathbf{x} = \mathbf{b}
$$

tiene alguna solución si $\mathbf{b} \in \operatorname{col}(A)$.

Es decir, el sistema tiene alguna solución si $\mathbf{b}$ se puede expresar como combinación lineal de las columnas de $A$.

## Rango y nulidad

Usando los conceptos que hemos aprendido hasta el momento, finalmente podemos definir apropiadamente al rango de una matriz.

Por alguna razón, el rango tiene dos significados diferentes.

```ad-definition
title: Definición (rango de una matriz).

El **rango** de una matriz $A$ es la dimensión común de su espacio fila y espacio columna. Es decir,

$$
\operatorname{rank}(A) = \operatorname{dim}(\operatorname{col}(A)) = \operatorname{dim}(\operatorname{row}(A))
.$$

```

```ad-definition
title: Definición (rango de una transformación).

Sea $T$ una transformación. El **rango** o **imagen** de $T$ son todos los vectores en $W$ que son imágenes bajo $T$ de al menos un vector en $V$. Es decir,

$$
\operatorname{Im}(T) = \left\{ \mathbf{b} \in W \lmid \mathbf{b} = T(\mathbf{x}), \mathbf{x} \in V \right\}
.$$

```

```ad-definition
title: Definición (nulidad).

La **nulidad** de una matriz $A$, denotada como $\operatorname{v}(A)$, es la dimensión de su espacio nulo.

```

*(No tengo ni idea de por qué se escribe con $\operatorname{v}$, pero yo que sé)*

Existe un teorema importante que relaciona a estas dos ideas.

```ad-theorem

Sea $A$ una matriz de $n$ columnas. Entonces,

$$
\operatorname{rank}(A) + \operatorname{v}(A) = n
.$$

```

### Relación con los sistemas de ecuaciones

1. El **rango** de $A$ es igual al número de **variables pivotes** en $A\mathbf{x} = \mathbf{0}$.
2. La **nulidad** de $A$ es igual al número de **variables libres** en $A\mathbf{x} = \mathbf{0}$.

## Bases de los espacios fundamentales

Existe un proceso para hallar algunas bases de los espacios fundamentales de una matriz.

Sea $A$ una matriz de $m \times n$. Si la escalonamos y convertimos en

$$
[A \mid I_m] \longrightarrow [R  \mid E]
,$$

entonces:

1. Una base para $\operatorname{row}(A)$ son las $r$ filas pivote de $R$.
2. Una base para $\operatorname{col}(A)$ son las $r$ columnas pivote de $A$.
3. Una base para $\operatorname{null}(A^{T})$ son las últimas $m - r$ filas de $E$.

```ad-example
title: Ejemplo
collapse: closed

Sea la matriz

$$
A = \begin{bmatrix}
\textcolor{red}{-1} & \textcolor{red}{-2} & 0 & 4 & 5 & -3 \\
\textcolor{red}{-3} & \textcolor{red}{-7} & 2 & 0 & 1 & 4 \\
\textcolor{red}{-2} & \textcolor{red}{-5} & 2 & 4 & 6 & 1 \\
\textcolor{red}{-4} & \textcolor{red}{-9} & 2 & -4 & -4 & 7
\end{bmatrix}
.$$

Entonces, la forma escalonada de $[A \mid I_4]$ es igual a

$$
[R \mid E] = \left[\begin{array}{cccccc|cccc}
\textcolor{blue}{1} & \textcolor{blue}{0} & \textcolor{blue}{-4} & \textcolor{blue}{-28} & \textcolor{blue}{-37} & \textcolor{blue}{13} & 0 & 0 & -\frac{9}{2} & 1 \\
\textcolor{blue}{0} & \textcolor{blue}{1} & \textcolor{blue}{-2} & \textcolor{blue}{-12} & \textcolor{blue}{-16} & \textcolor{blue}{{5}} & 0 & 0 & -2 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & \textcolor{yellow}{1} & \textcolor{yellow}{0} & \textcolor{yellow}{-\frac{1}{2}} & \textcolor{yellow}{\frac{1}{2}} \\
0 & 0 & 0 & 0 & 0 & 0 & \textcolor{yellow}{0} & \textcolor{yellow}{1} & \textcolor{yellow}{-\frac{1}{2}} & \textcolor{yellow}{-\frac{1}{2}}
\end{array}\right]
$$

por lo que

$$
\begin{align}
\operatorname{row}(A) &= \operatorname{Gen} \left\{ \begin{bmatrix}
\textcolor{blue}{1} \\ \textcolor{blue}{0} \\ \textcolor{blue}{-4} \\ \textcolor{blue}{-28} \\ \textcolor{blue}{-37} \\ \textcolor{blue}{13}
\end{bmatrix}, \begin{bmatrix}
\textcolor{blue}{0} \\ \textcolor{blue}{1} \\ \textcolor{blue}{-2} \\ \textcolor{blue}{-12} \\ \textcolor{blue}{-16} \\ \textcolor{blue}{5}
\end{bmatrix} \right\} \\

\operatorname{col}(A) &= \operatorname{Gen} \left\{ \begin{bmatrix}
\textcolor{red}{-1} \\ \textcolor{red}{-3} \\ \textcolor{red}{-2} \\ \textcolor{red}{-4}
\end{bmatrix}, \begin{bmatrix}
\textcolor{red}{-2} \\ \textcolor{red}{-7} \\ \textcolor{red}{-5} \\ \textcolor{red}{-9}
\end{bmatrix} \right\} \\

\operatorname{Nu}(A^T) &= \operatorname{Gen} \left\{
\begin{bmatrix}
\textcolor{yellow}{1} \\ \textcolor{yellow}{0} \\ \textcolor{yellow}{-\frac{1}{2}} \\ \textcolor{yellow}{\frac{1}{2}}
\end{bmatrix}, \begin{bmatrix}
\textcolor{yellow}{0} \\ \textcolor{yellow}{1} \\ \textcolor{yellow}{-\frac{1}{2}} \\ \textcolor{yellow}{-\frac{1}{2}}
\end{bmatrix}
\right\}
.\end{align}
$$

```
