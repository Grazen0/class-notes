---
id: 1737147300-dependencia-lineal-de-funciones
aliases:
  - Independencia lineal de funciones
tags: []
createdAt: 2025-01-17 15:55
---

# Independencia lineal de funciones

Ya que forman un espacio vectorial, la independencia lineal en las funciones reales se define precisamente de la misma forma que para los [[1724469686-vectores|vectores]].

> [!DEFINITION]
> Un conjunto de funciones reales $\{ f_1, f_2, \ldots, f_n \}$ es **linealmente independiente** cuando, de existir constantes $c_1, c_2, \ldots, c_n$ tales que
>
> $$
> c_1 \, f_1(x) + c_2 \, f_2(x) + \ldots + c_n \, f_n(x) = 0
> ,$$
> 
> entonces $c_1 = c_2 = \ldots = c_n = 0$.
>
> De lo contrario, se dice que el conjunto de funciones es **linealmente dependiente**.

En otras palabras, un conjunto de funciones es linealmente independientes cuando la única combinación lineal de ellas que produzca la función nula ($0$) es con coeficientes nulos.

Si existe algún conjunto de coeficientes tales que alguno de ellos sea diferente de $0$ y que produzcan la combinación lineal que produce $0$, entonces las funciones son linealmente dependientes.

Puede parecer un problema difícil comprobar la independencia lineal de un conjunto de funciones arbitrarias. Sin embargo, existe una forma sistemática de comprobarlo.

## Wronskiano

> [!DEFINITION]
> Definimos el **Wronskiano** de una tupla de funciones $(f_1, f_2, \ldots, f_n)$ como
>
> $$
> W(f_1, f_2, \ldots, f_n) := \begin{vmatrix}
> f_1 & f_2 & \cdots & f_n \\
> f_1' & f_2' & \cdots & f_n' \\
> \vdots & \vdots & \ddots & \vdots \\
> f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)} \\
> \end{vmatrix}
> .$$

El Wronskiano nos permitirá determinar la independencia lineal de cualquier conjunto de funciones mediante el siguiente teorema.

> [!THEOREM]
> Sean $f_1, f_2, \ldots, f_n$ funciones reales. Bajo ciertas restricciones (las cuales parecen no ser muy relevantes para este curso), se cumple que $f_1, f_2, \ldots, f_n$ son linealmente independientes si y sólo si
> 
> $$
> W(f_1, f_2, \ldots, f_n) = 0
> .$$

Por lo tanto, el Wronskiano será nuestro criterio fundamental para determinar si un conjunto de soluciones de una ED lineal forman un conjunto fundamental.
