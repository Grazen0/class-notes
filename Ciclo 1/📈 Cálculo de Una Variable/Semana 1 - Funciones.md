
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
f(x) &= 2x + 1       && \implies    \text{Dom }f = (-\infty, +\infty) \\
g(x) &= \sqrt{x - 3} && \implies    \text{Dom }g = [3, +\infty) \\
h(x) &= \ln(x + 2)   && \implies    \text{Dom }h = (-2, +\infty) \\
\end{aligned}
$$

## Rango

Es el conjunto de elementos de salida que la función puede producir.

### Ejemplos
$$
\begin{alignat*}{2}
f(x) &= 2x + 1       && \implies \text{Ran }f = (-\infty, +\infty) \\
g(x) &= \sqrt{x - 3} && \implies \text{Ran }g = [0, +\infty) \\
h(x) &= e^x          && \implies \text{Ran }h = (0, +\infty) \\
\end{alignat*}
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
&\text{Dom }(f \pm g)   &&= \text{Dom }f \cap \text{Dom }g \\
&\text{Dom }(f \cdot g) &&= \text{Dom }f \cap \text{Dom }g \\
&\text{Dom }\left(\frac{f}{g}\right) &&= \left\{x \in \text{Dom }f \cap \text{Dom }g : g(x) \neq 0 \right\} \\
&\text{Dom }(f \circ g) &&= \left\{ x \in \text{Dom }g : g(x) \in \text{Dom }f \right\} \\
\end{alignat*}
$$
## Modelado de situaciones reales

- El **contexto real** afecta al dominio de la función.
	- E.j: Si $r$ e s el radio de un disco, entonces $r \gt 0$.
- Se tiene que ser **específico** al describir lo que representan las variables.

