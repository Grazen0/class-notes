## ¿Por qué usar Python?

- Gran demanda
	- Ciencia de datos
	- Machine Learning
	- Desarrollo web
	- Automatización
	- Librerías y frameworks
- Gran comunidad
- Multipropósito
- Sencillez

## Recomendaciones para instalar PyCharm

PyCharm es una IDE creada por JetBrains, y será el editor de código oficial del curso.

![[pycharm.webp]]

## Crear un proyecto

PyCharm ofrece dos opciones para crear proyectos:

1. Ambiente virtual
2. Usando el intérprete instalado en la máquina. **(Recomendado para el curso)**

## Primeros pasos en Python

```python
print("Hola, mundo!")
```

### Entrada y salida de datos

```python
name = input("Ingresa tu nombre: ") # Entrada
print("Tu nombre es", name)         # Salida
```

### Caracteres especiales

Para usar comillas y caracteres especiales dentro de una cadena de texto o insertar fin de línea o tabulaciones, se los precede con `\`.

```python
print("Tengo algunas \"comillas\" aquí")
print("Esto es una línea\nY esto es otra línea")
print("Aquí\thay\tvarios\tespacios")
```

### Tipos de datos

- `int`: Números enteros
- `float`: Números de punto flotante
- `complex`: Números complejos
- `bool`: Valores booleanos
- `str`: Cadenas de texto

Para cada tipo de dato existe una función que convierte cualquier valor de otro tipo a su propio tipo. Esto se llama **type casting**.

```python
my_int   = int("3")  # 3
my_bool  = bool(1)   # True
my_float = float(20) # 20.0
```

### Operadores aritméticos

- `+`: Suma
- `-`: Resta
- `*`: Multiplicación
- `/`: División
- `//`: División entera
- `%`: Módulo (resto de la división)
- `**`: Potencia

#### Precedencia

Básicamente como toda la vida.

1. Potencia (`**`)
2. Multiplicación (`*`), división (`/`), división entera (`//`), módulo (`%`)
3. Suma (`+`), resta (`-`)
