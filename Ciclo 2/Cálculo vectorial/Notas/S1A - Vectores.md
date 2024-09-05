```ad-definition

Un **vector** es un objeto matemático que tiene *magnitud* y *dirección*.

```

Un vector se representa como un segmento orientado (una flecha), y se denota con una letra en negrita ($\mathbf{v}$) o con una letra con flecha encima ($\vec{v}$).

Para construir un vector, podemos usar un **punto inicial** y un **punto final**.

Por ejemplo, para $I = (2,4)$ y $F = (-5, -1)$:

$$
\begin{align}
\vec{v} &= \overrightarrow{IF} \\
 &= ( -5 - 2, -1 - 4 ) \\
\vec{v} &= \langle -7, -5 \rangle
\end{align}
$$

```graph
bounds: [-6, 6, 6, -6]
keepAspectRatio: true
elements: [
	{
		type: "point",
		def: [2, 4]
	},
	{
		type: "point",
		def: [-5, -1]
	},
	{
		type: "arrow",
		def: ["e0", "e1"]
	},
	{
		type: "text",
		def: [-0.5, 0.5, "$\\vec{v}$"],
		att: { anchor: "e2" }
	}
]
```

La representación de un vector es completamente independiente de en qué posición se encuentra la flecha en sí. Por lo tanto, resulta conveniente muchas veces trabajar con vectores desde el origen del plano.

## Sistemas de representación

### Formas

#### Forma polar

La forma polar utiliza la **magnitud** y **dirección** del vector.

$$
\vec{v} = (r, \theta)
$$

#### Forma cartesiana

La forma cartesiana utiliza las **componentes** del vector.

$$
\vec{v} = \langle v_{x}, v_{y} \rangle
$$

### Conversión de sistemas

#### Polar $\to$ cartesiano

Se le llama **"descomponer"**.

Los componentes de un vector se pueden conseguir a partir de la dirección y la magnitud de un vector.

$$
\begin{align}
v_{x} &= r \cos(\theta) \\
v_{y} &= r \sin(\theta)
,\end{align}
$$

donde $\theta$ es el ángulo que **parte en sentido horario desde el eje X**.

````ad-seealso
title: Conversión con ángulos "relativos"
collapse: closed

```ad-note
title: Nota

Para mí no es muy importante esto, pero lo hicimos en clase y probablemente sea bueno tenerlo en mente para algún examen.

```

Si el ángulo de un vector no parte del eje X o tiene un sentido antihorario, se puede evitar tener que convertir el ángulo.

Si el ángulo parte del **eje X**:

$$
\begin{align}
v_{x} &= \pm r\cos(\theta) \\
v_{y} &= \pm r\sin(\theta)
\end{align}
$$

Y si parte del **eje Y**:

$$
\begin{align}
v_{x} &= \pm r\sin(\theta) \\
v_{y} &= \pm r\cos(\theta)
,\end{align}
$$

En cualquiera de los casos, los signos $\pm$ dependen del cuadrante donde se encuentre el vector.

````

```ad-exercise
title: Ejercicio
collapse: closed

![[vectores.png]]

Con el primer método, obtenemos

$$
\begin{align}
\vec{A} &= (0, -8)\,\text{m} \\
\vec{B} &= (15\sin(30\degree), 15\cos(30\degree))\,\text{m} \\
\vec{C} &= (-12\cos(25\degree), -12\sin(25\degree))\,\text{m} \\
\vec{D} &= (-10\cos(53\degree), 10\sin(53\degree))\,\text{m}
\end{align}
$$

y con el segundo método,

$$
\begin{align}
\vec{A} &= \langle 0, -8 \rangle \, \text{m} \\
\vec{B} &= \langle 15 \cos(60\degree), 15\sin(60\degree) \rangle\, \text{m} \\
\vec{C} &= \langle 12 \cos(205\degree), 12\sin(205\degree) \rangle \, \text{m} \\
\vec{D} &= \langle 10 \cos(143\degree), 10\sin(143\degree) \rangle \, \text{m}
.\end{align}
$$

```

#### Cartesiano $\to$ polar

$$
\begin{align}
\lVert \vec{v} \rVert &= \sqrt{(v_{x})^{2} + (v_{y})^{2}} \\
\theta &= \arctan\left( \frac{v_{y}}{v_{x}} \right) & (-90\degree < \theta < 90\degree)
\end{align}
$$

Pero ojo con la dirección, porque a menudo tenemos que ajustar el resultado de la arcotangente.


