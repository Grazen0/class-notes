En óptica y ondas, los vectores sirven para representar y describir las características de las ondas electromagnéticas.

## Escalares y vectores

Ejemplos de **escalares**:

- Masa
- Rapidez
- Energía
- Tiempo
- Energía

Ejemplos de **vectores**:

- Peso
- Velocidad
- Campos vectoriales

Un vector se puede representar de dos formas:

- Coordenadas **cartesianas** $(r, \theta)$.
- Coordenadas **polares** $(A_{x}, A_{y}, A_{z})$.

## Coordenadas polares

Las coordenadas cartesianas se pueden obtener a partir de las polares con

$$
\begin{align}
A_{x} &= r \cos(\theta) \\
A_{y} &= r \sin(\theta)
,\end{align}
$$

donde $\theta$ es el ángulo que **parte en sentido horario desde el eje X**.

### Magnitud y orientación

**Magnitud:** $\lVert \vec{A} \rVert = \sqrt{(A_{x})^{2} + (A_{y})^{2}}$

**Orientación:** $\theta = \tan^{-1}\left( \frac{A_{y}}{A_{x}} \right) \qquad (-90° < \theta < 90°)$

### Ángulos relativos

```ad-note
title: Nota

Para mí no es muy importante esto, pero lo hicimos en clase y probablemente sea bueno tenerlo en mente para algún examen.

```

Si el ángulo de un vector no parte del eje X o tiene un sentido antihorario, se puede evitar tener que convertir el ángulo.

Si el ángulo tiene sentido **antihorario**:

$$
\begin{align}
A_{x} &= \pm r\cos(\theta) \\
A_{y} &= \pm r\sin(\theta)
\end{align}
$$

Y si tiene sentido **horario**:

$$
\begin{align}
A_{x} &= \pm r\sin(\theta) \\
A_{y} &= \pm r\cos(\theta)
,\end{align}
$$

En cualquiera de los casos, los signos $\pm$ dependen del cuadrante donde se encuentre el vector.


```ad-exercise
title: Ejercicio de conversión de coordenadas
collapse: closed

![[vectores.png]]

Con el primer método, obtenemos

$$
\begin{align}
\vec{A} &= (0, -8)\,\text{m} \\
\vec{B} &= (15\sin(30°), 15\cos(30°))\,\text{m} \\
\vec{C} &= (-12\sin(25°), -12\cos(25°))\,\text{m} \\
\vec{D} &= (-10\cos(53°), 10\sin(53°))\,\text{m}
\end{align}
$$

y con el segundo método,

$$
\begin{align}
\vec{A} &= (0, -8) \, \text{m} \\
\vec{B} &= (15 \cos(60°), 15\sin(60°))\, \text{m} \\
\vec{C} &= (12 \cos(205°), 12\sin(205°)) \, \text{m} \\
\vec{D} &= (10 \cos(143°), 10\sin(143°)) \, \text{m}
.\end{align}
$$

```

## Vectores unitarios

```ad-note
title: Nota

En este curso, los "vectores unitarios" hacen referencia a los vectores **bases**, no a los vectores de módulo $1$.

```


Son las **bases** del sistema cartesiano, y tienen módulo $1$. Cualquier vector $\vec{A}$ se puede representar como una combinación linear de las bases, con la forma

$$
\vec{A} = A_{x}\hat{i} + B_{x}\hat{j}
.$$

## Vector resultante

Literalmente significa **"suma"**. Usualmente denotamos este resultante como $\vec{R}$.

$$
\begin{align}
\vec{R} = \vec{A} + \vec{B} &= (A_{x} + B_{x}, A_{y} + B_{y}) \\
&= (A_{x} + B_{x})\hat{i} + (A_{y} + B_{y})\hat{j}
\end{align}
$$

Además, trivialmente

$$
\begin{align}
\theta_{\vec{R}} &= \tan^{-1}\left( \frac{A_{y} + B_{y}}{A_{x} + A_{y}}  \right) & (-90° < \theta < 90°) \\
\lVert \vec{R} \rVert &= \sqrt{(A_{x} + B_{x})^{2} + (A_{y} + B_{y})^{2}}
.\end{align}
$$

Para 3 dimensiones, las operaciones son análogas.

## Producto punto/escalar

El producto escalar del vector $\vec{A}$ con el vector $\vec{B}$ es la proyección de $\vec{A}$ sobre $\vec{B}$ multiplicado por 

$$
\begin{align}
\vec{A} \cdot \vec{B} &= \lVert A \rVert \lVert B \rVert \cos(\theta) \\
&= A_{x}B_{x} + A_{y}B_{y} + A_{z}B_{z}
\end{align}
$$

## Producto cruz/vectorial

El producto cruz de $\vec{A}$ y $\vec{B}$ es un vector perpendicular a $\vec{A}$ y $\vec{B}$, cuyo largo es el área que forman el paralelogramo de ambos vectores.

$$
\begin{align}
\vec{A} \times \vec{B} &= \left(\begin{vmatrix}
A_{y} & A_{z} \\
B_{y} & B_{z}
\end{vmatrix}, \begin{vmatrix}
A_{z} & A_{x} \\
B_{z} & B_{x}
\end{vmatrix}, \begin{vmatrix}
A_{x} & A_{y} \\
B_{x} & B_{y}
\end{vmatrix}\right)
\end{align}
$$

No está definido para vectores de dos dimensiones o menos.
### Propiedades

- $\vec{A} \times \vec{B} = -\vec{B} \times \vec{A}$.
- $\vec{A} \vec{\times}$

### Productos cruz de vectores unitarios

$$
\begin{array}{ l l l }
\hat{\mathbf{i}} \times \hat{\mathbf{i}} = 0 & \hat{\mathbf{j}} \times \hat{\mathbf{j}} = 0 & \hat{\mathbf{k}} \times \hat{\mathbf{k}} = 0 \\
\hat{\mathbf{i}} \times \hat{\mathbf{j}} = \hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = \hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = \hat{\mathbf{j}} \\
\hat{\mathbf{j}} \times \hat{\mathbf{i}} = -\hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = -\hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = -\hat{\mathbf{j}}
\end{array}
$$
