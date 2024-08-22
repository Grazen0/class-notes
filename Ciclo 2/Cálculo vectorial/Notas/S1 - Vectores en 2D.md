```ad-definition

Un **vector** es un objeto matemático que tiene *magnitud* y *dirección*.

```

Un vector se representa como un segmento orientado (una flecha), y se denota con una letra en negrita ($\mathbf{v}$) o con una letra con flecha encima ($\vec{v}$).

Para construir un vector, podemos usar un **punto inicial** y un **punto final**.

Por ejemplo, para $I = (2,4)$ y $F = (-5, -1)$:

$$
\begin{align}
\vec{v} &= \overrightarrow{IF} \\
 &= \langle -5 - 2, -1 - 4 \rangle \\
\vec{v} &= \langle -7, -5 \rangle
\end{align}
$$

![[Vector ejemplo.excalidraw|width:80%]]

La representación de un vector es completamente independiente de en qué posición se encuentra la flecha en sí. Por lo tanto, resulta conveniente muchas veces trabajar con vectores desde el origen del plano.

## Operaciones con vectores

### Suma

$$
\vec{v} \pm \vec{u} = \langle v_{x} \pm u_{x}, \vec{v}_{y} \pm \vec{u}_{y} \rangle \\
.$$

### Producto con escalar

$$
c \cdot \vec{v} = \langle c \cdot a, c \cdot b \rangle 
$$

## Módulo

El módulo de un vector es su **magnitud** o **longitud**. Dado un vector $\vec{v}$ en la forma $\vec{v} = \langle a, b \rangle$.

$$
\lVert \vec{v} \rVert = \sqrt{a^{2} + b^{2}}
.$$

## Vector unitario

```ad-definition

Un vector $\vec{v}$ es **unitario** si y solo si $\lVert \vec{v} \rVert = 1$.

```

### Transformación a vector unitario

Un vector $\vec{v}$ se puede convertir en su vector unitario correspondiente $\hat{u}$ con la misma dirección al dividirlo por su módulo. Es decir:
$$
\hat{v} = \frac{\vec{v}}{\lVert \vec{v} \rVert }
$$

### Vectores canónicos

Los vectores canónicos son la base del sistema de coordenadas.

$$
\begin{align}
\hat{\mathbf{i}} = \langle 1, 0, 0 \rangle \\
\hat{\mathbf{j}} = \langle 0, 1, 0 \rangle \\
\hat{\mathbf{k}} = \left< 0, 0, 1 \right> 
\end{align}
$$

Cualquier vector $\vec{v}$ se puede representar en términos de los vectores canónicos como

$$
\vec{v} = \vec{v}_{x}\hat{\mathbf{i}} + \vec{v}_{y}\hat{\mathbf{j}}
.$$

## Vectores paralelos

Dos vectores $\vec{v}$ y $\vec{u}$ son paralelos si y solo si $\vec{v} = \lambda \vec{u}$ para algún $\lambda \in \R$.

$$
\vec{v} \parallel \vec{u} \iff \exists \lambda \in \R : \vec{v} = \lambda \vec{u}
$$

## Descomposición en componentes

Un vector $\vec{v}$ de módulo $\lVert \vec{v} \rVert$ y dirección $\theta$ se puede descomponer en sus componentes como

$$
\begin{align}
\vec{v}_{x} &= \lVert \vec{v} \rVert \cos(\theta) \\
\vec{v}_{y} &= \lVert \vec{v} \rVert \sin(\theta)
\end{align}
$$
