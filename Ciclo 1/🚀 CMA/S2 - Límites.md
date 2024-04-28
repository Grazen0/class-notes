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
title: Lema

Sea $x$ un número real no negativo, entonces:

$$
(\forall a > 0\ (x < a)) \implies x = 0
$$

```

Nuestras hipótesis son:

$$
\begin{align}
\forall \varepsilon_{1} > 0, \exists \delta_{1} > 0\ : \left( 0 < |x - x_{0}| < \delta_{1} \implies |f(x) - L| < \varepsilon_{1} \right) \\
\forall \varepsilon_{2} > 0, \exists \delta_{2} > 0\ : \left( 0 < |x - x_{0}| < \delta_{2} \implies |f(x) - M| < \varepsilon_{2} \right)
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

Entonces, como esto se cumple para todo $a > 0$, se cumple que $L - M = 0$ por el lema. Entonces, $L = M$.
$$\qed$$


````



`````

