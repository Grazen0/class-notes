```ad-definition
title: Definición (serie).

Una **serie** es el límite de las sumas parciales de una sucesión. Es decir, tiene la forma

$$
\lim_{N \to \infty} \sum_{n=0}^{N} a_n
,$$

y, para abreviar, se denota como

$$
\sum_{n=0}^{\infty} a_n
.$$

```

Informalmente, podemos decir que una serie es una "suma infinita".

Existen series **convergentes** y **divergentes**.

## Series importantes

### Series geométricas

$$
a + ar + ar^2 + ar^3 + \ldots = \sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}
$$

Esta serie **converge si y sólo si $|r| < 1$.**

En general, si la serie no comenzara en $n = 0$ o la potencia fuese $n \pm \text{algo}$, podemos reemplazar en la fórmula a $a$ por el primer término de la serie, cualquiera que fuese.

### Series P

$$
1 + \frac{1}{2^p} + \frac{1}{3^p} + \ldots = \sum_{n=1}^{\infty} \frac{1}{n^p}
$$

Esta serie converge si y sólo si $p > 1$.

El caso particular donde $p = 1$ se llama **serie armónica**, y diverge.

$$
1 + \frac{1}{2} + \frac{1}{3} + \ldots = \sum_{n=1}^{\infty} \frac{1}{n}
$$

## Criterios de convergencia/divergencia

Sea $\left\{ a_n \right\}$ una sucesión y $S = \sum_{n=0}^{\infty}a_n$.

### Prueba del término enésimo

Intuitivamente, si ocurre que

$$
\lim_{n \to \infty} a_n \neq 0
,$$

entonces $S$ **diverge**.

### Prueba del cociente/raíz

Tómese el límite

$$
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = L
,$$

o alternativamente

$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = L
.$$

Entonces:

- Si $L < 1$, entonces $S$ **converge**.
- Si $L > 1$, entonces $S$ **diverge**.

Si $L = 0$, no se puede deducir nada en particular.

### Prueba de serie alternante

Si $a_n$ se puede expresar de la forma

$$
a_n = (-1)^n b_n
$$

donde $b_n$ es **positivo**, **no creciente** y **converge a $0$,** entonces $S$ converge.
