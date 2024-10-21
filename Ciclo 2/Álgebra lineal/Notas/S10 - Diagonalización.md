```ad-definition
title: Definición (semejanza).

Sean $A$ y $B$ matrices cuadradas. Decimos que $B$ es **semejante** a $A$ si y sólo si existe una matriz invertible $P$ tal que

$$
B = P^{-1}AP
.$$

```

Si $B$ es semejante a $A$, se cumplen las siguientes propiedades:

- $|B| = |A|$.
- $A$ es semejante a $B$.

```ad-definition
title: Definición (diagonalizabilidad).

Se dice que una matriz $A$ es **diagonalizable** si y sólo si es **semejante a alguna matriz diagonal**.

Es decir, cuando existe una matriz invertible $P$ tal que $P^{-1}AP = D$ es diagonal.

En dicho caso, se dice que $P$ **diagonaliza** a $A$.

```

## Teoremas

```ad-theorem

Si dos matrices son semejantes, entonces tienen los mismos valores propios.

```

Los siguientes teoremas nos da una base para saber si una matriz es diagonalizable o no.

```ad-theorem

Una matriz $A$ de $n \times n$ es diagonalizable si y sólo si tiene $n$ vectores propios linealmente independientes.

```

```ad-theorem

Si $\lambda_1, \lambda_2,\ldots,\lambda_k$ son valores propios **distintos** de una matriz $A$, y $\mathbf{v}_1,\mathbf{v_2},\ldots,\mathbf{v}_k$ sus correspondientes vectores propios, entonces **estos últimos son linealmente independientes**.

```

Por lo  tanto, tenemos el siguiente corolario.

```ad-proposition
title: Corolario.

Una matriz de $n \times n$ con $n$ valores propios distintos es diagonalizable.

```

También encontramos la siguiente relación directa con la multiplicidad geométrica.

```ad-theorem

Una matriz $A$ es diagonalizable si y sólo si

$$
\operatorname{mg}(\lambda) = \operatorname{ma}(\lambda)
$$

para todo valor propio $\lambda$ de $A$.

```


## Proceso de diagonalización

```ad-theorem

Sea $A$ una matriz de $n \times n$ con valores propios distintos $\lambda_1,\lambda_2\ldots,\lambda_n$, y sean $\mathbf{v}_1,\mathbf{v}_2,\ldots,\mathbf{v}_n$ sus vectores propios respectivos. Entonces, existe una matriz diagonal

$$
D = P^{-1}AP
,$$

donde

$$
D = \begin{bmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n
\end{bmatrix}
$$

y además

$$
P = \begin{bmatrix}
\mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix}
.$$

```

Por este teorema, podemos establecer el siguiente proceso para diagonalizar una matriz $A$:

1. Verificar que $A$ es diagonalizable buscando sus $n$ vectores propios y comprobando su independencia lineal.
2. Construir la matriz $P$ con dichos vectores.
3. Opcionalmente, construir la matriz $D$ con los valores propios obtenidos.
