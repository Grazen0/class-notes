## Matemáticas Discretas

### Propiedades de la divisibilidad

#### Ejercicios

**Extra:** Demostrar que si $a \mid b$ y $b \neq 0$, entonces $|a| \leq |b|$.

Sean $a,b$ números enteros con $b \neq 0$ y $a \mid b$. Por definición de divisibilidad, $b = ak$ para algún $k \in \Z$. Observamos que como $b \neq 0$, entonces $a,k \neq 0$. 

$$
\begin{align}
b &= ak \\
\implies |b| &= |ak| \\
\implies |b| &= |a||k| \\
\implies |b| &\geq |a||k| \\
-0 &\geq -|a|(|k| - 1) && \text{restando a ambos lados} \\
\implies |b| &\geq |a||k| - |a|(|k| - 1) && \text{simplificando} \\
\implies |b| &\geq |a| \\
\implies |a| &\leq |b| && Q.E.D. \\
\end{align}
$$



1. Hallar todos los números enteros que satisfacen la condición $a \mid 2$.

$$
a \mid 2 \iff a \in \left\{ -2, -1, 1, 2 \right\}
$$

2. Si $a$ es un entero positivo que satisface las condiciones $a \mid 20$ y $a \mid 22$, ¿qué valores puede tomar $a$?

$$
\begin{align}
(a \mid 22 \quad \text{y} \quad a \mid 20) &\implies a \mid (22 - 20) \\
&\implies a \mid 2 \\
&\implies a \in \left\{ 1, 2 \right\} & (a \in \Zp)
\end{align}
$$

Comprobando, hallamos que tanto $1$ como $2$ satisfacen ambas condiciones propuestas.

3. Si $n$ es un número entero que es múltiplo de $6$, demuestre que es múltiplo de $3$.

Sea $n$ un número entero múltiplo de $6$. Entonces por definición,

$$
\begin{align}
6 \mid n \iff n &= 6k && (k \in \Z) \\
\iff n &= (3 \cdot 2)k \\
\iff n &= 3(2k) \\
\iff 3 &\mid n && \because 2k \in \Z
\end{align}
$$

Por lo tanto, $n$ es múltiplo de $3$.

$$
\qed
$$

### Algoritmo de división

#### Ejercicios

1. Hallar el resto de dividir $125$ entre $25$.

Se observa que $125 = 5(25) + 0$. Por lo tanto, el resto de dividir $125$ entre $5$ es $0$.

2. Hallar el resto de dividir $-30$ entre $25$.

Como $-30 = -2(25) + 20$, entonces el resto de dividir $-30$ entre $25$ es $20$.

3. Hallar el resto de dividir $7!$ entre $21$.

Observamos que

$$
\begin{align}
7! &= 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 \\
   &= (7 \cdot 3) \cdot 6 \cdot 5 \cdot 4 \cdot 2 \cdot 1 + 0 \\
7! &= 21(240) + 0
\end{align}
$$

Por lo tanto, el resto de dividir $7!$ entre $21$ es $0$.

### Números primos y descomposición canónica

```ad-definition

Un **número primo** es un entero positivo que tiene exactamente dos divisores positivos.

```

#### Ejemplos:

- $2$ es primo. (Sus divisores positivos  son $1$ y $2$)
- $1$ no es primo. (Su único divisor positivo es $1$)

## Proyectos Interdisciplinarios

### Según la lectura de Vasen

1. ¿Qué es CTI?

> Las siglas CTI significan **Ciencia, Tecnología e Innovación**.

- **Políticas públicas** sobre la dirección e inversión en ciencia y tecnología
- Marco general de la **relación entre la ciencia y la tecnología con la sociedad**.
- **Sistemas institucionales** de promoción y desarrollo de la ciencia y la tecnología.
- Refleja la **valoración y las actitudes de la sociedad** frente a la innovación científica y tecnológica.

2. ¿Qué significa "postcompetitivo" para Vasen?

> El término "postcompetitivo" hace referencia al hecho de que, antes de realizarse los cambios mencionados por el autor, la CTI se dirigía según el mercado, la economía y la competencia presente en éstos. Por eso, "postcompetitivo" indica que ya se ha pasado esa fase.

3. ¿Cambiar el foco a objetivos sociales sobre metas económicas necesariamente implica una crítica a los sistemas imperantes?

> No exactamente. Estos "cambios de foco" no anulan la dirección del mercado, sino que únicamente afirman que la economía **no es suficiente**, y buscan ser un complemento del sistema.

### Participación activa 1

En grupos de 5 responder 2 preguntas:

1. **Obligatoria**: ¿A qué se refiere la siguiente frase? Explíquela en el contexto de discusión de CTI en el Perú.
> "Argumentar que en el Perú no debemos hacer ciencia fundamental sino únicamente aplicar tecnología equivale a afirmar que en el Perú no debe haber escritores, sino solo traductores de libros escritos en lenguas extranjeras"

3. **Elegir una pregunta:**
	1. ¿En qué consiste la reflexión crítica que se hace a las redes de investigación entre instituciones del Estado?
	2. ¿Cuáles son las acciones que se proponen para la formación de 

- Entregar en Canvas hasta **hoy** a las 11:59 PM
- La próxima semana seleccionaremos grupos al azar para exponer.
- **Solo una persona por grupo sube la tarea a Canvas.**
- **Máximo una hoja para responder a las dos preguntas.**


## Cálculo de una variable

### Ejercicio: Función distancia de la liebre:

![[Grafico Liebre.png]]

1. **Tramo 1:** $0 \leq t < 6$

**Puntos:** $(0, 0)$ y $(6, 1200)$

**Pendiente:**
$$
m = \frac{\Delta y}{\Delta x} = \frac{1200 - 0}{6 - 0} = 200 \text{ m/min}
$$

Observación: $b = 0$

**Resultado:**

$$
D(t) = 200t
$$

2. **Tramo 2:** $6 \leq t < 10$

$$
D(t) = 1200
$$

3. **Tramo 3:** $10 \leq t < 13$

**Puntos:** $(10, 1200)$ y $(12, 1550)$

**Pendiente:**

$$
m = \frac{\Delta y}{\Delta x} = \frac{1550 - 1200}{12 - 10} = \pu{175 m // min}
$$

**Función:**

$$
\begin{align}
D(t) &= 175(t - 10) + 1200 \\
D(t) &= 175t - 550
\end{align}
$$

**Respuesta final:**

$$
D(t) = \begin{cases}
200t  && 0 \leq t < 6 \\
1200  && 6 \leq t < 10 \\
175t - 550 && 10 \leq t < 13
\end{cases}
$$
