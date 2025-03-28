---
id: 1733174798-grafos-eulerianos-y-hamiltonianos
aliases:
  - Grafos eulerianos y hamiltonianos
tags:
  - mates/discretas-2/grafos
createdAt: 2024-12-02 16:26
---

# Grafos eulerianos y hamiltonianos

## Grafos eulerianos

> [!DEFINITION] Definición (camino euleriano)
> Un **camino euleriano** en un grafo $G$ es una trayectoria que pasa por cada arista de $G$ exactamente una vez.

El nombre de "camino euleriano" viene del problema de los puentes de Königsberg (probablemente).

> [!DEFINITION] Definición (ciclo euleriano)
> Un **ciclo euleriano** en un grafo $G$ es una trayectoria que empieza y termina en el mismo vértice (posiblemente repitiendo vértices en el camino) y pasa por cada arista de $G$ exactamente una vez.

Nótese que un ciclo euleriano, al contrario que los ciclos normales, sí puede repetir vértices.

> [!THEOREM]
> Un grafo $G$ tiene algún **camino euleriano** si y sólo si
> 
> 1. $G$ es conexo, y
> 2. todos los vértices de $G$ tienen grado par a excepción de dos.
> 
> Los dos vértices de $G$ de grado impar resultan ser el inicio y el final del camino euleriano.
> 
> Por otro lado, $G$ tiene **ciclo euleriano** si y sólo si
> 
> 1. $G$ es conexo, y
> 2. todos los vértices de $G$ tienen grado par.

Este teorema también es válido para **multigrafos**.

## Grafos hamiltonianos

Los caminos y ciclos hamiltonianos son análogos a los eulerianos, pero en lugar de pasar por todas las aristas, pasan por todos los **vértices**.

> [!DEFINITION] Definición (camino hamiltoniano)
> Un **camino hamiltoniano** en un grafo $G$ es una trayectoria que pasa por cada vértice de $G$ exactamente una vez.

El nombre de "camino euleriano" viene del problema de los puentes de Königsberg (probablemente).

> [!DEFINITION] Definición (ciclo hamiltoniano)
> Un **ciclo hamiltoniano** en un grafo $G$ es una trayectoria que empieza y termina en el mismo vértice y pasa por cada vértice de $G$ exactamente una vez.

Contrario a los caminos y ciclos eulerianos, un grafo puede tener camino y ciclo hamiltoniano a la vez.

Sin embargo, los caminos y ciclos hamiltonianos **no tienen teorema de caracterización**. Lo único que tenemos son condicionales, no bicondicionales.

> [!THEOREM]
> Si un grafo es bipartito y tiene un ciclo hamiltoniano, entonces su cantidad de vértices es par.
