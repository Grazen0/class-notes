---
id: 1743544940-sistemas-por-capas
aliases:
  - Sistemas por capas
  - Sistema por capas
  - Layered systems
  - Layered system
tags:
  - cs/dbp
createdAt: 2025-04-01 17:02
---

# Sistemas por capas

La idea de un sistema por capas (un término relativamente amplio, honestamente) es **separar las responsabilidades** de una aplicación en diferentes capas que se encarguen de tares particulares.

El modelo más frecuente para una aplicación web incluye **cliente**, **servidor** y **base de datos**.

![[sistema-3-capas.png]]

Un sistema con más capas es el siguiente:

![[sistema-n-capas.png]]

La ventaja principal de hacer un sistema por capas es el **desacoplamiento**. Cada capa se puede mejorar o ser trabajada sin afectar al resto (mientras que la interfaz que las comunique no cambie, claro).
