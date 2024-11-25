```ad-theorem

Todo espcacio vectorial de producto interno finito y no nulo tiene una base ortonormal.

```

## Factorización QR


```ad-definition

La descomposición QR de una matriz $A$ es una factorización de dicha matriz en la forma

$$
A = QR
,$$

donde $Q$ es ortonormal y del mismo tamaño de $A$, y $R$ es triangular superior.

```

Si $A$ es invertible, entonces esta factorización es única.

### Proceso de factorización QR

Sea la matriz $A = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n \end{bmatrix}$. Entonces, el proceso es el siguiente:

1. Convertir las columnas de $A$ en ortonormales con el proceso Gram-Schmidt.
2. Formar la matriz $Q = \begin{bmatrix} \mathbf{q}_1 & \mathbf{q}_2 & \cdots & \mathbf{q}_n \end{bmatrix}$ con los vectores ortonormalizados.
3. Formar la matriz $R$ mediante la siguiente fórmula:

$$
R = \begin{bmatrix}
\mathbf{q}_1 \cdot \mathbf{\mathbf{a}_1} & \mathbf{q}_1 \cdot \mathbf{a}_2 & \mathbf{q}_1 \cdot \mathbf{a}_3 & \cdots & \mathbf{q}_1 \cdot \mathbf{a}_n \\
0 & \mathbf{q}_2 \cdot \mathbf{a}_2 & \mathbf{q}_2 \cdot \mathbf{a}_3 & \cdots & \mathbf{q}_2 \cdot \mathbf{a}_n \\
0 & 0 & \mathbf{q}_3 \cdot \mathbf{a}_3 & \cdots & \mathbf{q}_3 \cdot \mathbf{a}_n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & \mathbf{q}_n \cdot \mathbf{a}_n
\end{bmatrix}
.$$

## Descomposición SVD

```ad-theorem

Si $A$ es una matriz, entonces $A^T A$ es simétrica.

Además, los valores propios de $A^T A$ son todos **reales no negativos**.

```

```ad-definition
title: Definición (valores singulares).

Sea $A$ una matriz tal que $A^TA$ tiene valores propios $\lambda_1, \lambda_2, \ldots, \lambda_n$. Entonces, los números


$$
\sigma_1 = \sqrt{\lambda_1}, \quad \sigma_2 = \sqrt{\lambda_2}, \quad \ldots, \quad \sigma_n = \sqrt{\lambda_n}
$$

son llamados **valores singulares** de $A$.

```

La descomposición SVD se define de la siguiente forma.

```ad-theorem
title: Teorema (descomposición de valores singulares).

Si $A$ es una matriz $m \times n$ de rango $k$, entonces $A$ puede expresarse de la forma

$$
A = U\Sigma V^T
,$$

donde:

1. $\Sigma$ es una matriz de $m \times n$ cuya diagonal son los valores singulares de $A$ en orden no decreciente,
2. $U$ es de $m \times m$ y diagonaliza ortogonalmente a $AA^T$, y
3. $V$ es de $n \times n$ y diagonaliza ortogonalmente a $A^T A$.

```

### Proceso de descomposición SVD

1. Calcular $A^T A$.
2. Formar $\Sigma$ con los valores singulares de $A$.
3. Encontrar los vectores propios ortonormales de $A^T A$.
	1. Formar $V$ con estos vectores propios.
4. Calcular $AA^T$.
5. Encontrar los vectores propios ortonormales de $AA^T$.
	1. Formar $U$ con estos vectores propios.

Sin embargo, podemos abreviar este último paso mediante la fórmula

$$
\mathbf{u}_i = \frac{1}{\sigma_i}A\mathbf{v}_i
.$$

(Es decir, podemos calcular las primeras columnas de $U$ con los datos que ya tenemos: los VS de $A$ y las columnas de $V$.)

Para hallar las columnas restantes de $U$, tenemos algunas opciones.

1. Usar **producto cruz** ($\mathbf{u}_3 = \frac{\mathbf{u_1} \times \mathbf{u}_2}{\lVert \mathbf{u}_1 \times \mathbf{u}_2 \rVert}$).
2. Armar un **sistema de ecuaciones** con el vector faltante, teniendo en cuenta que su **producto punto** con los vectores ya conocidos **debe ser $0$**
