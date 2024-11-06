Ver también: [[S7 - Ondas electromagnéticas]]

## Densidad de energía

La **densidad de energía** ($u$) de una OEM es igual a

$$
u = \frac{1}{2}\varepsilon_0\lVert \vec{E} \rVert ^2 + \frac{1}{2\mu_0}\lVert \vec{B} \rVert ^2
.$$

Usando $\lVert \vec{B} \rVert = \frac{\lVert \vec{E} \rVert}c = \sqrt{\varepsilon_0\mu_0}\lVert \vec{E} \rVert$, obtenemos que $u$ es simplemente

$$
u = \varepsilon_0\lVert \vec{E} \rVert ^2
.$$

## Frentes de onda

Los campos $\vec{E}$ y $\vec{B}$ forman un **plano perpendicular** a la propagación de la onda.

A cada plano que se propaga con rapidez constante ($c$ o $v$, dependiendo del medio) se le llama **frente de onda**.

```ad-seealso
title: En otras palabras...

El frente de onda es, esencialmente, **el frente de la onda a medida que viaja**.

```


### Vector de Poynting

Describe la **potencia de la OEM** por unidad de área. Se define como

$$
\vec{S} = \frac{\vec{E} \times \vec{B}}{\mu_0}
,$$

y su magnitud (por ende) es igual a

$$
\lVert \vec{S} \rVert = \frac{\lVert \vec{E} \rVert \lVert \vec{B} \rVert}{\mu_0}
.$$

#### Intensidad de la onda electromagnética

Usando el vector de Poynting, definimos la **intensidad de radiación** en el frente de plano como

$$
I = S_\text{prom} = \frac{1}{2}\varepsilon_0c(E_\text{máx})^2
.$$

```ad-warning
title: Advertencia

Esta ecuación sólo es válida para **ondas sinusoidales**.

```

## Presión de radiación

La **presión de radiación** es la **presión ejercida** sobre una superficie expuesta a la radiación electromagnética.

Si la superficie **absorbe** la onda:

$$
p_\text{rad} = \frac{S_\text{prom}}{c} = \frac{I}{c}
.$$

Si la superficie **refleja** la onda:

$$
p_\text{rad} = \frac{S_\text{prom}}{c} = \frac{2I}{c}
.$$

## Reflexión y refracción

Cuando una onda electromagnética incide en una interfaz lisa que separa dos medios:

1. parte de la onda se **refleja**, y
2. la otra parte se **refracta**.

![[reflexion y refraccion.png]]

### Descripción matemática

La dirección de los rayos de luz se describe en términos de los ángulos que forman **con la normal** a la superficie.

![[angulos en la reflexion y refraccion.png]]

Aquí, se cumple la **ley de reflexión**:

$$
\theta_a = \theta_r
,$$

y se cumple la **ley de refracción**:

$$
n_a\sin(\theta_a) = n_b\sin(\theta_b)
.$$

#### Índice de refracción

Es una propiedad **intrínseca** al material. Varía según la longitud de onda, y es igual a

$$
n = \frac{c}{v} = \frac{\lambda_0}{\lambda}
.$$

donde $\lambda_0$ es la longitud de onda (de la onda que estemos analizando) en el vacío.

### Reflexión total interna

Existe un **ángulo crítico** de incidencia a partir del cual **la luz ya no se refracta**.

$$
\sin(\theta_\text{crít}) = \frac{n_b}{n_a}
$$

![[reflexion total interna.png]]

### Tipos de reflexión

![[tipos de reflexion.png]]
