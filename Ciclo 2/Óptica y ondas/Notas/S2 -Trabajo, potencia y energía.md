```ad-important
title: Nota importante

En este curso consideramos a la gravedad como $g = 9.8 \mathrm{\frac{m}{s^{2}}}$.

```

```ad-definition

El trabajo es una cantidad física *escalar* asociedad con la **cantidad de energía que se transfiere** hacia un cuerpo al aplicar una fuerza, acción que resulta en un **cambio en el estado del movimiento**.

Se mide en **joules** ($\text{J}$).

```

El trabajo ($W$) se calcula como el producto escalar de la fuerza $\vec{F}$ y el cambio en distancia $\Delta \vec{r}$:

$$
W = \vec{F} \cdot \Delta \vec{r} = \lVert \vec{F} \rVert \lVert \Delta \vec{r} \rVert \cos(\theta)
$$

## Trabajo de una fuerza variable

Como una fuerza puede ser variable, esto llama al uso de una integral sobre la trayectoria del objeto, con la fórmula

$$
W = \int_{x_{1}}^{x_{2}} F_{x} \, dx
,$$

donde $F_{x}$ es la fuerza en la posición $x$, y $x_{1}$ y $x_{2}$ son la posición inicial y final del objeto respectivamente.

Como observamos, la integración se hace **con respecto a la posición del objeto**, no con respecto al tiempo como podría parecer intuitivamente.

### Fuerza de un resorte

La **fuerza restauradora** (elástica) de un resorte se modela mediante la *ley de Hooke*,

$$
F_{x} = -kx
,$$

donde $x$ es la posición del resorte con respecto a su posición natural. Además $k$ es la *constante elástica*, que define la "elasticidad" del resorte.

Utilizando esta y la fórmula de trabajo con fuerza variable, llegamos a que el **trabajo realizado por el resorte** al ir desde $x_{i}$ hasta $x_{j}$ es igual a

$$
W_{s} = \frac{1}{2}k(x_{i})^{2} - \frac{1}{2}k(x_{f})^{2}
.$$

## Potencia

```ad-definition

La potencia es la **cantidad de transferencia de energía** en un intervalo de tiempo. Se mide en **watts** ($\text{W}$).

```

La **potencia promedio** se calcula como

$$
P_{\text{prom}} = \frac{W}{\Delta t}
,$$

mientras que la **potencia instantánea** se calcula como la derivada del trabajo con respecto al tiempo, es decir

$$
P = \frac{dW}{dt}
.$$

Para una **fuerza constante**, se cumple que la potencia es el producto escalar de dicha fuerza con la velocidad. Es decir,

$$
P = \frac{dW}{dt} = \vec{F} \cdot \frac{d\vec{r}}{dt} = \vec{F} \cdot \vec{v}
.$$

## Energía

### Tipos de energía

#### Energía cinética

La **energía cinética** de un objeto se calcula mediante la fórmula

$$
K = \frac{1}{2}mv^{2}
$$

donde $m$ es la masa del objeto, y $v$ su velocidad.

```ad-theorem
title: Teorema (teorema del trabajo neto).

Cuando se realiza un trabajo en un sistema, y el único cambio es en la rapidez de sus partes, entonces el **trabajo neto** realizado en el sistema es igual al **cambio en la energía cinética del sistema**.

Es decir,

$$
W_{\text{tot}} = \Delta K = K_{f} - K_{i} = \frac{1}{2}m(v_{f})^{2} - \frac{1}{2}m(v_{i})^{2}
,$$

donde $K_{f}$ y $K_{i}$ son la energía cinética final e inicial del objeto respectivamente.

Nótese que $W_{\text{tot}}$ no es el trabajo de alguna fuerza en particular: es *el trabajo total realizado por todas las fuerzas* en el objeto.

```

#### Energía potencial

Es la energía "almacenada" por un objeto asociada a su posición.

##### Energía potencial gravitacional

Esta forma de energía potencial es aquella asociada con el **peso** de un cuerpo y su **posición vertical**. Se calcula mediante la fórmula

$$
U_{g} = mgh
,$$

donde $h$ es la altura a la que se encuentra el objeto.

Un resultado interesante es que la variación en energía potencial gravitacional de un objeto es precisamente el opuesto del trabajo realizado por la gravedad. Es decir,

$$
\begin{align}
\Delta U_{g} &= U_{g,f} - U_{g,i} \\
&= mgh_{f} - mgh_{i} = mg(h_{f} - h_{i}) = -(-mg)\Delta h \\
\Delta U_{g} &= -W_{\text{grav}}
\end{align}
.$$

##### Energía potencial elástica

### Ley de conservación de la energía

```ad-definition
title: Definición (fuerza conservativa).

Una fuerza es conservativa si y sólo si es **independiente de la trayectoria**.

Alternativamente, una fuerza es conservativa si y sólo si el **trabajo** que realiza sobre un objeto a lo largo de una **trayectoria cerrada** es $0$.

```


$$
\Delta E_{\text{mec}} + \Delta U_{\text{int}} = 0
$$
