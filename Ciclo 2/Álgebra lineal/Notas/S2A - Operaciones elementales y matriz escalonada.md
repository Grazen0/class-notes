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

Una matriz es **elemental** si y sólo si es el resultado de aplicar una operación elemental a la matriz identidad.

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

Dos matrices $A$ y $B$ son **equivalentes por filas** si y sólo si podemos obtener una a partir de la otra aplicando operaciones elementales. Esto se denota como $A \sim B$.

```

Por ejemplo, las matrices $A = \begin{bmatrix} 2 & 1 \\ 4 & 1 \end{bmatrix}$ y $B = \begin{bmatrix} 2 & 1 \\ 10 & 4 \end{bmatrix}$ son equivalentes, ya que podemos llegar de $A$ a $B$ de la siguiente forma:

$$
\begin{bmatrix}
2 & 1 \\
4 & 1
\end{bmatrix}
\xrightarrow{f_{2} \to f_{2} + 3f_{1}}
\begin{bmatrix}
2 & 1 \\
10 & 4
\end{bmatrix}
$$

## Matriz escalonada por filas

```ad-definition
title: Definición (fila nula).
collapse: closed

Una fila es **nula** si y sólo si todos sus elementos son iguales a $0$.

```

```ad-definition
title: Definición (pivote).
collapse: closed

El pivote de una fila *no nula* es el primer elemento diferente de $0$ en la fila (empezando por la izquierda).

```

```ad-definition

Una matriz es **escalonada por filas** si y sólo si se cumple que

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

```ad-definition
title: Definición (rango).
collapse: closed

El rango de una matriz $A$ es igual a la **cantidad de filas no nulas** de la matriz *escalonada* que se obtenga con operaciones elementales en $A$.

```

### Matriz escalonada reducida por filas

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

De  aquí obtenemos un resultado imporante:

```ad-theorem

Dos matrices son equivalentes por filas si (y solo si?) poseen la misma forma escalonada reducida.

```
