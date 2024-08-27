Las siguientes operaciones a una matriz se llaman **operaciones elementales**.

| Operación                               |                     Notación                     |
| --------------------------------------- | :----------------------------------------------: |
| Intercambio de filas                    |          $f_{i} \leftrightarrow f_{j}$           |
| Multiplicación de fila por constante    | $f_{i} \to \lambda f_{i} \quad (\lambda \neq 0)$ |
| Adición del múltiplo de una fila a otra |        $f_{i} \to f_{i} + \lambda f_{j}$         |

Por ejemplo:

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
\xrightarrow{f_{2} \leftrightarrow f_{3}}
\begin{bmatrix}
1 & 2 & 3 \\
7 & 8 & 9 \\
4 & 5 & 6
\end{bmatrix}
\xrightarrow{f_{1} \to 3f_{1}}
\begin{bmatrix}
3 & 6 & 9 \\
7 & 8 & 9 \\
4 & 5 & 6
\end{bmatrix}
$$

## Matrices elementales

```ad-definition

Una matriz es **elemental** si y solo si es el resultado de aplicar una operación elemental a la matriz identidad.

```

Las matrices elementales representan las operaciones elementales en forma de una matriz.

De cierta forma, contienen la información de las operaciones elementales, y se pueden aplicar a otra matriz multiplicándolas.

### Intercambio de filas ($f_{i} \leftrightarrow f_{j}$)

Por ejemplo, para intercambiar las filas $3$ y $4$:

$$
E = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{bmatrix}
$$

### Multiplicación de fila por constante ($f_{i} \to \lambda f_{i}$)

Por ejemplo, para multiplicar la fila $2$ por la constante $4$:

$$
E = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 4 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

### Adición del múltiplo de una fila ($f_{i} \to f_{i} + \lambda f_{j}$)

Por ejemplo, para sumar $3$ veces la fila $2$ a la fila $1$:

$$
E = \begin{bmatrix}
1 & 3 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

## Equivalencia de matrices

```ad-definition

Dos matrices son **equivalentes por filas** si y solo si podemos obtener una a partir de la otra aplicando operaciones elementales.

```

Por ejemplo, las matrices $A = \begin{bmatrix} 2 & 1 \\ 4 & 1 \end{bmatrix}$ y $B = \begin{bmatrix} 2 & 1 \\ 10 & 4 \end{bmatrix}$ son equivalentes, ya que podemos llegar de $A$ a $B$ de la siguiente forma:

$$
\begin{bmatrix}
2 & 1 \\
4 & 1
\end{bmatrix}
\xrightarrow{f_{2} \to f_{2} + 3f_{1}}
$$

## Matriz escalonada por filas

```ad-definition
title: Definición (fila nula).

Una fila es **nula** si y solo si todos sus elementos son iguales a $0$.

```

```ad-definition
title: Definición (pivote).

El pivote de una fila *no nula* es el primer elemento diferente de $0$ en la fila (empezando por la izquierda).

```

```ad-definition

Una matriz es **escalonada por filas** si y solo si se cumple que

- todas sus filas nulas (si existen) se encuentran abajo de la matriz, y
- el pivote de cada fila está a la izquierda del pivote de la fila siguiente.

```

Una matriz escalonada por filas se ve algo así, por ejemplo:

$$
\begin{bmatrix}
* & * & * & * & * & * \\
0 & * & * & * & * & * \\
0 & 0 & 0 & * & * & * \\
0 & 0 & 0 & 0 & * & * \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

Además, si se cumple que

- todos los pivotes de la matriz son iguales a $1$, y
- en cada fila, el pivote es el único elemento no nulo de su columna,

entonces la matriz está en forma **escalonada reducida por filas** (ERF).

$$
\begin{bmatrix}
1 & 0 & * & 0 & 0 & * \\
0 & 1 & * & 0 & 0 & * \\
0 & 0 & 0 & 1 & 0 & * \\
0 & 0 & 0 & 0 & 1 & * \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

## Matriz inversa

(Una matriz $A \in M_{n \times n}$  es **invertible** si y solo si tiene inversa)

```ad-definition

Sea $A \in M_{n \times n}$ una matriz invertible, entonces la única matriz $A^{-1}$ tal que $A^{-1}A = A \, A^{-1} = I_{n}$.

```

```ad-proposition
title: Matriz inversa de $2 \times 2$

Sea $A = \begin{bmatrix} a & b \\ c & d\end{bmatrix}$. Entonces la inversa de $A$ es igual a

$$
A^{-1} = \frac{1}{ad - bc} \begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
.$$

```

### Pasos para hallar una inversa

Para hallar la inversa de una matriz $A \in M_{n \times n}$, se debe armar una matriz de $n \times 2n$, de la forma

$$
\left[ \begin{array}{c|c}
A & I_{n}
\end{array} \right] 
.$$
