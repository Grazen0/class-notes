---
id: 1728876707-multiplicidades-de-valores-propios
aliases:
  - Multiplicidades de valores propios
tags:
  - mates/alg-lineal
createdAt: 2024-10-13 22:31
---

# Multiplicidades de valores propios

> [!DEFINITION] Definición (multiplicidad algebraica de un valor propio)
> Sea $A$ una matriz de $m \times n$, y sea su polinomio característico descompuesto en factores primos
> 
> $$
> p_A(\lambda) = (\lambda - \lambda_1)^{m_1}(\lambda - \lambda_2)^{m_2} \ldots (\lambda - \lambda_r)^{m_r}
> .$$
> 
> Entonces, la **multiplicidad algebraica** del valor propio $\lambda_i$ es el exponente que acompaña al factor $(\lambda - \lambda_i$ en esta expresión. Es decir,
> 
> $$
> \operatorname{ma}(\lambda_i) = m_i
> .$$

> [!DEFINITION] Definición (multiplicidad geométrica de un valor propio)
> Sea $A$ una matriz y $\lambda$ un valor propio de $A$. Entonces, la **multiplicidad geométrica** de $\lambda$ es la **dimensión** de $E_\lambda$. Es decir:
> 
> $$
> \operatorname{mg}(\lambda) = \operatorname{dim}(E_\lambda)
> .$$

Equivalentemente, la multiplicidad geométrica es la **cantidad de variables libres** al resolver el sistema $[A - \lambda I \mid \mathbf{0}]$.

Por el teorema de rango-nulidad, la multiplicidad geométrica cumple con la relación

$$
\operatorname{mg}(\lambda) + \operatorname{rank}(A - \lambda I_n) = \text{\# de columnas}
.$$

> [!THEOREM]
> Sea $\lambda$ un valor propio de la matriz $A$. Entonces,
> 
> $$
> \operatorname{mg}(\lambda) \leq \operatorname{ma}(\lambda)
> .$$

## Propiedades de los valores propios

Sea $\lambda$ un valor propio de la matriz $A$. Entonces:

1. $A^n\mathbf{x} = \lambda^n\mathbf{x}$.
   - Por lo tanto, $\lambda^n$ es valor propio de $A^n$.
2. $A^{-1}\mathbf{x} = \frac{1}{\lambda}\mathbf{x}$.

Estas propiedades son intuitivas:

1. Si $A$ escala a $\mathbf{x}$, entonces aplicar $A$ varias veces es escalar varias veces a $\mathbf{x}$.
2. Si $A$ escala a $\mathbf{x}$, entonces invertir $A$ es simplemente de-escalar $\mathbf{x}$.

Otras propiedades importantes son:

1. $\sum\lambda_i = \operatorname{traz}(A)$.
2. $\prod\lambda_i = |A|$.
3. Las matrices **simétricas** *siempre* tienen valores propios reales.
4. Si $\lambda_i \neq \lambda_j$, entonces los vectores de $E_{\lambda_i}$ y $E_{\lambda_j}$ son **linealmente independientes**.

## Declaraciones equivalentes

Todas las siguientes proposiciones son equivalentes:

01. $A$ es invertible.
02. $A\mathbf{x} = \mathbf{0}$ sólo tiene solución trivial.
03. La forma escalonada reducida por filas de $A$ es $I_n$.
04. $A$ se puede expresar como producto de matrices elementales.
05. $A\mathbf{x} = \mathbf{b}$ es consistente determinado para todo vector $\mathbf{b}$.
06. $|A| \neq 0$.
07. Las columnas de $A$ son linealmente independientes.
08. Las filas de $A$ son linealmente independientes.
09. $\operatorname{col}(A) = \mathbb{R}^n$.
10. $\operatorname{row}(A) = \mathbb{R}^n$.
11. $\operatorname{rank}(A) = n$.
12. $\operatorname{v}(A) = 0$.
13. $\lambda = 0$ no es valor propio de $A$.
