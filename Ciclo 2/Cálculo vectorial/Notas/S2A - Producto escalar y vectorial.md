## Producto punto/escalar

El producto escalar del vector $\vec{A}$ con el vector $\vec{B}$ es la proyección de $\vec{A}$ sobre $\vec{B}$ multiplicado por $\lVert B \rVert$ (o viceversa).

$$
\begin{align}
\vec{A} \cdot \vec{B} &= \lVert A \rVert \lVert B \rVert \cos(\theta) \\
&= A_{x}B_{x} + A_{y}B_{y} + A_{z}B_{z}
\end{align}
$$

### Propiedades

![[Producto punto (propiedades).excalidraw|width:100%]]

- Si $\theta < 90\degree$, entonces $\vec{A} \cdot \vec{B} > 0$.
- Si $\theta > 90\degree$, entonces $\vec{A} \cdot \vec{B} < 0$.
- Si $\vec{A}$ y $\vec{B}$ son perpendiculares, entonces $\vec{A} \cdot \vec{B} = 0$.

### Usos

Calcular el **ángulo** entre dos vectores:

$$
\theta = \arccos\left( \frac{\vec{A} \cdot \vec{B}}{\lVert A \rVert \lVert B \rVert } \right) 
$$

Calcular la **proyección** de un vector sobre otro. Por ejemplo, para la proyección de $\vec{A}$ sobre $\vec{B}$:

$$
\lVert A \rVert \cos(\theta) = \frac{\vec{A} \cdot \vec{B}}{\lVert B \rVert }
$$

## Producto cruz/vectorial

El producto cruz de $\vec{A}$ y $\vec{B}$ es un vector perpendicular a $\vec{A}$ y $\vec{B}$, cuyo largo es el área del paralelogramo que forman ambos vectores.

$$
\begin{align}
\vec{A} \times \vec{B} &= \begin{vmatrix}
\hat{\mathbf{i}} & \hat{\mathbf{j}} & \hat{\mathbf{k}} \\
A_{x} & A_{y} & A_{z} \\
B_{x} & B_{y} & B_{z}
\end{vmatrix} \\
&= \begin{vmatrix}
A_{y} & A_{z} \\
B_{y} & B_{z}
\end{vmatrix}\hat{\mathbf{i}} - \begin{vmatrix}
A_{z} & A_{x} \\
B_{z} & B_{x}
\end{vmatrix}\hat{\mathbf{j}} + \begin{vmatrix}
A_{x} & A_{y} \\
B_{x} & B_{y}
\end{vmatrix}\hat{\mathbf{k}} \\
&= (A_{y}B_{z} - A_{z}B_{y})\hat{\mathbf{i}} - (A_{z}B_{x} - A_{x}B_{z})\hat{\mathbf{j}} + (A_{x}B_{y} - A_{y}B_{x})\hat{\mathbf{k}}
\end{align}
$$

Solo está definido para vectores de **3 dimensiones**.

```ad-tip
title: Tip: Regla de la mano derecha
collapse: closed

Un truco para averiguar la dirección de un producto cruz entre $\vec{A}$ y $\vec{B}$ es la regla de la mano derecha.

Colocamos la mano de la siguiente forma:

![[right hand rule.png]]

1. Dedo índice: $\vec{A}$
2. Dedo medio: $\vec{B}$
3. Dedo pulgar: $\vec{A} \times \vec{B}$

(En la imagen se ve diferente, pero creo que en este curso lo hacemos así)

```

### Propiedades

- **Módulo:** $\lVert \vec{A} \times \vec{B} \rVert = \lVert \vec{A} \rVert \lVert \vec{B} \rVert \sin(\theta)$
- **Anticonmutatividad:** $\vec{A} \times \vec{B} = -\vec{B} \times \vec{A}$.
- Si $\vec{A}$ y $\vec{B}$ son perpendiculares, entonces $\vec{A} \times \vec{B} = 0$.

#### Productos cruz de vectores unitarios

$$
\begin{array}{ l l l }
\hat{\mathbf{i}} \times \hat{\mathbf{i}} = 0 & \hat{\mathbf{j}} \times \hat{\mathbf{j}} = 0 & \hat{\mathbf{k}} \times \hat{\mathbf{k}} = 0 \\
\hat{\mathbf{i}} \times \hat{\mathbf{j}} = \hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = \hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = \hat{\mathbf{j}} \\
\hat{\mathbf{j}} \times \hat{\mathbf{i}} = -\hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = -\hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = -\hat{\mathbf{j}}
\end{array}
$$