## Producto punto/escalar/interno

El producto escalar del [[S1A - Vectores|vector]] $\vec{v}$ con el vector $\vec{w}$ es la proyección de $\vec{v}$ sobre $\vec{w}$ multiplicado por $\lVert w \rVert$ (o viceversa).

$$
\begin{align}
\vec{v} \cdot \vec{w} &= \lVert v \rVert \lVert w \rVert \cos(\theta) \\
&= v_{x}w_{x} + v_{y}w_{y} + v_{z}w_{z}
\end{align}
$$

### Propiedades

![[Producto punto (propiedades).excalidraw|width:100%]]

- Si $\theta < 90\degree$, entonces $\vec{v} \cdot \vec{w} > 0$.
- Si $\theta > 90\degree$, entonces $\vec{v} \cdot \vec{w} < 0$.
- Si $\vec{v}$ y $\vec{w}$ son perpendiculares, entonces $\vec{v} \cdot \vec{w} = 0$.

### Usos

Calcular el **ángulo** entre dos vectores:

$$
\theta = \arccos\left( \frac{\vec{v} \cdot \vec{w}}{\lVert v \rVert \lVert w \rVert } \right) 
$$

Calcular la **proyección** de un vector sobre otro. Por ejemplo, para la proyección de $\vec{v}$ sobre $\vec{w}$:

$$
\lVert v \rVert \cos(\theta) = \frac{\vec{v} \cdot \vec{w}}{\lVert w \rVert }
$$

## Producto cruz/vectorial

El producto cruz de $\vec{v}$ y $\vec{w}$ es un vector perpendicular a $\vec{v}$ y $\vec{w}$, cuyo largo es el área del paralelogramo que forman ambos vectores.

$$
\begin{align}
\vec{v} \times \vec{w} &= \begin{vmatrix}
\hat{\mathbf{i}} & \hat{\mathbf{j}} & \hat{\mathbf{k}} \\
v_{x} & v_{y} & v_{z} \\
w_{x} & w_{y} & w_{z}
\end{vmatrix} \\
&= \begin{vmatrix}
v_{y} & v_{z} \\
w_{y} & w_{z}
\end{vmatrix}\hat{\mathbf{i}} - \begin{vmatrix}
v_{z} & v_{x} \\
w_{z} & w_{x}
\end{vmatrix}\hat{\mathbf{j}} + \begin{vmatrix}
v_{x} & v_{y} \\
w_{x} & w_{y}
\end{vmatrix}\hat{\mathbf{k}} \\
&= (v_{y}w_{z} - v_{z}w_{y})\hat{\mathbf{i}} - (v_{z}w_{x} - v_{x}w_{z})\hat{\mathbf{j}} + (v_{x}w_{y} - v_{y}w_{x})\hat{\mathbf{k}}
\end{align}
$$

Solo está definido para vectores de **3 dimensiones**.

```ad-tip
title: Tip: Regla de la mano derecha
collapse: closed

Un truco para averiguar la dirección de un producto cruz entre $\vec{v}$ y $\vec{w}$ es la regla de la mano derecha.

Colocamos la mano de la siguiente forma:

![[right hand rule.png]]

1. Dedo índice: $\vec{v}$
2. Dedo medio: $\vec{w}$
3. Dedo pulgar: $\vec{v} \times \vec{w}$

(En la imagen se ve diferente, pero creo que en este curso lo hacemos así)

```

### Propiedades

- **Módulo:** $\lVert \vec{v} \times \vec{w} \rVert = \lVert \vec{v} \rVert \lVert \vec{w} \rVert \sin(\theta)$
	- Si $\vec{v}$ y $\vec{w}$ son perpendiculares, entonces $\vec{v} \times \vec{w} = 0$.
- **Anticonmutatividad:** $\vec{v} \times \vec{w} = -\vec{w} \times \vec{v}$.

#### Productos cruz de vectores unitarios

$$
\begin{array}{ l l l }
\hat{\mathbf{i}} \times \hat{\mathbf{i}} = 0 & \hat{\mathbf{j}} \times \hat{\mathbf{j}} = 0 & \hat{\mathbf{k}} \times \hat{\mathbf{k}} = 0 \\
\hat{\mathbf{i}} \times \hat{\mathbf{j}} = \hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = \hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = \hat{\mathbf{j}} \\
\hat{\mathbf{j}} \times \hat{\mathbf{i}} = -\hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = -\hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = -\hat{\mathbf{j}}
\end{array}
$$
