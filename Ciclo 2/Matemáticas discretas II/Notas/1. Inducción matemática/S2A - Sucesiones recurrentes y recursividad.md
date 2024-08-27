```ad-definition

Una sucesión es **recurrente** si, a partir de alguna posición, dicha sucesión se define a partir de sus términos anteriores.

```

Algunos ejemplos de sucesiones recurrentes son

- $x_{n} = x_{n-1} + x_{n-2}$ (serie de Fibonacci)
- $x_{n} = x_{1} + x_{2} + \ldots + x_{n-1}$

```ad-example
title: Ejemplo 1.
collapse: closed

Sea $x$ una sucesión tal que $x_{1} = 1$ y $x_{n} = 2x_{n-1}$ para todo $n \geq 2$. Es decir, donde cada término a partir del segundo es el doble del anterior.

Los primeros 5 términos de esta sucesión son

$$
\begin{align}
x_{1} &= 1 \\
x_{2} &= 2 \\
x_{3} &= 4 \\
x_{4} &= 8 \\
x_{5} &= 16
.\end{align}
$$

Aquí, podemos observar que se trata de una progresión geométrica.

```

```ad-example
title: Ejemplo 2.
collapse: closed

Sea la sucesión cuyo primer término es $y_{1} = 2$ y satisface la recurrencia $y_{n} = 2y_{n-1} + 1$ para todo $n \geq 2$.

Los primeros 5 términos de esta sucesión son

$$
\begin{align}
y_{1} &= 2 \\
y_{2} &= 5 \\
y_{3} &= 11 \\
y_{4} &= 23 \\
y_{5} &= 47
.\end{align}
$$

Observamos que esta sucesión es más difícil de convertir en una fórmula.

(En realidad es $y_{n} = 3 \cdot 2^{n-1} - 1$)

```

## Demostrando por inducción

La solución de una sucesión recurrente puede ser demostrada por inducción.

````ad-exercise

Considere la sucesión $(x_{n})_{n \geq 1}$ definida por $x_{1} = 1$, $x_{n+1} = 2x_{n} + 1$ para todo $n \geq 1$, Demuestre que $x_{n} = 2^{n} - 1$ para todo entero positivo $n$.

```ad-proof
collapse: closed

Nótese que la fórmula es cierta para $n = 1$, ya que $2^{1} - 1 = 1 = x_{1}$.

Ahora, supongamos que la fórmula es cierta para algún $n = k$, con $k \geq 2$. Entonces

$$
x_{k} = 2^{k} - 1
,$$

por lo que

$$
\begin{align}
x_{k+1} &= 2(2^{k} - 1) + 1 \\
&= 2^{k+1} - 2 + 1 \\
x_{k+1} &= 2^{k+1} - 1
.\end{align}
$$

Con esto, la inducción queda completa.
$$\qed$$

```

````

### Sucesiones a partir de los dos términos anteriores

Planteamos aquí un esquema de inducción para sucesiones donde cada término depende no solo del anterior, sino también del otro anterior.

```ad-proposition

Sea $P(n)$ una proposición definida para todo entero positivo $n$. Entonces, si se cumple que

- $P(1)$ y $P(2)$ son verdaderas, y
- si $P(k)$ y $P(k + 1)$ son verdaderas entonces $P(k + 2)$ también es verdadera,

entonces $P(n)$ es verdadera para todo entero positivo $n$.

```

Este esquema se puede ajustar para demostrar casos a partir de algún otro par de casos base además del primero y el segundo.

````ad-example
title: Ejemplo 1.

Considere la sucesión $(x_{n})_{n \geq 1}$ definida por $x_{1} = 5$, $x_{2} = 9$ y $x_{n+2} = 3x_{n+1} - 2x_{n}$, para todo $n \geq 1$. Demuestre que $x_{n} = 2^{n+1} + 1$ para todo entero positivo $n$.

```ad-proof
collapse: closed

Nótese que la fórmula cumple para $n = 1$ y $n = 2$, ya que $2^{1+1} + 1 = 5 = x_{1}$ y $2^{2+1} + 1 = 9 = x_{2}$ respectivamente.

Ahora, supongamos que la fórmula cumple para algún $n = k$ y $n = k + 1$, con $k \geq 3$. Entonces

$$
x_{k} = 2^{k+1} + 1 \qquad \text{y} \qquad x_{k+1} = 2^{k+2} + 1
.$$

Por la relación de recurrencia entonces, tenemos que

$$
\begin{align}
x_{k+2} &= 3x_{k+1} - 2x_{k} \\
&= 3(2^{k+2} + 1) - 2(2^{k+1} + 1) && \text{(H.I.)} \\
&= 3 \cdot 2^{k+2} + 3 - 2 \cdot 2^{k+1} - 2 \\
&= 3 \cdot 2^{k+2} - 2^{k+2} + 1 \\
&= 2 \cdot 2^{k+2} + 1 \\
x_{k+2} &= 2^{k+3} + 1
.\end{align}
$$

Con esto, hemos verificado que la fórmula cumple entonces para $n = k + 2$, con lo que la inducción está completa.
$$\qed$$

```

````
