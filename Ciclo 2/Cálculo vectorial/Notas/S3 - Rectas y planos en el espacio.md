## Rectas en 3D

Sea $\mathscr{L}$ una recta. Entonces, si tenemos un punto $P \in \mathscr{L}$ y al vector $\vec{v}$ **dirección** de $\mathscr{L}$ (es decir, paralelo a $\mathscr{L}$), entonces $\mathscr{L}$ se puede escribir como la **ecuación vectorial**

$$
(x,y,z) = P_{0} + t\vec{v}
.$$

Esta ecuación puede representarse como una **ecuación paramétrica** de la siguiente forma:

$$
\begin{cases}
x = x_{0} + tv_{x} \\
y = y_{0} + tv_{y} \\
z = z_{0} + tv_{z}
.\end{cases}
$$

Además, despejando $t$ e igualando los resultados obtenemos la **ecuación simétrica**,

$$
\frac{x - x_{0}}{v_{x}} = \frac{y - y_{0}}{v_{y}} = \frac{z - z_{0}}{v_{z}}
,$$

donde a $v_{x}$, $v_{y}$ y $v_{z}$ se les conoce como **números directores.**

## Planos en 3D

Sea $P_{0} = (x_{0}, y_{0}, z_{0})$ un punto en el plano que queremos representar, y sea $\vec{n} = (a,b,c)$ un vector normal al plano. Definamos $\vec{r_{0}}$ como el vector posición de $P_{0}$.

Este plano representa todos vectores $\vec{r}$ que inician en $P_{0}$ y son **ortogonales** a la normal $\vec{n}$. Por lo tanto, podemos usar el [[S2A - Producto punto y cruz#Producto punto/escalar|producto punto]], para representar el plano en su **forma vectorial**:

$$
\vec{n} \cdot (\vec{r} - \vec{r_{0}}) = 0
.$$

![[plane vectors.png]]

Operando un poco para nuestra conveniencia, obtenemos la **forma escalar**:

$$
a(x - x_{0}) + b(y - y_{0}) + c(z - z_{0}) = 0
.$$

Esta forma se suele comprimir en la **forma general**:

$$
ax + by + cz = d
,$$

donde $d = ax_{0} + by_{0} + cz_{0}$. Nótese que de esta forma podemos deducir un vector normal del plano, $\vec{n} = (a,b,c)$.

### Intersección de dos planos

Dos planos pueden intersectar o bien en una **recta** o bien en **ningún punto**.

## Cálculo de distancias

### Punto a recta

La distancia de un punto $P$ a una recta de dirección $\vec{v}$ es

$$
D = \lVert \overrightarrow{SP} \rVert \sin(\theta) = \frac{\lVert \overrightarrow{SP} \times \vec{v} \rVert }{\lVert \vec{v} \rVert }
,$$

donde $S$ es algún punto en la recta.

### Punto a plano

La distancia de un punto $P$ a un plano $\Pi$ es el **tamaño de la proyección de $\overrightarrow{SP}$ sobre la normal de $\Pi$**, donde $S$ es algún punto de $\Pi$.

$$
D = \frac{| \overrightarrow{SP} \cdot \vec{n} |}{\lVert \vec{n} \rVert } \\
$$

Con un poco de álgebra, se puede producir la fórmula

$$
D = \frac{\lvert ax_0 + by_0 + cz_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}
,$$

donde

- el plano se define como $ax + by + cz = d$, y
- $P = (x_0, y_0, z_0)$.

### Rectas oblicuas

Si queremos interesectar dos rectas $\mathscr{L_{1}}$ y $\mathscr{L_{2}}$ con vectores dirección $\vec{v_{1}}$ y $\vec{v_{2}}$ respectivamente, entonces la distancia entre $\mathscr{L_{1}}$ y $\mathscr{L_{2}}$ es igual a

$$
\begin{align}
D &= \frac{\lvert \overrightarrow{PQ} \cdot (\vec{v}_1 \times \vec{v}_2) \rvert }{\lVert \vec{v}_1 \times \vec{v}_2 \rVert }
,\end{align}
$$

donde $P$ y $Q$ son puntos cualesquiera en $\mathscr{L_{1}}$ y $\mathscr{L_{2}}$  respectivamente.
