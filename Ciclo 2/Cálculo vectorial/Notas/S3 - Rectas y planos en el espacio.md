## Rectas en 3D

#todo 
- [ ] Añadir gráfica

Sea $\mathscr{L}$ una recta. Entonces, si tenemos un punto $P \in \mathscr{L}$ y al vector $\vec{v}$ **dirección** de $\mathscr{L}$ (es decir, paralelo a $\mathscr{L}$), entonces $\mathscr{L}$ se puede escribir como la **ecuación vectorial**

$$
(x,y,z) = P_{0} + t\vec{v}
.$$

Esta ecuación puede representarse como una **ecuación paramétrica** de la siguiente forma:

$$
\begin{align}
x &= x_{0} + tv_{x} \\
y &= y_{0} + tv_{y} \\
z &= z_{0} + tv_{z}
.\end{align}
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
\begin{align}
&& \vec{n} \cdot (\vec{r} - \vec{r_{0}}) &= 0 \\
\iff && \vec{n} \cdot \vec{r} &= \vec{n} \cdot \vec{r_{0}}
\end{align}
$$

![[plane vectors.png]]

Operando un poco para nuestra conveniencia, obtenemos la **forma escalar**:

$$
a(x - x_{0}) + b(y - y_{0}) + c(z - z_{0}) = 0
.$$

Esta forma se suele comprimir como

$$
ax + by + cz = d
,$$

donde $d = ax_{0} + by_{0} + cz_{0}$. Nótese que de esta forma podemos deducir un vector normal del plano, $\vec{n} = (a,b,c)$.

### Intersección de dos planos

Dos planos pueden intersectar o bien en una **recta** o bien en **ningún punto**.

### Distancia de un punto a un plano

La distancia de un punto $P$ a un plano $\mathscr{P}$ es el **tamaño de la proyección de $\overrightarrow{OP}$ sobre la normal de $\mathscr{P}$**, donde $O$ es algún punto de $\mathscr{P}$.

$$
D = \lVert \operatorname{proy}_{\vec{n}}(\overrightarrow{OP}) \rVert = \lvert \operatorname{comp}_{\vec{n}}(\overrightarrow{OP}) \rvert 
$$

> [!NOTE] El valor absoluto es importantísimo, ya que $P$ podría estar por el lado opuesto a la dirección de la normal.

#todo
- [ ] Añadir gráfica

### Distancia entre rectas oblicuas

Si queremos interesectar dos rectas $\mathscr{L_{1}}$ y $\mathscr{L_{2}}$ con vectores dirección $\vec{v_{1}}$ y $\vec{v_{2}}$ respectivamente, entonces la distancia entre $\mathscr{L_{1}}$ y $\mathscr{L_{2}}$ es igual a

$$
D = \lVert \operatorname{proy}_{\vec{n}}(\overrightarrow{PQ}) \rVert = \frac{\lvert \overrightarrow{PQ} \cdot \vec{n} \rvert }{\lVert \vec{n} \rVert }
,$$

donde $\vec{n} = \vec{v_{1}} \times \vec{v_{2}}$, y donde $P$ y $Q$ son puntos cualesquiera en $\mathscr{L_{1}}$ y $\mathscr{L_{2}}$  respectivamente.

#todo
- [ ] Añadir gráfica
