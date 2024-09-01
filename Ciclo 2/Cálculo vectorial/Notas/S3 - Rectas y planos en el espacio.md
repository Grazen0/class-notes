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

### Intersección de dos planos

Dos planos pueden intersectar o bien en una **recta** o bien en **ningún punto**.

### Distancia de un punto a un plano

La distancia de un punto $P$ a un plano $\mathscr{P}$ es la **componente de $\overrightarrow{OP}$ sobre la normal de $\mathscr{P}$**, donde $O$ es algún punto de $\mathscr{P}$.

$$
D(P, \mathscr{P}) = \lVert \operatorname{proy}_{\vec{n}}(\overrightarrow{OP}) \rVert = \operatorname{comp}_{\vec{n}}(\overrightarrow{OP})
$$

#todo
- [ ] Añadir gráfica