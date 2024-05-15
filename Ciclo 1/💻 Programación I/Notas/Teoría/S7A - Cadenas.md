Una cadena (`str`) es una **secuencia de caracteres**, y se almacena secuencialmente en la memoria.

|  0  |  1  |  2  |  3  |
| :-: | :-: | :-: | :-: |
|  H  |  o  |  l  |  a  |
| -4  | -3  | -2  | -1  |

## Funciones para cadenas

- `len(str)`: Devuelve la longitud de la cadena.
- `*`: Repite una cadena.
- `in`: Devuelve si existe un carácter en una cadena.
- `str.capitalize()`: Capitaliza una cadena.
- `str.count(char)`: Cuenta la cantidad de un carácter en una cadena.
- `str.index(char)`: Devuelve el índice de un carácter en la cadena.
- `str.find(char)`: 
- `str.upper()`: Devuelve la cadena en mayúsculas.
- `str.lower()`: Devuelve la cadena en minúsculas.

```python
my_string = 'Hello!'

print(len(my_string))   # 6
print(my_string * 3)    # Hello!Hello!Hello!
print('e' in my_string) # True
print('z' in my_string) # False
```

## Cortes

### Sintaxis

```python
str[inicio:fin:paso]
```

Cualquiera de estos valores puede ser negativo.

**Valores por defecto:**
- `inicio`: 0
- `fin`: longitud de la cadena
- `paso`: 1

### Ejemplos de uso

```python
my_str = 'Hello, world!'

print(my_str[1:5])   # ello
print(my_str[3:8:2]) # l,wr
print(my_str[::-1])  # !dlrow ,olleH
```
