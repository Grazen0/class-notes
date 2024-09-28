Si $z$ es una función de $x$ y $y$, y estos últimos son funciones de $t$, entonces

$$
\frac{dz}{dt} = \frac{\partial z}{\partial x} \cdot \frac{dx}{dt} + \frac{\partial z}{\partial y} \cdot \frac{dy}{dt}
.$$

## Gradiente

Definimos la **gradiente** de una función $f(x,y)$ como el vector compuesto por las derivadas parciales de $f$. Es decir,

$$
\nabla f(x,y) = \left< \frac{\partial f}{\partial x} , \frac{\partial f}{\partial y} \right> 
.$$

Al operador $\nabla$ se le conoce como **nabla**.

El gradiente se define análogamente para $n$ dimensiones.

## Derivadas direccionales

Se define la **derivada direccional** de la función $f(x,y)$ en la dirección $\vec{u}$ como

$$
D_\vec{u} f(x,y) = \nabla f(x,y) \cdot \vec{u}
,$$

donde $\vec{u}$ **tiene que ser un vector unitario**.
