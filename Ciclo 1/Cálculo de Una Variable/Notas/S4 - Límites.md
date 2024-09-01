Se dice que el límite de $f$, cuando $x$ se acerca a $a$ es igual a $L$, y se escribe

$$
\lim_{x \to a} f(x) = L
$$

si se cumple que:

$$
f(x) \to N(L) \iff x \to N(a)
$$

Es decir, **$f(x)$ se acerca al entorno de $L$ cuando $x$ se acerca al entorno de $L$.**

## Límites laterales

Límite lateral por la derecha:

$$
\lim_{x \to a^{+}} f(x) = L
$$

Límite lateral por la izquierda:

$$
\lim_{x \to a^{-}} f(x) = L
$$

```ad-theorem

Sea $f$ una función y $a \in \R$, entonces

$$
\lim_{x \to a} f(x) = L \iff \lim_{x \to a^{+}} f(x) = \lim_{x \to a^{-}} f(x) = L
$$

```

## Propiedades de los límites

Sean $f$ y $g$ funciones de variable real y $c \in \R$


$$
\begin{align}
& \lim_{x \to a} c = c \\
& \lim_{x \to a} cf(x) = c\left( \lim_{x \to a} f(x) \right) \\
& \lim_{x \to a} \left( f(x) \pm g(x) \right) = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x) \\
& \lim_{x \to a} f(x)g(x) = ( \lim_{x \to a} f(x) ) \\
& \lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a}f(x)}{\lim_{x \to a} g(x)} \qquad \text{dado $\lim_{x \to a} g(x) \neq 0$} \\
& \lim_{x \to a} f(x)^{g(x)} = \left( \lim_{x \to a} f(x) \right)^{\lim_{x \to a} g(x))}
\end{align}
$$
## Límites al infinito

$$
\begin{align}
\lim_{x \to a} f(x) = +\infty \\
\lim_{x \to a} f(x) = -\infty
\end{align}
$$

## Continuidad

Una función $f$ es continua si y sólo si, para todo $a \in \dom f$,

$$
\lim_{x \to a} f(x) = f(a)
$$

## Formas indeterminadas

$\frac{0}{0}$, $\infty - \infty$, $0 \cdot \infty$, $\frac{\infty}{\infty}$, $1^{\infty}$, $0^{0}$, $\infty^{0}$

Para levantar indeterminaciones, se emplean ciertas manipulaciones:

- Factorizando y simplificando.
- En presencia de radicales, multiplicar por la **conjugada**.

## Teorema del sándwich

```ad-theorem

Sean $f$, $g$ y $h$ funciones de variable real. Entonces, si $g(x) \leq f(x) \leq h(x)$ alrededor de $a$, se cumple que:

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L \implies \lim_{x \to a} f(x) = L
$$

```

`````ad-exercise
collapse: closed

Calcular $\lim_{x \to 0}x^{2}\sin\left( \frac{1}{x} \right)$.

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-0.2,0.2,-0.02,0.02]
disableZoom: false
grid: true
---
y = x^2*sin(1/x)
y = x^2
y = -x^2
```

Observamos que:

$$
\begin{gather}
-1 \leq \sin\left( \frac{1}{x} \right) \leq 1 \\
-x^{2} \leq x^{2}\sin\left( \frac{1}{x} \right) \leq x^{2}
\end{gather}
$$

Como $\lim_{x \to 0} x^{2} = \lim_{x \to 0} -x^{2} = 0$, entonces, de la misma forma,

$$
\lim_{x \to 0} x^{2}\sin\left( \frac{1}{x} \right) = 1
$$


`````

## Límites con valor absoluto

```ad-definition
title: Definición (valor absoluto).

Sea $x$ un número real. Entonces, el valor absoluto de $x$, denotado por $|x|$ se define de la siguiente manera:

$$
|x| = \begin{cases}
x  & \text{si $x \geq 0$} \\
-x & \text{si $x < 0$}
\end{cases}
$$


```

```ad-exercise
collapse: closed

Determine $\lim_{x \to 3} \frac{|x-3|}{2x-6}$.

$$
\begin{align}
\lim_{x \to 3} \frac{|x-3|}{2x-6} &= \lim_{x \to 3} \frac{|x-3|}{2(x-3)}
\end{align}
$$

**Límite por la derecha:**

$$
x > 3 \implies x - 3 > 0
$$

Por lo tanto,

$$
\begin{align}
\lim_{x \to 3^{+}} \frac{|x-3|}{(2(x-3))} &= \lim_{x \to \infty} \frac{\cancel{x-3}}{\cancel{2(x-3)}} \\
&= \frac{1}{2}
\end{align}
$$

**Límite por la derecha:**

$$
x < 3 \implies x - 3 < 0
$$

Por lo tanto,

$$
\begin{align}
\lim_{x \to 3^{+}} \frac{|x-3|}{(2(x-3))} &= \lim_{x \to \infty} \frac{-\cancel{(x-3)}}{\cancel{2(x-3)}} \\
&= -\frac{1}{2}
\end{align}
$$


Como los límites laterales son diferentes, entonces $\lim_{x \to 3} \frac{|x-3|}{2x-6}$ no existe.

```
