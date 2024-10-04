## Retícula como orden

```ad-definition

Un CPO $(A, \preceq)$ es una **retícula** si y sólo si todo par de elementos de $A$ tiene [[S4B - Ínfimos y supremos|supremo e ínfimo]]. Esto es:

$$
\forall a,b \in A \, (\exists \operatorname{sup}\left\{ a,b \right\} \in A \land \exists \operatorname{inf}\left\{ a,b \right\} \in A)
$$

```

Algunos ejemplos de retículas son $(\N, \leq)$, $(\N, \mid)$ y $(\mathscr{P}(A), \subseteq)$, donde $A$ es algún conjunto.

En una retícula, se cumple lo siguiente:

1. $\operatorname{inf}\left\{ a,b \right\} \preceq a,b \preceq \operatorname{sup}\left\{ a,b \right\}$.
3. Si $a \preceq c$ y $b \preceq c$, entonces $\operatorname{sup}\left\{ a,b \right\} \preceq c$.
3. $a \preceq b \iff \operatorname{inf}\left\{ a,b \right\} = a \iff \operatorname{sup}\left\{ a,b \right\} = b$.

```ad-proposition
title: Observación.

Todo conjunto totalmente ordenado es una retícula.

```

### Verificando retículas como orden

Debido a la propiedad 3, para verificar si un CPO es una retícula basta **determinar los ínfimos y supremos de elementos no relacionados** (no comparables).

```ad-example
title: Ejemplo.
collapse: closed

Sea el siguiente CPO:

![[ejemplo de reticula.excalidraw|width:40%]]

Este CPO es una retícula, ya que:

- $\operatorname{sup}\left\{ b,c \right\} = d$
- $\operatorname{inf}\left\{ b,c \right\} = a$
- $\operatorname{sup}\left\{ e,c \right\} = f$
- $\operatorname{inf}\left\{ e,c \right\} = a$
- $\operatorname{sup}\left\{ e,d \right\} = f$
- $\operatorname{inf}\left\{ e,d \right\} = b$

```

## Retícula como estructura algebraica

Una definición equivalente para las retículas es la siguiente:

```ad-definition

Una retícula es una terna $(A, \lor, \land)$ donde $A$ es un conjunto y $\lor$, $\land$ son operaciones definidas en $A$ que cumplen los siguientes axiomas:

1. **Idempotencia:** $a \lor a = a \land a = a$.
2. **Conmutatividad:** $a \lor b = b \lor a$, $a \land b = b \land a$.
3. **Asociatividad:** $(a \lor b) \lor c = a \lor (b \lor c)$, $(a \land b) \land c = a \land (b \land c)$
4. **Absorción:** $a \lor (a \land b) = a \land (a \lor b) = a$

```

Resulta que, si uno define

$$
\begin{align}
a \land b &= \operatorname{inf}\left\{ a,b \right\} \\
a \lor b &= \operatorname{sup}\left\{ a,b \right\}
,\end{align}
$$

entonces (se puede demostrar) que se cumplen las propiedades de idempotencia, conmutatividad, asociatividad y absorción, así conectando ambas definiciones.

## Tipos de retículas

```ad-definition
title: Definición (retícula acotada).

Una retícula es **acotada** si tiene un mínimo y un máximo. 

```

Cuando una retícula es acotada, se denota al elemento mínimo con $0$ y al elemento máximo con $1$.

```ad-definition
title: Definición (retículo complementario).

Sea $(A, \lor, \land)$ una retícula acotada. Para todo $a \in A$, decimos que $a'$ es **elemento complementario** de $a$ si y sólo si

$$
a \lor a' = 1 \qquad a \land a' = 0
.$$

Una retícula es **complementaria** si es acotada y todos sus elementos tienen al menos un complementario.

```

Nótese que un elemento puede tener más de un elemento complementario.

```ad-proposition
title: Observación.

Para toda retícula acotada se cumple que $0$ y $1$ son complementarios.

```

### Distributividad

```ad-definition

Una retícula es **distributiva** si y sólo si para todo $a,b,c \in A$ se cumple que

$$
\begin{align}
a \lor (b \land c) &= (a \lor b) \land (a \lor c) \\
a \land (b \lor c) &= (a \land b) \lor (a \land c)
.\end{align}
$$

```

Es decir, una retícula es distributiva cuando sus operadores $\lor$, $\land$ se distribuyen.

#### Cómo demostrar (o refutar) distributividad

- Ignoramos:
	- Al **mínimo** y al **máximo**.
	- Ternas $a,b,c$ donde $a \preceq b \preceq c$ (en cualquier orden).
- Distributividad con $a,b,c$ implica distributividad con $a,c,b$.
- Si la retícula es acotada y algún elemento tiene **más de un complemento**, entonces **no  es distributiva**.
- Si la retícula es [[S4A - Isomorfismos|isomorfa]] a algún CPO $(D_n, \mid)$ (tienen el mismo diagrama de Hasse), entonces automáticamente **es distributiva.**

### Teoremas

````ad-theorem

Toda retícula finita es acotada.

```ad-proof
collapse: closed

Sea la retícula $(A, \lor, \land)$ tal que $A = \left\{ x_1, x_2, \ldots, x_k \right\}$. Entonces, consideremos la expresión

$$
m = x_1 \land x_2 \land \ldots \land x_k
.$$

Se cumple que $m \in A$, y, como $\land$ es asociativo y conmutativo, entonces $m$ está relacionado con todos los elementos de $A$. Esto es: $m$ es el mínimo de $A$.

Una demostración análoga se puede realizar para el máximo.
$$\qed$$

```

````

```ad-theorem

En una retícula **acotada** y **distributiva**, el complementario de un elemento, de existir, es único.

```

El teorema 2 nos provee de un criterio para demostrar que una retícula **no sea distributiva**:

```ad-proposition
title: Corolario.

Si una retícula acotada tiene un elemento con **más de un complementario**, entonces **no es distributiva**.

```

```ad-theorem

Sea $D_n$ el conjunto de los divisores positivos de $n$.

Entonces, $(D_n, \mid)$ es distributiva para todo entero positivo $n$.

```

Este teorema es fuerte, porque nos permite demostrar distributividad en **retículas isomorfas** a alguna retícula $(D_n, \mid)$.
