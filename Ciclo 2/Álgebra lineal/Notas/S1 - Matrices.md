
```ad-definition

Una **matriz** de $m \times n$ es un arreglo de elementos distribuidos en $m$ filas y $n$ columnas.

$$
A = \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} \\
\vdots \\
a_{m1}
\end{bmatrix}_{m \times n}
$$

También se escribe

$$
A = (a_{ij})
,$$

donde

$$
\begin{align}
i &= 1,2, \ldots, m \\
j &= 1,2, \ldots, n
.\end{align}
$$

```

## Igualdad de matrices

Dos matrices $A$ y $B$ son iguales si y solo si se cumplen dos condiciones:

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

#### Vector fila por vector columna

Sean las matrices $A = (a_{ij}) \in M_{1 \times n}$ y $B = (b_{ij}) \in M_{n \times 1}$. Entonces

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

#### Caso general

Sean las matrices $A = (a_{ij}) \in M_{m \times n}$ y $B = (b_{ij}) \in M_{n \times p}$. Entonces $AB = (c_{ij}) \in M_{m \times p}$, donde

$$
c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}
$$

### Transposición

Sea $A = (a_{ij}) \in M_{m \times n}$. Entonces, la matriz **traspuesta** de $A$, denotada por $A^{T} \in M_{n \times m}$, se define como

$$
A^{T} = (a_{ji})
.$$

## Matrices especiales

### Matriz cero

Es una matriz cuyos elementos son todos $0$.

### Matriz cuadrada

Una matriz $A \in M_{m \times n}$ es cuadrada si y solo si $m = n$.

Cuando hablamos de matrices cuadradas, $m$ (o $n$) es el **orden de $A$**.

### Matriz identidad

Es una matriz de elementos $0$ excepto en su diagonal, donde son $1$.

### Matriz triangular

#### Triangular superior

Una matriz cuadrada de orden $n$ es **triangular superior** si y solo si todos los componentes por debajo de la diagonal principal son $0$.

#### Triangular inferior

### Matriz simétrica

### Matriz antisimétrica
