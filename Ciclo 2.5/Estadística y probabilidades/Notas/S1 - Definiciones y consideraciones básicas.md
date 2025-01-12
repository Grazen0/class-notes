## Definiciones básicas

- **Dato:** Medida u observación de interés.
- **Unidad muestral:** Elemento o individuo de la muestra.
- **Variable:** Característica de interés de un elemento.
  - **Numérica/cuantitativa:** El valor de la variable es un número.
    - **Continua:** Puede tomar cualquier valor en algún intervalo.
    - **Discreta:** Es un valor contable.
  - **Categórica/cualitativa:** El valor de la variable no es un número
    - **Ordinal:** Valores discretos con *orden claro*. (i.e. excelente, bueno, mediocre, malo)
    - **Nominal:** Valores discretos *sin orden claro*. (i.e. blanco, negro, rojo, ...)
- **Tabla (o matriz) de datos:** Tabla donde las unidades muestrales corresponden a las filas y las variables corresponden a las columnas.
- **Población:** Conjunto de todos los individuos o elementos de interés.
- **Muestra:** Subconjunto de la población. Se espera que sea *representativo*.
- **Censo:** Una muestra correspondiente a *toda la población*. Usualmente es muy caro, en algún sentido, trabajar con un censo.

Cuando en un conjunto de datos existe una celda con más

### Tipos de muestreo

- **No probabilístico:**
- **Probabilístico:**

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

#### Frecuencia observada

#### Frecuencia esperada

### Medidas de tendencia central

#### Media aritmética

También llamada simplemente "media", es el **centro de masa** de los datos:

$$
\bar{x} = \frac{1}{n} \sum x_i
.$$

#### Cuantiles

El cuantil $k$ (con $0 < k < 1$) es el dato tal que una porción $k$ de los datos son menores o iguales a él.

El cuantil $50\%$ se denomina **mediana**, y los cuantiles $25\%$, $50\%$ y $75\%$ se denominan **cuartiles**.

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

- Si $\text{CV} \leq 30\%$, entonces el conjunto de datos es **homogéneo** (dispersión baja).
- Si $30\% < \text{CV} \leq 60\%$, entonces el conjunto de datos tienen una **variabilidad regular** (dispersión regular).
- Si $\text{CV} > 60\%$, entonces el conjunto de datos es **heterogéneo** (dispersión alta).
