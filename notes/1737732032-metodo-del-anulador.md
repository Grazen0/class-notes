---
id: 1737732032-metodo-del-anulador
aliases:
  - Método del anulador
tags:
  - mates/edo
createdAt: 2025-01-24 10:20
---

# Método del anulador

> [!DEFINITION] Definición (operador anulador)
> Consideremos a $L$ un operador lineal con coeficientes constantes, y a $f$ una función suficientemente derivable. Entonces, se dice que $L$ es un **anulador** de $f$ cuando
>
> $$
> L(f) = 0
> .$$

Podemos tomar como ejemplo al [[1737145455-operador-diferencial|operador diferencial]]:

- $D$ anula a la constante $k$, ya que $D(k) = \frac{d}{dx}(k) = 0$.
- $D^2$ anula a la función $x$, ya que $D^2(k) = \frac{d}{dx}(x) = 0$.
- $D^3$ anula a la función $x^2$, ya que $D^3(k) = \frac{d}{dx}(x^2) = 0$.

En general, algunos anuladores son:

- $D^{n+1}$ anula a cualquier polinomio de grado menor o igual que $n$.
- $D - \alpha$ anula a $e^{\alpha x}$.

Estas propiedades se pueden combinar con un *tremendo* abuso de notación. Por ejemplo, resulta de estos dos anuladores que

$$
L = (D - \alpha)^{n+1}
$$

anula a $x^n e^{\alpha x}$.

Otros anuladores son:

- $D^2 + \beta^2$ anula a $\sin(\beta x)$ y a $\cos(\beta x)$.
- $(D - \alpha)^2 + \beta^2$ anula a $e^{\alpha x}\cos(\beta x)$ y $e^{\alpha x}\sin(\beta x)$.

## Aplicación a las EDOs

Los operadores anuladores se pueden usar para expresar el [[1737417193-ecuaciones-diferenciales-lineales-no-homogeneas#mtodo-de-coeficientes-indeterminados|método de coeficientes indeterminados]].

Consideremos una ED lineal no homogénea de la forma

$$
ay'' + by' + cy = g(x)
.$$

Entonces, si conseguimos un operador $D$ que anule a $g(x)$, entonces podemos expresar esta ED de forma *homogénea* como

$$
\begin{align*}
D(ay'' + by' + cy) &= D(g(x)) \\
D(ay'' + by' + cy) &= 0 \\
.\end{align*}
$$
