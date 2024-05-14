Es la representación de expresiones lógicas empleando **solamente** la conjunción, disyunción y negación.

```ad-definition
title: Definición (literal).

Dada una proposición $p$, un **literal** es una expresión de la forma $p$ o $\neg p$.

```

## Forma normal conjuntiva

```ad-definition
title: Definición (FNC).

Una expresión lógica está en **forma normal conjuntiva** (FNC) cuando está expresada como la conjunción de expresiones en la forma $L_{1} \lor L_{2} \lor \dots \lor L_{k}$, donde $L_{1},L_{2},\dots,L_{k}$ son literales.

```

Básicamente, es una expresión en la forma:

$$
(L_{1} \lor L_{2} \lor \ldots \lor L_{k}) \land (M_{1} \lor M_{2} \lor \ldots \lor M_{l}) \land \dots
$$

**Ejemplos:**

- $(p \lor \neg q) \land (p \lor r \lor t)$
- $(p \lor q) \land (\neg r \lor t) \land (\neg r)$
- $(p \lor \neg r \lor s) \land (\neg p \lor t)$
- $p \land q$
- $p \land q \land (p \lor q \lor \neg t)$

`````ad-info
title: ¿Por qué usar FNC?

Tener la FNC de una expresión lógica es útil para hallar los casos donde dicha expresión **es falsa**.

```ad-example
title: Ejemplo de uso
collapse: closed

¿En qué casos $(\neg p \lor q \lor \neg r) \land (r \lor t) \land (p \lor q)$ es falsa?

**Caso 1:** $\neg p \lor q \lor \neg r \equiv \F$

$$
p \equiv \T, \quad q \equiv \F, \quad r \equiv \T
$$

**Caso 2:** $r \lor t \equiv \F$

$$
r \equiv \F, \quad t \equiv \F
$$

**Caso 3:** $p \lor q \equiv \F$

$$
p \equiv \F, \quad q \equiv F
$$

Entonces, la expresión es falsa en estos casos:

| $p$ | $q$ | $r$ | $t$ |
| :-: | :-: | :-: | :-: |
|  V  |  F  |  V  |  -  |
|  -  |  -  |  F  |  F  |
|  F  |  F  |  -  |  -  |

```

`````
## Forma normal disyuntiva

```ad-definition
title: Definición (FND).

Una expresión lógica está en **forma normal disyuntiva** (FND) cuando está expresada como una disyunción de expresiones de la forma $L_{1} \land L_{2} \land \dots \land L_{k}$, donde $L_{1},L_{2},\dots,L_{k}$ son literales.

```

Y parecido a lo anterior, es una expresión en la forma:

$$
(L_{1} \land L_{2} \land \dots \land L_{k}) \lor (M_{1} \land M_{2} \land \dots \land M_{l}) \lor \dots
$$

**Ejemplos:**

- $(p \land \neg q) \lor (r \land s \land \neg t)$
- $p \lor (q \land \neg r)$
- $\neg p \land q \land \neg r$
- $p \lor q \lor \neg r \lor (p \land \neg q)$

`````ad-info
title: ¿Por qué usar FND?

Tener la FND de una expresión lógica es útil para hallar los casos donde dicha expresión **es verdadera**.

```ad-example
title: Ejemplo de uso
collapse: closed

¿En qué casos $(p \land \neg q) \lor (r \land s \land \neg t)$ es falsa?

**Caso 1:** $p \land \neg q \equiv \T$.

$$
p \equiv \T, \quad q \equiv \F
$$

**Caso 2:** $r \land s \land \neg t \equiv \T$

$$
r \equiv \T, \quad s \equiv \T, \quad t \equiv \F
$$

Entonces, la expresión es verdadera en estos casos:

| $p$ | $q$ | $r$ | $t$ | $t$ |
| :-: | :-: | :-: | :-: | :-: |
|  V  |  F  |  -  |  -  |  -  |
|  -  |  -  |  V  |  V  |  F  |

```


`````
