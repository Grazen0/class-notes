---
id: 1720628327-metodos-de-demostracion
aliases:
  - Métodos de demostración
tags:
  - mates/discretas-1/demostracion
createdAt: 2024-07-10 11:18
---

# Métodos de demostración

Una **definición** expresa y delimita, mediante una condición, el objeto a estudiar. Debe considerarse que el lenguaje usado sea *consistente*.

## Demostración  directa

Sigue la lógica de la expresión

$$
p \to q
.$$

También incluye demostraciones por casos.

## Demostración indirecta

### Contrarecíproca

Se hace transformando lo que es por ser demostrado en una forma equivalente como su contrarecíproca.

$$
p \to q \equiv \neg q \to \neg p
$$

### Método de contradicción

Si queremos demostrar una proposición $p$, entonces podemos suponer $\neg p$. Si llegamos a una contradicción a partir de lo supuesto, entonces $p$ queda demostrado.
