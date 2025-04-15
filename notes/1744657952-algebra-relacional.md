---
id: 1744657952-algebra-relacional
aliases:
  - Álgebra relacional
tags:
  - cs/bd-1
createdAt: 2025-04-14 14:12
---

# Álgebra relacional

El punto de partida del álgebra relacional son las **relaciones**, denotadas de manera genérica como $R$. Matemáticamente, es un [[1712166650-conjuntos-numericos|conjunto]] que contiene todas las tuplas de una relación (en el sentido del modelo relacional.

El operador de **selección**, $\sigma$, sirve para **filtrar** tuplas bajo cierto predicado.

$$
\sigma_{\text{marca} = \text{Austral} \ \land \ \text{ml} > 300}(\text{Cerveza}).
$$

El operador de **proyección**, $\pi$, sirve para **seleccionar** un subconjunto de los atributos de una relación.

$$
\pi_{\text{nombre}, \text{marca}, \text{año}}(\text{Cerveza}).
$$
