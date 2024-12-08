## Tasas de cambio promedio

Dada una función $f$, podemos calcular la tasa de cambio de $f$ entre dos puntos.

La **tasa de cambio promedio** de $f(x)$ con respecto al cambio en $x$ en el intervalo $[x, x + \Delta x]$ es $\frac{\Delta f}{\Delta x}$, que representa la pendiente de la recta secante entre ambos puntos.

De esta manera, además:

$$
\frac{\Delta f}{\Delta x} = \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

## La derivada

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

Se dice que una función $f$ es **continua** en $x = a$ si y sólo si:

1. Existe $f(a)$.
2. Existe $\lim_{x \to a} f(x)$.
3. $\lim_{x \to a} f(x) = f(a)$.

```ad-theorem

Si una función es derivable, entonces es continua.

```

## Teoremas importantes

```ad-theorem
title: Teorema (teorema de Rolle).

Una función $f$, continua en $[a, b]$, derivable en $(a, b)$ con $f(a) = f(b)$, tiene al menos un valor de $x = c$ entre $a$ y $b$ donde $f'(c) = 0$.


```

Es decir, dada una función continua y un intervalo de extremos a la misma altura, existe algún punto dentro de ese intervalo donde $f'(x) = 0$.

```ad-theorem
title: Teorema (teorema del valor medio).

Una función $f$ continua en $[a, b]$, derivable en $(a, b)$, tiene al menos un valor de $x = c$ entre $a$ y $b$ donde:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$


```

Es decir, la derivada de una función continua en algún intervalo tomará en algún punto el valor de la tasa de cambio promedio de aquel intervalo.

## Reglas de derivación

### Reglas generales

$$
\begin{align}
& (c)' = 0 \\
& (cf)' = cf' \\
& (f \pm g)' = f' +g' \\
& (fg)' = f'g + fg' \\
& \left( \frac{f}{g} \right)' = \frac{f'g - fg'}{g^{2}} \\
\end{align}
$$

### Regla de la potencia

$$
(x^{n})' = nx^{n-1}
$$
