## Aproximaciones con diferenciales

Al igual que con funciones de una variable, las derivadas de una [[S5 - Funciones de varias variables|función de varias variables]] nos pueden ayudar a *aproximar* incrementos (o decrementos).

Sea $f(x,y)$ una función. Definimos el **incremento en $f$** como

$$
\Delta f = f(x + \Delta x, \, y + \Delta y) - f(x, \, y)
.$$

Este incremento cualquiera en $z$ puede ser aproximado con el **diferencial de $f$**, el cual definimos como

$$
df = \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy \approx \Delta f
.$$

A esta expresión se le llama también **diferencial total** o **error**.

|         Expresión          | Nombre           |
| :------------------------: | ---------------- |
|            $df$            | Error propagado  |
|       $\frac{df}{f}$       | Error relativo   |
| $\frac{df}{f} \cdot 100\%$ | Error porcentual |


## Linealización

Así como las funciones de una variable se pueden linealizar en un punto (es decir, calcular su recta tangente en un punto), una función de varias variables también se puede "linealizar".

$$
L(x,y) = f(x_0+y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)
$$

En este sentido, "linealizar" se refiere a algo más como "planealizar" (si existiese esa palabra).

En realidad, esto es lo mismo que usar diferenciales ().
