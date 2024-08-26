```ad-definition


Una sucesión es **recurrente** si, a partir de alguna posición, dicha sucesión se define a partir de sus términos anteriores.

```

Algunos ejemplos de sucesiones recurrentes son

- $x_{n} = x_{n-1} + x_{n-2}$
- $x_{n} = x_{1} + x_{2} + \ldots + x_{n_1}$

```ad-example
title: Ejemplo.
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

La forma no-recurrente para una sucesión recurrente puede ser demostrada por inducción.

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

```

````
