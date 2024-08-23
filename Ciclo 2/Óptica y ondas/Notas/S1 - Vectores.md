En óptica y ondas, los vectores sirven para representar y describir las características de las ondas electromagnéticas.

## Escalares vs. vectores

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

## Sistemas de representación

### Formas

#### Forma polar

La forma polar utiliza la **magnitud** y **dirección** del vector.

$$
\vec{A} = (r, \theta)
$$

#### Forma cartesiana

La forma cartesiana utiliza las **componentes** del vector.

$$
\vec{A} = (A_{x}, A_{y})
$$

### Conversión de sistemas

#### Polar $\to$ cartesiano

Se le llama **"descomponer"**.

Los componentes de un vector se pueden conseguir a partir de la dirección y la magnitud de un vector.

$$
\begin{align}
A_{x} &= r \cos(\theta) \\
A_{y} &= r \sin(\theta)
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
A_{x} &= \pm r\cos(\theta) \\
A_{y} &= \pm r\sin(\theta)
\end{align}
$$

Y si parte del **eje Y**:

$$
\begin{align}
A_{x} &= \pm r\sin(\theta) \\
A_{y} &= \pm r\cos(\theta)
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
\vec{A} &= (0, -8) \, \text{m} \\
\vec{B} &= (15 \cos(60\degree), 15\sin(60\degree))\, \text{m} \\
\vec{C} &= (12 \cos(205\degree), 12\sin(205\degree)) \, \text{m} \\
\vec{D} &= (10 \cos(143\degree), 10\sin(143\degree)) \, \text{m}
.\end{align}
$$

```

#### Cartesiano $\to$ polar

$$
\begin{align}
\lVert \vec{A} \rVert &= \sqrt{(A_{x})^{2} + (A_{y})^{2}} \\
\theta &= \arctan\left( \frac{A_{y}}{A_{x}} \right) & (-90\degree < \theta < 90\degree)
\end{align}
$$

Pero ojo con la dirección, porque a menudo tenemos que ajustar el resultado de la arcotangente.

## Vectores unitarios

```ad-note
title: Nota

En este curso, los "vectores unitarios" hacen referencia a los vectores **bases**, no a los vectores de módulo $1$.

```

Son las **bases** del sistema cartesiano, y tienen módulo $1$. Cualquier vector $\vec{A}$ se puede representar como una combinación linear de las bases, con la forma

$$
\vec{A} = A_{x}\hat{i} + B_{x}\hat{j}
.$$

## Operaciones con vectores

### Suma (vector resultante)

Usualmente denotamos el resultante como $\vec{R}$.

La suma de dos vectores es un vector con las sumas de sus componentes respectivos.

$$
\begin{align}
\vec{R} = \vec{A} \pm \vec{B} &= (A_{x} \pm B_{x}, A_{y} \pm B_{y}) \\
&= (A_{x} \pm B_{x})\hat{i} + (A_{y} \pm B_{y})\hat{j
}
\end{align}
$$

Para 3 dimensiones, las operaciones son análogas.

De la misma forma, la **resta** es análoga

### Producto punto/escalar

El producto escalar del vector $\vec{A}$ con el vector $\vec{B}$ es la proyección de $\vec{A}$ sobre $\vec{B}$ multiplicado por $\lVert B \rVert$ (o viceversa).

$$
\begin{align}
\vec{A} \cdot \vec{B} &= \lVert A \rVert \lVert B \rVert \cos(\theta) \\
&= A_{x}B_{x} + A_{y}B_{y} + A_{z}B_{z}
\end{align}
$$

#### Propiedades

- Si $\vec{A}$ y $\vec{B}$ son perpendiculares, entonces $\vec{A} \cdot \vec{B} = 0$.
- Si $\vec{A}$ y $\vec{B}$ son colineales, entonces $\vec{A} \cdot \vec{B} = \lVert A \rVert \lVert B \rVert$.

#### Usos

Calcular el **ángulo** entre dos vectores:

$$
\cos(\theta) = \frac{\vec{A} \cdot \vec{B}}{\lVert A \rVert \lVert B \rVert }
$$

Calcular la **proyección** de un vector sobre otro. Por ejemplo, para la proyección de $\vec{A}$ sobre $\vec{B}$:

$$
\lVert A \rVert \cos(\theta) = \frac{\vec{A} \cdot \vec{B}}{\lVert B \rVert }
$$

### Producto cruz/vectorial

El producto cruz de $\vec{A}$ y $\vec{B}$ es un vector perpendicular a $\vec{A}$ y $\vec{B}$, cuyo largo es el área del paralelogramo que forman ambos vectores.

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

#### Propiedades

- **Módulo:** $\lVert \vec{A} \times \vec{B} \rVert = \lVert \vec{A} \rVert \lVert \vec{B} \rVert \sin(\theta)$
- **Anti-conmutatividad:** $\vec{A} \times \vec{B} = -\vec{B} \times \vec{A}$.
- Si $\vec{A}$ y $\vec{B}$ son perpendiculares, entonces $\vec{A} \times \vec{B} = 0$.

##### Productos cruz de vectores unitarios

$$
\begin{array}{ l l l }
\hat{\mathbf{i}} \times \hat{\mathbf{i}} = 0 & \hat{\mathbf{j}} \times \hat{\mathbf{j}} = 0 & \hat{\mathbf{k}} \times \hat{\mathbf{k}} = 0 \\
\hat{\mathbf{i}} \times \hat{\mathbf{j}} = \hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = \hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = \hat{\mathbf{j}} \\
\hat{\mathbf{j}} \times \hat{\mathbf{i}} = -\hat{\mathbf{k}} & \hat{\mathbf{j}} \times \hat{\mathbf{k}} = -\hat{\mathbf{i}} & \hat{\mathbf{k}} \times \hat{\mathbf{i}} = -\hat{\mathbf{j}}
\end{array}
$$
