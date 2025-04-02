---
id: 1742934275-modelo-entidad-relacion
aliases:
  - Modelo entidad-relación
  - Modelo ER
  - Diagrama ML
tags:
  - cs/bd-1
createdAt: 2025-03-25 15:24
---

# Modelo entidad-relación

Una base de datos se modela mediante dos conceptos fundamentales: **entidades** y **relaciones** entre ellas.

## Entidades

Una **entidad** representa algún tipo de *objeto* relevante al modelo.

Una entidad posee **atributos**: propiedades que describen a una entidad particular.

![[entidades.png]]

Entre estos atributos debe existir *al menos* **un atributo llave**: un atributo que debe ser **único** entre las instancias de la entidad. (e.g.: DNI, código de alumno, etc).

## Relaciones

Una **relación** define alguna forma en la que dos o más entidades

### Tipos por cantidad

En general, una relación puede relacionar a cualquier cantidad (al menos 2) de entidades.

Cabe destacar que **una relación puede tener sus propios atributos**. Por ejemplo, unas entidades "Alumno" y "Curso" pueden tener una relación de "matrícula", la cual podría tener una fecha de creación.

#### Relaciones binarias

Relaciona a exactamente dos entidades.

![[relaciones-binarias.png]]

Esta relación se lee de la siguiente manera:

> Varias compañías fabrican varios productos.

De forma más precisa:

> Una compañía fabrica varios productos, y un producto es fabricado por varias compañías.

#### Relaciones ternarias

Relaciona a tres entidades.

![relaciones-ternarias.png](attachments/relaciones-ternarias.png)

Esta relación se lee de la siguiente manera:

> Varias persona arrienda varias películas en varios locales de videos.

Sin embargo, las relaciones ternarias tienen la desventaja de que **se pierde información**.

Resulta que una relación ternaria se puede traducir a relaciones binarias. Por ejemplo, para el diagrama anterior:

![[relacion-ternaria-expandida.png]]

Podemos ver que, aunque la relación ternaria original era completamente *simétrica* sobre las entidades, esta versión descompuesta en relaciones binarias no tiene esa misma simetría. Es decir, esta "traducción" a relaciones binarias se presta a interpretaciones.

> [!TIP]
> Usualmente, prioriza modelar relaciones binarias; es más preciso. De todas maneras, las relaciones ternarias son útiles cuando no es necesario especificar tanta información.

##### Llaves

Si una relación ternaria recibe una flecha de una entidad, dicha entidad procede a ser **llave** de la relación.

![[relaciones-llaves.png]]

Por ejemplo, en este caso, "Persona" es llave de la relación "arriendo".

### Multiplicidades

Una relación puede (y debería) especificar las "cantidades" en las que se relacionan las entidades.

Una relación binaria puede ser de uno de los siguientes tipos:

- **Many to many**
  - Un "A" tiene varios "B".
  - Un "B" tiene varios "A".
- **Many to one**
  - Un "A" tiene un solo "B".
  - Un "B" tiene varios "A".
- **One to many**
  - Un "A" tiene varios "B".
  - Un "B" tiene un solo "A".
- **One to one**
  - Un "A" tiene un solo "B".
  - Un "B" tiene un solo "A".

Las multiplicidades de las relaciones se denotan en los diagramas ML de la siguiente manera:

![[multiplicidad-de-relaciones.png]]

> [!NOTE]- Cómo interpretar la notación
> Parece que la línea/flecha de un lado de la relación habla sobre el lado derecho del tipo, lo cual es raro.
>
> Sin embargo, se puede interpretar que una línea/flecha habla sobre **a dónde llega la relación en esa dirección**. Por ejemplo, una flecha a la izquierda indica que la relación, de ese lado, **"llega"** a **uno**.

### Participación total

## Entidades débiles
