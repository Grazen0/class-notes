Una manera eficiente de representar conjuntos de forma abstracta es mediante los **diagramas de Venn**:

![[Ejemplo Venn.excalidraw]]

```ad-note
title: Observaciones

1. Si $A \subseteq B$, entonces la región de $A$ debe estar dibujada dentro de la región de $B$.
2. Si los conjuntos no tienen muchos elementos, es ideal representar dichos elementos por medio de **puntos**.
3. Los diagramas de Venn son válidos para hasta **3 conjuntos**.
4. Si un conjunto no tiene elementos, es mejor no ubicarlo.

```


```ad-proposition
title: Propiedad.

Sea $x$ un objeto cualquiera, entonces existen $2^{n}$ posibles casos de pertenencia de $x$ en una cantidad $n$ conjuntos.

```

## Unión de dos conjuntos

Se le llama **unión de $A$ y $B$** ($A \sor B$) al conjunto conformado por todos los elementos que pertenecen a por lo menos uno de esos conjuntos.

$$
A \sor B = \left\{ x \lmid x \in A \lor x \in B \right\}
$$

![[Union de conjuntos.excalidraw|width:80%]]

```ad-proposition
title: Propiedades.

1. $A \subseteq (A \sor B)$
2. $(A \sand B) \subseteq A$
3. Si $A \subseteq B$ entonces $A \sand B = A$.
4. Si $A \subseteq B$ entonces $A \sor B = B$.

```

## Intersección

Se le llama **intersección de $A$ y $B$** ($A \sand B$) al conjunto conformado por todos los elementos que pertenecen a ambos conjuntos.

![[Intersección de conjuntos.excalidraw|width:80%]]
