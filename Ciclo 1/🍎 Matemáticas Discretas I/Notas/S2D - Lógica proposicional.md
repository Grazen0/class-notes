Lets go

## Proposiciones lógicas

```ad-definition

Una **proposición lógica** es una afirmación declarativa que tiene un **valor de verdad**. ("V" para verdadero y "F" para falso)

```

**Ejemplos:**

- $2 \geq 3$
- $5 \geq 8$
- Tengo un billete de S/100 en mi billetera.
- En este salón hay 25 personas.
- Lima es la capital de Perú.

```ad-failure
title: No son proposiciones lógicas:

- "$x > 2$" - El valor de $x$ no está definido.
- "¿Qué hora es?" - Pregunta, no declara nada.
- "Abre la puerta" - Ordena, no declara nada.

```

## Conectores lógicos

Sirven para enlazar o conectar proposiciones lógicas entre sí para obtener **proposiciones compuestas**.

```ad-definition

Un **conector lógico** es una relación entre dos proposiciones que produce un **valor de verdad**.

```

Dado un conector lógico $\operatorname{\#}$, decimos que $p\operatorname{\#}q$ es la **proposición compuesta** en la que las proposiciones $p$ y $q$ están conectadas por medio del conector $\operatorname{\#}$.

```ad-important
title: Importante

El valor de verdad de $p \operatorname{\#} q$ depende **únicamente** de $p$ y $q$.

```

**Ejemplos:**

- La capital de Perú es Lima **y** la capital de Chile es Arica.
- 91 es un número primo **o** es un número compuesto.
- Raúl nació en Lima; Pedro, en Cajamarca.

### Conjunción - $\land$

```ad-definition

La **conjunción** es un conector denotado por el símbolo $\land$, cuyo valor de verdad se define de la siguiente manera:

$p \land q$ es verdadero cuando $p$ es verdadero y $q$ es verdadero, y es falso en cualquier otro caso.

| $p$ | $q$ | $p \land q$ |
| :-: | :-: | :---------: |
|  V  |  V  |      V      |
|  V  |  F  |      F      |
|  F  |  V  |      F      |
|  F  |  F  |      F      |

```

La idea de conjunción es la misma que el uso de la palabra **"y"** en el lenguaje usual. También puede ser aplicable para **"pero"**, **"además"**, etc.

**Ejemplo:** "Hoy llegué temprano a la universidad, pero ayer llegué tarde."

```ad-exercise
title: Ejercicios (conjunción)
collapse: closed

Determine el valor de verdad de las siguientes proposiciones:

1. "8 es un número impar y 6 es impar."

$$
\begin{align}
8\text{ es impar} \land 6\text{ es impar} &\equiv \False \land \False \\
&\equiv \False
\end{align}
$$

2. "16 es par, pero 51 es impar."

$$
\begin{align}
16\text{ es par} \land 51\text{ es impar} &\equiv \True \land \True \\
&= \True
\end{align}
$$

3. "$5 \leq 8$ y $8 \leq 7$."

$$
\begin{align}
5 \leq 8 \land 8 \leq 7 &\equiv \True \land \False \\
&= \False
\end{align}
$$

```

```ad-example
title: Ejemplo de dedución
collapse: closed

Si suponemos que $p \land (q \land r) \equiv \True$, entonces podemos deducir lo siguiente:

$$
\begin{align}
&&\underbrace{p}_{\True} \land \underbrace{(q \land r)}_{\True} &\equiv \True \\
\hline
\implies && \underbrace{q}_{\True} \land \underbrace{r}_{\True} &\equiv V \\
\hline
\implies && p \equiv q \equiv r &\equiv \True
\end{align}
$$

```

### Disyunción (débil) - $\lor$

```ad-definition

La **desyunción** es un conector denotado por el símbolo $\lor$, cuyo valor de verdad se define de la siguiente manera:

$p \lor q$ es falso cuando $p$ es falso y $q$ es falso, y es verdadero en cualquier otro caso.

| $p$ | $q$ | $p \lor q$ |
| :-: | :-: | :---------: |
|  V  |  V  |      V      |
|  V  |  F  |      V      |
|  F  |  V  |      V      |
|  F  |  F  |      F      |

```

En el lenguaje usual, la idea de disyunción **no siempre coincide con el uso de la palabra "o"**, ya que esta palabra se puede usar para disyunción tanto débil como exclusiva.

```ad-important
title: Sin embargo...

En este curso, la palabra "o" se referirá a la **disyunción débil**.

```

```ad-exercise
title: Ejercicios (disyunción débil)
collapse: closed

Determine el valor de verdad de las siguientes proposiciones:

 1. "8 es un número impar o 6 es impar."

$$
\begin{align}
8\text{ es impar} \lor 6\text{ es impar} &\equiv \False \lor \False \\
&\equiv \False
\end{align}
$$

2. "16 es par o 51 es impar"

$$
\begin{align}
16\text{ es par} \lor 51\text{ es impar} &\equiv \True \lor \True \\
&\equiv \True
\end{align}
$$

3. "$5 \leq 8$ o $8 \leq 7$."
$$
\begin{align}
5 \leq 8 \lor 8 \leq 7 &\equiv \True \lor \False \\
&\equiv \True
\end{align}
$$

4. "Lima es la capital de Perú o Santiago es la capital de Chile."

$$
\begin{align}
\text{Lima es la capital del Perú} \lor \text{Santiago es la capital de Chile} &\equiv \True \lor \True \\
&\equiv \True
\end{align}
$$

```
