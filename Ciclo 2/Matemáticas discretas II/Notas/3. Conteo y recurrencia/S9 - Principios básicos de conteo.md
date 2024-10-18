```ad-proposition
title: Principio del producto.

Si una tarea tiene $t$ etapas donde la $i$-ésima etapa se puede realizar de $n_i$ maneras (y cada etapa es independiente del resto), entonces existen

$$
n_1 \cdot n_2 \cdot \ldots \cdot n_t
$$

maneras de desarrollar la tarea.

```

En general, este tema suele entenderse mejor con varios ejemplos de distintos tipos.

```ad-example
title: Ejemplo 1.
collapse: closed

Sean $A$ Y $B$ conjuntos finitos tales que $|A| = m$ y $|B| = n$.

Entonces, existen $n^m$ funciones $f: A \to B$.

```

```ad-proposition
title: Principio de la suma.

Si una tarea tiene $t$ opciones (**disjuntas**) de realizarse, y la $i$-ésima opción tiene $n_i$ formas de realizarla, entonces existen

$$
n_1 + n_2 + \ldots + n_t
$$

formas de desarrollar la tarea.

```

Nótese que por "opciones disjuntas" nos referimos a opciones **que no se pueden dar simultáneamente**.

## Principio de inclusión-exclusión

```ad-theorem
title: Teorema (PIE para 2 conjuntos).

Sean $A$ y $B$ conjuntos. Entonces,

$$
|A \cup B| = |A| + |B| - |A \cap B|
.$$

```

```ad-theorem
title: Teorema (PIE para 3 conjuntos).

Sean $A$, $B$ y $C$ conjuntos. Entonces,

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
.$$

```

El principio de inclusión-exclusión, en conteo, nos permite manejar situaciones de **disyunciones no disjuntas**. Por ejemplo, véase el siguiente ejercicio:

```ad-exercise
collapse: closed

¿Cuántas cadenas de 8 bits empiezan con $10$ o terminan con $011$?

Sea $X$ el conjunto de las cadenas de 8 bits que empiezan con $10$, y sea $Y$ el conjunto de las cadenas de 8 bits que terminan con $110$. Entonces,

$$
|X| = 2^6 \qquad |Y| = 2^5 \qquad |X \cap Y| = 2^3
.$$

Por lo tanto,

$$
\begin{align}
|X \cup Y| &= |X| + |Y| - |X \cap Y| \\
&= 2^6 + 2^5 - 2^3 = 88
.\end{align}
$$

```

En general, podríamos decir que el principio de inclusión-exclusión es una versión generalizada del principio de la suma.

## Conteo por complemento

```ad-theorem
title: Teorema (conteo por complemento).

Sea $U$ el conjunto universal y $A \subseteq U$ un conjunto. Entonces,

$$
|A| = |U| - |\overline{A}|
.$$

```

El conteo por complemento es útil para situaciones donde es más fácil contar lo que está fuera del conjunto que lo que está dentro.

```ad-exercise
title: Ejercicio 1.
collapse: closed

¿Cuántos subconjuntos de $A = \left\{ 1,2,3,4,5,6,7 \right\}$ tienen por lo menos un elemento impar?

**Resolución:** Por el contrario, $A$ tiene $2^3$ subconjuntos que no tienen ningún número impar. Como $A$ tiene $2^7$ subconjuntos en total, entonces tiene $2^7 - 2^3$ subconjuntos con al menos un elemento impar.

```

```ad-exercise
title: Ejercicio 2.
collapse: closed

¿Cuántos números naturales de $4$ dígitos cumplen que al multiplicar sus dígitos se obtiene un número par?


**Resolución:** Esta proposición es equivalente a

> ¿Cuántos números naturales de $4$ dígitos tienen al menos un dígito par? 

Entonces, la negación de esta proposición sería la cantidad de números naturales de $4$ dígitos solamente de dígitos impares.

Existen $5^4$ números de $4$ dígitos solamente impares. Además, existen $9000$ números de $4$ dígitos en total.

Por lo tanto, existen $9000 - 5^4 = 8375$ números de $4$ dígitos tales que al menos uno de sus dígitos es par.

```
