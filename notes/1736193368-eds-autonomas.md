---
id: 1736193368-eds-autonomas
aliases:
  - EDs autónomas
tags:
  - mates/edo
createdAt: 2025-01-06 14:56
---

# EDs autónomas

Al considerar el modelado de la mezcla de dos **soluciones salinas** de distintas concentraciones surge una EDO de primer orden que involucra las **cantidades de sal** en cada mezcla.

```ad-definition

Una [[Ecuaciones diferenciales y su clasificación|ecuación diferencial]] es **autónoma** si y sólo si se puede escribir de la forma

$$
\frac{dy}{dx} = F(y)
.$$

```

Estas EDs son particularmente fáciles de resolver mediante separación de variables.

Algunos ejemplos de EDs autónomas son:

$$
\frac{dy}{dx} = 1 + y^2
,$$

$$
\frac{dA}{dt} = kA
,$$

$$
\frac{dT}{dt} = k(T - T_m)
,$$

## Puntos críticos

También llamados puntos **estacionarios** y puntos **de equilibrio**.

Al igual que con las funciones de una variable, los **puntos críticos** de una ED autónoma son aquellos $c$ donde $\frac{dy}{dx} = F(c) = 0$.

Resulta que los puntos críticos nos proporcionan algunas soluciones "triviales" de la ED.

```ad-proposition
title: Propiedad.

Si $c$ es punto crítico de una ED autónoma, entonces $y = c$ es una solución.

```

Estas soluciones particulares se llaman **soluciones de equilibrio**.

### Curvas solución

Los puntos críticos de una ED autónoma dividen al campo direccional en sub-regiones.

Por ejemplo, para la ED autónoma $\frac{dP}{dt} = P(a - bP)$:

![[ed autonoma.png]]

Se cumplen algunas propiedades intuitivas y útiles en estos casos.

```ad-theorem

Dada una solución $y(x)$ de una ED autónoma, se cumple lo siguiente:

1. $y(x)$ permanecerá en la misma subregión.
2. $y(x)$ es **monótona**.
3. $y(x)$ se aproximará a los bordes de la subregión (de existir).

```

### Atractores y repulsores

Sea $c$ un punto crítico de una ED autónoma. Entonces, el **comportamiento** de una solución $y(x)$ alrededor de $y = c$ puede ser alguno de los siguientes:

![[atractores y repulsores.png]]

- $(a)$: $c$ es **asintóticamente estable** o un **atractor**.
- $(b)$: $c$ es **asintóticamente inestable** o un **repulsor**.
- $(c), (d)$: $c$ es **asintóticamente semiestable**.

## Campos direccionales

El campo direccional de una ED autónoma tiene la propiedad de que las pendientes de los elementos en cada recta horizontal son iguales, puesto que $F$ no involucra a la variable independiente.

![[campo direccional de una eda.png]]
