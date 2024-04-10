## Propiedades

1. $\forall n \in \Z\ (1 \mid n)$
2. $\forall n \in \Z\ (n \mid n)$
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

En general, las propiedades 3 y 4 se pueden generalizar de la siguiente manera:

````ad-theorem

Sean $a,b,c,m,n$ números enteros. Entonces,

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
```

````

`````ad-theorem
title: Teorema (Transitividad de la divisibilidad).

Si $a \mid b$ y $b \mid c$, entonces $a \mid c$.

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

## Algoritmo de la división

```ad-theorem

Sean $a,d$ números enteros con $d \neq 0$. Entonces, existe un **único** par de números enteros $q$ y $r$ (llamados cociente y resto de la división) tales que

$$
a = qd + r
$$

donde $0 \leq r < d$

```

Ejemplos:

- Para $a = 10$ y $d = 3$ tenemos que $q = 3$ y $r = 1$. Es decir, al dividir $10$ entre $3$ obtenemos cociente $3$ y resto $1$.
