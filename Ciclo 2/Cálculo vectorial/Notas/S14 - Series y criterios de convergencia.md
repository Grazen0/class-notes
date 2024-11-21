```ad-definition

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

### Series de Taylor

Por el teorema de Taylor, una función $f(x)$ se puede escribir como

$$
f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \ldots = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n
.$$

El caso particular donde $a = 0$ se denomina **serie de Maclaurin**:

$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \ldots = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n
.$$

Si en una serie encontramos una serie de Taylor, podemos encontrar la función que la serie de Taylor aproxima para calcular el valor de la serie.

#### Series de Taylor importantes

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

$$
\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \ldots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
$$

$$
\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \ldots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
$$

## Radio de convergencia

Existen sucesiones que dependen de una variable externa. Es decir, sucesiones de la forma $a_n(x)$. En estos casos, las series de la forma

$$
\sum_{n=0}^{\infty}a_n(x)
$$

pueden converger o divergir dependiendo del valor de $x$. Cuando ocurre que dicha serie converge en el intervalo $|x - a| < R$, es decir

$$
a - R < x < a + R
,$$

entonces le llamamos a $R$ el **radio de convergencia**.

El radio de convergencia usualmente se puede calcular usando la prueba del cociente o de la raíz.

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
\lim_{n \to \infty} \sqrt[n]{a_n} = L
.$$

Entonces:

- Si $L < 1$, entonces $S$ **converge**.
- Si $L > 1$, entonces $S$ **diverge**.

Si $L = 0$, no se puede deducir nada en particular.
