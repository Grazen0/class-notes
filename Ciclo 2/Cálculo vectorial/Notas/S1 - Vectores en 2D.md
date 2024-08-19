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

Sean $\vec{v} = \langle a, b \rangle$ y  $\vec{u} = \langle m, n \rangle$, y sea $c \in \R$. Entonces

$$
\begin{align}
\vec{v} \pm \vec{u} &= \langle a \pm m, b \pm n \rangle \\
c \cdot \vec{v} &= \langle c \cdot a, c \cdot b \rangle 
\end{align}
.$$

Se pueden sumar vectores, y se puede multiplicar vectores con escalares.

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

Un vector $\vec{v}$ se puede convertir en un vector unitario $\vec{u}$ con la misma dirección al dividirlo por su módulo. Es decir:

$$
\vec{u} = \frac{\vec{v}}{\lVert \vec{v} \rVert }
$$

### Vectores canónicos

Los vectores canónicos son la base del sistema de coordenadas.

$$
\begin{align}
\hat{i} = \langle 1,0 \rangle \\
\hat{j} = \langle 0, 1 \rangle
\end{align}
$$

Cualquier vector $\vec{v} = \langle a, b \rangle$ se puede representar en términos de los vectores canónicos como

$$
\vec{v} = a\hat{i} + b\hat{j}
.$$
