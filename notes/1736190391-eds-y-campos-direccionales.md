---
id: 1736190391-eds-y-campos-direccionales
aliases:
  - EDs y campos direccionales
tags:
  - mates/edo
---

Al considerar el modelado de la mezcla de dos **soluciones salinas** de distintas concentraciones surge una EDO de primer orden que involucra las **cantidades de sal** en cada mezcla.

```ad-definition
title: Definición (ecuación diferencial).

Una ecuación diferencial es una ecuación que involucra a la **derivada** (sea ordinaria o parcial) de alguna función. 
```

Por ejemplo, la ecuación diferencial

$$
\frac{dy}{dx} = 2xy
$$

relaciona la derivada de una función $y$, con sí misma y su variable independiente, $x$.

Otro ejemplo de ecuación diferencial es

$$
y''' + y' - \sin(t)y' - y = te^{-t}
.$$

Las ecuaciones diferenciales se utilizan desde 1667, y resultan muy importantes para modelar fenómenos reales que se describen mejor mediante tasas de cambio.

## Clasificación

### Por el tipo de derivadas

#### Ecuación diferencial ordinaria (EDO)

Involucra a una función de **una sola variable**. Por ejemplo:

$$
2 - 3x\frac{dy}{dx} = e^y - \frac{d^2y}{dx^2}
.$$

#### Ecuación diferencial parcial (EDP)

Involucra a funciones de **varias variables**. Por ejemplo:

$$
\frac{\partial z}{\partial x} - 3x\frac{\partial z}{\partial y} = \cos(y)e^x
.$$

### Por el orden

```ad-definition

El **orden** de una ecuación diferencial es el orden de la **mayor derivada** presente en la ecuación.


```

Por ejemplo, una ecuación diferencial de **segundo orden** es la siguiente:

$$
\frac{d^2y}{dx} - 5\left( \frac{dy}{dx} \right)^3 + 6y = e^x
.$$

### Por linealidad

```ad-definition

Se dice que una ecuación diferencial de $n$-ésimo orden es **lineal** si y sólo si se puede escribir en la forma

$$
a_n(x) \frac{d^ny}{dx^n} + a_{n-1}(x) \frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1(x) \frac{dy}{dx} + a_0(x)y = g(x)
.$$
```

Se trata de una ecuación parecida a una **polinomial** donde $x$ y sus potencias se reemplazan por $y$ y sus derivadas, y los coeficientes son funciones de $x$ en lugar de constantes.

Por ejemplo, algunas EDOs lineales son:

$$
2xy' + x^2y = 7x - 2
,$$

$$
y' + y = 0
,$$

$$
4x^2 \frac{dy}{dx} - 3x = 2y
,$$

$$
\cos(x)y' + 5xy = -1
.$$

## Campos direccionales

Recordando que la derivada $\frac{dy}{dx}$ de una función es la pendiente de la recta tangente a $y$ en $x$, podemos usar una ecuación diferencial para hallar las **posibles pendientes** que satisfacen la ecuación en distintos puntos.

Entonces, si tenemos una ecuación diferencial en la forma

$$
\frac{dy}{dx} = F(x, y)
,$$

podemos reemplazar distintos valores de $(x, y)$ para encontrar rectas tangentes a $y$ en distintos puntos del plano.

Al valor de $\frac{dy}{dx}$ en un punto particular y visualizado como un segmento de recta se le llama **segmento lineal**.

![[elemento lineal.png]]

Si evaluamos $F$ en una malla rectangular de puntos y dibujamos sus elementos lineales, obtenemos el **campo direccional** de la ecuación diferencial.

![[campo direccional.png]]
