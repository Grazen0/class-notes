```ad-definition
title: Definición (límite).

Se dice que

$$
\lim_{x \to x_{0}} f(x) = L
$$

si, y solo si

$$
\forall \varepsilon > 0, \ \exists \delta > 0 : \left(0 < |x - x_{0}| < \delta \implies \left| f(x) - L \right| < \varepsilon\right)
$$

```

`````ad-theorem
title: Teorema (unicidad del límite).

El límite está **bien definido**. Es decir, es **único**.

$$
\lim_{x \to x_{0}} f(x) = L\ \land\ \lim_{x \to x_{0}} f(x) = M \implies L = M
$$

````ad-proof
collapse: closed

```ad-proposition
title: Lema 1.

Sea $x$ un número real no negativo, entonces:

$$
(\forall a > 0,\ x < a) \implies x = 0
$$

```

Nuestras hipótesis son:

$$
\begin{align}
\forall \varepsilon_{1} > 0, \exists \delta_{1} > 0 : \left( 0 < |x - x_{0}| < \delta_{1} \implies |f(x) - L| < \varepsilon_{1} \right) \\
\forall \varepsilon_{2} > 0, \exists \delta_{2} > 0 : \left( 0 < |x - x_{0}| < \delta_{2} \implies |f(x) - M| < \varepsilon_{2} \right)
\end{align}
$$

Primero, demostraremos lo siguiente:

$$
\forall a > 0,\ |L - M| < a
$$

Entonces, sea $a > 0$. Escogeremos $\varepsilon_{1} = \varepsilon_{2} = \frac{a}{2}$, y asumiremos $0 < |x - x_{0}| < \min(\delta_{1}, \delta_{2})$ de forma que se cumplan ambas premisas que establecen las hipótesis. También nótese que:

$$
\begin{align}
|L - M| = |L - f(x) + f(x) - M| &\leq |L - f(x)| + |f(x) - M| \\
&= |f(x) - L| + |f(x) - M|
\end{align}
$$

Ahora, tomamos las proposiciones de las hipótesis:

$$
\begin{align}
|f(x) - L| &< \varepsilon_{1} \\
|f(x) - M| &< \varepsilon_{2} \\
\hline
|f(x) - L| + |f(x) - M| &< \underbrace{\varepsilon_{1}}_{\frac{a}{2}} + \underbrace{\varepsilon_{2}}_{\frac{a}{2}} \\
|L - M | \leq |f(x) - L| + |f(x) - M| &< a \\
|L - M| &< a
\end{align}
$$

Entonces, como esto se cumple para todo $a > 0$, se cumple que $L - M = 0$ por el lema 1. Entonces, $L = M$.
$$\qed$$


````

`````

`````ad-theorem
title: Teorema (teorema del sándwich).

Si $g(x) \leq f(x) \leq h(x)$ en algún intervalo alrededor de $x_{0}$, y se cumple que

$$
\lim_{x \to x_{0}} g(x) = \lim_{x \to x_{0}} h(x) = L
$$

entonces

$$
\lim_{x \to x_{0}} f(x) = L
$$

```ad-proof
collapse: closed

Nuestras hipótesis son

$$
\begin{align}
\forall \varepsilon_{1} > 0,\ \exists \delta_{1} > 0 : (0 < |x - x_{0}| < \delta_{1} \implies |g(x) - L| < \varepsilon_{1} \\
\forall \varepsilon_{2} > 0,\ \exists \delta_{2} > 0 : (0 < |x - x_{0}| < \delta_{2} \implies |h(x) - L| < \varepsilon_{2} \\
\end{align}
$$

y

$$
g(x) \leq f(x) \leq h(x)
$$

en algún intervalo alrededor de $x = x_{0}$.

Ahora, tenemos que demostrar que

$$
\forall \varepsilon > 0,\ \exists \delta > 0 : (0 < |x - x_{0}| < \delta \implies |f(x) - L| < \varepsilon
$$

Entonces, sea $\varepsilon > 0$. Escogeremos $\delta = \min(\delta_{1}, \delta_{2})$ y asumiremos que $0 < |x - x_{0}| < \delta$. Ahora, escogeremos $\varepsilon_{1} = \varepsilon_{2} = \varepsilon$, de forma que se cumplen

$$
\begin{gather}
|g(x) - L| < \varepsilon_{1} = \varepsilon \\
L - \varepsilon < g(x) < L + \varepsilon

\end{gather}
$$

y

$$
\begin{gather}
|h(x) - L| < \varepsilon_{2} = \varepsilon \\
L - \varepsilon < h(x) < L + \varepsilon
\end{gather}
$$

Juntando ambas ecuaciones y $g(x) \leq f(x) \leq h(x)$:

$$
\begin{gather}
L - \varepsilon < g(x) \leq f(x) \leq h(x) < L + \varepsilon \\
L - \varepsilon < f(x) < L + \varepsilon \\
|f(x) - L| < \varepsilon \\
\end{gather}
$$

Y esto es lo que era por demostrarse.
$$\qed$$

```

`````

Algunos ejercicios interesantes de hoy:

$$
\prod_{n=2}^{\infty} \frac{n^{3}-1}{n^{3}+1}
$$

$$
\lim_{n \to \infty} (a^{n}+b^{n})^{\frac{1}{n}}
$$
