Cuando trabajamos con [[S1A - Vectores|vectores]] en el [[S0 - Espacio en 3D|espacio tridimensional]], un vector $\vec{v}$ ya no tiene una única dirección, sino que tiene 3 ángulos que parten a partir de cada eje respectivo del espacio.

**[Ver visualización](https://www.geogebra.org/m/dUHQSEeu)**

![[cosenos directores.png]]

Usando este diagrama podemos derivar lo que llamamos **cosenos directores**:

$$
\cos(\alpha) = \frac{v_{x}}{\lVert \vec{v} \rVert } \quad \cos(\beta) = \frac{v_{y}}{\lVert \vec{v} \rVert } \quad \cos(\gamma) = \frac{v_{z}}{\lVert \vec{v} \rVert }
$$

Un resultado trivial de estas equivalencias es que un vector unitario se puede representar únicamente con sus cosenos directores de la siguiente forma:

$$
\hat{v} = \frac{\vec{v}}{\lVert \vec{v} \rVert} = \cos(\alpha)\hat{i} + \cos(\beta)\hat{j} + \cos(\gamma)\hat{k}
$$

Como el vector unitario tiene módulo $1$, entonces podemos además obtener el resultado: la suma de los cuadrados de los cosenos directores es igual a $1$.

$$
\cos^{2}(\alpha) + \cos^{2}(\beta) + \cos^{2}(\gamma) = 1
$$
