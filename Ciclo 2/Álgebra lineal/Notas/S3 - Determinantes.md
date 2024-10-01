```ad-definition

Sea $A = (a_{ij})$ una matriz cuadrada de $n \times n$. Entonces, la determinante de $A$ es

$$
\lvert A \rvert = \begin{cases}
1 & n = 0 \\
\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \lvert A_{ij} \rvert & n > 0
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
- $\lvert A \rvert = \lvert A^{T} \rvert$.
- Si $A$ tiene alguna fila (o columna) nula, entonces $\lvert A \rvert = 0$.
- Si alguna fila de $A$ es una **combinación lineal** de las otras filas, entonces $\lvert A \rvert = 0$.

### Operaciones elementales

- Si $B$ se obtiene de sumar un **múltiplo de una fila** de $A$ a otra, entonces $\lvert B \rvert = \lvert A \rvert$.
- Si $B$ se obtiene de **intercambiar algún par de filas** de $A$, entonces $\lvert B \rvert = -\lvert A \rvert$.
- Si $B$ se obtiene de **multiplicar por una constante** $c$ alguna fila de $A$, entonces $\lvert B \rvert = c\,\lvert A \rvert$.

#### Derivados

- $\lvert c \cdot A \rvert = c^{n}\lvert A \rvert$ para toda matriz $A$ de $n \times n$.
- $\lvert A \cdot B\rvert = \lvert A \rvert \cdot \lvert B \rvert$.

### Relación con la inversa

```ad-theorem

Una matriz $A$ es **[[S2B - Matriz inversa|invertible]]** si y sólo si $\lvert A \rvert \neq 0$.

```

Además, la intuición del significado de un determinante nos lleva a deducir que

$$
\lvert A^{-1} \rvert = \frac{1}{\lvert A \rvert}
.$$

## Matriz inversa mediante la adjunta

Gracias a la determinante, podemos hallar la **inversa** de una matriz $A$ con la fórmula

$$
\lvert A \rvert = \frac{1}{\lvert A \rvert } \cdot \operatorname{adj}(A)
,$$

donde

$$
\operatorname{adj}(A) = (\operatorname{cof}(A))^{T}
,$$

donde $\operatorname{cof}(A) = c_{ij}$ tal que

$$
c_{ij} = (-1)^{i+j} \cdot \lvert A_{ij} \rvert 
.$$

```ad-example
title: Ejemplo.
collapse: open

Calcular la inversa de $A = \begin{bmatrix} 4 & -1 & 1 \\ 4 & 5 & 3 \\ 2 & 0 & 0\end{bmatrix}$.

**Resolución:**

$$
\begin{align}
A^{-1} &= \frac{1}{\lvert A \rvert} \cdot \begin{vmatrix}
\begin{vmatrix}
5 & 3 \\
0 & 0
\end{vmatrix} & -\begin{vmatrix}
4 & 3 \\
2 & 0
\end{vmatrix} & \begin{vmatrix}
4 & 5 \\
2 & 0
\end{vmatrix} \\
-\begin{vmatrix}
-1 & 1 \\
0 & 0
\end{vmatrix} & \begin{vmatrix}
4 & 1 \\
2 & 0
\end{vmatrix} & -\begin{vmatrix}
4 & -1 \\
2 & 0
\end{vmatrix} \\
\begin{vmatrix}
-1 & 1 \\
5 & 3
\end{vmatrix} & -\begin{vmatrix}
4 & 1 \\
4 & 3
\end{vmatrix} & \begin{vmatrix}
4 & -1 \\
4 & 5
\end{vmatrix}
\end{vmatrix}^{T} \\
&= \frac{1}{\lvert A \rvert} \cdot \begin{vmatrix}
0 & 6 & -10 \\
0 & -2 & -2 \\
-8 & -8 & 24
\end{vmatrix}^{T} \\
&= \frac{1}{\lvert A \rvert} \cdot \begin{vmatrix}
0 & 0 & -8 \\
6 & -2 & -8 \\
-10 & -2 & 24
\end{vmatrix}
.\end{align}
$$

Ya que $\lvert A \rvert = -16$, finalmente obtenemos

$$
\begin{align}
A^{-1} &= \frac{1}{-16} \cdot \begin{vmatrix}
0 & 0 & -8 \\
6 & -2 & -8 \\
-10 & -2 & 24
\end{vmatrix} \\
A^{-1} &= \begin{vmatrix}
0 & 0 & \frac{1}{2} \\
-\frac{3}{8} & \frac{1}{8} & \frac{1}{2} \\
\frac{5}{8} & \frac{1}{8} & -\frac{3}{2}
\end{vmatrix}
.\end{align}
$$

```
