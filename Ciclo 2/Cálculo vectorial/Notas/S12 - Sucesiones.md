```ad-definition

Una función $a$ de la forma $a: \mathbb{N} \to \mathbb{R}$ se llama **sucesión** o un **arreglo** de números reales.

```

Una sucesión se puede denotar de las siguientes maneras:

- $\left\{ a_1, a_2, a_3, \ldots \right\}$
- $\left\{ a_n \right\}$
-  $\left\{ a_n \right\}^{\infty}_{n=1}$

Por convención, se dice que el **primer término** es $a_1$ (y no $a_0$, por ejemplo).

## Convergencia y divergencia

```ad-definition
title: Definición.

Se dice que una sucesión $\left\{ a_n \right\}$ **converge** a un $c \in \mathbb{R}$ si y sólo si

$$
\lim_{n \to \infty} a_n = c
.$$

Por el contrario, se dice que $\left\{ a_n \right\}$ **diverge** si y sólo si

$$
\lim_{n \to \infty} a_n = \pm\infty
.$$
```

```ad-theorem

Si una sucesión tiene cota inferior y superior, y es creciente o decreciente, entonces es convergente.

```
