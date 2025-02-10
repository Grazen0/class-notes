---
id: 1738993331-sistemas-de-edos-lineales-no-homogeneas
aliases:
  - Sistemas de EDOs lineales no homogéneas
tags:
  - mates/edo
createdAt: 2025-02-08 00:42
---

# Sistemas de EDOs lineales no homogéneas

Un [[1737773382-sistemas-de-edos-de-primer-orden|sistemas de EDOs de primer orden]] lineal no homogéneo se puede expresar de forma matricial como

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{f}
,$$

donde $\mathbf{f} \neq \mathbf{0}$.

## Método de coeficientes indeterminados

De manera similar al [[1737417193-ecuaciones-diferenciales-lineales-no-homogeneas#ecuaciones-diferenciales-lineales-no-homogneas#mtodo-de-coeficientes-indeterminados|método de coeficientes indeterminados]] para EDOs lineales no homogéneas, los pasos de este método son los siguientes:

1. Resolver la **parte homogénea** del sistema ($\mathbf{x}_h(t)$).
2. Proponer una **solución particular** ($\mathbf{x}_p(t)$) para el sistema (véase la [[1737417193-ecuaciones-diferenciales-lineales-no-homogeneas#tabla-de-soluciones-particulares|tabla de soluciones particulares]]).
3. Reemplazar $\mathbf{x}_p(t)$ en el sistema original y despejar los coeficientes indeterminados.

Finalmente, la solución del sistema estará dada por $\mathbf{x}(t) = \mathbf{x}_h(t) + \mathbf{x}_p(t)$.

## Método de variación de parámetros

Cuando no podemos usar coeficientes indeterminados, podemos usar un método basado en la [[1737738426-metodo-de-variacion-de-parametros|variación de parámetros]] para las EDOs lineales no homogéneas.

> [!DEFINITION] Definición (matriz fundamental)
> Sean $\mathbf{x}_1, \mathbf{x}_2, \ldots, \mathbf{x}_n$ un conjunto fundamental de soluciones del sistema homogéneo $\mathbf{x}' = A\mathbf{x}$. Entonces, la **matriz fundamental** (de la EDO, creo?) se define como
>
> $$
> \Phi(t) = \begin{bmatrix} \mathbf{x}_1 & \mathbf{x}_2 & \cdots & \mathbf{x}_n \end{bmatrix}
> .$$

En otras palabras, la matriz fundamental se obtiene juntando todas las soluciones de una EDO homogénea (las cuales son vectores columna).

De forma análoga a la variación de parámetros vista antes, este método propone una solución particular

$$
\mathbf{x}_p(t) = \Phi(t) \int \Phi^{-1} \mathbf{f}(t) \, dt
.$$

Como es de costumbre, la solución del sistema estará dada por $\mathbf{x}(t) = \mathbf{x}_h(t) + \mathbf{x}_p(t)$.

Resumiendo, este método consiste en lo siguiente:

1. Resolver la parte homogénea.
2. Formar la matriz fundamental.
3. Operar y calcular la solución particular.
4. Sumar la solución de la parte homogénea con la solución particular.
5. Profit.
