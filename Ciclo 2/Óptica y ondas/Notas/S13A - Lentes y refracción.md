## Imágenes por refracción

![[refraccion 1.png]]

Los rayos cumplen la ley de Snell, y por lo tanto cumplen con

$$
\frac{n_1}{p} + \frac{n_2}{q} = \frac{n_2-n_1}{R}
.$$

### Refracción en superficies planas

![[refraccion 2.png]]

Se cumplen las siguientes ecuaciones:

$$
\frac{n_1}{p} = -\frac{n_2}{q}
$$

Las imágenes formadas en esta configuración son:

- Si $n_1 > n_2$, **virtuales**.
- Si $n_1 < n_2$, **reales**.

## Lentes delgadas

Al trabajar con lentes delgadas, podemos tomar su ancho como despreciable y podemos considerar un único cambio de dirección del rayo por la refracción.

![[lentes delgadas.png]]

En estas configuraciones, se cumple

$$
\frac{1}{p} + \frac{1}{q} = (n - 1)\left( \frac{1}{R_1} - \frac{1}{R_2} \right)
,$$

y cuando $p \to \infty$ (es decir, el objeto está muy lejos), entonces se cumple la **ecuación de los fabricantes de lentes**:

$$
\frac{1}{q} = \frac{1}{f} = (n - 1)\left( \frac{1}{R_1} - \frac{1}{R_2} \right)
.$$

```ad-warning
title: Importante

Nótese que, por convención de signos, $R_1$ y $R_2$ **siempre** van a tener signos opuestos.

```

Por otro lado, el **aumento** de la imagen es igual a

$$
M = \frac{h'}{h} = -\frac{q}{p}
,$$

al igual que el [[S12 - Espejos y reflexión#Aumento de la imagen|aumento en espejos]].

De todas maneras, se sigue cumpliendo la ecuación del espejo:

$$
\frac{1}{p} + \frac{1}{q} = \frac{1}{f}
.$$

### Tipos de imágenes

- Si $M > 0$, entonces la imagen es **vertical** y del **mismo lado** que el objeto.
- Si $M < 0$, entonces la imagen es **invertida** y del **lado opuesto** al objeto.

### Tipos de lentes

#### Lentes convergentes

Son aquellos cuyo mayor grosor se encuentra al medio.

![[lentes convergentes.png]]

- Si $p > f$, entonces la imagen es **real**, **invertida** y **por detrás** de la lente.
- si $p < f$, entonces la imagen es **virtual**, **vertical aumentada** y **al frente** de la lente.

#### Lentes divergentes

Son aquellos cuyo grosor se encuentra en los extremos.

![[lentes divergentes.png]]

En estos lentes, la imagen siempre es **virtual**, **vertical reducida** y **al frente** de la lente.

## Convención de signos

| Cantidad                           | Positivo...                                       |
| ---------------------------------- | ------------------------------------------------- |
| Distancia objeto ($p$)             | ...hacia el objeto.                               |
| Distancia imagen ($q$)             | ...contrario al objeto.                           |
| Altura imagen ($h'$)               | ...cuando la imagen está derecha.                 |
| Radios de curvatura ($R_1$, $R_2$) | ...cuando el centro de curvatura está por detrás. |
| Distancia focal ($f$)              | ...cuando la lente es convergente.                |
