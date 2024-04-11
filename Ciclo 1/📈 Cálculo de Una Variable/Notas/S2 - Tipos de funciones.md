Esta wea está más fácil q

![[Clasificación de funciones.excalidraw|width:90%]]

```ad-definition
title: Definición (Pendiente).

La pendiente representa la **razón de cambio** de la variable dependiente por cada unidad de la variable independiente. Usualmente se denota con $m$.

$$
m = \frac{y_{2} - y_{1}}{x_{2} - x_{1}} = \frac{\Delta y}{\Delta x}
$$


```

## Función lineal

```ad-definition

Una función **lineal** $f$ es una función que se puede representar de la siguiente manera:

$$
f(x) = mx + b
$$

donde $m,b$ son constantes y $m \neq 0$.

```


```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y = x + 1
y = -1.5x - 3
y = 6x
```

$$
\begin{align}
\dom f &= \R \\
\ran f &= \R
\end{align}
$$

### Propiedades

Dada una pendiente $m \neq 0$,

- $m > 0$: La función es **creciente**.
- $m < 0$: La función es **decreciente**.

### Forma punto-pendiente

Una función lineal se puede escribir en función de su pendiente $m$ y un punto $(x_{0}, y_{0})$ que cruce.

$$
f(x) = m(x - x_{0}) + y_{0}
$$

## Función cuadrática

```ad-definition

Una función **cuadrática** $f$ es una función determinada por una *ecuación cuadrática*. Es decir, se puede representar de la siguiente forma:

$$
f(x) = ax^{2} + bx + c
$$

donde $a,b,c$ son constantes y $a \neq 0$.

```

### Representación canónica

Dado un vértice $(h, k)$ y factor de estiramiento $a \neq 0$, la función cuadrática se representa como:

$$
f(x) = a(x - h)^{2} + k
$$

### Propiedades

Dada una función cuadrática en la forma general con $a,b,c$ o en la forma canónica con $a,h,k$:

#### Dominio y rango

$$
\begin{align}
\dom f &= \R \\
\ran f &= \begin{cases}
[k, +\infty) && a > 0 \\
(-\infty, k] && a < 0
\end{cases}
\end{align}
$$

#### Dirección

- $a > 0$: La parábola se abre **hacia arriba**.
- $a < 0$: La parábola se abre **hacia abajo**.

#### Vértice

Ocurre donde $x = h = -\frac{b}{2a}$ y $y = k = f(h)$

- $a > 0$: Es el punto **mínimo**.
- $a < 0$: Es el punto **máximo**.

#### Simetría

La función cuadrática es simétrica respecto al eje en $x = h$.

## Funciones polinómicas

### Funciones notables

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-5,5,-1,7]
disableZoom: false
grid: true
---
y = x^8
```
$$
f(x) = x^{2n}
$$


```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-5,5,-3,5]
disableZoom: false
grid: true
---
y = x^9
```
$$
f(x) = x^{2n + 1}
$$

```ad-definition

Una función **polinómica** $f$ de grado $n$ es una función que se puede expresar de la siguiente manera:

$$
f(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \dots + a_{2}x^{2} + a_{1}x + a_{0}
$$

Donde $a_{i}$ son constantes y $a_{n} \neq 0$

```

### Comportamiento al infinito

**Hacia la derecha:** $\sgn(a_{n})$

**Hacia la izquierda:**

- $n$ es par: $\sgn(a_{n})$
- $n$ es impar: $-\sgn(a_{n})$

## Función raíz cuadrada

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-1,7]
disableZoom: false
grid: true
---
y = sqrt(x)
```
$$
f(x) = \sqrt{x}
$$

## Funciones racionales

Las funciones racionales se dan de la siguiente forma:

$$
f(x) = \frac{P(x)}{Q(x)}
$$
donde $P$ y $Q$ son polinomios.
