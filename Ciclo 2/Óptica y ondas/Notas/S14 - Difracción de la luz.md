Se trata del fenómeno que ocurre cuando la luz pasa por una rendija extremadamente pequeña.

![[difraccion.png]]

En esta imagen, la difracción ocurre en el segundo y tercer caso, cuando la abertura es lo suficientemente pequeña.

## Patrones de difracción

El efecto de la difracción de la luz es el siguiente:

![[difraccion 2.png]]

Aquí, tenemos ciertas denominaciones:

- **Máximo central:** la banda central, la más intensa.
- **Mínimas:** las bandas oscuras intermedias.
- **Máximos secundarios:** las bandas menos intensas de los lados.

## Ranura de Young

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

Por otro lado, las **posiciones** donde ocurren las franjas brillantes y oscuras son, respectivamente,

$$
\begin{align}
y_\text{brillante} &= L\tan(\theta_\text{brillante}) \\
y_\text{oscuro} &= L\tan(\theta_\text{oscuro})
\end{align}
.$$

Para ángulos muy pequeños, $\tan(\theta) \approx \sin(\theta)$, y por lo tanto

$$
\begin{align}
y_\text{brillante} &= L \left(\frac{m\lambda}{d}\right) \\
y_\text{oscuro} &= L \left(\frac{\left( m + \frac{1}{2} \right)\lambda}{d} \right)
.\end{align}
$$

## Rendijas angostas

![[rendijas angostas.png]]

Aquí, podemos hallar los ángulos de las franjas oscuras con

$$
\sin(\theta_\text{oscuro}) = m \frac{\lambda}{a}
,$$

donde $a$ es el **ancho de la rendija** y $m \in \mathbb{Z} - \left\{ 0 \right\}$.

De aquí podemos deducir exactamente que

$$
y_\text{oscuro} = L \left( \frac{m\lambda}{a} \right)
.$$

### Resolución de una rendija

La **reslución** es la capacidad que tiene el sistema óptico para distinguir objetos cercanos entre sí dentro de él.

La siguiente imagen muestra dos configuraciones: una con buena resolución, y otra de baja resolución.

![[resolucion.png]]

### Criterio de Rayleigh

En una configuración de rendija **rectangular** como la anterior, se dice que dos imágenes están **bien resueltas** cuando

$$
\theta_\text{mín} = \frac{\lambda}{a}
$$

(donde $\theta$ está en radianes).

Para aberturas **circulares**, el criterio es

$$
\theta_\text{mín} = 1.22 \frac{\lambda}{D}
,$$

donde $D$ es el **diámetro** de la abertura.
