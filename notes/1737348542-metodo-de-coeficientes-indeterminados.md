---
id: 1737348542-metodo-de-coeficientes-indeterminados
aliases:
  - Método de coeficientes indeterminados
tags:
  - mates/edo
createdAt: 2025-01-19 23:49
---

# Método de coeficientes indeterminados

El MCI es un método para resolver [[1737268601-ecuaciones-diferenciales-lineales|ecuaciones diferenciales lineales]].

> [!DEFINITION] Definición (ecuación característica)
> Sea una ED lineal homogénea de coeficientes constantes de la forma
>
> $$
> a_n \, \frac{d^ny}{dx^n} + a_{n-1} \, \frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1 \, \frac{dy}{dx} + a_0 \, y = 0
> .$$
>
> Entonces, la **ecuación característica** de esta ED es
>
> $$
> a_n \, r^n + a_{n-1} \, r^{n-1} + \ldots + a_1 \, r + a_0 = 0
> .$$

Consideremos la ED lineal no homogénea

$$
a_2 \, y'' + a_1 \, y' + a_0 y = g(x)
.$$

El MCI consiste en:

1. Hallar las raíces $r_1, r_2$ de la ecuación característica de la parte homogénea (es decir, imaginando que $g(x) = 0$).
2. Si $r_1 \neq r_2$, entonces la solución de la parte no homogénea será
   $$
   y_h(x) = c_1 \, e^{r_1 x} + c_2 \, e^{r_2 x}
   .$$
3. Proponer una **solución particular** $y_p(x)$ para la ED real. Esta solución particular dependerá de $g(x)$, pero una tabla mostrada luego de estos pasos muestra algunos casos particulares de soluciones particulares.
4. Reemplazar esta solución particular en la ED y hallar los coeficientes indeterminados.

## Soluciones particulares

|              $g(x)$               |                      $y_p(x)$                      |
| :-------------------------------: | :------------------------------------------------: |
|          $a e^{\beta x}$          |                   $Ae^{\beta x}$                   |
| $a\cos(\beta x) + b\sin(\beta x)$ |         $A\cos(\beta x) + B\sin(\beta x)$          |
|      Polinomio de grado $n$       | $A_n x^n + A_{n-1} x^{n-1} + \ldots + A_1 x + A_0$ |

Cabe destacar que el caso de $a\cos(\beta x) + b\sin(\beta x)$ aplica también para casos donde únicamente hay un seno o un coseno.
