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
\vec{v} &= ( -7, -5 )
\end{align}
$$

![[Vector ejemplo.excalidraw|width:80%]]

La representación de un vector es completamente independiente de en qué posición se encuentra la flecha en sí. Por lo tanto, resulta conveniente muchas veces trabajar con vectores desde el origen del plano.

## Propiedades

### Vectores paralelos

Dos vectores $\vec{v}$ y $\vec{u}$ son paralelos si y solo si $\vec{v} = \lambda \vec{u}$ para algún $\lambda \in \R$.

$$
\vec{v} \parallel \vec{u} \iff \exists \lambda \in \R : \vec{v} = \lambda \vec{u}
$$

En otras palabras, dos vectores son paralelos cuando uno de ellos se puede convertir en el otro al multiplicarlo por algún escalar.

## Operaciones con vectores

Ver también: **[[S2A - Producto escalar y vectorial]]**

### Suma/resta

La suma de dos vectores es la suma de sus componentes. Al resultado se le llama **resultante**, y se suele denotar con $\vec{R}$.

$$
\vec{R} = \vec{v} \pm \vec{u} = ( v_{x} \pm u_{x}, v_{y} \pm u_{y} )
$$

#### Propiedades para vectores en forma polar

##### Módulo del resultante

(Se parece un montón al binomio al cuadrado.)

$$
\begin{align}
\lVert \vec{v} + \vec{u} \rVert^{2} &= \lVert \vec{v} \rVert^{2} + 2\lVert \vec{v} \rVert \lVert \vec{u} \rVert \cos(\theta) + \lVert \vec{u} \rVert^{2} \\
&= \Vert \vec{v} \rVert^{2} + 2(\vec{v} \cdot \vec{u}) + \lVert \vec{u} \rVert^{2} \\
\end{align}
$$

##### Orientación del resultante

La orientación $\theta$ del vector resultante se puede hallar aplicando **ley de senos**.

![[Orientación con ley de senos.excalidraw]]

Para este caso:

$$
\theta_{\vec{R}} = \arcsin\left( \frac{\lVert \vec{u} \rVert \sin(\beta - \alpha)}{\lVert \vec{R} \rVert } \right) + \alpha
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
c \cdot \vec{v} = ( c \cdot \vec{v}_{x}, c \cdot \vec{v}_{y} ) 
$$

