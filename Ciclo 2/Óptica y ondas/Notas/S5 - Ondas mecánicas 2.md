Ver también: [[S4 - Ondas mecánicas]]

## Ondas en una cuerda

### Energía mecánica

$$
E_\lambda = \frac{1}{2}\mu\omega^2A^2\lambda
$$

### Potencia

$$
P = \frac{1}{2}\mu\omega^2A^2v
$$

## Intensidad de una onda mecánica

```ad-definition

La **intensidad** de una onda es la **rapidez media** con la que la onda **transporta energía** por **unidad de área** perpendicular a la dirección de viaje de la onda. Se calcula como

$$
I = \frac{P}{4\pi r^2}
,$$

donde $r$ es la **distancia de la fuente**. Se mide en $\mathrm{\frac{W}{m^2}}$.

```

Este concepto se aplica sobre todo a las **ondas sonoras** y la **luz** en un entorno **tridimensional**.

```ad-note
title: Observación

La intensidad es **inversamente proporcional** al **cuadrado de la distancia** desde la fuente. Esto es:

$$
\frac{I_1}{I_2} = \frac{(r_2)^2}{(r_1)^2}
.$$

```

## Interferencia de ondas mecánicas

Cuando dos ondas lineales **interactúan** (chocan), la posición vertical de sus partículas se suma.

$$
y(x,t) = y_1(x,t) + y_2(x,t)
$$

La interferencia de ondas mecánicas se clasifica en dos:


```ad-note
title: Nota

Analizaremos la interferencia de ondas cuya **única diferencia** sea el **desfase**.

```


Sean las ondas definidas por

$$
y_1 = A\sin(kx - \omega t) \qquad y_2 = A\sin(kx - \omega t + \phi)
.$$

Entonces, sumando y aplicando trigonometría, obtenemos

$$
y = 2A\cos\left( \frac{\phi}{2} \right)\sin\left( kx-\omega t + \frac{\phi}{2} \right)
.$$

### Interferencia constructiva y destructiva

- **Constructiva:** $y_1$ y $y_2$ van del mismo lado.
	- La amplitud resultante es **mayor** que la de cada onda.
	- La diferencia de caminos es $\Delta r = n\lambda$.
- **Destructiva:** $y_1$ y $y_2$ van por lados opuestos.
	- La amplitud resultante es **menor** que la de alguna de las ondas.
	- La diferencia de caminos es $\Delta r = \left( n + \frac{1}{2} \right)\lambda$.
### Ondas estacionarias

Las ondas estacionarias ocurren cuando dos ondas **iguales** pero **opuestas en sentido** interactúan en un **entorno fijo**. El resultado es una "onda estacionaria": una onda que no se mueve, pero cuya amplitud oscila.

Sean las ondas

$$
y_1 = A\sin(kx - \omega t) \qquad y_2 = A\sin(kx + \omega t)
.$$

Entonces, sumando y aplicando algo más de trigonometría, obtenemos

$$
y = 2A\sin(kx)\cos(\omega t)
.$$

Aquí identificamos que la **amplitud** del elemento de posición $x$ es igual a $2A\sin(kx)$.

- **Nodos:** Los puntos de amplitud $0$.
	- $x = 0, \frac{\lambda}{2}, \lambda, \frac{3\lambda}{2}, \ldots, \frac{n\lambda}{2}$ donde $n = 0, 1, 2, \ldots$
- **Antinodos:** Los puntos de amplitud máxima.
	- $x = \frac{\lambda}{4}, \frac{3\lambda}{4} \frac{5\lambda}{4}, \ldots, \frac{n\lambda}{4}$ donde $n = 1, 3, 5, \ldots$

#### Frecuencias fundamentales

La frecuencia del $n$-ésimo armónico (es decir, una onda estacionaria de $n$ antinodos) es igual a

$$
f_n = n \frac{v}{2L} = nf_1
,$$

donde $L$ es la **longitud** de la cuerda. Esto significa que, si tenemos la longitud de onda $\lambda$, podemos calcular la longitud de la cuerda como

$$
L = \frac{n}{2}\lambda
.$$