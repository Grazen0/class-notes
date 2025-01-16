---
id: 1727129370-subreticulas
aliases:
  - Subretículas
tags:
  - mates/discretas-2/logica-digital
createdAt: 2024-09-23 17:09
---

# Subretículas

> [!DEFINITION]
> Sea $L$ una [[S5 - Retículas|retícula]] con los operadores $\lor$ y $\land$, y $A$ un conjunto tal que $A \subseteq L$.
> 
> Entonces, $A$ es una **subretícula de $L$** si y sólo si $\lor$ y $\land$ están **cerrados** bajo $A$. Esto es, cuando
> 
> - $\forall a,b \in A \, (a \lor b \in A)$ y
> - $\forall a,b \in A \, (a \land b \in A)$.

Es decir, una subretícula es un subconjunto de una retícula donde el supremo y el ínfimo se "quedan dentro" de ella.
