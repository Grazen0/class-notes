## Variables separables

Cuando una ED de la forma

$$
\frac{dy}{dx} = f(x)g(y)
,$$

se dice que es de **variables separables**, y se puede resolver fácilmente reorganizando la ecuación e integrando a ambos lados:

$$
\begin{align}
\frac{1}{g(y)} \frac{dy}{dx} &= f(x) \\
\int \frac{1}{g(y)} \frac{dy}{dx} \, dx &= \int f(x) \, dx \\
\int \frac{1}{g(y)} \, dy &= \int f(x) \, dx \\
G(y) &= F(x) + C
.\end{align}
$$

De aquí, si es posible se puede despejar $y$.

Como al integrar se introduce una constante de integración, la solución resultante es una **solución general**. Por lo tanto, una solución particular se halla estableciendo algún valor inicial.

### Pérdida de soluciones

Como parte de la separación de variables involucra dividir por $g(y)$, ocurre que si existe un número $r$ tal que $g(r) = 0$, entonces $y = r$ **también es solución de la ED**.

Esta es denominada **solución singular**.

```ad-warning
**Jamás** olvidar buscar las soluciones singulares antes de hacer separación de variables.
```

## EDs lineales

Recordemos una ED lineal de primer orden se puede escribir en la forma

$$
\frac{dy}{dx} + f(x) \, y = g(x)
,$$

también llamada **forma estándar**.

Usando una función llamada el **factor integrante**,

$$
\mu(x) = e^{\int f(x) \, dx}
,$$

cuya derivada es

$$
\frac{d\mu}{dx} = e^{\int f(x) \, dx} \, f(x) = \mu(x) \, f(x)
$$

podemos multiplicar la ED en ambos lados por $\mu(x)$, lo que nos permitirá aplicar la regla del producto a la inversa y resolver la ecuación:

$$
\begin{align*}
\mu(x) \frac{dy}{dx} + \mu(x) \, f(x) \, y &= \mu(x) g(x) \\
\mu(x) \frac{dy}{dx} + \frac{d\mu}{dx} \, y &= \mu(x) g(x) \\
\frac{d}{dx} \left( \mu(x) \, y \right) &= \mu(x) g(x) \\
\mu(x) \, y &= \int \mu(x) g(x) \, dx \\
y &= \frac{1}{\mu(x)} \int \mu(x) g(x) \, dx
.\end{align*}
$$

En la práctica no solemos usar esta última fórmula tal cual, sino que calculamos $\mu(x)$ y realizamos este proceso para la ED particular en la que estamos trabajando.

## EDs exactas

Consideremos la ED de la forma

$$
M(x, y) + N(x, y) \frac{dy}{dx} = 0
.$$

Primero, debemos comprobar que $M_y = N_x$ para que sea exacta.

Luego, integramos $M(x, y)$ con respecto a $x$, recordando que la constante de integración que obtengamos debe ser no un número, sino una función de $y$.

$$
\int M(x, y) \, dx = M_I(x, y) + h(y)
.$$

Ahora podemos derivar esta expresión obtenida e igualarla a $N(x, y)$ (ya que ambos deben ser iguales):

$$
\frac{\partial}{\partial y} \left( M_I(x, y) + h(y) \right) = N(x, y)
.$$

Esta es la solución implícita de la ED, de donde podemos despejar $y$, de ser posible.

```ad-note
De todas maneras, podemos realizar el proceso de forma análoga integrando $N(x, y)$ en lugar de $M(x, y)$ si así conviene.
```
