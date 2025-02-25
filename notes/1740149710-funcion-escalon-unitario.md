---
id: 1740149710-funcion-escalon-unitario
aliases:
  - Función escalón unitario
tags:
  - mates/edo
createdAt: 2025-02-21 09:55
---

# Función escalón unitario

> [!DEFINITION]
> La función **escalón unitario** se define como
>
> $$
> \mathscr{U}(t) := \begin{cases}
> 0 && 0 \leq t < 0 \\
> 1 && t \geq 0
> .\end{cases}
> $$

Gráficamente,  la función escalón unitario $\mathscr{U}(t - a)$ se ve como un *escalón* que va de $0$ a $1$ en $t = a$.

## Reescritura de funciones por partes

En particular, se cumple que si

$$
f(t) = \begin{cases}
  g(t) & 0 \leq t < a \\
  h(t) & t \geq a
,\end{cases}
$$

entonces $f$ se puede escribir como

$$
f(t) = g(t) + (h(t) - g(t))\mathscr{U}(t - a)
.$$

Si $f$ tiene la forma

$$
f(t) = \begin{cases}
  g(t) & 0 \leq t < a \\
  h(t) & a \leq t < b \\
  r(t) & t \geq b
,\end{cases}
$$

entonces $f$ se puede escribir como

$$
f(t) = g(t) + (h(t) - g(t)) \mathscr{U}(t - a) + (r(t) - h(t))\mathscr{U}(t - b)
.$$

Un proceso análogo se puede utilizar para reescribir funciones con cualquier cantidad de partes.

## Aplicaciones a la transformada de Laplace

La función escalón unitario tiene utilidad para resolver [[1737268601-ecuaciones-diferenciales-lineales|ecuaciones diferenciales lineales]] por medio de la [[1739548416-transformada-de-laplace|transformada de Laplace]].

> [!PROPERTY]
> Sea $f$ una función analítica. Entonces, se cumple que
>
> $$
> \mathcal{L}\{f(t - \alpha)\mathscr{U}(t - \alpha)\} = e^{-\alpha s} F(s)
> .$$

De forma inversa, podemos usar esta ecuación para calcular una inversa de la transformada de la forma

$$
\mathcal{L}^{-1}\{e^{-\alpha s}F(s)\} = f(t - \alpha) \mathscr{U}(t - \alpha)
.$$

Sin embargo, suele ser tedioso trabajar con esta forma de la propiedad. Una versión alternativa es la siguiente

> [!PROPERTY]
> Sea $f$ una función analítica. Entonces, se cumple que
>
> $$
> \mathcal{L}\{f(t)\mathscr{U}(t - \alpha)\} = e^{-\alpha s} \mathcal{L}\{f(t + \alpha)\}
> .$$
