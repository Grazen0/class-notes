## Integral definida

```ad-definition

Definimos la **integral definida** de la siguiente manera:

$$
\int_{a}^{b} f(x) \, dx := \lim_{n \to \infty} \sum_{i=1}^{n} f(x_{i}) \Delta x
$$

```

### Propiedades

$$
\int_{a}^{b} f(x) \, dx \leq \int_{a}^{b} g(x) \, dx \iff f(x) \leq g(x)
$$

$$
\int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx
$$

$$
\int_{a}^{b} f(x) \, dx = -\int_{b}^{a} f(x) \, dx
$$

## Teoremas

```ad-theorem
title: Teorema (TVM para integrales).

Sea $f$ una función continua en $(a, b)$. Entonces, existe un $c \in (a, b)$ tal que

$$
f(c) = \frac{1}{b - a} \int_{b}^{a} f(x) \, dx
.$$

```

### Teoremas fundamentales del cálculo

Primer teorema fundamental:

$$
\frac{d}{dx} \int_{a}^{x} f(t) \, dt = f(x)
$$

Segundo teorema fundamental:

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a) \quad \text{donde $F'(x) = f(x)$}
$$
