```ad-definition
title: Definición (función proposicional).

Una **función proposicional** (proposición abierta) es una proposición que depende de uno o más parámetros para estar definida.

```

**Ejemplos:**

- $p(x)\!: x > 5$
	- $p(x)$ no es una proposición por sí misma.
	- $p(8)$ es una proposición verdadera.
	- $p(-5)$ es una proposición falsa.
- $q(x)\!: \text{\(x\) es un país de Sudamérica}$
	- $q(\text{Perú})$ es una proposición verdadera.
	- $q(\text{Colombia})$ es una proposición verdadera.
	- $q(\text{Francia})$ es una proposición falsa.
- $r(a)\!: \text{\(a\) es par y \(a \geq 6\)}$
	- $r(8)$ es una proposición verdadera.
	- $r(4)$ es una proposición falsa.

## Cuantificador universal ($\forall$)

```ad-definition

El **cuantificador universal**, denotado por $\forall$, se utiliza de la siguiente forma:

$$
\forall x \in A : P(x)
$$

Esta proposición:

- Es verdadera cuando $P(x)$ es verdadero para todos los elementos $x$ en el conjunto $A$.
- Es falsa cuando $P(x)$ es falso para algún elemento $x$ de $A$.

```

Esta proposición se lee: "Para todo elemento $x$ en $A$ se cumple $P(x)$".

**Ejemplos:**

- $\forall x \in \Zp : x^{2} < 8$ (F)
- $\forall x \in \R : x^{2} \geq -1$ (V)
- Sea $C$ el conjunto de personas de este salón: $\forall x \in C : \text{\(x\) no nació en Lima}$ (F)
- $\forall x \in \Z : (x > 11 \lor x < 7)$ (F)

## Cuantificador existencial ($\exists$)

```ad-definition

El **cuantificador existencial**, denotado por $\exists$, se utiliza de la siguiente forma:

$$
\exists x \in A : P(x)
$$

Esta proposición:

- Es **verdadera** cuando $P(x)$ es verdadero para al menos un $x$ en $A$.
- Es **falsa** cuando $P(x)$ es falso para todos los elementos $x$ de $A$.

```

Esta proposición se lee: "Existe un $x$ en $A$ tal que $P(x)$"

```ad-example
title: Ejemplos
collapse: closed

1. $\exists x \in \Zp : x^{2} < 8$.

Caso: $x = 1 \implies x^{2} = 1 < 8$

La proposición es **verdadera**.

2. $\exists x \in \R : x^{2} \geq -1$

Caso: $x = 0 \implies x^{2} = 0 \geq -1$

La proposición es **verdadera**.

3. $\exists x \in \Z : x > 11 \lor x < 7$

Caso: $x = 12 \implies x > 11$

La proposición es **verdadera**.

4. $\exists x \in \Z : x \geq 11 \land x \leq -2$

Sea $x \in \Z$, $x \geq 11$ y $x \leq -2$ implican que $x$ es positivo y negativo a la vez, contradiciendo a la ley de tricotomía. Por lo tanto, esta proposición es falsa para $x$.

La proposición es **falsa**.

```

## Negación de cuantificadores

Parecido a las leyes de Morgan, negar un cuantificador cambia de universal a existencial (o viceversa) y niega la proposición involucrada.

### Universal

$$
\neg\left( \forall x \in A : P(x) \right) \equiv \exists x \in A : \neg P(x)
$$

### Existencial

$$
\neg\left( \exists x \in A : P(x) \right) \equiv \forall x \in A : \neg P(x)
$$

```ad-example
title: Ejemplos
collapse: closed

1. $\neg(\forall x \in \Z : x^{2} \geq 0) \equiv \exists x \in \Z : x^{2} < 0$
2. $\neg(\forall x \in \R : x > 11\ \lor\ x < 12) \equiv \exists x \in \R : x \leq 11\ \land\ x \geq 12$
3. $\neg(\forall x \in \R : x \in \Q) \equiv \exists x \in \R : x \notin \Q$
4. $\neg\left( \exists x \in \left\{ 1, 2, 3, 4 \right\} : x > \frac{x}{2} \right) \equiv \forall x \in \left\{ 1,2,3,4 \right\} : x \leq \frac{x}{2}$
5. $\neg(\forall a \in \Z : \text{\(a\) es divisor de \(a + 3\)}) \equiv \exists a \in \Z : \text{\(a\) no es divisor de \(a + 3\)}$
6. $\neg(\exists y \in \left\{ 1,2,3,4,5,6 \right\} : y^{2} = 4 \implies y = 2) \equiv \forall y \in \left\{ 1,2,3,4,5,6 \right\} : y^{2} = 4\ \land\ y \neq 2$

```

## Cuantificadores anidados

```ad-note
title: Nota: Funciones proposicionales de 2 variables
collapse: closed

Una función proposicional de 2 variables tiene la forma $p(x, y)$. Algunos ejemplos son:

- $p(x,y) : x < y$
	- $p(0,4) : 0 < 4$ (**Verdadero**)
	- $p(-2,-2) : -2 < -2$ (**Falso**)
	- $p(-5,0) : -5 < 0$ (**Verdadero**)
- $q(x,y) : x + y \in \Z$
	- $q\left( \frac{1}{2}, \frac{1}{2} \right)$ (**Verdadero**)
	- $q(-2, \frac{1}{2})$ (**Falso**)
	- $q(2,38)$ (**Verdadero**)
- $r(x,y) : x^{2} = y$
	- $\forall x \in \Z : R(x,x)$ (**Falso**, $2^{2} \neq 2$)
	- $r(x,5) \iff x \in \left\{ -\sqrt{5}, \sqrt{5} \right\}$

```

Un cuantificador anidado es de la siguiente forma:

$$
\forall x \in A : (\forall y \in B : p(x,y))
$$