```python
my_file = open('file.txt', 'r')

lines = my_file.readlines()

line = my_file.readline()

while line != '':
	print(line)
	line = my_file.readline()

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
