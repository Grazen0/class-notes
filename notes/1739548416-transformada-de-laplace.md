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
> \mathcal{L}\{f\} := \int_{0}^{\infty} e^{-st} f(t) \, dt
> .$$

Como $\mathcal{L}\{f\}$ es una función de una variable compleja $s$, en ocasión se escribe $\mathcal{L}\{f\}(s)$ para mayor claridad, aunque también se suele denotar como $F(s)$.

## Tabla de transformadas de Laplace

La siguiente tabla muestra algunas transformadas de Laplace comunes.

|      $f(t)$      |      $\mathcal{L}\{f\}$       |
| :--------------: | :---------------------------: |
|       $1$        |         $\frac{1}{s}$         |
|      $t^n$       |     $\frac{n!}{s^{n+1}}$      |
|  $e^{\alpha x}$  |    $\frac{1}{s - \alpha}$     |
| $\sin(\beta t)$  | $\frac{\beta}{s^2 + \beta^2}$ |
| $\cos(\beta t)$  |   $\frac{s}{s^2 + \beta^2}$   |
| $\sinh(\beta t)$ | $\frac{\beta}{s^2 - \beta^2}$ |
| $\cosh(\beta t)$ |   $\frac{s}{s^2 - \beta^2}$   |

(¿Ya te mecanizaste?)

## Propiedades

> [!PROPERTY]
> La transformada de Laplace es **lineal**. Es decir, cumple
> 
> $$
> \mathcal{L}\{af + bg\} = a \mathcal{L}\{f\} + b \mathcal{L}\{g\}
> .$$

De la misma forma, la transformada inversa también es lineal:

$$
\mathcal{L}^{-1}\{af + bg\} = a \mathcal{L}\{f\} + b \mathcal{L}\{g\}
.$$

### Transformada de una derivada

La transformada de Laplace tiene la propiedad especial de convertir la *diferenciación con respecto a $t$* en *multiplicación por $s$*:

> [!PROPERTY]
> Dada una función analítica $f$, se cumple que
>
> $$
> \mathcal{L}\{f^{(n)}\} = s^n F(s) - \sum_{k=1}^{n} s^{n-k} f^{(k-1)}(0)
> .$$

Algunos casos particulares útiles para recordar son los siguientes:

$$
\mathcal{L}\{f'\} = sF(s) - f(0)
,$$

$$
\mathcal{L}\{f''\} = s^2 F(s) - sf(0) - f'(0)
.$$

### Traslación en el eje $s$

> [!PROPERTY]
> La transformada de Laplace cumple con
>
> $$
> \mathcal{L}\{e^{\alpha t}f(t)\} = F(s - \alpha)
> .$$

Por ejemplo: 

$$
\mathcal{L}\{e^{5t} t^3\} = \frac{3!}{(s - 5)^4}
,$$

$$
\mathcal{L}\{e^{-2t}\cos(4t)\}
.$$

Evidentemente, esta propiedad se puede usar para aplicar transformada inversa. Por ejemplo,

$$
\mathcal{L}^{-1}\left\{ \frac{s - 3}{(s - 3)^2 + 4} \right\} = e^{3t}\cos(2t)
.$$

## Uso en las ecuaciones diferenciales

Aplicar la transformada de Laplace a ambos lados de una [[1736190391-ecuaciones-diferenciales-clasificacion|ecuación diferencial]] la convierte en una ecuación **algebraica** en el dominio de $s$, donde podemos despejar fácilmente $F(s)$.

Supongamos que tenemos una EDO lineal de $n$-ésimo orden con condiciones iniciales $y(0) = y_0, y'(0) = y_1, \ldots, y^{(n-1)}(0) = y_n$. Entonces, podemos seguir el procedimiento para resolver la EDO:

1. Aplicar la transformada de Laplace a ambos lados de la EDO usando las propiedades vistas anteriormente y las condiciones iniciales.
2. Despejar $Y(s)$ mediante métodos algebraicos.
3. Aplicar la transformada inversa a ambos lados para obtener $y$.

Este último paso suele tomar algo de preparación al lado derecho de la ecuación. Se necesita llevar la ecuación a resultados de transformadas conocidas para poder invertirlas.
