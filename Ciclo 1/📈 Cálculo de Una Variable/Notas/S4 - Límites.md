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

Una función $f$ es continua si y solo si, para todo $a \in \dom f$,

$$
\lim_{x \to a} f(x) = f(a)
$$

## Formas indeterminadas

$\frac{0}{0}$, $\infty - \infty$, $0 \cdot \infty$, $\frac{\infty}{\infty}$, $1^{\infty}$, $0^{0}$, $\infty^{0}$

Para levantar indeterminaciones, se emplean ciertas manipulaciones:

- Factorizando y simplificando.
- En presencia de radicales, multiplicar por la **conjugada**.
