```ad-definition

Sean los grafos simples $G_1 = (V_1, E_1)$ y $G_2 = (V_2, E_2)$. Entonces, $G_1$ y $G_2$ son **isomorfos** si y sólo si existe una función biyectiva $f: V_1 \to V_2$ tal que

$$
ab \in E_1 \iff f(a)f(b) \in E_2
$$

para todo $a,b \in V_1$.

```

De forma intuitiva, dos grafos son isomorfos si y sólo si uno puede obtenerse a partir del otro re-etiquetando sus vértices.

Como dos grafos isomorfos son, en esencia, idénticos, se cumplen ciertas propiedades:

- Dos grafos isomorfos deben tener el **mismo números de vértices**.
- Todas las propiedades que derivan de la adyacencia deben ser **idénticas** para ambos.

Demostrar un isomorfismo se puede realizar **moviendo los vértices** para obtener un grafo igual en ambos casos.

De no ser ello aparentemente posible, algunas ideas para refutar un isomorfismo son:

1. Buscar algún grado de algún vértices presente en un grafo y no en el otro.
2. Encontrar alguna propiedad con respecto a la adyacencia que se cumpla en un grafo y no en el otro.
