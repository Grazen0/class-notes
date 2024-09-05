```ad-definition
title: Definición (proyección escalar y componente vectorial).

Definimos $\operatorname{proy}_{\vec{w}}(\vec{v})$ como el **vector de la proyección** de $\vec{v}$ sobre $\vec{w}$.

Similarmente, definimos $\operatorname{comp}_{\vec{w}}(\vec{v})$ (la componente de $\vec{v}$ sobre $\vec{w}$) como la **magnitud** de dicha proyección.

```

![[proyeccion de vectores.excalidraw]]

A partir del [[S2A - Producto punto y cruz#Producto punto/escalar|producto punto]], encontramos que

$$ \begin{align}
\operatorname{comp}_{\vec{w}}(\vec{v}) &= \lVert \vec{v} \rVert \cos(\theta) \\
\operatorname{comp}_{\vec{w}}(\vec{v}) &= \frac{\vec{v} \cdot \vec{w}}{\lVert \vec{w} \rVert }
\end{align}
$$

y, fácilmente a partir de aquí, podemos hallar el vector mismo,

$$
\begin{align}
\operatorname{proy}_{\vec{w}}(\vec{v}) &= \operatorname{comp}_{\vec{w}}(\vec{v}) \, \hat{w} \\
\operatorname{proy}_{\vec{w}}(\vec{v}) &= \frac{\vec{v} \cdot \vec{w}}{\lVert \vec{w} \rVert^{2}} \vec{w}
.\end{align}
$$
