```ad-definition

Una **matriz** de $m \times n$ es un arreglo de elementos distribuidos en $m$ filas y $n$ columnas.

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m_{2}} & \dots & a_{mn}
\end{bmatrix}_{m \times n}
$$

También se denota como $A = (a_{ij}) \in M_{m \times n}$.

Se dice que $m \times n$ es el **orden** de la matriz.
```

## Igualdad de matrices

Dos matrices $A$ y $B$ son iguales si y sólo si se cumplen dos condiciones:

- $A$ y $B$ son del mismo tamaño.
- Para todo $i = 1,2, \ldots, m$ y $j = 1,2, \ldots, n$ se cumple que $a_{ij} = b_{ij}$.

## Operaciones con matrices

### Multiplicación por un escalar

Sean $\lambda \in \R$ y $A = (a_{ij}) \in M_{m \times n}$. Entonces, $\lambda \cdot A = (m_{ij}) \in M_{m \times n}$ donde

$$
m_{ij} = \lambda \cdot a_{ij}
.$$

Es decir, multiplicar una matriz por un escalar es multiplicar todos sus elementos por dicho escalar.

### Suma/resta de matrices

Sean $A, B \in M_{m \times n}$ matrices definidas por $A = (a_{ij})$ y $B = (b_{ij})$. Entonces, $A + B = (s_{ij}) \in M_{m \times n}$, donde

$$
s_{ij} = a_{ij} + b_{ij}
.$$

Es decir, sumar matrices es sumar sus elementos correspondientemente.

La resta es análoga a la suma.

### Multiplicación de matrices

Sean las matrices $A = (a_{ij}) \in M_{m \times n}$ y $B = (b_{ij}) \in M_{n \times p}$. Entonces $AB = (c_{ij}) \in M_{m \times p}$, donde

$$
c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}
$$

```ad-info
title: Vector fila por vector columna
collapse: closed

Aparentemente, en este curso se define el resultado de un vector fila por un vector columna *no como una matriz de $1 \times 1$*, sino como el componente mismo de dicha matriz.

Entonces, dadas las matrices $A = (a_{ij}) \in M_{1 \times n}$ y $B = (b_{ij}) \in M_{n \times 1}$, se define su producto como

$$
AB = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n}
\end{bmatrix} \begin{bmatrix}
b_{11} \\
b_{21} \\
\vdots \\
b_{n_{1}}
\end{bmatrix} = a_{11}b_{11} + a_{12}b_{21} + \dots + a_{1n}b_{n_{1}}
.$$

```

### Transposición

Sea $A = (a_{ij}) \in M_{m \times n}$. Entonces, la matriz **traspuesta** de $A$, denotada por $A^{T} \in M_{n \times m}$, se define como

$$
A^{T} = (a_{ji})
.$$

Por ejemplo:

$$
\begin{bmatrix}
1 & 3 & -2 \\
2 & -4 & 7
\end{bmatrix}^{T} = \begin{bmatrix}
1 & 2 \\
3 & -4 \\
-2 & 7
\end{bmatrix}
$$

## Matrices especiales

### Matriz cero

Es una matriz cuyos elementos son todos $0$.

$$
\begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix},\
\begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{bmatrix},\
\begin{bmatrix}
0 & 0
\end{bmatrix}
$$

### Matriz cuadrada

Una matriz $A \in M_{m \times n}$ es cuadrada si y sólo si $m = n$.

Cuando hablamos de matrices cuadradas, el **orden de $A$** es simplemente $m$ (o $n$).

$$
\begin{bmatrix}
2 & 3 \\
-1 & 7
\end{bmatrix},\
\begin{bmatrix}
3 & 9 & -2 \\
-10 & 1 & 0 \\
-8 & 5 & 7
\end{bmatrix}
$$

### Matriz identidad

Es una matriz de elementos $0$ excepto en su diagonal, donde son $1$.

$$
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix},\
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix},\
\begin{bmatrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

### Matriz diagonal

Es una matriz de componentes $0$ excepto en su diagonal. donde pueden ser cualquier número.

$$
\begin{bmatrix}
2 & 0 & 0 \\
0 & -3 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

### Matriz triangular

#### Triangular superior

Una matriz cuadrada de orden $n$ es **triangular superior** si y sólo si todos los componentes por debajo de la diagonal principal son $0$.

$$
\begin{bmatrix}
3 & 0 & 2 \\
0 & 2 & -4 \\
0 & 0 & 7
\end{bmatrix}
$$

#### Triangular inferior

Análogo a la matriz triangular superior.

$$
\begin{bmatrix}
8 & 0 & 0 \\
2 & 3 & 0 \\
1 & 2 & 5
\end{bmatrix}
$$

### Matriz simétrica

Una matriz cuadrada $A = (a_{ij})$ de orden $n$ es simétrica si y sólo si $a_{ij} = a_{ji}$ para todo $i, j \in \left\{ 1,2, \ldots n \right\}$.

$$
\begin{bmatrix}
2 & 9 & 3 \\
9 & -1 & 4 \\
3 & 4 & 0
\end{bmatrix}
$$

### Matriz antisimétrica

Una matriz cuadrada $A = (a_{ij})$ de orden $n$ es antisimétrica si y sólo si $a_{ij} = -a_{ji}$ para todo $i,j \in \left\{ 1,2,\ldots,n \right\}$.

$$
\begin{bmatrix}
3 & 2 & -4 \\
-2 & 1 & 8 \\
4 & -8 & 5
\end{bmatrix}
$$
