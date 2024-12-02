```ad-definition
title: Definición (camino euleriano).

Un **camino euleriano** en un grafo $G$ es una trayectoria que pasa por cada arista de $G$ exactamente una vez.

```

El nombre de "camino euleriano" viene del problema de los puentes de Königsberg (probablemente).

```ad-definition
title: Definición (ciclo euleriano).

Un **ciclo euleriano** en un grafo $G$ es una trayectoria que empieza y termina en el mismo vértice (posiblemente repitiendo vértices en el camino) y pasa por cada arista de $G$ exactamente una vez.

```

Nótese que un ciclo euleriano, al contrario que los ciclos normales, sí puede repetir vértices.

```ad-theorem

Un grafo $G$ tiene algún camino euleriano si y sólo si

1. $G$ es conexo, y
2. todos los vértices de $G$ tienen grado par a excepción de dos.

```

Los dos vértices de $G$ de grado impar resultan ser el inicio y el final del camino euleriano.

```ad-theorem

Un grafo $G$ tiene ciclo euleriano si y sólo si

1. $G$ es conexo, y
2. todos los vértices de $G$ tienen grado par.

```
