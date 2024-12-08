```ad-definition

Sean $a$ y $b$ números enteros, decimos que **$a$ divide a $b$, denotado con $a \mid b$, si existe un número entero $c$ tal que $b = ac$.**

En otras palabras, dados dos números enteros $a$ y $b$,

$$
a \mid b \iff \exists k \in \Z : b = ak
$$

```

**Ejemplos:**

-  $1 \mid 5$
- $3 \mid 12$
- $-3 \mid 12$
- $-3 \mid 0$
- $0 \mid 0$

## Propiedades

`````ad-proposition
title: Propiedades básicas

Dado cualquier entero $n$,

1. $1 \mid n$
2. $n \mid n$

y dados tres números enteros $a,b,c$,

3. $(a \mid b \quad\text{y}\quad a \mid c) \implies a \mid (b + c)$
4. $(a \mid b \quad\text{y}\quad a \mid c) \implies a \mid (b - c)$

```ad-proof
title: Demostración (Propiedad 3).
collapse: closed

$$
\begin{align}
ak &= b \quad (k \in \Z) \\
al &= c \quad (k \in \Z) \\
\implies ak + al &= b + c \\
a(k + l) &= b + c
\end{align}
$$

Como $k + l$ es entero, entonces $a \mid b + c$.
$$\qed$$

```


`````

Las propiedades 3 y 4 se pueden generalizar de la siguiente manera:

````ad-proposition
title: Propiedad

Si un número divide a otros dos, el primero también dividirá a cualquier combinación escalada o sumada de ellos.

En otras palabras, sean $a,b,c,m,n$ números enteros. Entonces,

$$
(a \mid b \quad \text{y} \quad a \mid c) \implies a \mid (mb + nc)
$$

```ad-proof
collapse: closed

Sean $a,b,c,m,n$ números enteros cualesquiera tales que $a \mid b$ y $a \mid c$. 

$$
\begin{align}
b &= ak && (k \in \Z) \\
\cdot m &\quad \cdot m \\
\implies bm &= (ak)m \\
\iff mb &= akm \quad & (1)
\end{align}
$$

Además,

$$
\begin{align}
c &= al && (l \in \Z) \\
\cdot n &\quad \cdot n \\
\implies cn &= (al)n \\
\iff nc &= aln & (1)
\end{align}
$$

Como observamos que $a \mid mb$ y $a \mid nc$, entonces por la propiedad 3 se cumple que $a \mid (mb + nc)$.
$$\qed$$

```

````

Además, la divisibilidad también es **transitiva**.

`````ad-theorem
title: Teorema (Transitividad de la divisibilidad).

Sean $a,b,c$ números enteros cualesquiera. Entonces,

$$
(a \mid b \quad\text{y}\quad b \mid c) \implies a \mid c
$$

```ad-proof
collapse: closed

Sean $a,b,c$ números enteros tales que $a \mid b$ y $b \mid c$. Entonces,

$$
\begin{align}
b &= ak && (k \in \Z) && (1) \\
c &= bl && (l \in \Z) && (2) \\
(1) \implies bl &= akl \\
\implies c &= akl \\
\implies c &= a(kl)
\end{align}
$$

Por lo tanto, $a \mid c$ por definición.
$$\qed$$

```

`````

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

**Ejemplos:**

- $12$ es par.
- $0$ es par.
- $17$ es impar.
- $-25$ es impar.

`````ad-proposition
title: Propiedades

1. La suma de dos números pares es par.
2. La suma de dos números impares es par.
3. El producto de un número par con otro entero es par.
4. El producto de dos números impares es impar.

```ad-proof
title: Demostración (propiedad 4)
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
## Algoritmo de la división

```ad-theorem

Sean $a,d$ números enteros con $d \neq 0$. Entonces, existe un **único** par de números enteros $q$ y $r$ (llamados cociente y resto de la división) tales que

$$
a = qd + r
$$

donde $0 \leq r < d$.

```

Ejemplos:

- Para $a = 10$ y $d = 3$ tenemos que $q = 3$ y $r = 1$. Es decir, al dividir $10$ entre $3$ obtenemos cociente $3$ y resto $1$.
