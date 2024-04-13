## Variables

```ad-definition
title: Concepto

Una **variable** es un **contenedor de datos** dentro de la memoria que almacena algún valor. **Puede ser modificada** a lo largo de un programa.

```

## Expresiones

```ad-definition
title: Concepto

Una **expresión** es una combinación de valores, variables, operadores y llamadas a funciones.

```

```python
minutes = 645          # Una expresión literal
hours = minutes / 60   # Una expresión compuesta
print("Hours:", hours)
```

## Tipos de datos

- **Números enteros** (`int`): Valores numéricos enteros
- **Números de punto flotante** (`float`): Valores numéricos con parte decimal
- **Valores booleanos** (`bool`): Valores de verdad (`True` o `False`)
- **Cadenas de caracteres** (`str`): Piezas de texto

## Operadores aritméticos

- Adición: `+`
- Sustracción: `-`
- Multiplicación: `*`
- División: `/`
- Módulo: `%`
- Exponenciación: `**`
- División entera: `//`

### Precedencia

Para operadores del mismo nivel, se procede de **izquierda a derecha**.

1. Potencia (`**`)
2. Negación (`-`)
3. Multiplicación, división, división entera y módulo (`*`, `/`, `//` y `%`)
4. Suma y resta (`+` y `-`)

Se puede usar paréntesis (`()`) para agrupar y cambiar la precedencia.

### Ejercicios

1. Hacer un programa que tome grados fahrenheit de entrada y los convierta a grados celsius.

```python
fahren = float(input("Ingrese los grados en Fahrenheit (°F): "))

celsius = (fahren - 32) * 5/9
print(f"{fahren}°F = {round(celsius, 2)}°C")
```

2. Desarrolle un programa que permita hallar la suma de los dígitos de un número de 3 dígitos.

```python
num = int(input("Ingrese un número de 3 cifras: "))

if num < 0 or num > 999:
	print("El número ingresado es inválido.")
	exit()

d1 = num % 10
d2 = (num // 10) % 10
d3 = num // 100

digit_sum = d1 + d2 + d3
print("La suma de los dígitos es", digit_sum)
```

## Variables booleanas

Es una **variable binaria** que tiene dos posibles valores: **verdadero** o **falso**.

### Operadores de relación

- Menor que: `<`
- Menor o igual que: `<=`
- Mayor que: `>`
- Mayor o igual que: `>=`
- Igual a: `==`
- Distinto de: `!=`

### Operadores lógicos

- Conjunción: `and`
- Disyunción: `or`
- Negación: `not`

### Precedencia

Para operadores del mismo nivel, se procede de **izquierda a derecha**

1. Operadores de relación (`<`, `<=`, `>`, `>=`, `==`, `!=`)
2. Operadores lógicos (`and`, `or`, `not`)