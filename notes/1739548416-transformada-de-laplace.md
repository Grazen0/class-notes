---
id: 1739548416-transformada-de-laplace
aliases:
  - Transformada de Laplace
tags:
  - mates/edo
createdAt: 2025-02-14 10:53
---

# Transformada de Laplace

> [!DEFINITION]
> Sea $f$ una función analítica. Entonces, se define la **transformada de Laplace** de $f$ como
>
> $$
> \mathcal{L}\{f\} = \int_{0}^{\infty} e^{-st} f(t) \, dt
> .$$

Como $\mathcal{L}\{f\}$ es una función de una variable compleja $s$, en ocasión se escribe $\mathcal{L}\{f\}(s)$ para mayor claridad, aunque también se suele denotar como $F(s)$.

## Propiedades

La transformada de Laplace es **lineal**. Es decir,

$$
\mathcal{L}\{a\,f + b\,g\} = a \, \mathcal{L}\{f\} + b \, \mathcal{L}\{g\}
.$$

De la misma forma, la transformada inversa también es lineal:

$$
\mathcal{L}^{-1}\{a\,f + b\,g\} = a \, \mathcal{L}\{f\} + b \, \mathcal{L}\{g\}
.$$

### Tabla de transformadas de Laplace

La siguiente tabla muestra algunas transformadas de Laplace comunes.

| $f(t)$ | $\mathcal{L}\{f\}$ |
| :--: | :--: |
| $1$ | $\frac{1}{s}$ |
| $e^{\alpha x}$ | $\frac{1}{s - \alpha}$ |

## Uso en las ecuaciones diferenciales

Aplicar la transformada de Laplace a ambos lados de una [[1736190391-ecuaciones-diferenciales-clasificacion|ecuación diferencial]] la convierte en una ecuación **algebraica** en el dominio de $s$, donde podemos despejar fácilmente $F(s)$. Luego de ello, es necesario *invertir* la transformada de Laplace para volver al dominio original, de $t$.

