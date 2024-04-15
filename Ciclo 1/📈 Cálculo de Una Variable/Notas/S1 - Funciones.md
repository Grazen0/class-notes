
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-5,5,-2.5,5]
disableZoom: true
grid: true
---
y = 0.6x^3 - x^2 - 2x + 2
y = sin(2x)
y = x + 3
```

Una **función** es un tipo de **relación** donde a cada elemento de entrada se le asigna *uno y solo un* elemento de salida.

## Dominio

Es el conjunto de elementos de entrada que la función puede tomar.

Depende de las restricciones impuestas en la expresión algebraica de la función, además del **contexto real** de la función.

### Ejemplos

$$
\begin{aligned}
f(x) &= 2x + 1       && \implies    \dom f = (-\infty, +\infty) \\
g(x) &= \sqrt{x - 3} && \implies    \dom g = [3, +\infty) \\
h(x) &= \ln(x + 2)   && \implies    \dom h = (-2, +\infty)
\end{aligned}
$$

## Rango

Es el conjunto de elementos de salida que la función puede producir.

### Ejemplos

$$
\begin{align*}
f(x) &= 2x + 1       && \implies \ran f = (-\infty, +\infty) \\
g(x) &= \sqrt{x - 3} && \implies \ran g = [0, +\infty) \\
h(x) &= e^x          && \implies \ran h = (0, +\infty) \\
\end{align*}
$$

## Transformaciones geométricas

Una función se puede trasladar y escalar mediante ciertas transformaciones.

- Desplazamiento horizontal: $f(x - h)$
- Desplazamiento vertical: $f(x) + k$
- Estiramiento horizontal: $f(\frac{x}{a})$
- Estiramiento vertical: $bf(x)$

### Función par

$$
f(x) = f(-x)
$$

La función tiene como eje de simetría al **eje Y**

### Función impar

$$
f(-x) = -f(x)
$$

La función tiene como eje de simetría al **eje X**.

## Operaciones con funciones

Las funciones se pueden operar y componer, y esto produce efectos en sus dominios y rangos.

$$
\begin{alignat*}{2}
&\dom\left(f \pm g\right)   &&= \dom f \cap \dom g \\
&\dom\left(f \cdot g\right) &&= \dom f \cap \dom g \\
&\dom\!\left(\frac{f}{g}\right) &&= \left\{x \in \dom f \cap \dom g \lmid g(x) \neq 0 \right\} \\
&\dom\left(f \circ g\right) &&= \left\{ x \in \dom g \lmid g(x) \in \dom f \right\} \\
\end{alignat*}
$$

## Modelado de situaciones reales

- El **contexto real** afecta al dominio de la función.
	- E.j: Si $r$ e s el radio de un disco, entonces $r \gt 0$.
- Se tiene que ser **específico** al describir lo que representan las variables.
