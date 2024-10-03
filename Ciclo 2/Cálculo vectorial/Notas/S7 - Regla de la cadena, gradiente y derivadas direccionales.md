## Regla de la cadena multivariable

Sea $z(x,y)$ con $x(t)$ y $y(t)$. Entonces, la derivada de $z$ con respecto a $z$ es

$$
\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}
.$$

Ahora, sea $z(x,y)$ con $x(s,t)$ y $y(s,t)$. Entonces, las derivadas parciales de $z$ con respecto a $t$ y $s$ son

$$
\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}  \qquad \frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s} 
.$$

## Gradiente

Definimos la **gradiente** de una función $f(x_1,x_2,\ldots,x_n)$ como el vector compuesto por las derivadas parciales de $f$. Es decir,

$$
\nabla f := \left< \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n} \right> 
.$$

Al operador $\nabla$ se le conoce como **nabla**.

```ad-theorem

La gradiente $\nabla f(x_0,y_0)$ es **perpendicular** a la **curva (o superficie) de nivel** en $f(x,y) = k$ en $(x_0,y_0)$.

```

## Derivada direccional

Se define la **derivada direccional** de la función $f$ en la dirección $\vec{u}$ como

$$
D_\vec{u} f = \nabla f \cdot \vec{u}
,$$

donde $\vec{u}$ **tiene que ser un vector unitario**.

La derivada direccional representa la **tasa de cambio** de $f$ en la dirección de $\vec{u}$.

```ad-theorem

El máximo valor de $D_\vec{u}f$ en $(x_0,y_0,z_0)$ es igual a $\lVert \nabla f(x_0,y_0,z_0) \rVert$, y va en la dirección de este último.

```

Este teorema significa que podemos hallar la **mayor tasa de cambio** de $f$ en un punto cualquiera $(x_0,y_0)$. Simplemente evaluamos $\nabla f$ en $(x_0,y_0)$ y calculamos su módulo.