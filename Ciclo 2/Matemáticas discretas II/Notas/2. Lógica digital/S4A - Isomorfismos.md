```ad-definition
title: Definición (encaje).

Sean $(X, \preceq)$ y $(X', \preceq')$ dos [[S3 - Relaciones de orden|CPO]]s. Una función $f : X \to X'$ es llamada un **encaje** de $(X, \preceq)$ en $(X', \preceq')$ si y sólo si

1. $f$ es inyectiva, y
2. $f(x) \preceq' f(y) \iff x \preceq y$.


```

Es decir, un encaje $f$ "mapea" un CPO a otro CPO (quizá parcialmente) **preservando el orden**.

```ad-definition
title: Definición (isomorfismo).

Un **isomorfismo** es un encaje $f$ que a la vez es *sobreyectivo*.

Adicionalmente, decimos que $(X, \preceq)$ y $(X', \preceq')$ son **isomorfos** si y sólo si existe un isomorfismo en ellos.

```

Es decir, un isomorfismo es un encaje que **cubre todo el segundo CPO**.

```ad-proposition
title: Observación.

Dos CPOs son isomorfos cuando se pueden representar con **el mismo diagrama de Hasse**.

```
