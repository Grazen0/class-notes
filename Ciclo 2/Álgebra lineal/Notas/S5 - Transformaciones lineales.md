```ad-definition
title: Definición (transformación).

Una función de la forma $T: \R^n \to \R^m$ es una **transformación** de $\R^n$ a $\R^m$.

Adicionalmente, cuando se tiene $T: \R^n \to \R^n$,  se suele decir que $T$ es un **operador en $\R^n$**.

```

## Transformaciones matriciales

```ad-definition

Una transformación $T: \R^n \to \R^m$ es **matricial** si y sólo si tiene la forma

$$
T(\mathbf{x}) = A\mathbf{x}
.$$

Entonces, $T$ se denota como $T_A$.

Si $m = n$, se dice que $T_A$ es un **operador matricial**.

```

Algunas transformaciones notables son:

- $T_0$: **transformación nula** ($T_0(\mathbf{x}) = 0$).
- $T_I$: **transformación identidad** ($T_I(\mathbf{x}) = \mathbf{x}$).

### Propiedades

Las transformaciones matriciales son **lineales**. Es decir, cumplen las siguientes propiedades:

1. $T_A(0) = 0$ (demostrable con las propiedades 2 y 3).
2. $T_A(k\mathbf{u}) = kT_A(\mathbf{u})$.
3. $T_A(\mathbf{u} \pm \mathbf{v}) = T_A(\mathbf{u}) \pm T_A(\mathbf{v})$.

```ad-theorem

Una transformación $T: \R^n \to \R^m$ es una transformación matricial si y sólo si se cumple que para todo $\mathbf{u},\mathbf{v} \in \R^n$ y todo $k \in \R$:

1. $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$.
2. $T(k\mathbf{u})= kT(\mathbf{u})$.

```

Una transformación que satisface estas condiciones se denomina **transformación lineal**.

## Transformaciones lineales

```ad-definition

Una transformación $T: \R^n \to R^m$ es **lineal** si y sólo si cumple las siguientes propiedades:

1. $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$.
2. $T(k\mathbf{u})= kT(\mathbf{u})$.

```


```ad-theorem

Toda transformación lineal de $\R^n$ a $\R^m$ es una transformación matricial y viceversa.

```

```ad-theorem

Sean $T_A: \R^n \to \R^m$ y $T_B: \R^n \to \R^m$. Si se cumple que $T_A(\mathbf{x}) = T_B(\mathbf{x})$ para todo $\mathbf{x} \in \R^n$, entonces $A = B$.

```

Resulta que existe una correspondencia de uno a uno entre las matrices de $m \times n$ y las transformaciones matriciales de $\R^n$ a $\R^m$.

Si $T$ es una transformación lineal, entonces a su matriz asociada le llamamos la **matriz estándar (o asociada) de $T$**.

### Procedimiento para hallar matrices estándar

Sea $T: \R^n \to \R^m$ una transformación lineal. Para hallar la matriz estándar de $T$, lo que hacemos es:

1. Evaluar $T$ para las bases estándar $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ de $\R^n$.
2. Construir la matriz $A = \begin{bmatrix} \mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n \end{bmatrix}$, que será la matriz estándar.

### Transformaciones notables

#### Reflexiones

"Reflejar un vector sobre un eje" es equivalente a "invertir una de sus componentes".

Las matrices estándar de las transformaciones que reflejan el espacio en $\R^2$ sobre los ejes $x$ y $y$ respectivamente son

$$
R_x = \begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix} \qquad
R_y = \begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix}
.$$

Además, reflejar el espacio sobre el eje $y = x$ (eje diagonal) tiene la matriz estándar

$$
R_d = \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

(es decir, se intercambian las bases).

En $\R^3$, las matrices estándar que reflejan el espacio sobre los planos $xy$, $xz$ y $yz$ respectivamente son

$$
R_{xy} = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{bmatrix} \qquad
R_{xz} = \begin{bmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 1
\end{bmatrix} \qquad
R_{yz} = \begin{bmatrix}
-1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix} \qquad
$$

#### Rotaciones

Una transformación en $\R^2$ que rota el espacio por un ángulo $\theta$ tiene como matriz estándar a

$$
R = \begin{bmatrix}
\cos(\theta) & -\sin(\theta) \\
\sin(\theta) & \cos(\theta)
\end{bmatrix}
$$

En $\R^3$, las matrices estándares de rotación en los ejes $x$, $y$ y $z$ respectivamente son

$$
R_x = \begin{bmatrix}
1 & 0 & 0 \\
0 & \cos(\theta) & -\sin(\theta) \\
0 & \sin(\theta) & \cos(\theta)
\end{bmatrix}
,$$

$$
R_y = \begin{bmatrix}
\cos(\theta) & 0 & -\sin(\theta) \\
0 & 1 & 0 \\
\sin(\theta) & 0 & \cos(\theta)
\end{bmatrix}
$$

y

$$
R_z = \begin{bmatrix}
\cos(\theta) & -\sin(\theta) & 0 \\
\sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 1
\end{bmatrix}
.$$

#### Proyecciones

"Proyectar un vector sobre un plano" es equivalente a "eliminar la componente en la dimensión que queremos descartar".

Las matrices estándar que proyectan un vector sobre el plano $xy$, $xz$ y $yz$ respectivamente son

$$
P_{xy} = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{bmatrix}
\qquad
P_{xz} = \begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 1 \\
\end{bmatrix}
\qquad
P_{yz} = \begin{bmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{bmatrix}
.$$

### Composición de transformaciones lineales

```ad-theorem

Sean $T_A: \R^n \to \R^k$ y $T_B: \R^k \to \R^m$. Entonces, $T_A \circ T_B$ es una transformación lineal y se cumple que 

$$
T_B \circ T_A = T_{BA}
.$$

```

Esto es: aplicar transformaciones lineales sucesivas es equivalente a multiplicar sus matrices estándares.
