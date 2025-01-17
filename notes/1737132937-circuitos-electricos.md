---
id: 1737132937-circuitos-electricos
aliases:
  - Circuitos eléctricos
tags:
  - mates/edo
createdAt: 2025-01-17 11:55
---

# Circuitos eléctricos

En electrónica, un circuito RC consiste de un resistor y un capacitor dispuestos de la siguiente forma:

![circuito-rc.png](attachments/circuito-rc.png)

Usando la ley de Kirchoff, podemos deducir que esta configuración se modela mediante la siguiente [[1736190391-ecuaciones-diferenciales-clasificacion|ecuación diferencial]]:

$$
R \frac{dq}{dt} + \frac{1}{C}q = V(t)
,$$

donde:

- $q(t)$: carga en el capacitor.
- $V(t)$: voltaje de la fuente.
- $R$: resistencia del resistor.
- $C$: capacitancia del capacitor.
