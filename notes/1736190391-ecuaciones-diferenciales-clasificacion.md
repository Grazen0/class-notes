---
id: 1736190391-ecuaciones-diferenciales-clasificacion
aliases:
  - Ecuaciones diferenciales
  - ecuación diferencial
  - ED
tags:
  - mates/edo
createdAt: 2025-01-06 14:06
---

# Ecuaciones diferenciales

> [!DEFINITION]
> Una **ecuación diferencial** es una ecuación que involucra a la **derivada** (sea ordinaria o parcial) de alguna función. 

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

> [!DEFINITION]
> El **orden** de una ecuación diferencial es el orden de la **mayor derivada** presente en la ecuación.

Por ejemplo, una ecuación diferencial de **segundo orden** es la siguiente:

$$
\frac{d^2y}{dx} - 5\left( \frac{dy}{dx} \right)^3 + 6y = e^x
.$$

### Linealidad

Ver también: [[1737268601-ecuaciones-diferenciales-lineales|Ecuaciones diferenciales lineales]].

> [!DEFINITION]
> Se dice que una ecuación diferencial de $n$-ésimo orden es **lineal** si y sólo si se puede escribir en la forma
> 
> $$
> a_n(x) \frac{d^ny}{dx^n} + a_{n-1}(x) \frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1(x) \frac{dy}{dx} + a_0(x)y = g(x)
> .$$

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
