## Noción geométrica de los números reales

Tomando una recta infinita en ambos sentidos, tomamos un punto arbitrario como $O$ (llamado origen) y lo designamos como el $0$. Luego, escogemos una unidad de medida.

Ahora ubicamos un número $x$ en la recta. El valor de este número $x$ es la distancia de ese punto hasta el $0$ en la unidad de medida que escogimos.

![[Recta numérica.excalidraw]]

## Números enteros

```ad-definition

El conjunto de enteros positivos, denotado por $\Z$, se define informalmente de la siguiente forma:

$$
\Z := \left\{ \dots, -3, -2, -1, 0, 1, 2, 3, \dots \right\}
$$

```

### Enteros positivos

```ad-definition

El conjunto de los enteros positivos, denotado por $\Zp$, se define informalmente de la siguiente forma:

$$
\Zp := \left\{1,2,3,4,5,\dots\right\}
$$

```

> [!info] En la UTEC se considera que $0 \notin \N$. Es decir, $\N = \Zp$. (😢)

## Números racionales

```ad-definition

Definimos el conjunto de los números racionales, denotado por $\Q$, como el conjunto de todos los números de la forma $\frac{a}{b}$ donde $a$ y $b$ son números enteros, con $b \neq 0$.

$$
\Q := \left\{ \frac{a}{b} \lmid a,b \in \mathbb{Z}\ y\ b \neq 0 \right\}
$$

```

```` ad-theorem

Todo número entero es racional. En otras palabras,
$$
\forall n \in \Z\ (n \in \Q)
$$
o alternativamente,
$$
\Z \subseteq \Q
$$

```ad-proof
collapse: closed

Dado cualquier número entero $n$, $n$ puede ser representado en la forma $\frac{n}{1}$. De esta forma $n$ puede ser representado en la forma $\frac{a}{b}$, donde $a = n$ y $b = 1$. Ya que $a$ es entero y $1$ es entero (y además, $1 \neq 0$), entonces $n$ es, por definición, racional.
$$\qed$$

```

````

````ad-theorem

La suma de dos números racionales es racional. En otras palabras,
$$
\forall x,y \in \Q\ (x+y \in \Q)
$$

```ad-proof
collapse: closed

Sean $x$ y $y$ números racionales. Entonces, $x = \frac{a}{b}$ y $y = \frac{c}{d}$ para algunos $a,b,c,d \in \mathbb{Z}$ con $b,d \neq 0$. Entonces, la suma de $x + y$ es igual a

$$
\begin{align*}
x + y &= \frac{a}{b} + \frac{c}{d} \\
      &= \frac{ad}{bd} + \frac{cb}{db} \\
      &= \frac{ad}{bd} + \frac{bc}{bd} \\
x + y &= \frac{ad + bc}{bd} \\
\end{align*}
$$

Además, observar que $b,d \neq 0$ implica $bd \neq 0$.

Ahora, tanto $ad + bc$ y $bd$ son enteros, ya que son productos y/o sumas de números también enteros. Por lo tanto, $x + y$ se puede representar como el cociente de dos enteros $ad+bc$ y $bd$ con $bd \neq 0$, cumpliendo la definición de número racional.
$$\qed$$

```

````

## Regreso a los números reales

Hay números reales que no son racionales. Estos se denominan **números irracionales**. Estos incluyen $\sqrt{3}$, $\sqrt[3]{2}$, $\log_2(3)$, etc.

## Relación entre los conjuntos numéricos

![[Conjuntos numéricos.excalidraw]]

## Desigualdades

Los números reales están **ordenados**. Los números a la derecha del $0$ se denominan **positivos**, y los que están a su izquierda se llaman **negativos**.

```ad-definition

Las **desigualdades** se definen de la siguiente forma:

$$
\begin{align*}
a \lt b  &\iff b - a\ \text{es positivo} \\
a \leq b &\iff a \lt b \quad \text{o} \quad a = b \\
\\
a \gt b  &\iff b - a\ \text{es negativo} \\
a \geq b &\iff a \gt b \quad \text{o} \quad a = b \\
\end{align*}
$$

```

````ad-exercise
title: Ejercicio: Ejemplo de desigualdad
collapse: open

$$
\frac{1}{3} \lt \frac{1}{2}
$$

```ad-proof
collapse: closed

La diferencia de $\frac{1}{2}$ y $\frac{1}{3}$ es
$$
\begin{align*}
\frac{1}{2} - \frac{1}{3} &= \frac{3}{6} - \frac{2}{3} \\
                          &= \frac{3-2}{6} \\
                          &= \frac{1}{6}
\end{align*}
$$

Como $\frac{1}{6}$ es positivo, entonces, por definición de las desigualdades, $\frac{1}{3} \lt \frac{1}{2}$.

```


````

```ad-theorem
title: Teorema (Ley de Tricotomía).

Para todo par de números $a,b \in \R$, se cumple exactamente una de las siguientes posibilidades:

- $a < b$
-  $a > b$
-  $a = b$

```

### Propiedades

$$
\begin{align}
          a < b &\iff a + c < b + c \\
a < b \text{ y } c < d &\implies a + c < b + d \\
a < b \text{ y } b < c &\implies a < c
\end{align}
$$

Estas propiedades se extienden a $>$, $\leq$ y $\geq$.

#### Producto de cantidades

$$
\begin{align}
a > 0 \text{ y } b > 0 &\implies ab > 0 \\
a < 0 \text{ y } b < 0 &\implies ab > 0 \\
a > 0 \text{ y } b < 0 &\implies ab < 0 \\
\end{align}
$$

Estas propiedades se extienden a $\leq$ y $\geq$.

#### Multiplicación o recíproco a ambos lados

$$
\begin{align}
a < b \text{ y } c \in \R &\implies \begin{cases}
ac < bc & \text{si } c > 0 \\
ac > bc & \text{si } c < 0
\end{cases} \\
a < b \text{ y } a,b > 0 &\implies \frac{1}{a} > \frac{1}{b} \\
 \\
\end{align}
$$

## Recordemos: Intervalos

### Intervalo abierto

```ad-definition

Dados números reales $a$ y $b$, el intervalo $(a,b)$ es el conjunto de todos los números reales $x$ que satisfacen la condición $a < x < b$, lo cual significa que cumple $a < x$ y $x < b$.

$$
(a,b) := \left\{ x \in \mathbb{R} \mid a < x < b \right\}
$$

Este intervalo se llama **abierto en ambos extremos**.

```

### Todos los tipos de intervalos

```ad-definition

Todos los tipos de intervalos se definen de la siguiente manera:

$$
\begin{align*}
(a,b)    &:= \left\{x \in \mathbb{R} \mid a \lt x \lt b \right\} \\
[a,b]    &:= \left\{x \in \mathbb{R} \mid a \leq x \leq b \right\} \\
(a,b]    &:= \left\{x \in \mathbb{R} \mid a \lt x \leq b \right\} \\
[a,b)    &:= \left\{x \in \mathbb{R} \mid a \leq x \lt b \right\} \\
(a,+\infty)   &:= \left\{x \in \mathbb{R} \mid x \gt a \right\} \\
[a,+\infty)   &:= \left\{x \in \mathbb{R} \mid x \geq a \right\} \\
(-\infty, b)  &:= \left\{x \in \mathbb{R} \mid x \lt b \right\} \\
(-\infty, b]  &:= \left\{x \in \mathbb{R} \mid x \leq b \right\} \\
(-\infty, +\infty) &:= \R
\end{align*}
$$

```
