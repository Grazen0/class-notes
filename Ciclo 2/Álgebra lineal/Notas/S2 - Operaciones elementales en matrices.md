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
T = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{bmatrix}
$$

### Multiplicación de fila por constante ($f_{i} \to \lambda f_{i}$)

Por ejemplo, para multiplicar la fila $2$ por la constante $4$:

$$
T = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 4 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

### Adición del múltiplo de una fila ($f_{i} \to f_{i} + \lambda f_{j}$)

Por ejemplo, para sumar $3$ veces la fila $2$ a la fila $1$:

$$
T = \begin{bmatrix}
1 & 3 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
