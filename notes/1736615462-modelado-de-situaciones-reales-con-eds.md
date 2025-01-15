---
id: 1736615462-modelado-de-situaciones-reales-con-eds
aliases:
  - Modelado de situaciones reales con EDs
tags:
  - mates/edo
createdAt: 2025-01-11 12:11
---

# Modelado de situaciones reales con EDs

Al considerar el modelado de la mezcla de dos **soluciones salinas** de distintas concentraciones surge una EDO de primer orden que involucra las **cantidades de sal** en cada mezcla.
Las EDs son extremadamente útiles para describir fenómenos de la vida real, ya que muchos de ellos involucran tasas de cambio.

## Dinámica poblacional y decaimiento radioactivo

En un escenario ideal, una población sin restricciones de crecimiento crece a una velocidad **proporcional a sí misma**. Es decir,

$$
\frac{dP}{dt} = kP
$$

con $k > 0$.

Ocurre un fenómeno similar con el **decaimiento de elementos radioactivos**, sólo que con $k < 0$.

## Ley de enfriamiento de Newton

Se cumple que la velocidad a la que cambia la temperatura de un cuerpo es **proporcional** a la diferencia entre la temperatura del cuerpo y la temperatura ambiente. Es decir,

$$
\frac{dT}{dt} = k(T - T_m)
$$

con $k > 0$, donde $T_m$ es la temperatura ambiente.
