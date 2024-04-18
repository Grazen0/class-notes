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

## Ejemplo práctico

## Interpretación clusters

## Normalización