## Propiedades

### Vectores paralelos

Dos vectores $\vec{v}$ y $\vec{w}$ son paralelos si y sólo si $\vec{v} = \lambda \vec{w}$ para algún $\lambda \in \R$.

$$
\vec{v} \parallel \vec{w} \iff \exists \lambda \in \R : \vec{v} = \lambda \vec{w}
$$

En otras palabras, dos vectores son paralelos cuando uno de ellos se puede convertir en el otro al multiplicarlo por algún escalar.

Además de poder usar el [[S2A - Producto punto y cruz#Producto cruz/vectorial|producto cruz]] como criterio, otro criterio es:

```ad-proposition

Dos vectores $\vec{v}$ y $\vec{w}$ son paralelos si y sólo si **sus componentes son proporcionales**. Es decir,

$$
\frac{v_{x}}{w_{x}} = \frac{v_{y}}{w_{y}} = \frac{v_{z}}{w_{z}}
.$$

```

## Vectores unitarios

```ad-definition

Un vector $\vec{v}$ es **unitario** si y sólo si $\lVert \vec{v} \rVert = 1$.

```


Todo vector $\vec{v}$ tiene un vector unitario correspondiente, usualmente denotado por $\hat{v}$. 

Un vector $\vec{v}$ se puede convertir en su vector unitario correspondiente $\hat{v}$ con la misma dirección al **dividirlo por su módulo**. Es decir:
$$
\hat{v} = \frac{\vec{v}}{\lVert \vec{v} \rVert }
$$

Además, esto implica que un vector se puede conseguir a partir de su vector unitario y su módulo, de la siguiente forma:

$$
\vec{v} = \lVert \vec{v} \rVert \hat{v}
$$

### Vectores canónicos

Los vectores canónicos son la base del sistema de coordenadas.

$$
\begin{align}
\hat{i} = \langle 1, 0, 0 \rangle \\
\hat{j} = \langle 0, 1, 0 \rangle \\
\hat{k} = \langle 0, 0, 1 \rangle
\end{align}
$$

Cualquier vector $\vec{v}$ se puede representar en términos de los vectores canónicos como

$$
\vec{v} = v_{x}\hat{i} + v_{y}\hat{j} + v_{z}\hat{k}
.$$


## Operaciones con vectores

Ver también: **[[S2A - Producto punto y cruz]]**

### Suma/resta

La suma de dos vectores es la suma de sus componentes. Al resultado se le llama **resultante**, y se suele denotar con $\vec{R}$.

$$
\vec{R} = \vec{v} \pm \vec{w} = \langle  v_{x} \pm w_{x}, v_{y} \pm w_{y}  \rangle
$$

#### Propiedades para vectores en forma polar

##### Módulo del resultante

(Se parece un montón al binomio al cuadrado.)

$$
\begin{align}
\lVert \vec{v} + \vec{w} \rVert^{2} &= \lVert \vec{v} \rVert^{2} + 2\lVert \vec{v} \rVert \lVert \vec{w} \rVert \cos(\theta) + \lVert \vec{w} \rVert^{2} \\
&= \Vert \vec{v} \rVert^{2} + 2(\vec{v} \cdot \vec{w}) + \lVert \vec{w} \rVert^{2} \\
\end{align}
$$

##### Orientación del resultante

La orientación $\theta$ del vector resultante se puede hallar aplicando **ley de senos**.

![[Orientación con ley de senos.excalidraw]]

Para este caso:

$$
\theta_{\vec{R}} = \arcsin\left( \frac{\lVert \vec{w} \rVert \sin(\beta - \alpha)}{\lVert \vec{R} \rVert } \right) + \alpha
$$

#### Métodos gráficos

##### Método del triángulo

Una forma de sumar vectores gráficamente es colocando el segundo vector en la punta del primero. Entonces, su suma $\vec{R}$ será el vector que va desde el inicio del primer vector hasta la punta del segundo.

![[Metodo del triángulo.excalidraw]]

##### Método del paralelogramo

Otra forma de sumar vectores gráficamente es trasladándolos desde su origen común para formar un paralelogramo de la siguiente manera:

![[Metodo del paralelogramo.excalidraw]]


### Producto con escalar

Multiplicar un vector con un escalar es multiplicar sus componentes por el escalar.

$$
c \cdot \vec{v} = \langle  c \cdot \vec{v}_{x}, c \cdot \vec{v}_{y}  \rangle 
$$
