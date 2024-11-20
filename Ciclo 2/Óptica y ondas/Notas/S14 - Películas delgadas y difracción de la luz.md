## Películas delgadas

Las películas delgadas son capas finas de materiales con ciertos índices de refracción particulares. Dependiendo del grosor del material y el índice, la luz se refleja y refracta de distintas maneras.

![[peliculas delgadas.png]]

En esencia: los rayos de luz llegan al material, y parte de ellos se refleja y parte se refracta. La parte que se refracta rebota y vuelve a salir del material, interfiriendo con la luz que se reflejó y formando distintas imágenes.

Los efectos de distintos índices de refracción en la interacción de luz entre dos medios son los siguientes:

![[peliculas delgadas 3.png]]

El trazado de rayos en una película delgada es el siguiente:

![[peliculas delgadas 2.png]]

En una película de petróleo, se cumple para **reflexión constructiva**:

$$
2t = \left( m + \frac{1}{2} \right)\lambda
,$$

y para **reflexión destructiva**:

$$
2t = m\lambda
,$$

donde $t$ es es el espesor de la película.

```ad-warning
title: Cuidado

No confundir estas fórmulas con las de diferencia de caminos de ondas. Las fórmulas están al revés.

```
## Difracción de la luz

Es básicamente lo que ocurre con el experimento de la ranura de Young.

![[difraccion.png]]

En esta imagen, la difracción ocurre en el segundo caso, cuando

$$
\lambda \approx d
,$$

donde $d$ es el ancho de la abertura.

### Patrones de difracción

El efecto de la difracción de la luz es el siguiente:

![[difraccion 2.png]]

Aquí, tenemos ciertas denominaciones:

- **Máximo central:** la banda central, la más intensa.
- **Mínimas:** las bandas oscuras intermedias.
- **Máximos secundarios:** las bandas menos intensas de los lados.

### Ranura de Young

![[ranura de young.png]]

Cuando $L$ es mucho mayor que $d$, se cumple que la **diferencia de caminos** entre los rayos que llegan a un punto en ángulo $\theta$ es igual a

$$
\Delta r = r_2 - r_1 = d\sin(\theta)
.$$

Por lo tanto, podemos deducir que la **interferencia constructiva** ocurre cuando

$$
d\sin(\theta_\text{brillante}) = m\lambda
,$$

y la **interferencia destructiva** ocurre cuando

$$
d\sin(\theta_\text{oscuro}) = \left( m + \frac{1}{2} \right)\lambda
$$

(para todo $m \in \mathbb{Z}$).

En esta situación, se le llama a $m$ el **número de orden**.

Algunas consideraciones:

- La franja central brillante es la **máxima de orden cero**.
- El primer máximo en cualquiera de los dos lados ($m = \pm 1$) se llama **máximo de primer orden**.

De esta manera tenemos lo siguiente:

![[franjas brillantes y oscuras.png]]
