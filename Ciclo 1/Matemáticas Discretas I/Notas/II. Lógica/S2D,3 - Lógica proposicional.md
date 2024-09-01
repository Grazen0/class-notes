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

### Negación - $\neg$

```ad-definition

La **negación** es un conector denotado por el símbolo $\neg$, cuyo valor de verdad se define de la siguiente manera:

$\neg p$ es verdadero cuando $p$ es falso, y falso cuando $p$ es verdadero.

| $p$ | $\neg p$ |
| :-: | :------: |
|  V  |    F     |
|  F  |    V     |

```

La negación tiene la **primera precedencia** de todos los conectores lógicos.

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

#### Lenguaje coloquial

$p \land q$ es equivalente a:

- $p$ y $q$.
- $p$ pero $q$.
- $p$, además $q$.

**Ejemplo:** "Hoy llegué temprano a la universidad, pero ayer llegué tarde."

```ad-exercise
title: Ejercicios (conjunción)
collapse: closed

Determine el valor de verdad de las siguientes proposiciones:

1. "8 es un número impar y 6 es impar."

$$
\begin{align}
8\text{ es impar} \land 6\text{ es impar} &\equiv \F \land \F \\
&\equiv \F
\end{align}
$$

2. "16 es par, pero 51 es impar."

$$
\begin{align}
16\text{ es par} \land 51\text{ es impar} &\equiv \T \land \T \\
&= \T
\end{align}
$$

3. "$5 \leq 8$ y $8 \leq 7$."

$$
\begin{align}
5 \leq 8 \land 8 \leq 7 &\equiv \T \land \F \\
&= \F
\end{align}
$$

```

```ad-example
title: Ejemplo de dedución
collapse: closed

Si suponemos que $p \land (q \land r) \equiv \T$, entonces podemos deducir lo siguiente:

$$
\begin{align}
&&\underbrace{p}_{\T} \land \underbrace{(q \land r)}_{\T} &\equiv \T \\
\hline
\implies && \underbrace{q}_{\T} \land \underbrace{r}_{\T} &\equiv V \\
\hline
\implies && p \equiv q \equiv r &\equiv \T
\end{align}
$$

```

### Disyunción (débil) - $\lor$

```ad-definition

La **disyunción** es un conector denotado por el símbolo $\lor$, cuyo valor de verdad se define de la siguiente manera:

$p \lor q$ es falso cuando $p$ es falso y $q$ es falso, y es verdadero en cualquier otro caso.

| $p$ | $q$ | $p \lor q$ |
| :-: | :-: | :---------: |
|  V  |  V  |      V      |
|  V  |  F  |      V      |
|  F  |  V  |      V      |
|  F  |  F  |      F      |

```

#### Lenguaje coloquial

$p \lor q$ es equivalente a:

- $p$ o $q$.

```ad-exercise
title: Ejercicios (disyunción débil)
collapse: closed

Determine el valor de verdad de las siguientes proposiciones:

 1. "8 es un número impar o 6 es impar."

$$
\begin{align}
8\text{ es impar} \lor 6\text{ es impar} &\equiv \F \lor \F \\
&\equiv \F
\end{align}
$$

2. "16 es par o 51 es impar"

$$
\begin{align}
16\text{ es par} \lor 51\text{ es impar} &\equiv \T \lor \T \\
&\equiv \T
\end{align}
$$

3. "$5 \leq 8$ o $8 \leq 7$."
$$
\begin{align}
5 \leq 8 \lor 8 \leq 7 &\equiv \T \lor \F \\
&\equiv \T
\end{align}
$$

4. "Lima es la capital de Perú o Santiago es la capital de Chile."

$$
\begin{align}
\text{Lima es la capital del Perú} \lor \text{Santiago es la capital de Chile} &\equiv \T \lor \T \\
&\equiv \T
\end{align}
$$

```

### Condicional - $\to$

```ad-definition

La **condicional** ("implicación") es un conector denotado por el símbolo $\to$, cuyo valor de verdad se define de la siguiente manera:

$p \to q$ es falso cuando $p$ es verdadero y $q$ es falso. Es verdadero en cualquier otro caso.

| $p$ | $q$ | $p \to q$ |
| :-: | :-: | :-------: |
|  V  |  V  |     V     |
|  V  |  F  |     F     |
|  F  |  V  |     V     |
|  F  |  F  |     V     |

```

