---
id: 1718670200-integral-definida-y-suma-de-riemann
aliases:
  - Integral definida y suma de Riemann
tags:
  - mates/c1v
createdAt: 2024-06-17 19:23
---

# Integral definida y suma de Riemann

> [!DEFINITION]
> Definimos la **integral definida** de la siguiente manera:
> 
> $$
> \int_{a}^{b} f(x) \, dx := \lim_{n \to \infty} \sum_{i=1}^{n} f(x_{i}) \Delta x
> $$

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

> [!THEOREM] Teorema (TVM para integrales)
> Sea $f$ una función continua en $(a, b)$. Entonces, existe un $c \in (a, b)$ tal que
> 
> $$
> f(c) = \frac{1}{b - a} \int_{b}^{a} f(x) \, dx
> .$$

### Teoremas fundamentales del cálculo

> [!THEOREM] Teorema (TFC #1)
> $$
> \frac{d}{dx} \int_{a}^{x} f(t) \, dt = f(x)
> $$

> [!THEOREM] Teorema (TFC #2)
> Sea $f$ una función continua en $[a, b]$. Entonces
> 
> $$
> \int_{a}^{b} f(x) \, dx = F(b) - F(a)
> $$
> donde $F(x)$ es cualquier antiderivada de $f(x)$.

## Sustitución con integral definida

Para hacer sustituciones, tenemos que cambiar los **límites de integración**.

$$
\int_{a}^{b} f(g(x))g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du
$$
