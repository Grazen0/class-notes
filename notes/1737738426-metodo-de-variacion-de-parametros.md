---
id: 1737738426-metodo-de-variacion-de-parametros
aliases:
  - Método de variación de parámetros
tags:
  - mates/edo
createdAt: 2025-01-24 12:07
---

# Método de variación de parámetros

Una [[1737417193-ecuaciones-diferenciales-lineales-no-homogeneas|ecuación diferencial lineal no homogénea]] de la forma

$$
a_n(x) \frac{d^ny}{dx^n} + a_{n-1}(x) \frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x)
$$

podría tener un $g(x)$ que no sea de alguna forma fácilmente reconocible como para usar el método de coeficientes indeterminados.

En ese caso, usamos el método de **variación de parámetros**.

> [!IMPORTANT]
> El método de variación de parámetros funciona incluso para **coeficientes no constantes**.

## Procedimiento

**Paso 1:** Resolver la [[1737414399-ecuaciones-diferenciales-lineales-homogeneas|ED lineal homogénea]] asociada a la ED original, cuya solución será de la forma

$$
y_h(x) = c_1 y_1(x) + c_2 y_2(x)
.$$

**Paso 2:** Plantear la solución particular

$$
y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)
,$$

donde

$$
u_1(x) = \int \frac{W_1}{W} \, dx, \quad u_2(x) = \int \frac{W_2}{W} \, dx
$$

y $W_i$ son los [[1737147300-independencia-lineal-de-funciones|wronskianos]]

$$
W = \begin{vmatrix}
  y_1 & y_2 \\
  y_1' & y_2'
\end{vmatrix}, \quad
W_1 = \begin{vmatrix}
  0 & y_2 \\
  g(x) & y_2'
\end{vmatrix}, \quad
W_2 = \begin{vmatrix}
  y_1 & 0 \\
  y_1' & g(x)
\end{vmatrix}
.$$

> [!EXAMPLE]-
> Sea la EDO
>
> $$
> y'' - 2y' + y = \frac{e^x}{x^2}
> .$$
  > Primero, hallamos (sin detallar mucho) la solución de la parte homogénea,
>
> $$
> y_p(x) = c_1 e^x + c_2 xe^x
> .$$
>
> Ahora, proponemos la solución particular
>
> $$
> y_p(x) = u_1(x) e^x + u_2(x) xe^x 
> $$
>
> y calculamos los wronskianos necesarios:
>
> $$
> \begin{align*}
> W &= \begin{vmatrix}
> e^x & xe^x \\
> e^x & (x + 1)e^x
> \end{vmatrix} = (x + 1)e^{2x} - xe^{2x} = e^{2x} \\
> W_1 &= \begin{vmatrix}
> 0 & xe^x \\
> \frac{e^x}{x^2} & (x + 1)e^x
> \end{vmatrix} = -\frac{e^{2x}}{x} \\
> W_2 &= \begin{vmatrix}
> e^x & 0 \\
> e^x & \frac{e^x}{x^2}
> \end{vmatrix} = \frac{e^{2x}}{x^2}
> .\end{align*}
> $$
>
> Entonces, podemos calcular $u_1(x)$ y $u_2(x)$ con estos resultados:
>
> $$
> \begin{align*}
> u_1(x) &= \int \frac{-\frac{e^{2x}}{x}}{e^{2x}} \, dx = \int -\frac{1}{x} \, dx = -\ln(x) \\
> u_2(x) &= \int \frac{\frac{e^{2x}}{x^2}}{e^{2x}} \, dx = \int \frac{1}{x^2} \, dx = -\frac{1}{x}
> \end{align*}
> .$$
>
> Reemplazando en la propuesta de solución particular, obtenemos
>
> $$
> y_p(x) = -\ln(x) e^x - e^x
> ,$$
>
> con lo que la solución general de la EDO, finalmente, es
>
> $$
> \begin{align*}
> y(x) &= y_h(x) + y_p(x) = c_1 e^x + c_2 xe^x - \ln(x)e^x - e^x \\
>      &= e^x(c_1 + c_2 x - \ln(x) - 1) \\
> y(x) &= e^x(c_1 + c_2 x - \ln(x)) 
> .\end{align*}
> $$
