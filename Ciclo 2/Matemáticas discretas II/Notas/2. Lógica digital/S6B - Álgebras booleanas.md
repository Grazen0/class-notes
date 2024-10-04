## Definición como retícula

```ad-definition
title: Definición (álgebra boolleana).

Una [[S5 - Retículas|retícula]] acotada $S$ es una **álgebra booleana** si y sólo si:

1. es **complementada**, y
2. es **distributiva**.

```

Un ejemplo de álgebra booleana es $B_n = (P(X), \subseteq)$ donde $X = \left\{ 1,2,\ldots,n \right\}$.

```ad-theorem

Todos los álgebras booleanas finitas son isomorfas a algún $B_n$.

```

Este teorema nos da **otro criterio para refutar distributividad**. Si hemos demostrado que una retícula $S$ es complementada, entonces

1. si $S$ no es isomorfa a $B_n$, entonces no es distributiva, y
2. si $|S| \neq 2^{k}$, entonces $S$ no es una álgebra booleana.

```ad-theorem

$B_n$ es isomorfo a $(D_n, \mid)$, donde $n$ sea producto de primos distintos.

```

## Definición como estructura algebraica

```ad-definition

Un álgebra booleana es un conjunto $B$ con dos operaciones $+$ y $\cdot$ que cumplen los siguientes axiomas:

1. **Conmutatividad:** $a + b = b + a$ y $a \cdot b = b \cdot a$.
2. **Asociatividad:** $(a + b) + c = a + (b + c)$ y $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3. **Distributividad:** $a + (b \cdot c) = (a + b) \cdot (a + c)$ y $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$.
4. **Elementos neutros:** existen $0,1 \in B$ tales que $a + 0 = a$ y $a \cdot 1 = a$.
5. **Complemento:** para todo elemento $a \in B$ existe un $\overline{a} \in B$ tal que $a + \overline{a} = 1$ y $a \cdot \overline{a} = 0$.

```

Bajo esta definición, se cumplen las siguientes propiedades:


1. $\overline{a}$ es único,
2. $0$ y $1$ son únicos,
3. $a + a = a \cdot a = a$,
4. $\overline{\overline{a}} = a$,
5. $a + 1 = 1$ y $a \cdot 0 = 0$, y
6. $\overline{a + b} = \overline{a} \cdot \overline{b}$ y $\overline{a \cdot b} = \overline{a} + \overline{b}$.
7. $a \cdot (a + b) = a + (a \cdot b) = a$
