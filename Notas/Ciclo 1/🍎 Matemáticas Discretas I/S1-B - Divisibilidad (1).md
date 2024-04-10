```ad-definition

Sean $a$ y $b$ números enteros, decimos que **$a$ divide a $b$, denotado con $a \mid b$, si existe un número entero $c$ tal que $b = ac$.**

En otras palabras, dados dos números enteros $a$ y $b$,

$$
a \mid b \iff \exists k \in \Z : b = ak
$$

```

Ejemplos:

-  $1 \mid 5$
- $3 \mid 12$
- $-3 \mid 12$
- $-3 \mid 0$
- $0 \mid 0$

## Paridad

```ad-definition

Un número que es divisible por 2 es llamado **par**. Es decir, un entero $n$ es par si existe un número entero $k$ tal que $n = 2k$.

Un número que no es divisible por 2 es llamado **impar**. Es decir, un entero $n$ es impar si existe un número entero $k$ tal que $n = 2k + 1$.

En otras palabras, dado un número entero $n$,

$$
\begin{align}
n \text{ es par } &\iff \exists k \in \Z : n = 2k \\
n\text{ es impar } &\iff \exists k \in \Z : n = 2k + 1
\end{align}
$$

```

### Ejemplos

- $12$ es par.
- $0$ es par.
- $17$ es impar.
- $-25$ es impar.

`````ad-theorem

La suma de dos números pares es par.

```ad-proof
collapse: closed

Sean $a$ y $b$ números enteros pares cualesquiera. Entonces, existen enteros $m$ y $n$ tales que $a = 2m$ y $b = 2n$.

Entonces, la suma de $a$ y $b$ resulta en

$$
\begin{align}
a + b &= 2m + 2n \\
      &= 2(m + n) \\
a + b &= 2q & \text{donde } q=m+n
\end{align}
$$

Observamos que $q$ es entero porque es la suma de dos enteros. Por lo tanto, $a + b$ se puede representar de la forma $2q$ donde $q$ es un entero. Entonces, $a + b$ es, por definición, par.
$$\qed$$

```

`````

`````ad-theorem

La suma de dos números impares es par.

```ad-proof
collapse: closed

Sean dos números impares cualesquiera $2a + 1$ y $2b + 1$, donde $a$ y $b$ son enteros. Entonces,

$$
\begin{align}
(2a + 1) + (2b + 1) &= 2a + 2b + 2 \\
                    &= 2(a + b + 1)
\end{align}
$$

Como $a + b + 1$ es suma de enteros, también es entero, y por lo tanto la suma de ambos números es par.
$$\qed$$

```

`````

`````ad-theorem

El producto de un número par con otro entero es par.

```ad-proof
collapse: closed

Sea $2a$ un número par cualquiera donde $a$ es entero, y $b$ un entero. Entonces, el producto de ambos números resulta en

$$
\begin{align}
(2a)(b) &= 2ab \\
        &= 2(ab)
\end{align}
$$

Como $ab$ es producto de enteros, también es entero. Por lo tanto, el producto de ambos números es par.
$$\qed$$

```

`````

`````ad-theorem

El producto de dos números impares es impar.

```ad-proof
collapse: closed

Sean $2a + 1$ y $2b + 1$ números impares cualesquiera, donde $a$ y $b$ son números enteros enteros. Entonces, el producto de ambos números resulta en

$$
\begin{align}
(2a + 1)(2b + 1) &= 4ab + 2a + 2b + 1 \\
                 &= 2(2ab + a + b) + 1
\end{align}
$$

Como $2ab + a + b$ es suma de enteros, también es entero. Por  lo tanto, el producto de ambos números es impar por definición.
$$\qed$$

```

`````
