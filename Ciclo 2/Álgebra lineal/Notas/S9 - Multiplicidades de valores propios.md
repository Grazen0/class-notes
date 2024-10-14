```ad-definition
title: Definición (multiplicidad algebraica de un valor propio).

Sea $A$ una matriz de $m \times n$, y sea su polinomio característico descompuesto en factores primos

$$
p_A(\lambda) = (\lambda - \lambda_1)^{m_1}(\lambda - \lambda_2)^{m_2} \ldots (\lambda - \lambda_r)^{m_r}
.$$

Entonces, la **multiplicidad algebraica** del valor propio $\lambda_i$ es el exponente que acompaña al factor $(\lambda - \lambda_i$ en esta expresión. Es decir,

$$
\operatorname{ma}(\lambda_i) = m_i
.$$

```


```ad-definition
title: Definición (multiplicidad geométrica de un valor propio).

Sea $A$ una matriz y $\lambda$ un valor propio de $A$. Entonces, la **multiplicidad geométrica** de $\lambda$ es la **dimensión** de $E_\lambda$. Es decir:

$$
\operatorname{mg}(\lambda) = \operatorname{dim}(E_\lambda)
.$$

```

Por el teorema de rango-nulidad, la multiplicidad geométrica cumple con la relación

$$
\operatorname{mg}(\lambda) + \operatorname{rank}(A - \lambda I_n)
.$$

```ad-theorem

Sea $\lambda$ un valor propio de la matriz $A$. Entonces,

$$
\operatorname{mg}(\lambda) \leq \operatorname{ma}(\lambda)
.$$

```
