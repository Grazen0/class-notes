## Producto interno

```ad-definition
title: Definición (producto interno).

Un producto interno en un espacio vectorial $V$ es una función $V \times V \to \mathbb{R}$ (comúnmente denotada por $\left< \mathbf{u}, \mathbf{v} \right>$) que cumple los siguientes axiomas:

1. **Simetría:** $\left< \mathbf{u}, \mathbf{v} \right> = \left< \mathbf{v}, \mathbf{u} \right>$.
2. **Aditividad:** $\left< \mathbf{u} + \mathbf{v} , \mathbf{w} \right> = \left< \mathbf{u}, \mathbf{w} \right> + \left< \mathbf{v}, \mathbf{w} \right>$.
3. **Homogeneidad:** $\left< k\mathbf{u}, \mathbf{v} \right> = k\left< \mathbf{u}, \mathbf{v} \right>$.
4. **Positividad:** $\left< \mathbf{v}, \mathbf{v} \right> \geq 0$, y además $\left< \mathbf{v}, \mathbf{v} \right> = 0 \iff \mathbf{v} = \mathbf{0}$.

```

A un espacio $V$ equipado con el producto interno se le llama **espacio producto interno**.

En el espacio euclidiano $\mathbb{R}^n$, el producto interno de dos vectores se define como el **producto punto**. Es decir,

$$
\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \ldots + u_nv_n
.$$

```ad-definition
title: Definición (norma y distancia).

Si $V$ es un espacio de producto interno, entonces la **norma** (o longitud) de un vector $\mathbf{v} \in V$ se define como

$$
\lVert \mathbf{v} \rVert  = \sqrt{\left< \mathbf{v}, \mathbf{v} \right> }
.$$

Además, la **distancia** entre dos vectores $\mathbf{u}, \mathbf{v}$ se define como

$$
d(\mathbf{u}, \mathbf{v}) = \lVert \mathbf{u} - \mathbf{v} \rVert
.$$

```

Un vector de norma $1$ se denomina **vector unitario**.

## Ortogonalidad

```ad-definition
title: Definición (ortogonalidad).

Dos vectores $\mathbf{u}, \mathbf{v} \in V$ son **ortogonales** si y sólo si $\left< \mathbf{u}, \mathbf{v} \right> = 0$.

```

Nótese que, en el espacio euclidiano, el vector $\mathbf{0}$ es ortogonal a todos los vectores.

```ad-definition
title: Definición (complemento ortogonal).

Sea $W$ un subespacio de $V$. Entonces, el **complemento ortogonal** de $W$, denotado por $W^{\perp}$, es el conjunto de todos los vectores de $V$ que son ortogonales a cada vector de $W$.

```

Algunas propiedades de $W^{\perp}$ son:

1. $W^{\perp}$ es subespacio de $V$.
2. $W \cap W^{\perp} = \left\{ \mathbf{0} \right\}$.
3. Si la dimensión de $W$ es finita, entonces $(W^{\perp})^{\perp} = W$.

```ad-example
title: Ejemplos.
collapse: closed

1. El complemento ortogonal de una recta $W \subseteq \mathbb{R}^2$ que pasa por el origen es la recta que pasa por el origen y es perpendicular a $W$.
2. El complemento ortogonal de un plano $W \subseteq \mathbb{R}^3$ que pasa por el origen es la recta normal a $W$.

```

Otras propiedades interesantes del complemento ortogonal son:

1. $\operatorname{row}(A)^{\perp} = \operatorname{null}(A)$.
2. $\operatorname{col}(A)^{\perp} = \operatorname{null}(A^T)$.

### Conjuntos ortogonales

```ad-definition
title: Definición (conjunto ortogonal y ortonormal).

Un conjunto de vectores es **ortogonal** si y sólo si todos los pares de vectores que contiene son ortogonales.

Además, si todos sus vectores son unitarios, entonces se llama conjunto **ortonormal**.

```

```ad-theorem

Si $S$ es un conjunto ortogonal de vectores no nulos en un espacio producto interno, entonces $S$ **es linealmente independiente**.

```

```ad-theorem

Si $S = \left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\}$ es una base ortonormal para $V$, entonces cualquier vector $\mathbf{u} \in V$ se puede representar como

$$
\mathbf{u} = \left< \mathbf{u}, \mathbf{v}_1 \right> \mathbf{v}_1 + \left< \mathbf{u}, \mathbf{v}_2 \right> \mathbf{v}_2 + \ldots + \left< \mathbf{u}, \mathbf{v}_n \right> \mathbf{v}_n
.$$

```

