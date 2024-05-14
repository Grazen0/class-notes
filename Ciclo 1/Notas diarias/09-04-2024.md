## Cálculo de una variable

### Ejercicio: Costos de transporte

Un transportista sabe que el costo de transporte de material de carga puede calcularse al sumar el costo de consumo de combustible por hora ($C_{H}$) más el sueldo del chofer por hora ($S_{H}$). Se sabe que $C_{H}$ es directamente proporcional al cuadrado de la velocidad ($v$) e inversamente proporcional a la presión de las llantas ($P$). Además, se sabe que $S_{H} = \frac{400P}{v}$; y que $C_{H}$ tiene un valor de S/25 cuando el chofer maneja a 50 km/h y cuando la presión de la llanta es de 8 bar. En un determinado día tiene una entrega para lo cual antes niveló la presión de sus llantas en 6 bar (permanecerá constante). Estime a qué velocidad debe ir el transportista para reducir el costo de transporte.

Convertimos el lenguaje verbal de proporcionalidad a matemáticas:

$$
\begin{align}
\frac{C_{H}P}{v^{2}} &= k \\
\iff C_{H} &= \frac{v^{2}}{P}k
\end{align}
$$

Ahora, por uno de los datos:

$$
\begin{align}
(v = 25 \text{ y }P = 8) \implies C_{H} = \frac{25^{2}}{8}k &= 25 \\
\implies k &= \frac{2}{25}
\end{align}
$$

Como $k = \frac{2}{25}$, entonces $C_{H} = \frac{2}{25}\left(\frac{v^{2}}{P}\right)$.

Ahora, construimos la función costo total.

$$
\begin{align}
C(v, P) &= C_{H} + S_{H} \\
        &= \frac{2}{25}\left(\frac{v^{2}}{P}\right) + \frac{400P}{v}
\end{align}
$$

Ahora, consideramos el caso del día en particular donde $P = 6$. Entonces,

$$
\begin{align}
C(v, 6) &= \frac{2}{25}\left(\frac{v^{2}}{6}\right) + \frac{400(6)}{v} \\
C(v, 6) &= \frac{v^{2}}{75} + \frac{2400}{v}
\end{align}
$$


### Ejercicio: Represa, río y lago

Una represa contiene a un río y crea un lago detrás de esta. Por diversos factores la superficie del lago puede aumentar en ciertas temporadas, así como disminuir durante la sequía. Suponga que un lago tiene actualmente $A = 50$ metros de ancho y se ensancha con una rapidez constante de $\pu{3 m// semana}$ De largo tiene $L = 950$ metros actualmente y se extiende con un comportamiento cuadrático según la gráfica adjunta, para $0 \leq t \leq 52$, alcanzando su máximo de $1010$ metros a las $25$ semanas, justo antes de comenzar la sequía. Si el lago permanece aproximadamente rectangular a medida que crece, responda:

1. Defina las variables relevantes del problema e indique los datos proporcionados
2. Obtenga las reglas de correspondencia que determinan el ancho y el largo en términos del tiempo $t$.
#### Función ancho

$A(t)$: ancho (en metros) luego de $t$ semanas. Es una función **lineal**.

Primero, obtenemos el término constante:

$$
\begin{align}
A(t) &= mt + b \\
b = A(0) &= 50
\end{align}
$$

Luego, obtenemos la pendiente:

$$
m = \frac{\Delta y}{\Delta t} = \pu{3 m//semana}
$$

Entonces,

$$
A(t) = 3t + 50
$$

#### Función largo

$L(t)$: largo (en metros) luego de $t$ semanas. Es una función **cuadrática**.

$$
\begin{align}
L(t) &= a(t - h)^{2} + k \\
L(t) &= a(t - 25)^{2} + 1010 && \because V=(25,1010)
\end{align}
$$

Además, $L(0) = 950$. Entonces,

$$
\begin{align}
L(t) = 950 &= a(0 - 25)^{2} + 1010 \\
       -60 &= a(-25)^{2} \\
       -60 &= 625\,a \\
         a &= -\frac{12}{125}
\end{align}
$$

Así que finalmente,

$$
\begin{align}
L(t) = -\frac{12}{125}(t - 25)^{2} + 1010 && 0 \leq t \leq 52
\end{align}
$$

#### Extra: Función área

$S(t)$: área de la superficie (en metros cuadrados) luego de $t$ semanas.

$$
\begin{align}
S(t) &= A(t)\,L(t) \\
S(t) &= \left( -\frac{12}{125}(t - 25)^{2} + 1010 \right)(3t + 50) && 0 \leq t \leq 52
\end{align}
$$


