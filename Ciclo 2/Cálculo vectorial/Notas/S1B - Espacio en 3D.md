En este curso, el espacio en tres dimensiones está orientado de la siguiente forma:

![[Espacio 3D.excalidraw]]

## Planos

Existen varias formas de representar un plano en tres dimensiones.

### Forma punto-normal

Sea $P_{0} = (x_{0}, y_{0}, z_{0})$ un punto en el plano que queremos representar, y $\vec{n} = a\hat{\mathbf{i}} + b\hat{\mathbf{j}} + c\hat{\mathbf{k}}$ uno de los dos vectores normales al plano.

Por el [[S2A - Producto punto y cruz#Producto punto/escalar|producto punto]], este plano se puede escribir como

$$
\vec{n} \cdot ((x\hat{\mathbf{i}} + y\hat{\mathbf{j}} + z\hat{\mathbf{k}}) - P_{0}) = 0
$$

![[plane vectors.png]]

La forma estándar:

$$
ax + by + z = d
$$

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
-\frac{x^{2}}{a^{2}} - \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1
$$

![[hiperboloide.png]]