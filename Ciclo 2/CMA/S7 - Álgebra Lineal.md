```ad-definition
title: Definición (espacio vectorial).

Un **espacio vectorial** $E$ es un conjunto (cuyos elementos son llamados **vectores**) en el cual se definen dos operaciones: la **suma** ($+: E \times E \to E$) y el **producto por escalar** ($\cdot: \R \times E \to E$). Estas operaciones deben cumplir los siguientes axiomas:

1. **Conmutatividad:** $u + v = v + u$.
2. **Asociatividad:** $(u + v) + \mathbf{w} = u + (v + \mathbf{w})$.
3. **Neutro aditivo:** Existe un vector $\mathbf{0} \in E$ tal que $\forall v \in E \, (v + \mathbf{0} = \mathbf{0} + v = v)$.
4. **Inverso aditivo:** $\forall v \in E \, (\exists (-v) \in E \, (v + (-v) = \mathbf{0}))$.
5. **Distributividad:** $(\alpha + \beta)v = \alpha v + \beta v$ y $\alpha(u + v) = \alpha u + \alpha v$.
6. **Neutro multiplicativo:** Existe un vector $1 \in E$ tal que $\forall v \in E \, (1 \cdot v = v)$

```

Un ejemplo de espacio vectorial es $\R^n$ con las operaciones de adición y multiplicación por escalar definidas como

$$
\begin{align}
\mathbf{x} + \mathbf{y} &= (x_1+y_1,x_2+y_2,\ldots,x_n+y_n) \\
 \alpha\mathbf{x} &= (\alpha x_1, \alpha x_2, \ldots, \alpha x_n)
.\end{align}
$$

Sea $X$ un conjunto no vacío cualquiera, y sea $\mathcal{F}(X, \R)$ el conjunto de todas las funciones reales del tipo $X \to \R$. Entonces, $\mathcal{F}(X,\R)$ es un espacio vectorial cuando se definen las operaciones de suma y producto por escalar intuitivamente:

$$
(f + g)(x) = f(x) + g(x) \qquad (\alpha f)(x) = \alpha \cdot f(x)
.$$

Algunas observaciones:

1. Si $X = \left\{ 1,2,\ldots,n \right\}$, entonces $\mathcal{F}(X,\R) = \R^n$.
2. Si $X = \Zp$, entonces $\mathcal{F}(X,\R) = \R^{\infty}$.
3. Si $X = \left\{ 1,2,\ldots,m \right\} \times \left\{ 1,2,\ldots,n \right\}$, entonces $\mathcal{F}(X,\R) = M_{m \times n}$.
