Al igual que con funciones de una variable, las derivadas de una función de varias variables nos pueden ayudar a *aproximar* incrementos (o decrementos).

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
