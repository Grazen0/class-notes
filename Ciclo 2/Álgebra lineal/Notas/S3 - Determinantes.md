```ad-definition

Sea $A = (a_{ij})$ una matriz cuadrada de $n \times n$. Entonces, la determinante de $A$ es

$$
\lvert A \rvert = \begin{cases}
1 & n = 0 \\
\sum_{j=1}^{n} (-1)^{i+j} \cdot a_{ij} \cdot \lvert A_{ij} \rvert & n > 0
,\end{cases}
$$

donde $A_{ij}$ representa la matriz que resulta de *eliminar* la fila $i$ y la columna $j$, y además $i$ puede ser cualquier entero entre $1$ y $n$.

```

La determinante de una [[S1 - Matrices|matriz]] representa la **escala** de una unidad de espacio transformada usando dicha matriz como una transformación lineal. De cierta forma, es una representación de por qué factor la matriz "estira" (o posiblemente "encoge") el espacio.

La determinante de una matriz $A$ se denota como $\det\!\left( A \right)$ o $\lvert A \rvert$.

La definición presentada arriba se conoce como el **método de expansión de cofactores** para calcular la determinante.

Además, la determinante de una matriz de $2 \times 2$ es sencilla:

```ad-proposition
title: Determinante de $2 \times 2$.

Sea $A = \begin{bmatrix} a & b \\ c & d\end{bmatrix}$. Entonces, la determinante de $A$ es igual a

$$
\lvert A \rvert = ad - bc
.$$

```

```ad-example
title: Ejemplo.
collapse: closed

Calcule la determinante de $A = \begin{bmatrix}4 & -1 & 1 \\ 4 & 5 & 3 \\ 2 & 0 & 0\end{bmatrix}$.

**Resolución:** (Usando la primera fila)

$$
\begin{align}
\lvert A \rvert &= 4 \begin{vmatrix}
5 & 3 \\
0 & 0
\end{vmatrix}
- (-1) \begin{vmatrix}
4 & 3 \\
2 & 0
\end{vmatrix}
+ 1 \begin{vmatrix}
4 & 5 \\
2 & 0
\end{vmatrix} \\
&= 4(5 \cdot 0 - 3 \cdot 0) + (4 \cdot 0 - 3 \cdot 2) + (4 \cdot 0 - 5 \cdot 2) \\
\lvert A \rvert &= 4(0) - 6 - 10 = -16
\end{align}
$$

```

## Propiedades

- Si $A$ es **triangular**, entonces $\lvert A \rvert$ es el **producto de la diagonal principal**.
- $\lvert c \cdot A \rvert = c^{n}\lvert A \rvert$ para toda matriz $A$ de $n \times n$.
- Si $B$ es igual a $A$ con alguna fila o columna cambiada, entonces $\lvert A \rvert = -\lvert B \rvert$.
- 