La **inferencia** es un proceso mediante el cual se obtiene una o más conclusiones a partir de cierto número de proposiciones, llamadas **premisas**.

$$
\begin{align}
& \begin{rcases}
p_{1} \\
p_{2} \\
\vdots \\
p_{n} \\
\end{rcases} \text{premisas} \\
\hline
\therefore\ & q \quad \text{conclusión}
\end{align}
$$

```ad-definition
title: Definición (validez de un argumento).

Un argumento **es válido** si y sólo si

$$
p_{1} \land p_{2} \land \ldots \land p_{n} \to q
$$

es una tautología.

En caso contrario, el argumento **no es válido**.

```

De manera equivalente, para que sea un argumento válido, tenemos que demostrar que $q$ es verdadero suponiendo que $p_{1}, p_{2}, \ldots p_{n}$ son verdaderos.

## Ejemplos

1. Si Juan hace la tarea, obtiene un premio. Juan hace la tarea. Por lo tanto, Juan obtiene el premio.

$$
\begin{align}
& p \to q \\
& p \\
\hline
\therefore\ & q
\end{align}
$$

donde $p : \text{Juan hace la tarea}$ y $q : \text{Juan obtiene el premio}$.

**Demostración:**

I) Suponemos que $p \to q$ es verdadero y $p$ es verdadero. Por lo tanto, $q$ es verdadero.

II) Demostrando que $((p \to q) \land q) \to q$ es una tautología:

Por tabla de verdad:

| $p$ | $q$ | $((p \to q)$ | $\land\ p)$ | $\to q)$ |
| :-: | :-: | :----------: | :---------: | :------: |
|  V  |  V  |      V       |      V      |  **V**   |
|  V  |  F  |      F       |      F      |  **V**   |
|  F  |  V  |      V       |      F      |  **V**   |
|  F  |  F  |      V       |      F      |  **V**   |

Por leyes lógicas:

$$
\begin{align}
((p \to q) \land p) \to q &\equiv \neg((\neg p \lor q) \land p) \lor q \\
&\equiv \neg(\underbrace{(p \land \neg p)}_{\F} \lor (p \land q)) \lor q \\
&\equiv \neg(p \land q) \lor q \\
&\equiv \neg p \lor \underbrace{\neg q \lor q}_{\T} \\
&\equiv \top
\end{align}
$$

2. Véase el siguiente argumento

$$
\begin{align}
& p \to q \\
& q \\
\hline
\therefore\ & p
\end{align}
$$

Este argumento es **inválido**.

**Demostración (invalidez):**

I) si $p$ es falso y $q$ es verdadero, se cumple tanto $p \to q$ como $q$ (las premisas), pero $p$ (la conclusión) es falso.

$$
\begin{align}
& \T \\
& \T \\
\hline
\therefore\ & \F
\end{align}
$$

II) Demostrar que $((p \to q) \land q) \to p$ no es una tautología.

| $p$ | $q$ | $((p \to q)$ | $\land\ q)$ | $\to p)$ |
| :-: | :-: | :----------: | :---------: | :------: |
|  V  |  V  |      V       |      V      |    V     |
|  V  |  F  |      F       |      F      |    V     |
|  F  |  V  |      V       |      V      |  **F**   |
|  F  |  F  |      V       |      F      |    V     |

3. Véase el siguiente argumento:

$$
\begin{align}
& \text{En Lima nieva todos los martes} \\
& \text{Mañana es martes} \\
\hline
\therefore\ & \text{Mañana nieva en Lima}
\end{align}
$$

Este argumento es **válido**.

4. Véase lo siguiente:

$$
\begin{align}
& p \to r \\
& \neg q \to p \\
& \neg r \\
\hline
\therefore\ & q
\end{align}
$$

**Demostración:**

$$
\begin{align}
(1) \quad & p \to r & : \T \\
(2) \quad & \neg q \to p & : \T \\
(3) \quad & \neg r & : \T \\
\hline
\therefore\ & q
\end{align}
$$
De $(3)$:

$$
\begin{align}
r : \F \quad (4) \\
\end{align}
$$
De $(1)$ y $(4)$:

$$
p : \F \quad (5)
$$

De $(2)$ y $(5)$:

$$
\neg q : \F,\quad q : \T
$$
$$\qed$$

## Reglas de inferencia

### Modus ponens

$$
\begin{align}
& p \\
& p \to q \\
\hline
\therefore\ q
\end{align}
$$

**Ejemplo:**

$$
\begin{align}
& a \to b \\
& (a \to b) \to (\neg d \land c) \\
\hline
\therefore\ & \neg d \land c
\end{align}
$$

### Ley de silogismo

$$
\begin{align}
& p \to q \\
& q \to r \\
\hline
\therefore\ & p \to r
\end{align}
$$

```ad-proof
collapse: closed

Suponemos:

$$
\begin{align}
(1) \quad & p \to q & : \T \\
(2) \quad & q \to r & : \T
\end{align}
$$

**Caso 1:** $p$ es falso.

Entonces, $p \to r$ (la conclusión) es verdadero.

**Caso 2:** $p$ es verdadero.

Por $(1)$:

$$
q : \T \quad (3)
$$

Por $(2)$ y $(3)$:

$$
r : \T \quad (4)
$$

Y como $p$ es verdadero y $(4)$, entonces $p \to r$ (la conclusión) es verdadero.
```

### Modus tollens

$$
\begin{align}
& p \to q \\
& \neg q \\
\hline
\therefore\ & \neg p
\end{align}
$$

### Simplificación conjuntiva

$$
\begin{align}
& p \land q \\
\hline
\therefore\ & p
\end{align}
$$

$$
\begin{align}
& p \land q \\
\hline
\therefore\ & q
\end{align}
$$

### Amplificación disyuntiva

$$
\begin{align}
& p \\
\hline
\therefore\ & p \lor q
\end{align}
$$

donde $q$ es una proposición cualquiera.

### Regla de conjunción

$$
\begin{align}
& p \\
& q \\
\hline
\therefore\ & p \land q
\end{align}
$$

### Silogismo disyuntivo

$$
\begin{align}
& p \lor q \\
& \neg p \\
\hline
\therefore\ & q
\end{align}
$$

### Prueba condicional

$$
\begin{align}
& p \land q \\
& p \to (q \to r) \\
\hline
\therefore\ & r
\end{align}
$$

```ad-proof
collapse: closed

$$
\begin{align}
& p \land q & (1) \\
& p \to (q \to r) & (2)
\end{align}
$$

De $(1)$:

$$
\begin{align}
p &\quad (3) \\
q &\quad (4)
\end{align}
$$

De $(3)$ y $(2)$:

$$
q \to r \quad (5)
$$

De $(4)$ y $(5)$:

$$
r
$$

```

### Prueba por casos

$$
\begin{align}
& p \to r \\
& q \to r \\
\hline
\therefore\ & (p \lor q) \to r
\end{align}
$$

### Dilema constructivo

$$
\begin{align}
& p \to q \\
& r \to s \\
& p \lor r \\
\hline
\therefore\ & q \lor s
\end{align}
$$

```ad-proof
collapse: closed

Por contradicción:

$$
\begin{align}
& p \to q & (1) \\
& q \to s & (2) \\
& p \lor r & (3) \\
\hline
& \neg(q \lor s) & (4)
\end{align}
$$

De $(4)$:

$$
\neg q \land \neg s
$$

entonces

$$
\begin{align}
& \neg q & (5) \\
& \neg s & (6)
\end{align}
$$

(El resto es trivial)

```
