Comenzamos definiendo $\operatorname{proy}_{\vec{w}}(\vec{v})$ como el **vector de la proyección** de $\vec{v}$ sobre $\vec{w}$.

Similarmente, definimos $\operatorname{comp}_{\vec{w}}(\vec{v})$ (la componente de $\vec{v}$ sobre $\vec{w}$) como la **magnitud** de dicha proyección.

![[proyeccion de vectores.excalidraw]]

A partir del [[S2A - Producto punto y cruz#Producto punto/escalar|producto punto]], encontramos que

$$
\begin{align}
\operatorname{comp}_{\vec{w}}(\vec{v}) &= \lVert \vec{v} \rVert \cos(\theta) \\
&= \frac{\vec{v} \cdot \vec{w}}{\lVert w \rVert }
\end{align}
$$

y, fácilmente a partir de aquí, podemos hallar el vector mismo,

$$
\operatorname{proy}_{\vec{w}}(\vec{v}) = \operatorname{comp}_{\vec{w}}(\vec{v}) \cdot \hat{w}
.$$
