Dada una función $f$, podemos calcular la tasa de cambio de $f$ entre dos puntos.

La **tasa de cambio promedio** de $f(x)$ con respecto al cambio en $x$ en el intervalo $[x, x + \Delta x]$ es $\frac{\Delta f}{\Delta x}$, que representa la pendiente de la recta secante entre ambos puntos.

De esta manera, además:

$$
\frac{\Delta f}{\Delta x} = \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

```ad-definition

La derivada de una función $f$ con respecto a la variable $x$ se define como:

$$
\frac{dy}{dx} := \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

```

La derivada se describe como

- tasa de cambio instantánea;
- variación;

y es la **pendiente de la recta tangente** a la función en un punto determinado.

## Límites y continuidad

Se dice que una función $f$ es **continua** en $x = a$ si y solo si:

1. Existe $f(a)$.
2. Existe $\lim_{x \to a} f(x)$.
3. $\lim_{x \to a} f(x) = f(a)$.
