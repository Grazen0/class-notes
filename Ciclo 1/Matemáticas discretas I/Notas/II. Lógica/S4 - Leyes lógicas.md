```ad-exercise
title: Ejercicios
collapse: closed

1. Simplificar $p \to (p \land q)$.

$$
\begin{align}
p \to (p \land q) &\equiv \neg p \lor (p \land q) \\
&\equiv \underbrace{(\neg p \lor p)}_{\T}  \land (\neg p \land q) \\
&\equiv \T \land (\neg p \land q) \\
&\equiv \neg p \land q \\
&\equiv p \to q
\end{align}
$$

2. Simplificar $p \to (\neg p \land q)$.

$$
\begin{align}
p \to (\neg p \land q) &\equiv \neg p \lor (\neg p \land q) \\
&\equiv \neg p && \text{(absorción)}
\end{align}
$$

```

## Definiciones previas

```ad-definition
title: Definición (tautología).

Una **tautología** es una proposición lógica que siempre toma el valor de verdadero (V). Se denota usualmente como $\top$.

Por ejemplo, $p \lor \neg p \equiv \top$.

```

```ad-definition
title: Definición (contradicción).

Una **contradicción** es una proposición lógica que siempre toma el valor de falso (F).

Por ejemplo, $p \land \neg p \equiv \F$.

```

```ad-definition
title: Definición (equivalencia).

Decimos que dos proposiciones lógicas $p$ y $q$ son equivalentes si $p \leftrightarrow q$ es una tautología. Es decir, si y sólo si tienen el mismo valor de verdad.

Por ejemplo: $p \land p \equiv p$.

```

## Leyes lógicas

$$
\begin{array}{lll}
	\text{Conmutativas:}
		& p \land q \equiv q \land p
		& p \lor q \equiv q \lor p \\
	\text{Asociativas:}
		& (p \land q) \land r \equiv p \land (q \land r)
		& (p \lor q) \lor r \equiv p \lor (q \lor r) \\
	\text{Distributivas:}
		& p \land (q \lor r) \equiv (p \land q) \lor (p \land r)
		& p \lor (q \land r) \equiv (p \lor q) \land (p \lor r) \\
	\text{Identidad:}
		& p \land \T \equiv p
		& p \lor \F \equiv p \\
	\text{Negación:}
		& p \lor \neg p \equiv \T
		& p \land \neg p \equiv \F \\
	\text{Doble negativo:}
		& \neg(\neg p) \equiv p
		& \\
	\text{Idempotencia:}
		& p \land p \equiv p
		& p \lor p \equiv p \\
	\text{Dominación:}
		& p \lor \T \equiv \T
		& p \land \F \equiv \F \\
	\text{De Morgan:}
		& \neg(p \land q) \equiv \neg p \lor \neg q
		& \neg(p \lor q) \equiv \neg p \land \neg q \\
	\text{Absorción:}
		& p \lor (p \land q) \equiv p
		& p \land (p \lor q) \equiv p \\
\end{array}
$$

```ad-proof
title: Demostración por división en casos
collapse: closed

Para demostrar $p \lor (p \land q) \equiv p$, dividimos en casos:

**Caso 1:** $p \equiv \T$

Lado izquierdo: $\T \lor (\T \land q) \equiv \T$

**Caso 2:** $p \equiv \F$

Lado izquierdo: $\F \lor (\F \land q) \equiv \F$

Por lo tanto, en cada caso, $p \lor (p \land q)$ tiene el mismo valor de verdad que $p$.
$$\qed$$

```

### Leyes de condicional

```ad-important
title: Contraposición

La ley de **contraposición** o "contra-recíproca" es particularmente importante para las demostraciones:

$$
p \to q \equiv \neg q \to \neg p
$$

```

Otra ley es:

$$
\begin{align}
p \to q &\equiv \neg p \lor q \\
\end{align}
$$

Y la **distributividad**:

$$
\begin{align}
(p \to q) \land (p \to r) &\equiv p \to (q \land r) \\
(p \to q) \lor (p \to r) &\equiv p \to (q \lor r)
\end{align}
$$

### Leyes de bicondicional

$$
\begin{align}
&p \leftrightarrow q \equiv (p \to q) \land (q \to p) \\
&p \leftrightarrow q \equiv \neg q \leftrightarrow \neg q \\
&\neg(p \leftrightarrow q) \equiv p \leftrightarrow \neg q \equiv \neg p \leftrightarrow q
\end{align}
$$
