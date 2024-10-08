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

A los valores propios de la matriz $A$ se le llama **espectro** de $A$, y se denota como $\sigma(A)$.

Para hallar valores propios, tenemos que resolver el sistema

$$
p_A(\lambda) = \left| A - \lambda I_n \right| = 0
.$$

Esta es llamada la **ecuación característica**.

```ad-proposition
title: Observación.

El polinomio característico de una matriz de orden $n$ tiene grado $n$, por lo que la ecuación característica tendrá $n$ raíces.

```

## Espacio propio

Como para cada valor propio $\lambda$ existen varios vectores $\mathbf{x}$ tales que

