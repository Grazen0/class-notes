```ad-definition

Sea $A$ una matriz cuadrada de $n \times n$. Entonces, una factorización LU de $A$ es

$$
A = LU
,$$

donde $L$ es triangular inferior y $U$ es triangular superior.

```

La factorización LU tiene utilidad para resolver una cantidad múltiple de sistemas de ecuaciones con la **misma matriz de coeficientes**. Es decir, una colección de sistemas como

$$
A\mathbf{x} = \mathbf{b}_1, \quad A\mathbf{x} = \mathbf{b}_2, \quad \ldots, \quad A\mathbf{x} = \mathbf{b}_p
.$$

## Método de Doolittle

Si aplicamos las operaciones elementales a $A$ para obtener una matriz triangular superior $U$,

$$
E_k \ldots E_2 E_1A = U
,$$

entonces podemos obtener $L$ mediante

$$
L = E_1^{-1}E_2^{-1}\ldots E_k^{-1}
,$$

y se puede comprobar que esta matriz será triangular inferior.
