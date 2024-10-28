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

```ad-definition
title: Definición (esfera unitaria).

Se le denomina **esfera unitaria en $V$** al conjunto de todos los vectores $\mathbf{u} \in V$ tales que

$$
\lVert \mathbf{u} \rVert = 1
.$$

```

```ad-theorem
title: Teorema (desigualdad de Cauchy-Schwartz).

$$
| \left< \mathbf{u}, \mathbf{v} \right>  | \leq \lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert 
.$$

```

## Ortogonalidad

```ad-definition
title: Definición (ortogonalidad).

Dos vectores $\mathbf{u}, \mathbf{v} \in V$ son **ortogonales** si y sólo si $\left< \mathbf{u}, \mathbf{v} \right> = 0$.

```

Nótese que, en el espacio euclidiano, el vector $\mathbf{0}$ es ortogonal a todos los vectores.

```ad-definition
title: Definición (complemento ortogonal).

Sea $W$ un subespacio de $V$. Entonces, el **complemento ortogonal** de $W$, denotado por $W^{\perp}$, es el conjunto de todos los vectores de $V$ que son ortogonales a cada vector de $W.

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

Ver también: **[[S2C - Proyección de vectores]]**.
