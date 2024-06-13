```python
my_file = open('file.txt', 'r')

# Iterar con for
for line in my_file:
	print(line, end='') # La línea incluye ya el \n

# Obtener una lista de todas las líneas
lines = my_file.readlines()

# Cerrar el archivo
my_file.close()
```

Un archivo se puede abrir de los siguientes **modos**:

- `r`: Read
- `w`: Escritura
- `a`: Agregar

Y se puede agregar algunos **parámetros** adicionales:

- `b`: Interactúa en binario
- `+`: Crea el archivo si no existe

Por ejemplo:

- `rb`: Leer en binario
- `a+`: Agregar contenido a un archivo (posiblemente no existente)
- `w`: Sobrescribir un archivo
