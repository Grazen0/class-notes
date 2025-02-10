---
id: 1739165556-distribucion-de-poisson
aliases:
  - Distribución de Poisson
tags:
  - mates/estadistica
createdAt: 2025-02-10 00:32
---

# Distribución de Poisson

La **distribución de Poisson** se utiliza para situaciones que describen el *número de veces* que un evento ocurre en un *espacio finito de observación* (área, tiempo, etc).

En una distribución de Poisson, la probabilidad de ocurrencia cuando $X$ toma un valor finito $x$ es igual a

$$
P(X = x) = \frac{e^{-\lambda} \lambda^x}{x!}
,$$

donde $\lambda$ es la ocurrencia por la unidad empleada (tiempo, área, etc).

> [!EXAMPLE]+
> Un cajero automático es utilizado por 6 personas cada 20 minutos. Se desea saber cuál es la probabilidad de que sea utilizado por 5 personas en 10 minutos.
>
> En esta situación, tenemos las ocurrencias por unidad de *20 minutos*, así que las ocurrencias por unidad de *10 minutos* son de **3 personas**.
>
> Por lo tanto, $\lambda = 3$ y la probabilidad que se pide es
>
> $$
> P(X = 5) = \frac{e^{-3} \cdot 3^5}{5!} \approx 0.1
> .$$

## Medidas

- **Media:** $\mu = \lambda$.
- **Varianza:** $\sigma^2 = \lambda$.
- **Desviación estándar:** $\sigma = \sqrt{\lambda}$.
- **Coeficiente de variación:** $\text{CV} = \frac{1}{\sqrt{\lambda}}$.
