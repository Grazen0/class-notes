En este curso, el espacio en tres dimensiones está orientado de la siguiente forma:

```graph
bounds: [-10, 10, 10, -10]
bounds3D: 
elements: [
	{
		type: "line",
		def: [[0,0],[4,1]]
	}
]
```

![[Espacio 3D.excalidraw]]

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