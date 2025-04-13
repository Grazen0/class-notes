---
id: 1744053860-modelo-relacional
aliases:
  - Modelo relacional
  - MR
tags:
  - cs/bd-1
createdAt: 2025-04-07 14:24
---

# Modelo relacional

El **modelo relacional** es una forma de modelar bases de datos. Utiliza _tablas_ para representar los datos.

Algunos conceptos preliminares son los siguientes:

- **Relación:** Es una _tabla_ dentro del modelo.
- **Atributo:** Es una _columna_ de una tabla. Corresponde a una "propiedad" que cada tupla de la tabla contiene.
- **Tupla:** Es una _fila_ de una tabla. Corresponde a una "entrada", un "dato" particular en una tabla.

> [!DEFINITION] Definición (esquema)
> Un **esquema** es un **conjunto de relaciones**.

Por ejemplo, el siguiente es un esquema:

```
Cervezas(
  nombre: string,
  tipo: string,
  grados: float,
  ciudad-origen: string
)
Vinos(
  nombre: string,
  tipo: string,
  año: int,
  grados: float,
  ciudad-origen: string
)
En-Stock(
  nombre: string,
  cantidad: int,
  precio: int
)
```

> [!DEFINITION] Definición (instancia)
> Una **instancia** de un esquema es un **conjunto de tuplas** para cada relación de ese esquema.

Nótese que una instancia no necesariamente debe tener al menos una tupla para cada relación: puede no tener ninguna fila en alguna tabla.

## Restricciones

> [!DEFINITION] Definición (restricción)
> Una **restricción** (de integridad) es una restricción _formal_ que se le impone a un _esquema_, la cual todas sus instancias deben satisfacer.

### Llaves

Las **llaves** son una restricción: en una relación, las llaves de cada tupla deben ser únicas entre sí. Ahora, definiremos más claramente la terminología sobre llaves.

> [!DEFINITION] Definición (súper llave)
> Una **súper llave** es un _conjunto de atributos_ de una relación que, en una instancia particular, identifican por completo a cada tupla de la relación.

> [!DEFINITION] Definición (llave candidata)
> Una **llave candidata** es un _conjunto de atributos_ de una relación que, en una instancia particular, son _súper llave_ y no poseen un subconjunto propio que también sea súper llave.

Es decir, una llave candidata es un conjunto mínimo de atributos que tendrían la posibilidad de convertirse en llave.

En cualquier relación, se debe escoger una llave candidata como **llave primaria** de la relación.
