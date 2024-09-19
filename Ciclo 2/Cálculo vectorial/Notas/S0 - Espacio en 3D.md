En este curso, el espacio en tres dimensiones está orientado de la siguiente forma:

![[Espacio 3D.excalidraw]]

## Planos

Existen varias formas de representar un plano en tres dimensiones.

### Forma punto-normal

Sea $P_{0} = (x_{0}, y_{0}, z_{0})$ un punto en el plano que queremos representar, y sea $\vec{n} = (a,b,c)$ un vector normal al plano. Definamos $\vec{r_{0}}$ como el vector posición de $P_{0}$.

Este plano representa todos vectores $\vec{r}$ que inician en $P_{0}$ y son **ortogonales** a la normal $\vec{n}$. Por lo tanto, podemos usar el [[S2A - Producto punto y cruz#Producto punto/escalar|producto punto]], para representar el plano en su **forma vectorial**:

$$
\begin{align}
&& \vec{n} \cdot (\vec{r} - \vec{r_{0}}) &= 0 \\
\iff && \vec{n} \cdot \vec{r} &= \vec{n} \cdot \vec{r_{0}}
\end{align}
$$

![[plane vectors.png]]

Operando un poco para nuestra conveniencia, obtenemos la **forma escalar**:

$$
a(x - x_{0}) + b(y - y_{0}) + c(z - z_{0}) = 0
.$$

Esta forma se suele comprimir como

$$
ax + by + cz = d
,$$

donde $d = ax_{0} + by_{0} + cz_{0}$. Nótese que de esta forma podemos deducir un vector normal del plano, $\vec{n} = (a,b,c)$.

## Cuerpos en tres dimensiones

Las ecuaciones de estos cuerpos se encuentran con origen en $\left< 0, 0, 0 \right>$. Su traslación es trivial.

### Elipsoide

$$
\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1
$$

donde $a$, $b$ y $c$ son los radios del elipse en cada dimensión respectivamente.

![[elipsoide.png]]
#### Esfera

Caso particular del elipsoide donde $a = b = c$.

$$
x^{2} + y^{2} + z^{2} = r^{2}
$$
![[esfera.png]]
### Paraboloide

$$
x^{2} + y^{2} = z
$$

![[paraboloide.png]]

### Hiperboloide

$$
-x^{2} - y^{2} + z^{2} = 1
$$

![[hiperboloide.png]]