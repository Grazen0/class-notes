```ad-definition

Un CPO $(A, \preceq)$ es una **retícula** si y sólo si todo par de elementos de $A$ tiene supremo e ínfimo. Esto es:

$$
\forall a,b \in A \, (\exists i,j \in A \, (i = \operatorname{sup}({a,b}) \land j = \operatorname{inf}({a,b})))
$$

```

En una retícula, se cumple lo siguiente:

1. $\operatorname{inf}(\left\{ a,b \right\}) \preceq a,b$.
2. $a,b \preceq \operatorname{sup}(\left\{ a,b \right\})$.
3. Si $a \preceq b$ y $b \preceq c$, entonces $\operatorname{sup}(\left\{ a,b \right\}) \preceq c$.
4. $a \preceq b$ si y sólo si $\operatorname{sup}(\left\{ a,b \right\}) = b$ y $\operatorname{\inf}(\left\{ a,b \right\}) = a$.
