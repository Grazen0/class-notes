---
id: 1732503972-series-de-potencia-e-integrales-impropias
aliases:
  - Series de potencia e integrales impropias
tags:
  - mates/vecto
createdAt: 2024-11-24 22:06
---

# Series de potencia e integrales impropias

## Series de potencia

Una serie de potencia es de la forma

$$
\sum_{n=0}^{\infty} c_n (x - a)^n
.$$

### Radio de convergencia

Las series de potencia pueden converger o divergir dependiendo del valor de $x$. Cuando ocurre que dicha serie converge en el intervalo $|x - a| < R$, es decir cuando

$$
a - R < x < a + R
,$$

entonces le llamamos a $R$ el **radio de convergencia**.

El radio de convergencia se suele calcular usando la [[1716917783-series-y-criterios-de-convergencia#Prueba del cociente/raíz|prueba del cociente o la raíz]].

### Series de Taylor

Por el teorema de Taylor, una función $f(x)$ se puede escribir como la serie

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

## Integrales impropias

> [!DEFINITION] Definición (integrales impropias).
> Sea $f$ una función definida en $(a, +\infty)$ (o en $(-\infty, a)$ para el segundo caso). Entonces, definimos las siguientes integrales como:
> 
> $$
> \int_{a}^{\infty} f(x) \, dx := \lim_{t \to \infty}  \int_{a}^{t} f(x) \, dx
> ,$$
> 
> $$
> \int_{\infty}^{a} f(x) \, dx := \lim_{t \to \infty}  \int_{t}^{a} f(x) \, dx
> $$

Son integrales cuyos límites de integración incluyen al infinito. Se calculan con límites.
