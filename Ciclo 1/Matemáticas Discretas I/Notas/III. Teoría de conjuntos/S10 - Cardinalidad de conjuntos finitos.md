Si $A$ es un conjunto finito, definimos $|A|$ como la **cantidad de elementos de $A$**, también llamado **carinal** de $A$.

Nótese que $|A|$ siempre será un entero no negativo.

Una forma usual de denotar que el conjunto $|A|$ es finito es con $|A| < \infty$. 

````ad-proposition
title: Propiedades

Sean $A$ y $B$ conjuntos finitos.

1. Si $A \subseteq B$ entonces $|A| < |B|$.
2. Si $A \subseteq B$ y $A \neq B$ entonces $|A| < |B|$.
3. Si $A$ y $B$ son disjuntos entonces $|A \cup B| = |A| + |B|$.
4. En general, $|A \cup B| = |A| + |B| - |A \cap B|$ (principio de inclusión-exclusión).

```ad-proof
collapse: closed

Sean $A$ y $B$ conjuntos finitos. Entonces, como $A - B$ y $B$ son disjuntos, entonces:

$$
\begin{align}
A \cup B &= (A - B) \cup B && (\text{demostrar}) \\
|A \cup B| &= |A - B| + |B| && (1)
\end{align}
$$

Ahora, $A - B$ y $A \cap B$ son disjuntos. Entonces:

$$
\begin{align}
A &= (A - B) \cup (A \cap B) \\
|A| &= |A - B| + |A \cap B| &&  (2)
\end{align}
$$

De $(1)$ y $(2)$ tenemos $|A \cup B| = |A| + |B| - |A \cap B|$.
$$\qed$$

```

````

