---
id: 1737268601-ecuaciones-diferenciales-lineales
aliases:
  - Ecuaciones diferenciales lineales
  - EDs lineales
tags:
  - mates/edo
createdAt: 2025-01-19 01:36
---

# Ecuaciones diferenciales lineales

> [!DEFINITION]
> Se dice que una ecuación diferencial de $n$-ésimo orden es **lineal** si y sólo si se puede escribir en la forma
> 
> $$
> a_n(x) \frac{d^ny}{dx^n} + a_{n-1}(x) \frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1(x) \frac{dy}{dx} + a_0(x)y = g(x)
> .$$

Las EDs lineales se dividen en dos: [[1737414399-ecuaciones-diferenciales-lineales-homogeneas|homogéneas]] y no homogéneas.

## Conjuntos fundamentales de soluciones

Resulta que, si uno tiene algún conjunto de soluciones de una ED, cualquier combinación lineal de ellas también será una solución

> [!THEOREM] Teorema (principio de superposición)
> Sean $y_1, y_2, \ldots, y_k$ soluciones de una ED lineal de orden $n$. Entonces, cualquier combinación lineal
>
> $$
> y = c_1 y_1 + c_2 y_2 + \ldots + c_k y_k
> $$
>
> también es una solución de la ED.

Ya que las soluciones de EDs lineales se pueden sumar para formar nuevas soluciones, es natural preguntarse cómo podemos formar la solución "más general" de todas, en cierto sentido.

> [!DEFINITION] Definición (conjunto fundamental de soluciones)
> Un conjunto de soluciones $y_1, y_2, \ldots, y_n$ de una ED lineal de orden $n$ es un **conjunto fundamental de soluciones** de dicha ED cuando $y_1, y_2, \ldots, y_n$ son [[1737147300-independencia-lineal-de-funciones|linealmente independientes]].

Este teorema, en conjunto con el criterio de la [[1737147300-independencia-lineal-de-funciones|independencia lineal de funciones]], nos da las herramientas necesarias para conseguir la solución general de una ED lineal.

Naturalmente, la importancia de un conjunto fundamental de soluciones es que, dado dicho conjunto, podemos obtener la **solución general** de la ED como la combinación lineal

$$
y = c_1 y_1 + c_2 y_2 + \ldots + c_n y_n
,$$

donde los coeficientes $c_1, c_2, \ldots, c_n$ pueden tomar cualquier valor (y usualmente se determinan con los valores iniciales de $y$, si existiesen).