Este es un resultado intuitivo debido a que los vectores $\mathbf{v}_i$ son unitarios, por lo que esencialmente estamos **descomponiendo** $\mathbf{u}$ en sus componentes en la base $S$.

### Proyecciones y componentes

```ad-definition

Sean $\mathbf{a}, \mathbf{u}$ vectores en $\mathbb{R}^n$. Entonces, se define a la **proyección ortogonal** de $\mathbf{u}$ en $\mathbf{a}$ como

$$
\mathbf{w}_1 = \operatorname{proy}_\mathbf{a}(\mathbf{u}) = \frac{\mathbf{u} \cdot \mathbf{a}}{\lVert \mathbf{a} \rVert^2} \mathbf{a}
.$$

Además, se define al **componente vectorial de $\mathbf{u}$ ortogonal a $\mathbf{a}$** como

$$
\mathbf{w}_2 = \mathbf{u} - \mathbf{w}_1
.$$

```

Ver también: **[[S2C - Proyección de vectores]]**.

```ad-theorem

Dado un subespacio $W$ de dimensión finita, cada vector $\mathbf{u} \in V$ se puede expresar de manera **única** como

$$
\mathbf{u} = \mathbf{w}_1 + \mathbf{w}_2
,$$

donde $\mathbf{w}_1 \in W$ y $\mathbf{w}_2 \in W^{\perp}$.

```

Las fórmulas de $\mathbf{w}_1$ y $\mathbf{w}_2$ se suelen representar de la siguiente manera:

$$
\mathbf{w}_1 = \operatorname{proy}_W(\mathbf{u}) \qquad \mathbf{w}_2 = \operatorname{proy}_{W^{\perp}}(\mathbf{u})
.$$

```ad-theorem

Sea $S = \left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\}$ una base ortogonal para $W$, y $\mathbf{u}$ un vector en $V$. Entonces,

$$
\operatorname{proy}_W(\mathbf{u}) = \frac{\left< \mathbf{u}, \mathbf{v}_1 \right> }{\lVert \mathbf{v}_1 \rVert^2} \mathbf{v}_1 + \frac{\left< \mathbf{u}, \mathbf{v}_2 \right> }{ \lVert \mathbf{v}_2 \rVert^2} \mathbf{v}_2 + \ldots + \frac{\left< \mathbf{u}, \mathbf{v}_n \right> }{\lVert \mathbf{v}_n \rVert^2} \mathbf{v}_n
.$$

En el caso especial de que $S$ sea ortonormal, tenemos

$$
\operatorname{proy}_W(\mathbf{u}) = \left< \mathbf{u}, \mathbf{v}_1 \right> \mathbf{v}_1 + \left< \mathbf{u}, \mathbf{v}_2 \right> \mathbf{v}_2 + \ldots + \left< \mathbf{u}, \mathbf{v}_n \right> \mathbf{v}_n
.$$

```

En otras palabras, la proyección de un vector $\mathbf{u}$ sobre un espacio $W$ se obtiene descomponiendo $\mathbf{u}$ en sus componentes en la base ortogonal de $W$.

## Proceso de Gram-Schmidt

El proceso de Gram-Schmidt es un algoritmo que nos permite transformar un conjunto de vectores linealmente independientes $\left\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \right\}$ en una base ortogonal $\left\{ \mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_n \right\}$.

El proceso es el siguiente:

$$
\begin{align}
\mathbf{u}_1 &= \mathbf{v}_1 \\
\mathbf{u}_2 &= \mathbf{v}_2 - \operatorname{proy}_{\mathbf{u}_1}(\mathbf{v}_2) \\
\mathbf{u}_3 &= \mathbf{v}_3 - \operatorname{proy}_{\mathbf{u}_1}(\mathbf{v}_3) - \operatorname{proy}_{\mathbf{u}_2}(\mathbf{v}_3) \\
\mathbf{u}_4 &= \mathbf{v}_4 - \operatorname{proy}_{\mathbf{u}_1}(\mathbf{v}_4) - \operatorname{proy}_{\mathbf{u}_2}(\mathbf{v}_4) - \operatorname{proy}_{\mathbf{u}_3}(\mathbf{v}_4) \\
\vdots \\
\mathbf{u}_n &= \mathbf{v}_n - \sum_{i=1}^{n-1} \operatorname{proy}_{\mathbf{u}_i}(\mathbf{v}_n)
\end{align}
$$

