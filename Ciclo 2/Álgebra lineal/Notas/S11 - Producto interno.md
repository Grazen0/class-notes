```ad-definition
title: Definición (producto interno).

Un producto interno en un espacio vectorial $V$ es una función $V \times V \to \mathbb{R}$ (comúnmente denotada por $\left< \mathbf{u}, \mathbf{v} \right>$) que cumple los siguientes axiomas:

1. **Simetría:** $\left< \mathbf{u}, \mathbf{v} \right> = \left< \mathbf{v}, \mathbf{u} \right>$.
2. **Aditividad:** $\left< \mathbf{u} + \mathbf{v} , \mathbf{w} \right> = \left< \mathbf{u}, \mathbf{w} \right> + \left< \mathbf{v}, \mathbf{w} \right>$.
3. **Homogeneidad:** $\left< k\mathbf{u}, \mathbf{v} \right> = k\left< \mathbf{u}, \mathbf{v} \right>$.
4. **Positividad:** $\left< \mathbf{v}, \mathbf{v} \right> \geq 0$, y además $\left< \mathbf{v}, \mathbf{v} \right> = 0 \iff \mathbf{v} = \mathbf{0}$.

```

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
| \left< \mathbf{u}, \mathbf{v} \right>  | = \lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert 
.$$

```

```ad-definition
title: Definición (ortogonalidad).

Dos vectores $\mathbf{u}, \mathbf{v} \in V$ son **ortogonales** si y sólo si $\left< \mathbf{u}, \mathbf{v} \right> = 0$.

```

Nótese que, en el espacio euclidiano, el vector $\mathbf{0}$ es ortogonal a todos los vectores.

```ad-definition
title: Definición (complemento ortogonal).



```
