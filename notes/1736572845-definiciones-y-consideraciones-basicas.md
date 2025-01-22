---
id: 1736572845-definiciones-y-consideraciones-basicas
aliases:
  - Definiciones y consideraciones básicas
tags:
  - mates/stats
createdAt: 2025-01-11 00:20
---

# Definiciones y consideraciones básicas


> [!CAUTION]
> En este curso, los cuantiles se deben calcular en Rcon el parámetro `type = 3`.


## Definiciones básicas

Sobre la recolección de datos:

- **Población:** Conjunto de todos los individuos o elementos de interés.
- **Muestra:** Subconjunto de la población. Se espera que sea *representativo*.
  - **Censo:** Una muestra correspondiente a *toda la población*. Usualmente es muy caro, en algún sentido, trabajar con un censo.
- **Unidad muestral:** Un elemento o individuo de la muestra.
  - **Observación:** La información correspondiente a una unidad muestral.

Sobre los datos en sí:

- **Tabla/matriz/dataframe de datos:** Tabla donde las unidades muestrales corresponden a las filas y las variables corresponden a las columnas.
- **Dato:** Medida u observación de interés.
- **Variable:** Característica de interés de un elemento.
  - **Numérica/cuantitativa:** El valor de la variable es un número.
    - **Continua:** Puede tomar cualquier valor en algún intervalo.
    - **Discreta:** Es un valor contable.
  - **Categórica/cualitativa:** El valor de la variable no es un número
    - **Ordinal:** Valores discretos con *orden claro*. (e.g., excelente, bueno, mediocre, malo)
    - **Nominal:** Valores discretos *sin orden claro*. (e.g., blanco, negro, rojo, ...)

### Prolijidad de datos

Se dice que un conjunto de datos es **prolijo** cuando sigue los siguientes principios:

1. Cada variable tiene su propia columna.
2. Cada observación ocupa una fila.
3. Cada valor debe tener una sola celda.

Por ejemplo, esto significa que una celda no puede contener más de un valor.

> [!NOTE] Nota
> La prolijidad de datos tiene ciertos parecidos con la **normalización de bases de datos**.

### Tipos de muestreo

- **No probabilístico:** De alguna forma u otra, no da la misma oportunidad a todos los individuos de la población de ser elegidos.
- **Probabilístico:** Todos los individuos de la población tienen la misma probabilidad de ser elegidos.

El muestreo probabilístico suele ser más **riguroso**, ya que evita sesgos.

## Valores matemáticos relevantes

### Frecuencias

#### Frecuencia absoluta simple

Denotada por $f_i$, es la **cantidad de apariciones** de un dato.

#### Frecuencia relativa

Denotada por $h_i$, es igual a

$$
h_i = \frac{f_i}{n}
.$$

Es decir, es el porcentaje que el dato ocupa del total.

#### En estudios estadísticos

Además de las frecuencias anteriores, se consideran otras frecuencias por separado cuando se habla de estudios y experimentos estadísticos.

- **Frecuencia observada:** Es la frecuencia empírica, observada en el estudio.
- **Frecuencia esperada:** Es una frecuencia estimada, usualmente calculada teóricamente.

### Medidas de tendencia central

#### Media aritmética

También llamada simplemente "media", es el **centro de masa** de los datos:

$$
\bar{x} = \frac{1}{n} \sum x_i
.$$

#### Moda

Es el (o los) elemento de **mayor frecuencia**.

### Medidas de dispersión

Estas medidas nos permiten analizar qué tan dispersos son los datos. Es decir, qué tanta **separación** existe entre ellos, en cierto sentido.

#### Rango

Es la diferencia entre el dato máximo y el dato mínimo:

$$
R = \max(x_1, x_2, \ldots, x_n) - \min(x_1, x_2, \ldots, x_n)
.$$

#### Rango intercuartílico

Es la diferencia entre el tercer cuartil y el primer cuartil (es decir, entre el $75\%$ y el $25\%$ de los datos):

$$
\text{IQR} = Q_3 - Q_1
$$

#### Varianza

Para una **población** entera, se calcula mediante

$$
\sigma^2 = \frac{1}{n} \sum (x_i - \bar{x})^2
.$$

Para una **muestra** de una población, se divide entre $n - 1$ en lugar de $n - $:

$$
\sigma^2 = \frac{1}{n - 1} \sum (x_i - \bar{x})^2
.$$

#### Desviación estándar

Es la raíz cuadrada de la varianza. Es decir:

$$
\sigma = \sqrt{\sigma^2}
$$

(por más redundante que la notación haga ver esta fórmula).

#### Coeficiente de variación

$$
\text{CV} = \frac{\sigma}{\bar{x}} \cdot 100\%
$$

Al menos en este curso, consideramos el siguiente criterio:

- Si $\text{CV} < 30\%$, entonces el conjunto de datos es **homogéneo** (dispersión baja).
- Si $30\% \leq \text{CV} < 60\%$, entonces el conjunto de datos tienen una **variabilidad regular** (dispersión regular).
- Si $\text{CV} \geq 60\%$, entonces el conjunto de datos es **heterogéneo** (dispersión alta).

### Medidas de posición (cuantiles)

El cuantil $k$ (con $0 < k < 1$) es el dato tal que una porción $k$ de los datos son menores o iguales a él.

El cuantil $50\%$ se denomina **mediana**, y los cuantiles $25\%$, $50\%$ y $75\%$ se denominan **cuartiles**.