En otras palabras, a cada vector subsiguiente se le resta su proyección sobre los vectores ortogonales que ya tenemos.

### Para obtener una base ortonormal

Si además de ortogonal, queremos que la base obtenida sea ortonormal, simplemente normalizamos los resultados.

Sin embargo, aprovechando que podemos ir calculando los resultados normalizados en cada paso, podemos simplificar el proceso de la siguiente manera:

$$
\begin{align}
\mathbf{u}_1 &= \mathbf{v}_1 & \mathbf{q}_1 = \frac{\mathbf{u}_1}{\lVert \mathbf{u}_1 \rVert } \\
\mathbf{u}_2 &= \mathbf{v}_2 - (\mathbf{v}_2 \cdot \mathbf{q}_1) \mathbf{q}_1 & \mathbf{q}_2 = \frac{\mathbf{u}_2}{\lVert \mathbf{u}_2 \rVert } \\
\mathbf{u}_3 &= \mathbf{v}_3 - (\mathbf{v}_3 \cdot \mathbf{q}_1) \mathbf{q}_1 - (\mathbf{v}_3 \cdot \mathbf{q}_2) \mathbf{q}_2 & \mathbf{q}_3 = \frac{\mathbf{u}_3}{\lVert \mathbf{u}_3 \rVert } \\
\mathbf{u}_4 &= \mathbf{v}_4 - (\mathbf{v}_4 \cdot \mathbf{q}_1) \mathbf{q}_1 - (\mathbf{v}_4 \cdot \mathbf{q}_2) \mathbf{q}_2 - (\mathbf{v}_4 \cdot \mathbf{q}_3) \mathbf{q}_3 & \mathbf{q}_4 = \frac{\mathbf{u}_4}{\lVert \mathbf{u}_4 \rVert } \\
\vdots \\
\mathbf{u}_n &= \mathbf{v}_n - \sum_{i=1}^{n-1}(\mathbf{v}_n \cdot \mathbf{q}_i) \mathbf{q}_i & \mathbf{q}_n = \frac{\mathbf{u}_n}{\lVert \mathbf{u}_n \rVert }
\end{align}
$$

## Aplicaciones

```ad-definition
title: Definición (matriz ortogonal).

Una matriz cuadrada $A$ es **ortogonal** si y sólo si $A^TA = AA^T = I$.

```

Es decir, una matriz es ortogonal cuando su traspuesta resulta ser su propia inversa.

```ad-theorem

Dada una matriz $A$, las siguientes afirmaciones son equivalentes:

1. $A$ es ortogonal.
2. Las columnas de $A$ son ortonormales.
3. Las filas de $A$ son ortonormales.

```

Otras propiedades, dadas matrices ortogonales $A$ y $B$, son:

1. $A^T$ es ortogonal.
2. $A^{-1}$ es ortogonal.
3. $AB$ es ortogonal.
4. $|A| = \pm1$.

### Diagonalización ortogonal

```ad-definition

Una matriz $A$ es **diagonalizable ortogonalmente** si y sólo si existe una matriz ortogonal $P$ tal que

$$
D = P^TAP
,$$

o equivalentemente

$$
A = PDP^T
.$$

En esta situación, decimos que $P$ **diagonaliza ortogonalmente** a $A$.
```

En otras palabras, una matriz es diagonalizable ortogonalmente cuando se puede diagonalizar con una matriz ortogonal.

```ad-theorem

Las siguientes afirmaciones sobre una matriz $A$ de $n \times n$ son equivalentes:

1. $A$ es diagonalizable ortogonalmente.
2. $A$ tiene algún conjunto de $n$ vectores propios ortonormales.
3. $A$ es simétrica.

```

```ad-theorem

Si $A$ es una matriz simétrica, entonces:

1. Los **valores propios** de $A$ son todos **números reales**.
2. Los **espacios propios** de $A$ son todos **ortogonales** entre sí.

```

#### Proceso de diagonalización ortogonal

1. Comprobar que $A$ es simétrica.
2. Encontrar una base para cada espacio propio de $A$.
3. Convertir cada base en ortonormal mediante el proceso Gram-Schmidt.
4. Formar la matriz $P$ cuyas columnas sean los vectores del paso 2.

Esta matriz $P$ diagonalizará ortogonalmente a $A$.

Al igual que en el proceso usual de diagonalización, la matriz diagonal $D = P^TAP$ va a contener en su diagonal a los valores propios de $A$.
