La óptica geométrica estudia cómo se **crean las imágenes**, lo que involucra la incidencia de rayos en diferentes superficies.

Las imágenes se pueden formar por:

- **Reflexión** (espejos)
- **Refracción** (lentes)

## Conceptos básicos

- **Objeto ($O$):** Todo aquello de donde irradian los rayos de luz, sean emitidos o reflejados.
	- **Objeto puntoal:** Un tipo de objeto que carece de extensión física.
	- **Objeto extenso:** Tiene una longitud, se conforma de varios objetos puntuales.
- **Punto imagen ($I$):** El punto de donde provienen los rayos que forman la imagen.
- **Localización objeto ($p$)**
- **Localización imagen ($q$)**

## Reflexión y espejos

### Espejos planos

Para analizar un caso de reflexión, **extendemos hacia atrás los rayos reflejados**.

Los espejos planos forman **imágenes virtuales**.

![[imagen real.png]]

En estos casos, sólo necesitamos **escoger dos rayos** para determinar dónde se formará la imagen extensa.

Por las leyes de reflexión, tenemos:

- El tamaño del objeto es $h$.
- El rayo $PQ$ se refleja sobre sí mismo.
- El rayo $PR$ se refleja con ángulo $\theta$.
- Se forma una imagen **virtual** de tamaño $h'$.

Como $p = q$ y $h = h'$, entonces la imagen virtual está a la misma distancia por detrás del espejo que el objeto al frente.

#### Aumento de la imagen

En general, definimos el **aumento lateral** para espejos y lentes como

$$
M = \frac{h'}{h}
.$$

En el caso de los espejos planos, $M = 1$.

### Espejos esféricos

![[espejos esfericos.png]]

- $R$: radio de curvatura del espejo.
- $C$: centro de curvatura del espejo.
- $V$: centro de la sección esférica (el eje principal).
- $O$: algún punto a distancia mayor a $R$ de donde salen los rayos de luz.
- $I$: punto donde se forma la imagen.

#### Convenciones de signos

Esencialmente lo mismo que para espejos planos.

![[convenciones de signos en espejos esfericos.png]]

#### Espejos esféricos cóncavos (convergentes)

Son aquellos de superficie **curvada hacia adentro**.

Forman **imágenes reales**, ya que cualquier par de rayos en él convergen.

![[diagrama de espejo concavo.png]]

El aumento $M$ se puede calcular de la siguiente forma:

$$
M = -\frac{q}{p}
.$$

Además, se cumple que

$$
\frac{1}{p} + \frac{1}{q} = \frac{2}{R}
$$

##### Distancia focal

Cuando el objeto está lo suficientemente lejos, los rayos de luz llegan prácticamente paralelos.

![[distancia focal.png]]

En esta situación, $\frac{1}{p}$ se vuelve despreciable y le llamamos a $q$ la **distancia focal**. Cambiándole de símbolo por $f$, tenemos que

$$
f = \frac{R}{2}
,$$

es la **distancia al foco ($F)$** de los rayos que llegan al espejo.

Si ya no despreciamos $\frac{1}{p}$, en la ecuación original de $p$ y $q$, tenemos que

$$
\frac{1}{p} + \frac{1}{q} = \frac{1}{f}
.$$

#### Espejos esféricos convexos (divergentes)

Son aquellos de superficie **curvada hacia afuera**.

Forman **imágenes virtuales**, ya que sus rayos reflejados convergen en un punto que traspasa el espejo.

![[espejo esferico convexo.png]]

## Diagramas de rayos

### Para espejos cóncavos

Existen dos casos a tomar en cuenta para dibujar diagramas.

Cuando el objeto está **detrás del foco**:

![[diagrama concavo con objeto lejos.png]]

Cuando el objeto está **pasando el foco**:

![[diagrama concavo con objeto cerca.png]]
### Para espejos convexos

![[diagrama para espejo convexo.png]]

## Convención de signos

| Cantidad                           | Positivo...                     |
| ---------------------------------- | ------------------------------- |
| Distancia objeto ($p$)             | ...siempre.                     |
| Distancia imagen ($q$)             | ...del espejo al objeto.        |
| Altura de la imagen ($h'$)         | ...en el sentido de $h$.        |
| Aumento ($M$)                      | ...en el sentido de $h$.        |
| Distancia focal y radio ($f$, $R$) | ...cuando el espejo es cóncavo. |
