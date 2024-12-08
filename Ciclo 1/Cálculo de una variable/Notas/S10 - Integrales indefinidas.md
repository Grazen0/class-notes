```ad-theorem

Si $F$ es una antiderivada de $f$ en un intervalo $I$, entonces la antiderivada *general* de $f$ en $I$ es

$$
F(x) + C
$$

donde $C$ es una constante arbitraria.

```

$$
\int f(x) \, dx = F(x) + C \quad \text{donde } \frac{dF}{dx} = f(x)
$$

## Reglas de integración

$$
\begin{align}
\int f(x) + g(x) \, dx &= \int f(x) \, dx + \int g(x) \, dx \\
\int cf(x) \, dx &= c\int f(x) \, dx
\end{align}
$$

$$
\int x^{n} \, dx = \frac{x^{n + 1}}{n + 1} + C \quad \text{para $n \neq -1$}
$$

$$
\int \frac{1}{x} \, dx = \ln|x| + C
$$

$$
\int e^{x} \, dx = e^{x} + C
$$

$$
\begin{align}
\int \sin(x) \, dx &= -\cos(x) + C \\
\int \cos(x) \, dx &= \sin(x) + C
\end{align}
$$

## Método de sustitución

$$
\int f(g(x))g'(x) \, dx = \int f(u) \, du \quad \text{donde $u = g(x)$}
$$

## Integración por partes

"**U**n **D**ía **V**i **U**na **V**aca **V**estida **D**e **U**niforme 🐮"

$$
\int u \, dv = uv - \int v \, du
$$
