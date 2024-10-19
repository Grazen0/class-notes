Las funciones vectoriales sirven como una forma de representar **ecuaciones paramétricas**, a menudo de forma más concisa.

Cuando se habla de funciones vectoriales que forman **curvas**, la salida de dicha función se interpreta como un **vector posición**.

$$
\vec{r}(t) = \left< x(t), y(t), z(t) \right> 
$$

## Derivada de funciones vectoriales

Derivar una función vectorial es **derivar sus componentes**.

$$
\vec{r}'(t) = \left< x'(t), y'(t), z'(t) \right> 
$$

### Vectores tangente y normal unitarios

Definimos al **vector tangente unitario** como el vector unitario de la derivada de $\vec{r}(t)$:

$$
\vec{T}(t) = \hat{r}'(t) = \frac{\vec{r}'(t)}{\lVert \vec{r}'(t) \rVert }
.$$

Y definimos al **vector normal unitario** como el vector unitario de la derivada de $\vec{T}(t)$:

$$
\vec{N}(t) = \frac{\vec{T}'(t)}{\lVert \vec{T}'(t) \rVert }
.$$

Los vectores tangente unitario y normal unitario **son perpendiculares**, y ello es resultado de un pequeño teorema.

```ad-theorem

Sea $\vec{r}(t)$ un vector. Si se cumple que $\lVert \vec{r}'(t) \rVert = c$ (es decir, que la magnitud de su velocidad se mantiene constante), entonces $\vec{r}(t) \cdot \vec{r}'(t) = 0$.

```

#### Componentes de la aceleración

La aceleración $\vec{a} = \vec{r}''(t)$ de una función vectorial se puede descomponer como

$$
\vec{a} = a_T \vec{T}(t) + a_N \vec{N}(t)
$$

donde

$$
a_T = \frac{\lvert \vec{a} \cdot \vec{v} \rvert}{\lVert \vec{v} \rVert } = \frac{d^2s}{dt^2} \qquad a_N = \frac{\lVert \vec{a} \times \vec{v} \rVert }{\lVert \vec{v} \rVert }
,$$

siendo $s(t) = \lVert \vec{r}(t) \rVert$.

De aquí también obtenemos una equivalencia útil:

$$
(a_T)^2 + (a_N)^2 = \lVert \vec{a} \rVert ^2
.$$

### Recta tangente

Esta derivada genera el **vector dirección** de una recta tangente a la curva $\vec{r}$ en el punto $t$. Por lo tanto, podemos generar una **recta tangente** a la curva $\vec{r}$ en $t = a$ con la fórmula

$$
\vec{\mathscr{L}}(t) = \vec{r}(a) + t\,\vec{r}'(a)
.$$

### Longitud de una curva

La longitud de una curva $\vec{r}(t)$ en $t \in [a,b]$ se obtiene **sumando todos los pedazos ínfimos** del módulo de la derivada de la curva.

$$
L = \int_a^b \lVert \vec{r}'(t) \rVert  \, dt = \int_a^b \sqrt{(x'(t))^2 + (y'(t))^2 + (z'(t))^2} \, dt
$$

## Integral de funciones vectoriales

Integrar una función vectorial es **integrar sus componentes**.

$$
\int_a^b \vec{r}(t) \, dt = \left< \int_a^b x(t) \,dt, \int_{a}^{b} y(t) \, dt, \int_{a}^{b} z(t) \, dt \right>
$$
