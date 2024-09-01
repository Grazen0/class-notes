Una [[S1 - Matrices|matriz]] cuadrada $A \in M_{n \times n}$  es **invertible** si y sólo si tiene inversa.

```ad-definition

Sea $A \in M_{n \times n}$ una matriz invertible, entonces la única matriz $A^{-1}$ tal que $A^{-1}A = A \, A^{-1} = I_{n}$.

```

En otras palabras, la inversa de una matriz es aquella que multiplicada con ella dé como resultado la matriz identidad.

Existe una fórmula simple para la inversa de matrices de orden $2$, al menos.

```ad-proposition
title: Matriz inversa de orden $2$

Sea $A = \begin{bmatrix} a & b \\ c & d\end{bmatrix}$. Entonces la inversa de $A$ es igual a

$$
A^{-1} = \frac{1}{ad - bc} \begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
.$$

```

Sin embargo, existe un método más general para hallar la inversa de matrices de cualquier orden.

## Pasos para hallar una inversa

Para hallar la inversa de una matriz $A \in M_{n \times n}$, se debe armar una matriz de $n \times 2n$ con $A$ a la izquierda y a la identidad de la derecha.

$$
\left[ \begin{array}{c|c}
A & I_{n}
\end{array} \right] 
$$

Luego, se deben aplicar [[S2A - Operaciones elementales y matriz escalonada|operaciones elementales]] a esta matriz hasta llegar a tener la matriz identidad a la izquierda.

$$
\left[ \begin{array}{c|c}
A & I_{n}
\end{array} \right] 
\xrightarrow{\text{Op. elementales}}
\left[ \begin{array}{c|c}
I_{n} & A^{-1}
\end{array} \right] 
.$$

Entonces, lo que tendremos a la derecha será la matriz inversa de $A$.

```ad-example
title: Ejemplo.
collapse: open

Calcule la matriz inversa de $A = \begin{bmatrix} 1 & -1 & 3 \\ 0 & 2 & 4 \\ 0 & 0 & -5\end{bmatrix}$.

**Resolución:**

$$
\begin{array}{rrl}
\left[ \begin{array}{ccc|ccc}
1 & -1 & 3 & 1 & 0 & 0 \\
0 & 2 & 4 & 0 & 1 & 0 \\
0 & 0 & -5 & 0 & 0 & 1
\end{array} \right]
& \xrightarrow{f_{2} \to \frac{1}{2}f_{2}} &
\left[ \begin{array}{ccc|ccc}
1 & -1 & 3 & 1 & 0 & 0 \\
0 & 1 & 2 & 0 & \frac{1}{2} & 0 \\
0 & 0 & -5 & 0 & 0 & 1
\end{array} \right] \\

& \xrightarrow{f_{3} \to -\frac{1}{5}f_{3}} &
\left[ \begin{array}{ccc|ccc}
1 & -1 & 3 & 1 & 0 & 0 \\
0 & 1 & 2 & 0 & \frac{1}{2} & 0 \\
0 & 0 & 1 & 0 & 0 & -\frac{1}{5}
\end{array} \right] \\

& \xrightarrow{f_{2} \to f_{2}-2f_{3}} &
\left[ \begin{array}{ccc|ccc}
1 & -1 & 3 & 1 & 0 & 0 \\
0 & 1 & 0 & 0 & \frac{1}{2} & \frac{2}{5} \\
0 & 0 & 1 & 0 & 0 & -\frac{1}{5}
\end{array} \right] \\

& \xrightarrow{f_{1} \to f_{1}-3f_{3}} &
\left[ \begin{array}{ccc|ccc}
1 & -1 & 0 & 1 & 0 & \frac{3}{5} \\
0 & 1 & 0 & 0 & \frac{1}{2} & \frac{2}{5} \\
0 & 0 & 1 & 0 & 0 & -\frac{1}{5}
\end{array} \right] \\

& \xrightarrow{f_{1} \to f_{1}+f_{2}} &
\left[ \begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & \frac{1}{2} & 1 \\
0 & 1 & 0 & 0 & \frac{1}{2} & \frac{2}{5} \\
0 & 0 & 1 & 0 & 0 & -\frac{1}{5}
\end{array} \right] \\

\end{array}
$$

```
