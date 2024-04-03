## Noción geométrica de los números reales

Tomando una recta infinita en ambos sentidos, tomamos un punto arbitrario como $O$ (llamado origen) y lo designamos como el $0$. Luego, escogemos una unidad de medida.

Ahora ubicamos un número $x$ en la recta. El valor de este número $x$ es la distancia de ese punto hasta el $0$ en la unidad de medida que escogimos.

![[recta_numerica]]
## Números enteros

$$
\mathbb{Z} = \left\{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\right\}
$$
### Enteros positivos

$$
\begin{align*}
\mathbb{Z}^+ &= \left\{1,2,3,4,5,\dots\right\} \\
             &= \mathbb{N}
\end{align*}
$$

En esta universidad se considera a los números naturales $\mathbb{N}$ como los números enteros positivos 
## Números racionales

Definimos los números racionales como el conjunto de todos los números de la forma $\frac{a}{b}$ donde $a$ y $b$ son números enteros, con $b \neq 0$.

$$
\mathbb{Q} = \left\{ \frac{a}{b} : a,b \in \mathbb{Z} \wedge b \neq 0 \right\}
$$
### Teorema: Todo número entero es racional

$$
\forall n \in \mathbb{Z},\ n \in \mathbb{Q}
$$
Alternativamente:
$$
\mathbb{Z} \subset \mathbb{Q}
$$

**Demostración**: Dado cualquier número entero $n$, $n$ puede ser representado en la forma $\frac{n}{1}$. De esta forma $n$ puede ser representado en la forma $\frac{a}{b}$, donde $a = n$ y $b = 1$. Ya que $a$ es entero y $1$ es entero, $n$

### Teorema: La suma de dos números racionales es racional

$$
\forall x,y \in \mathbb{Q},\ x+y \in \mathbb{Q}
$$

**Demostración**: Sean $x$ y $y$ números racionales. Entonces, $x = \frac{a}{b}$ y $y = \frac{c}{d}$ para algunos $a,b,c,d \in \mathbb{Z}$ con $b,d \neq 0$. Entonces, la suma de 
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


## Regreso a los números reales

Hay números reales que no son racionales. Estos se denominan **números irracionales**. Estos incluyen $\sqrt{3}$, $\sqrt[3]{2}$, $\log_2(3)$, etc.
## Relación entre los conjuntos numéricos

![[conjuntos_numericos]]

## Desigualdades

Los números reales están **ordenados**. Los números a la derecha del $0$ se denominan **positivos**, y los que están a su izquierda se llaman **negativos**.

Las desigualdades se definen de la siguiente forma:
$$
\begin{align*}
a \lt b  &\iff b - a\ \text{es positivo} \\
a \leq b &\iff a \lt b \quad \text{o} \quad a = b \\
\\
a \gt b  &\iff b - a\ \text{es negativo} \\
a \geq b &\iff a \gt b \quad \text{o} \quad a = b \\
\end{align*}
$$

### Ejemplo: Demostración de que $\frac{1}{3} \lt \frac{1}{2}$

Calculamos la diferencia de $\frac{1}{2}$ y $\frac{1}{3}$
$$
\begin{align*}
\frac{1}{2} - \frac{1}{3} &= \frac{3}{6} - \frac{2}{3} \\
                          &= \frac{3-2}{6}
                          &= \frac{1}{6}
\end{align*}
$$

Como $\frac{1}{6}$ es positivo, entonces, por definición de las desigualdades, $\frac{1}{3} \lt \frac{1}{2}$.
### Ley de triconomía

Para todo par de números $a,b \in \mathbb{R}$, se cumple exactamente una de las siguientes posibilidades:

1. $a < b$
2.  $a = b$
3.  $a > b$



## Recordemos: Intervalos

### Intervalo abierto

Dados números reales $a$ y $b$, el intervalo $(a,b)$ es el conjunto de todos los números reales $x$ que satisfacen la condición $a < x < b$, lo cual significa que cumple $a < x$ y $x < b$.

$$
(a,b) = \left\{ x \in \mathbb{R} : a < x < b \right\}
$$
Este intervalo se llama **abierto en ambos extremos**.

### Todos los tipos de intervalos

$$
\begin{align*}
(a,b) &= \left\{x \in \mathbb{R} : a \lt x \lt b \right\} \\
[a,b] &= \left\{x \in \mathbb{R} : a \leq x \leq b \right\} \\
(a,b] &= \left\{x \in \mathbb{R} : a \lt x \leq b \right\} \\
[a,b) &= \left\{x \in \mathbb{R} : a \leq x \lt b \right\} \\
(a,+\infty) &= \left\{x \in \mathbb{R} : x \gt a \right\} \\
[a,+\infty) &= \left\{x \in \mathbb{R} : x \geq a \right\} \\
(-\infty, b) &= \left\{x \in \mathbb{R} : x \lt b \right\} \\
(-\infty, b] &= \left\{x \in \mathbb{R} : x \leq b \right\} \\
(-\infty, +\infty) &= \mathbb{R}
\end{align*}
$$