#### Lenguaje coloquial

$p \to q$ es equivalente a:

- Si $p$ entonces $q$.
- $p$ entonces $q$.
- $p$ implica $q$.
- $p$ solo si $q$.

"$p$ si $q$" es equivalente a $q \to p$.
"$p$ excepto si $q$" es equivalente a $\neg q \to p$.

```ad-exercise
title: Ejercicios (condicional)
collapse: closed

Determine el valor de verdad de las siguientes proposiciones:

1. Si $8$ es un número impar entonces $6$ es impar.

$$
\begin{align}
8\text{ es impar} \to 6\text{ es impar} &\equiv \F \to \F \\
&\equiv \T
\end{align}
$$

2. Si $5 > 4$ entonces $4 > 5$.

$$
\begin{align}
5 > 4 \to 4 > 5 &\equiv \T \to \F \\
&\equiv \F
\end{align}
$$

3. Si $5 \geq 8$ entonces $2023$ es par.

$$
\begin{align}
5 \geq 8 \to 2023\text{ es par} &\equiv \F \to \F \\
&\equiv \T
\end{align}
$$

4. Si Barranco es un distrito de Lima entonces UTEC está ubicada en Barranco.

$$
\begin{align}
&\equiv \T \to \T \\
&\equiv \T
\end{align}
$$

5. $0^{2} = 0$ implica que $2^{2} = 2$

$$
\begin{align}
0^{2} = 0 \to 2^{2} = 2 &\equiv \T \to \F \\
&\equiv \F
\end{align}
$$

```

### Bicondicional - $\leftrightarrow$

```ad-definition

La **bicondicional** ("equivalencia") es un conector, denotado por el símbolo $\leftrightarrow$, cuyo valor de verdad se define de la siguiente manera:

$p \leftrightarrow q$ es verdadero solamente cuando $p$ y $q$ tienen el mismo valor de verdad.

| $p$ | $q$ | $p \leftrightarrow q$ |
| :-: | :-: | :-------------------: |
|  V  |  V  |           V           |
|  V  |  F  |           F           |
|  F  |  V  |           F           |
|  F  |  F  |           V           |

```

#### Lenguaje coloquial

$p \leftrightarrow  q$ es equivalente a:

- $p$ si y sólo si $q$.
- $p$ siempre y cuando $q$.
- $p$ es equivalente a $q$.

```ad-exercise
title: Ejercicios (bicondicional)
collapse: closed

Determine el valor de verdad de las siguientes proposiciones:

1. $0 = 1$ si y sólo si $1 = 2$.

$$
\begin{align}
0 = 1 \leftrightarrow 1 = 2 &\equiv \F \leftrightarrow \F \\
&\equiv \T
\end{align}
$$

2. Lima es la capital de Chile si y sólo si Perú es un país de sudamérica.
$$
\begin{align}
&\equiv \F \leftrightarrow \T \\
&\equiv \F
\end{align}
$$

3. $0^{2} = 0$ siempre y cuando $2^{2} = 2$.

$$
\begin{align}
0^{2} = 0 \leftrightarrow 2^{2} = 2 &\equiv \T \leftrightarrow \F \\
&\equiv \F
\end{align}
$$

4. Ayer llovió en Lima si y sólo si anteayer llovió en Lima.

$$
\begin{align}
&\equiv \F \leftrightarrow \F \\
&\equiv \T
\end{align}
$$

```

### Disyunción fuerte - $\lxor$

```ad-definition
title: Definición.

La **disyunción fuerte** ("exclusiva") es un conector, denotado por el símbolo $p \lxor q$, cuyo valor de verdad se define de la siguiente forma:

$p \lxor q$ es verdadero solamente cuando uno de ellos es verdadero y el otro es falso. Equivalentemente, es verdadero cuando $p$ y $q$ tienen distinto valor de verdad.

| $p$ | $q$ | $p \lxor q$ |
| :-: | :-: | :---------: |
|  V  |  V  |      F      |
|  V  |  F  |      V      |
|  F  |  V  |      V      |
|  F  |  F  |      F      |

```

#### Lenguaje coloquial

$p \lxor q$ se es equivalente a:

- O $p$ o $q$.
- O bien $p$ o bien $q$.

