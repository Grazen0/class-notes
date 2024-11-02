```ad-theorem

Todo espcacio vectorial de producto interno finito y no nulo tiene una base ortonormal.

```

```ad-definition

La descomposición QR de una matriz $A$ es una factorización de dicha matriz en la forma

$$
A = QR
,$$

donde $Q$ es ortonormal y del mismo tamaño de $A$, y $R$ es triangular superior.

```

Si $A$ es invertible, entonces esta factorización es única.

## Proceso de factorización QR

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
