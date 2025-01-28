---
id: 1737731893-ecuaciones-de-cauchy-euler
aliases:
  - Ecuaciones de Cauchy-Euler
tags:
  - mates/edo
createdAt: 2025-01-24 10:18
---

# Ecuaciones de Cauchy-Euler

Un tipo de [[1737414399-ecuaciones-diferenciales-lineales-homogeneas|ecuación diferencial lineal homogénea]] de interés son las llamadas ecuaciones de **Cauchy-Euler**: aquellas de la forma

$$
a_n x^n y^{(n)} + a_{n-1} x^{n-1} y^{(n-1)} + \ldots + a_1xy' + a_0y = 0
.$$

Mostraremos el procedimiento para EDOs de segundo orden, pero se hace forma análoga para cualquier otro orden.

> [!IMPORTANT]
> Este método se puede combinar con la [[1737738426-metodo-de-variacion-de-parametros|variación de parámetros]] para resolver [[1737417193-ecuaciones-diferenciales-lineales-no-homogeneas|EDOs lineales no homogéneas]].

## Procedimiento general para segundo orden

Consideremos la EDO de segundo orden

$$
ax^2 y'' + bxy' + cy = 0
.$$

**Paso 1:** Proponer la solución $y = x^m$ y reemplazar en la ED para obtener la **ecuación auxiliar**:

$$
\begin{align*}
y   &= x^m &&\implies cy = cx^m \\
y'  &= mx^{m-1} &&\implies bxy' = bmx^m \\
y'' &= m(m-1)x^{m-2} &&\implies ax^2y'' = am(m-1)x^m
,\end{align*}
$$

por lo que, reemplazando en la ED y simplificando, obtenemos

$$
x^m(am^2 + (b-a)m + c) = 0
,$$

de donde observamos que la **ecuación auxiliar** es

$$
am^2 + (b-a)m + c = 0
.$$

**Paso 2:** Resolver la ecuación auxiliar y proponer la solución. Esta solución dependerá de las raíces $m_1,m_2$:

$$
\begin{align*}
m_1 \neq m_2 &\implies y_h(x) = c_1 x^{m_1} + c_2 x^{m_2} \\
m_1 = m_2 &\implies y_h(x) = c_{1}x^{m_1} + c_2\ln(x)x^{m_2} \\
m_{1,2} = \alpha \pm \beta i &\implies y_h(x) = x^{\alpha}(c_1 \cos(\beta\ln(x)) + c_2 \sin(\beta\ln(x)))
.\end{align*}
$$
