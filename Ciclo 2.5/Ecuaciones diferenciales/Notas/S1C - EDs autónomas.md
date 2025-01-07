```ad-definition

Una ecuación diferencial es **autónoma** si y sólo si se puede escribir de la forma

$$
\frac{dy}{dx} = F(y)
.$$

```

Estas EDs son particularmente fáciles de resolver mediante separación de variables.

Agunos ejemplos de EDs autónomas son:

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

Resulta que los puntos críticos nos proporcionan algunas soluciones "triviales" de la EDA.

```ad-proposition
title: Propiedad.

Si $c$ es punto crítico de una ED autónoma, entonces $y = c$ es una solución.

```

Estas soluciones particulares se llaman **soluciones de equilibrio**.

### Curvas solución

Los puntos críticos de una ED autónoma dividen al campo direccional en subregiones.

Por ejemplo, para la ED autónoma $\frac{dP}{dt} = P(a - bP)$:

![[ed autonoma.png]]

```ad-theorem

Dada una ED autónoma, se cumple lo siguiente:

1. Si $(x_0, y_0)$ está en la región $R_i$, entonces la solución $y(x)$ que pasa por $(x_0, y_0)$ permanecerá en la misma región.
2. Por la continuidad de $f$, $

```
