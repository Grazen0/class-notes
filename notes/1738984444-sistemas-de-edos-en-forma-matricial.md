---
id: 1738984444-sistemas-de-edos-en-forma-matricial
aliases:
  - Sistemas de EDOs en forma matricial
tags:
  - mates/edo
createdAt: 2025-02-07 22:14
---

# Sistemas de EDOs en forma matricial

Curiosamente, el álgebra lineal está en todos lados.

Consideremos un [[1737773382-sistemas-de-edos-de-primer-orden|sistema de ecuaciones diferenciales de primer orden]] de la forma

$$
\begin{align}
x_1' &= F_1(t, x_1, x_2, \ldots, f_n) \\
x_2' &= F_2(t, x_1, x_2, \ldots, f_n) \\
\vdots \ \ &= \qquad\qquad \vdots \\
x_n' &= F_n(t, x_1, x_2, \ldots, f_n)
.\end{align}
$$

Si las funciones $F_1, F_2, \ldots, F_n$ son lineales con respecto a $x_1, x_2, \ldots, x_n$, este sistema se puede escribir como

$$
\begin{align}
x_1' &= a_{11}(t)\,x_1 + a_{12}(t)\,x_2 + \ldots + a_{1n}(t)\,x_n + f_1(t) \\
x_2' &= a_{21}(t)\,x_1 + a_{22}(t)\,x_2 + \ldots + a_{2n}(t)\,x_n + f_2(t) \\
\vdots \ \ &= \qquad\qquad \vdots \\
x_n' &= a_{n1}(t)\,x_1 + a_{n2}(t)\,x_2 + \ldots + a_{nn}(t)\,x_n + f_n(t)
,\end{align}
$$

o, equivalentemente, en la forma [[1724091679-matrices|matricial]]

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{f}
,$$

donde $\mathbf{x} = \begin{bmatrix} x_1 & x_2 & \cdots & x_n \end{bmatrix}^T$, y $A$ y $\mathbf{f}$ contienen las otras vainas de la ecuación.

En particular, cuando $\mathbf{f} = \mathbf{0}$, se dice que el sistema es **homogéneo**. En ese caso (y bajo coeficientes constantes), podemos usar el **método de valores propios**.

Sin embargo, si $\mathbf{f} \neq \mathbf{0}$, entonces el sistema es **no homogéneo**, y se debe resolver de otra manera.

## Método de valores propios

Realmente parece que uno no puede escapar del álgebra lineal.

Consideremos el sistema

$$
\mathbf{x} = A\mathbf{x}
,$$

donde $A$ sea de orden $n$ y sus entradas sean constantes. Entonces, podemos resolver este sistema de la siguiente manera:

**Paso 1:** Hallar los [[1728143506-vectores-y-valores-propios|valores propios]] de $A$, los cuales llamaremos $\lambda_1, \lambda_2, \ldots, \lambda_n$.

**Paso 2:** Para cada valor propio, hallar su aporte a la solución general. Consideremos al valor propio $\lambda$ con multiplicidad $m$. Debemos hallar los **vectores propios** asociados a $\lambda$, de donde obtendremos varios casos:

### Valores propios reales diferentes

Simple enough: En este caso, la solución del sistema será

$$
\mathbf{x}(t) = c_1 \mathbf{v}_1 e^{\lambda_1 t} + c_2 \mathbf{v}_2 e^{\lambda_2 t} + \ldots + c_n \mathbf{v}_n e^{\lambda_n t}
.$$

### Valores propios repetidos

Consideremos un valor propio $\lambda$ con multiplicidad $m$.

#### $m$ valores propios

Si $\lambda$ tiene $m$ vectores propios $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$, entonces su aporte a la solución general será

$$
c_1 \mathbf{v}_1 e^{\lambda t} + c_2 \mathbf{v}_2 e^{\lambda t} + \ldots + c_m \mathbf{v}_m e^{\lambda t}
.$$

#### Menos de $m$ valores propios

Si $\lambda$ no tiene tantos valores propios como su multiplicidad, debemos *generarlos* a partir de los que ya tenemos. Mostraremos un caso particular para multiplicidad $2$.

Supongamos que $\lambda$ tiene multiplicidad $m = 2$, pero un solo vector propio, $\mathbf{v}_1$. Entonces, el aporte de $\lambda$ a la solución general será

$$
c_1 \mathbf{v}_1 e^{\lambda t} + c_2(\mathbf{v}_1 t e^{\lambda t} + \mathbf{v}_2 e^{\lambda t})
,$$

donde $\mathbf{v}_2$ es la solución de

$$
(A - \lambda I_n)\mathbf{v}_2 = \mathbf{v}_1
.$$

### Valores propios complejos ($n = 2$)

> [!DEFINITION]- Definición (complemento complejo)
> Sea $z = a + bi$ con $a,b \in \mathbb{R}$. Entonces, el **complemento** de $z$, denotado por $\overline{z}$, es igual a
> $$
> \overline{z} = a - bi
> .$$

En esta situación, tendremos los valores propios

$$
\lambda_1 = \alpha + \beta i, \quad \lambda_2 = \alpha - \beta i
,$$

cuyos vectores propios asociados serán

$$
\mathbf{v}_1, \overline{\mathbf{v}_1}
.$$

> [!NOTE]
> En este caso, sólo es necesario hallar uno de los vectores propios, ya que el otro es simplemente su complemento.

Entonces, similar al caso de raíces reales diferentes, la solución de la EDO será

$$
\mathbf{x}(t) = c_1 \mathbf{v}_1 e^{\lambda_1 t} + c_2 \overline{\mathbf{v}_1} e^{\lambda_2 t}
.$$

Sin embargo, para evitar expresar la solución con números complejos, podemos definir

$$
B_1 = \operatorname{Re}(\mathbf{v}_1), \quad B_2 = \operatorname{Im}(\mathbf{v}_1)
,$$

con lo que la solución general de la EDO se podrá expresar como

$$
\mathbf{x}(t) = c_1e^{\alpha t}(B_1\cos(\beta t) - B_2\sin(\beta t)) + c_2e^{\alpha t}(B_2\cos(\beta t) + B_1\sin(\beta t))
.$$
