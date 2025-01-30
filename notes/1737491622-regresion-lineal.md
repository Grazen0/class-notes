---
id: 1737491622-regresion-lineal
aliases:
  - Regresión lineal
tags:
  - mates/estadistica
createdAt: 2025-01-21 15:33
---

# Regresión lineal

La regresión lineal es una técnica para, a partir de un conjunto de datos de dos variables ($x$ y $y$), hallar una función lineal

$$
y = mx + b
$$

que modele de la "mejor manera" la relación entre ambas variables.

Se divide en dos tipos: **simple** y **múltiple**.

Además, una regresión lineal nos permite calcular el tipo de relación entre las variables:

- **Correlación directa:** $m > 0$.
- **Correlación inversa:** $m < 0$.

## Coeficiente de correlación

Existe un coeficiente denominado con $r$, el cual describe numéricamente el nivel de correlación entre las variables:

- $0 \leq |r| < 0.3$: correlación **baja**.
- $0.3 \leq |r| < 0.6$: correlación **regular** (o media, o moderada).
- $0.6 \leq |r| \leq 1$: correlación **alta**.

Siempre se cumple que $-1 \leq r \leq 1$.

## Coeficiente de determinación

Existe también un coeficiente denominado con $R^2$, el cual describe numéricamente la **confiabilidad** de la regresión:

En general, se tiene como acuerdo que un $R^2 \geq 0.7$ significa que el modelo es **confiable**.

Siempre se cumple que $0 \leq R^2 \leq 1$.

## Código en R

```r
x <- c(1, 2, 3)
y <- c(10, 22, 25)

# Hacer la regresión lineal
model = lm(y ~ x)
model

# Coeficiente de correlación
cor(x, y, use = "complete.obs") 
summary(model) # Aquí se puede ver R^2 (coef de determinación)
```