```ad-proposition
title: Observación.

La bicondicional tiene el valor de verdad opuesto de la disyunción fuerte.

$$
p \lxor q \equiv \neg(p \leftrightarrow q)
$$

```

## Tablas de verdad

Si tenemos $n$ proposiciones $p_{1},p_{2},\ldots,p_{n}$, entonces una tabla de verdad consistirá de $2{^n}$ columnas.

```ad-example
title: Ejemplo

Elaborar la tabla de verdad de $p \rightarrow (q \land r)$.

| $p$ | $q$ | $r$ | $q \land r$ | $p \to (q \land r)$ |
| :-: | :-: | :-: | :---------: | :-----------------: |
|  V  |  V  |  V  |      V      |          **V**          |
|  V  |  V  |  F  |      F      |          **F**          |
|  V  |  F  |  V  |      F      |          **F**          |
|  V  |  F  |  F  |      F      |          **F**          |
|  F  |  V  |  V  |      V      |          **V**          |
|  F  |  V  |  F  |      F      |          **V**          |
|  F  |  F  |  V  |      F      |          **V**          |
|  F  |  F  |  F  |      F      |          **V**          |

```

```ad-exercise
title: Ejercicios (tablas de verdad)
collapse: closed

1. Comprobar mediante el uso de tablas que $p \to q$ y $\neg p \lor q$ tienen el mismo valor de verdad.

| $p$ | $q$ | $\neg p$ | **$p \to q$** | **$\neg p \lor q$** |
| :-: | :-: | :------: | :-----------: | :-----------------: |
|  V  |  V  |    F     |     **V**     |        **V**        |
|  V  |  F  |    F     |     **F**     |        **F**        |
|  F  |  V  |    V     |     **V**     |        **V**        |
|  F  |  F  |    V     |     **V**     |        **V**        |

2. Elaborar la tabla de $p \to (p \to q)$.

| $p$ | $q$ | $p \to q$ | $p \to (p \to q)$ |
| --- | --- | --------- | ----------------- |
| V   | V   | V         | **V**             |
| V   | F   | F         | **F**             |
| F   | V   | V         | **V**             |
| F   | F   | V         | **V**             |

3. Comprobar mediante el uso de tablas que $p \leftrightarrow q$ y $(p \to q) \land (q \to p)$ tienen el mismo valor de verdad.

| $p$ | $q$ | $p \to q$ | $q \to p$ | $(p \to q) \land (q \to p)$ | $p \leftrightarrow q$ |
| :-: | :-: | :-------: | :-------: | :-------------------------: | :-------------------: |
|  V  |  V  |     V     |     V     |            **V**            |         **V**         |
|  V  |  F  |     F     |     V     |            **F**            |         **F**         |
|  F  |  V  |     V     |     F     |            **F**            |         **F**         |
|  F  |  F  |     V     |     V     |            **V**            |         **V**         |

4. Elabore las tablas de $p \to (q \to r)$ y $(p \to q) \to r$.

| $p$ | $q$ | $r$ | $q \to r$ | $p \to (q \to r)$ |
| :-: | :-: | :-: | :-------: | :---------------: |
|  V  |  V  |  V  |     V     |       **V**       |
|  V  |  V  |  F  |     F     |       **F**       |
|  V  |  F  |  V  |     V     |       **V**       |
|  V  |  F  |  F  |     V     |       **V**       |
|  F  |  V  |  V  |     V     |       **V**       |
|  F  |  V  |  F  |     F     |       **V**       |
|  F  |  F  |  V  |     V     |       **V**       |
|  F  |  F  |  F  |     V     |       **V**       |

| $p$ | $q$ | $r$ | $p \to q$ | $(p \to q) \to r$ |
| :-: | :-: | :-: | :-------: | :---------------: |
|  V  |  V  |  V  |     V     |       **V**       |
|  V  |  V  |  F  |     V     |       **F**       |
|  V  |  F  |  V  |     F     |       **V**       |
|  V  |  F  |  F  |     F     |       **V**       |
|  F  |  V  |  V  |     V     |       **V**       |
|  F  |  V  |  F  |     V     |       **F**       |
|  F  |  F  |  V  |     V     |       **V**       |
|  F  |  F  |  F  |     V     |       **F**       |

```
