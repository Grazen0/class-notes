---
id: 1737130740-ecuacion-logistica
aliases:
  - Ecuación logística
tags:
  - mates/edo
createdAt: 2025-01-17 11:19
---

# Ecuación logística

Una de las [[1736190391-ecuaciones-diferenciales-clasificacion|ecuaciones diferenciales]] estudiadas por el matemático y biólogo belga P.F. Verhulst para modelar el **comportamiento de la población humana** fue

$$
\frac{dP}{dt} = P(a - bP)
,$$

donde $a$ y $b$ son constantes mayores que $0$.

Esta ecuación se puede resolver mediante una [[1736615462-eds-de-primer-orden#variables-separables|separación de variables]], lo cual culmina en la solución general

$$
P(t) = \frac{aP_0}{bP_0 + (a - bP_0)e^{-at}}
.$$

> [!CAUTION]- Sobre la proporcionalidad múltiple
> La oración "$a$ es proporcional a $b$ y a $c$" se podría interpretar (erróneamente) como
>
> $$
> a = k_1 b, \quad a = k_2 c
> $$
> si tomamos cada "afirmación" de proporcionalidad por separado. Sin embargo, esta oración debe interpretarse como
> 
> $$
> a = kbc
> .$$

> [!EXAMPLE]+
> Suponga que un estudiante es portador del virus de la gripe y regresa a su aislado campus de $1000$ estudiantes. Si se supone que con la razón con que se propaga el virus es proporcional no sólo a la cantidad de estudiantes infectados sino también a la cantidad de estudiantes no infectados. Determine la cantidad de estudiantes infectados después de $6$ días si además se observa que después de $4$ días hay $50$ estudiantes infectados.
>
> Entonces, la ED que modela esta situación es
> 
> $$
> \frac{dx}{dt} = kx(1000 - x)
> .$$

