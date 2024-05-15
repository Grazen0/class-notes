Una base de datos (BD) es una **colección** de datos **estructurados** y **digitales**, organizados para **facilitar la búsqueda** de información de forma eficiente.

Dentro de las bases de datos existen los **índices**: una estructura de datos que permite ubicar un objeto dentro de una BD.

| Nombre (LLAVE PRIMARIA) | Apellido (LLAVE SECUNDARIA) | Edad |
| ----------------------- | --------------------------- | ---- |
| Adrián                  | Castillo                    | 17   |
| José                    | Grayson                     | 17   |
| Mauricio                | Galindo                     | 17   |

```ad-example
title: Ejemplo

Por ejemplo, una base de datos puede **ordenar** los elementos de una tabla por su **llave primaria**, y así poder usar búsqueda binaria para leer datos de forma eficiente.

```

## ¿Por qué necesitamos las bases de datos?

Las BD surgen de la necesidad de **buscar**, **organizar** y **procesar** la información.

```ad-note
title: Nota

Históricamente, se solía tener problemas con la información masiva antes de las computadoras.

```

### Datos históricos

- (1980) EEUU usó la **máquina de Hollerith** para tabular un censo nacional.
- (1970) Edgar Frank Codd definió el **modelo relacional** de las BD.

## Sistemas de base de datos (DBMS)

Son sistemas de software **generales** par **manejar** bases de datos.

Facilitan:

- **Representar** datos
- **Cargar** datos
- **Organizar** datos
- **Definir** datos
- **Actualizar** datos
- **Consultar** datos

Algunos ejemplos de DBMS son Oracle Database y ejemplos de DBMS son Oracle Database y PostgreSQL.

## Proceso para crear una BD relacional

1. Analizar el **mundo real**. (Objetivos, casos de uso, etc)
2. Desarrollar el **modelo conceptual**. (Diagrama representativo de la DB)
3. Desarrollar el **modelo físico** (La DB en sí, sus tablas y todo)
4. Redactar las **instrucciones / consultas SQL** (para el uso del usuario)

## Bases de datos no relacionales

### Llave-valor

Existe el **modelo de llave-valor**, donde la información se estructura de forma más simple:

| Llave |    Valor    |
| :---: | :---------: |
| María | 927 273 183 |
| Juan  | 982 223 768 |
| Pedro | 992 102 040 |

### Formatos de árbol

```json
{
	"people": [
		{
			"name": "José",
			"lastName": "Grayson",
			"age": 17
		},
		{
			"name": "Mauricio",
			"lastName": "Galindo",
			"age": 17
		},
		{
			"name": "Adrián",
			"lastName": "Alache",
			"age": 17
		}
	],
	"updatedAt": "15-05-2024@18:43"
}
```

Lenguajes como JSON, XML, etc. Un DBMS que usa este formato es **MongoDB**.

- Útil para búsquedas **hash**.

### Orientado a grafos

![[BD Grafo.excalidraw|width:80%]]

Representa sus datos como un grafo: nodos conectados por aristas (posiblemente direccionadas).

- Caso de uso importante: **redes sociales**
