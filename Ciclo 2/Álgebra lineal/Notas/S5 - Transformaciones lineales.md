## Transformaciones matriciales

```ad-definition
title: Definición (transformación).

Una función de la forma $T: \R^n \to \R^m$ es una **transformación** de $\R^n$ a $\R^m$.

Adicionalmente, cuando se tiene $T: \R^n \to R^n$,  se suele decir que $T$ es un **operador en $\R^n$**.

```

Cuando tenemos una función $T: \R^n \to \R^m$ tal que

$$
T(\mathbf{x}) = A\mathbf{x}
,$$

entonces a $T$ se le llama **transformación matricial** (o **operador matricial** cuando $m = n$), y se denota como

$$
T_A : \R^n \to \R^m
.$$

Algunas transformaciones notables son:

- $T_0$: **transformación nula**.
- $T_I$: **transformación identidad**.

### Propiedades

Las transformaciones matriciales son **lineales**. Es decir, se cumplen las siguientes propiedades:

1. $T_A(0) = 0$ (demostrable con las propiedades 2 y 3).
2. $T_A(k\mathbf{u}) = kT_A(\mathbf{u})$.
3. $T_A(\mathbf{u} \pm \mathbf{v}) = T_A(\mathbf{u}) \pm T_A(\mathbf{v})$.

```ad-theorem

Una transformación $T: \R^n \to \R^m$ es una transformación matricial si y sólo si se cumple que para todo $\mathbf{u},\mathbf{v} \in \R^n$ y todo $k \in \R$:

1. $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$.
1. $T(k\mathbf{u})= kT(\mathbf{u})$.

```

Una transformación que satisface estas condiciones se denomina **transformación lineal**.

## Transformaciones lineales

```ad-theorem

Toda transformación lineal de $\R^n$ a $\R^m$ es una transformación matricial y viceversa.

```

```ad-theorem

Sean $T_A: \R^n \to \R^m$ y $T_B: \R^n \to \R^m$. Si se cumple que $T_A(\mathbf{x}) = T_B(\mathbf{x})$ para todo $\mathbf{x} \in \R^n$, entonces $A = B$.

```

Resulta que existe una correspondencia de uno a uno entre las matrices de $m \times n$ y las transformaciones matriciales de $\R^n$ a $\R^m$.

Si $T$ es una transformación lineal, entonces a su matriz asociada le llamamos la **matriz estándar (o asociada) de $T$**

### Procedimiento para hallar matrices estándares

Sea $T: \R^n \to \R^m$ una transformación lineal. Para hallar la matriz estándar de $T$, lo que hacemos es:

1. Evaluar $T$ para las bases estándar $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ de $\R^n$.
2. Construir la matriz $A = \begin{bmatrix} \mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n \end{bmatrix}$, que será la matriz estándar.
