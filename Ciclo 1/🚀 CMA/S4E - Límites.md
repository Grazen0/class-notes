1. Demuestre usando la definición formal:

- $\lim_{x \to 0} \frac{x}{1 + \sin (x^{2})} = 0$.

Sea $\varepsilon > 0$, escogeremos $\delta = \varepsilon$ y asumiremos que $0 < |x| < \delta$. Entonces:

$$
\left|\frac{x}{1 + \sin^{2}(x)}\right| = \frac{|x|}{1 + \sin^{2}(x)}
$$

Pero

$$
\begin{gather}
0 \leq \sin^{2}(x) \leq 1 \\
1 \leq 1 + \sin^{2}(x) \leq 2 \\
\frac{1}{2} \leq \frac{1}{1 + \sin^{2}(x)} \leq 1
\end{gather}
$$

Así que

$$
\begin{align}
\frac{|x|}{1 + \sin^{2}(x)} < |x| < \delta = \varepsilon
\end{align}
$$
$$\qed$$
