Una función de varias variables se denota como $f(x_1,x_2,\ldots,x_n)$.

## Dominio y rango

El dominio de una función de varias variables ya no es solamente un intervalo, sino un **conjunto de pares ordenados**.

```ad-example
title: Ejemplo (hallar dominio de una función).

Halle el dominio de $f(x,y) = 4 + \sqrt{x^2 - y^2}$

**Resolución:** Encontramos la restricción $x^2 - y^2 \geq 0$ (debido a la raíz cuadrada), por lo que el dominio de $f$ será

$$
\dom(f) = \left\{ (x,y) \in \R^2 \lmid x^2 - y^2 \geq 0 \right\}
.$$

```

## Derivadas parciales

La derivada parcial de una función de varias variables es **su derivada con respecto a sólo una de sus variables, manteniendo las otras constantes**.

La derivadas parciales de una función $f(x,y)$, por ejemplo, se denotan como

$$
f_x(x,y) = \frac{\partial f}{\partial x} = D_xf \qquad f_y(x,y) = \frac{\partial f}{\partial y} = D_yf
.$$

### Derivadas sucesivas

```ad-theorem
title: Teorema (simetría de la segunda derivada).

La segunda derivada de una función $f$, bajo ciertas condiciones, es **conmutativa**. Es decir,

$$
\frac{\partial^{2} f}{\partial x \partial y} = \frac{\partial^{2} f}{\partial y \partial x} 
.$$

Dichas condiciones son

1. que exista alguna **vecindad** alrededor de $(x,y)$ donde $f$ está definida, y
2. que las **segundas derivadas parciales** de $f$ sean **continuas** en dicha vecindad.

Alternativamente, una condición suficiente (ya que implica lo anterior) es que las **segundas derivadas parciales** de $f$ sean diferenciables.

```

La notación, digamos, de derivar con respecto a $x$ y luego a $y$ es

$$
f_{xy} = \frac{\partial^{2} f}{\partial y \partial x} = D_{xy}f
.$$

```ad-note
title: Nota

Un poco confuso, pero el orden para colocar las variables derivadas es

- **Leibniz:** derecha a izquierda,y 
- **las demás:** izquierda a derecha.

```

### Planos tangentes

Los vectores tangentes a $f(x,y)$ son

$$
\vec{v} = \left< 1, 0, \frac{\partial f}{\partial x}  \right> \qquad \vec{w} = \left< 0, 1, \frac{\partial f}{\partial y}  \right>
,$$

por lo que podemos obtener una **normal** del plano tangente en $(x,y,z)$ con

$$
\vec{n} = \vec{v} \times \vec{w} = \left< -\frac{\partial f}{\partial x}, -\frac{\partial f}{\partial y}, 1 \right> 
.$$

Con esto, la ecuación del plano tangente sería

$$
z = f(x_0, y_0) + \frac{\partial f}{\partial x} (x-x_0) + \frac{\partial f}{\partial y} (y-y_0)
.$$
