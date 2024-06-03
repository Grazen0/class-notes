## Unión ($\cup$)

Se le llama **unión de $A$ y $B$** ($A \cup B$) al conjunto conformado por todos los elementos que pertenecen a por lo menos uno de esos conjuntos.

$$
A \cup B := \left\{ x \lmid x \in A \lor x \in B \right\}
$$

![[Union de conjuntos.excalidraw|width:75%]]

```ad-proposition
title: Propiedades.

1. $A \subseteq (A \cup B)$
2. $(A \cap B) \subseteq A$
3. Si $A \subseteq B$ entonces $A \cap B = A$.
4. Si $A \subseteq B$ entonces $A \cup B = B$.

```

## Intersección ($\cap$)

Se le llama **intersección de $A$ y $B$** ($A \cap B$) al conjunto conformado por todos los elementos que pertenecen a ambos conjuntos.

$$
A \cap B := \left\{ x \lmid x \in A \land x \in B \right\}
$$

![[Intersección de conjuntos.excalidraw|width:75%]]

## Diferencia ($-$)

El conjunto $A - B$ está formado por todos los elementos de $A$ que no son elementos de $B$.

$$
A - B := \left\{ x \lmid x \in A \land x \notin B \right\}
$$

![[Diferencia de conjuntos.excalidraw|width:75%]]

## Complemento ($\overline{A}$)

Sea $A \subseteq U$ un conjunto, donde $U$ es el **conjunto universal**. El **complemento** de $A$ es el conjunto de todos los elementos que no pertenecen a $A$.

$$
\overline{A} := \left\{ x \in U \lmid x \notin A \right\}
$$

````ad-proposition
title: Propiedades.

- $\overline{A} = U - A$
- $\overline{\overline{A}} = A$ (doble negativo)
- $\overline{A \cup B} = \overline{A} \cap \overline{B}$ (Morgan #1)
- $\overline{A \cap B} = \overline{A} \cup \overline{B}$ (Morgan #2)
- Si $A \subseteq B$ entonces $\overline{B} \subseteq \overline{A}$ (contraposición)

```ad-proof
collapse: closed

Sea $x \in \overline{B}$. Supongamos que $x \notin A$.

$$
\overline{A} = \left\{ x \lmid x \in U \land x \notin A \right\}
$$

Entonces, $x \notin U \lor x \in A$. Sin embargo, $x \in B$ así que $x \in U$, así que necesariamente $x \in A$.

Además, como tenemos $A \subseteq B$, entonces $x \in B$. Esto contradice a $x \in \overline{B}$.
$$\qed$$

```

````

![[Complemento de un conjunto.excalidraw]]