**Clustering:** Agrupamiento de datos.

```ad-important
title: Importante

**¡Clustering $\neq$ clasificación!** Son cosas diferentes.

```

## Introducción

Imaginemos que somos una aseguradora de carros, y queremos subir los precios sin que se vayan los clientes que en general tienen poca probabilidad tienen de chocar.

| Conductor | Horas por día | Velocidad promedio | Hard braking | Rapid acceleration | Hard cornering | CLUSTER |
| :-------: | :-----------: | :----------------: | :----------: | :----------------: | :------------: | :-----: |
|    001    |       8       |         70         |      V       |         V          |       V        |    1    |
|    002    |       1       |         40         |      F       |         V          |       F        |    0    |
|    003    |       9       |         60         |      V       |         F          |       V        |    1    |
|    004    |       2       |         30         |      F       |         F          |       F        |    0    |
|    005    |       7       |         40         |      F       |         V          |       F        |    0    |
|    006    |       4       |         80         |      V       |         F          |       F        |    1    |
|    007    |       3       |         40         |      F       |         F          |       F        |    0    |

Idea: Colocar las dimensiones de la tabla en una gráfica (con V = $1$ y F = $0$), donde se utilice la **distancia** del dato al origen como criterio de clasificación.

```ad-warning
title: Advertencia

¡Cuidado con las escalas en los gráficos!

```

### Formas de ubicar centroides

- Ubicar centroides "de mentira" en los extremos de la gráfica. Agrupar los datos según esos centroides, y promediar las coordenadas de los puntos en cada grupo para hallar los centroides reales.

## K-means y distancias euclidianas

### Distancia euclidiana

$$
D(P,Q) = \sqrt{(p_{1} - q_{1})^{2} + (p_{2} - q_{2})^{2} + \ldots + (p_{n} - q_{n})^{2}} = \sqrt{\sum_{i=0}^{n}{(p_{i}-q_{i})^{2}}}
$$

### K-means

"K-means" es una estrategia de agrupación de datos. Usa un algoritmo iterativo que ubica $k$ centroides en un gráfico de $n$ datos.

1. Ubicar centroides de inicio.
2. Mientras que los datos agrupados sigan cambiando:
	1. Agrupar cada dato al centroide más cercano.
	2. Cambiar la distancia de cada centroide al promedio de sus datos.
