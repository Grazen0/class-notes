---
id: 1738091297-probabilidades
aliases:
  - Probabilidades
tags:
  - mates/estadistica
createdAt: 2025-01-28 14:08
---

# Probabilidades

> [!DEFINITION] Definición (Experimento aleatorio)
> Un **experimento aleatorio** es un experimento cuyo resultado *no está garantizado* aunque se tome todas las precauciones posibles.

La idea general de un experimento aleatorio es que *depende del azar* de una forma u otra.

Por ejemplo, lanzar una moneda y observar el resultado (cara o sello) es un experimento aleatorio.

> [!DEFINITION] Definición (espacio muestral)
> Es el conjunto de todos los resultados posibles de un experimento aleatorio.

Por ejemplo, podríamos tomar al conjunto $A = \{ 1,2,3,4,5,6 \}$ como el espacio muestral de los posibles resultados de lanzar un dado.

## Distribuciones de probabilidad

### Para variables discretas

- Binomial
- Binomial negativa
- Bernoulli
- Poisson

### Para variables continuas

- Normal
- Exponencial
- Uniforme

## Función de probabilidad

> [!DEFINITION] Definición (función de probabilidad)
> Una **función de probabilidad** $P$ asigna a cada elemento del conjunto de eventos relevantes (elementos de la $\sigma$-álgebra de eventos) un número real siguiendo los siguientes axiomas:
>
> 1. $0 \leq P(X) \leq 1$.
> 2. $P(U) = 1$.
> 3. La probabilidad de la unión infinita contable de eventos disjuntos es la suma de sus probabilidades.

> [!DEFINITION] Definición (probabilidad condicional)
> La probabilidad de que ocurra el evento $A$, dado que ocurrió el evento $B$ se denota por $P(A|B)$ es igual a
> 
> $$
> P(A|B) = \frac{P(A \cap B)}{P(B)}
> .$$

Naturalmente, la probabilidad condicional es útil para diversos casos.

> [!EXAMPLE]-
> Consideremos los siguientes eventos sobre los alumnos en la clase de estadística y sus probabilidades:
> 
> - Asisten a clases ($0.9$)
>   - Aprueban ($0.6$)
>   - Desaprueban ($0.4$)
> - No asisten a clases ($0.1$)
>   - Aprueban ($0.2$)
>   - Desaprueban ($0.8$)
> 
> Supongamos que quisiéramos calcular la probabilidad de que *un alumno haya asistido a clases, dado que aprobó el curso*. Esta probabilidad sería igual a
> 
> $$
> P(A|AP) = \frac{P(A \cap AP)}{P(AP)} = \frac{(0.9)(0.6)}{(0.9)(0.6) + (0.1)(0.2)} \approx 0.9643
> .$$

