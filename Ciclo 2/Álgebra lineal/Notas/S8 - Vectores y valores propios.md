```ad-definition

Sea $A$ una matriz. Decimos que vector $\mathbf{x} \neq \mathbf{0}$ es un **vector propio** de $A$ si y sólo si

$$
A\mathbf{x} = \lambda \mathbf{x}
$$

para algún escalar $\lambda$. A $\lambda$ se le llama el **valor propio** asociado a $\mathbf{x}$.

```

Intuitivamente, los vectores propios de una matriz $A$ son aquellos que, al ser transformados por $A$, se mantienen en la misma recta donde estaban originalmente.

```ad-definition
title: Definición (polinomio característico).

Dada la matriz $A$ de $m \times n$, llamamos al **polinomio característico de $A$** a

$$
p_A(\lambda) = |A - \lambda I_n|
.$$

```

Para hallar valores propios, tenemos que resolver el sistema

$$
p_A(\lambda) = \left| A - \lambda I_n \right| = 0
.$$

Esta es llamada la **ecuación característica**.
