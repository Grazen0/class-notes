Las funciones vectoriales sirven como una forma de representar **ecuaciones paramétricas**, a menudo de forma más concisa.

Cuando se habla de funciones vectoriales que forman **curvas**, la salida de dicha función se interpreta como un **vector posición**.

$$
\vec{r}(t) = \left< x(t), y(t), z(t) \right> 
$$

## Derivada de funciones vectoriales

Derivar una función vectorial es **derivar sus componentes**.

$$
\frac{d\vec{r}}{dt} = \left< \frac{dx}{dy}, \frac{dy}{dy}, \frac{dz}{dt} \right> 
$$

Nótese que esta derivada **no necesariamente es un vector unitario**. Hallarlo requiere su respectiva operación adicional.

### Recta tangente

Esta derivada genera el **vector dirección** de una recta tangente a la curva $\vec{r}$ en el punto $t$. Por lo tanto, podemos generar una **recta tangente** a la curva $\vec{r}$ en $t = a$ con la fórmula

$$
\vec{\mathscr{L}}(t) = \vec{r}(a) + t\,\vec{r}'(a)
.$$
