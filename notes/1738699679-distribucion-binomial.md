---
id: 1738699679-distribucion-binomial
aliases:
  - Distribución binomial
tags:
  - mates/estadistica
createdAt: 2025-02-04 15:07
---

# Distribución binomial

Una distribución binomial cumple con las siguientes condiciones:

1. Es una repetición de $n$ ensayos.
2. El resultado de cada ensayo es independiente del resto.
3. Existe una probabilidad de "éxito" y una probabilidad de "fracaso".

En una distribución binomial, se define a la **media poblacional** como

$$
\mu = n \cdot p
,$$

donde la probabilidad de éxito es $p$ y la cantidad de ensayos es $n$.

> [!THEOREM]
> Sea $p$ la probabilidad de éxito de un ensayo. Entonces, la probabilidad de que, de un total $n$ de ensayos, exactamente $k$ sean exitosos es igual a
>
> $$
> P(x = k) = \binom{n}{k} p^k (p - 1)^{n-k}
> .$$

En R, esta probabilidad se puede calcular con `dbinom(k, n, p)`.

> [!EXAMPLE]+
> La probabilidad de que un paciente quede hospitalizado luego de entrar por emergencia es de 0.78. Halle la probabilidad de que, de un total de 10 pacientes, 8 de ellos queden hospitalizados.
>
> Consideremos:
>
> - Éxito: que el paciente sea hospitalizado.
> - $x$: Número de pacientes que quedan hospitalizados luego de acudir a emergencia.
>
> Entonces, la probabilidad de que 8 de 10 pacientes queden hospitalizados es igual a
>
> $$
> P(x = 8) = \binom{10}{8} (0.78)^8 (0.22)^2 \approx 29.84\%
> .$$
>
> En R, el código para calcular esta probabilidad sería `dbinom(8, 10, 0.78)`.
