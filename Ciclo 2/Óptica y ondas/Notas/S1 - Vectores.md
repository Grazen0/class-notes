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

```ad-definition

Un vector $\vec{v}$ es **unitario** si y solo si $\lVert \vec{v} \rVert = 1$.

```


Cada vector $\vec{v}$ tiene un vector unitario correspondiente, usualmente denotado por $\hat{v}$. Trivialmente, se cumple que un vector es igual al producto de su magnitud con su vector unitario.

$$
\vec{v} = \lVert \vec{v} \rVert \hat{v}
$$

### Transformación a vector unitario

Un vector $\vec{v}$ se puede convertir en su vector unitario correspondiente $\hat{v}$ con la misma dirección al dividirlo por su módulo. Es decir:
$$
\hat{v} = \frac{\vec{v}}{\lVert \vec{v} \rVert }
$$

### Vectores canónicos

Los vectores canónicos son la base del sistema de coordenadas.

$$
\begin{align}
\hat{\mathbf{i}} = (1, 0, 0) \\
\hat{\mathbf{j}} = (0, 1, 0) \\
\hat{\mathbf{k}} = (0, 0, 1)
\end{align}
$$

Cualquier vector $\vec{v}$ se puede representar en términos de los vectores canónicos como

$$
\vec{v} = \vec{v}_{x}\hat{\mathbf{i}} + \vec{v}_{y}\hat{\mathbf{j}} + \vec{v}_{z}\hat{\mathbf{k}}
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
