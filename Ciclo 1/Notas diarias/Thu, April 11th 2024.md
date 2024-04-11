## Introducción a Ciencias de la Computación

Estudiamos el **bytecode** de Python, analizando a qué se traducen las instrucciones en cada línea del siguiente código:

```python
a = 3
b = 1
c = a + 2
```

## Programación

1. Desarrolle un programa que permita leer el peso de una persona expresado en **gramos**, la altura expresada en **centímetros**, y que el programa calcule el índice de masa corporal ($\text{BMI} = \frac{\text{peso (g)}}{\text{altura (m)}}$).

```python
weight_gr = float(input("Ingrese su peso en gramos: "))  
height_cm = float(input("Ingrese su altura en centímetros: "))  
  
weight_kg = weight_gr / 1000  
height_m = height_cm / 100  
  
bmi = weight_kg / (height_m ** 2)  
print("Su BMI es igual a:", round(bmi, 3))
```

2. Escriba un programa que calcule la distancia entre dos puntos $(x_{1}, y_{2})$ y $(x_{2},y_{2})$.

```python
import math  
  
print("Punto 1")  
x1 = float(input("x1: "))  
y1 = float(input("y1: "))  
print()  
print("Punto 2")  
x2 = float(input("x2: "))  
y2 = float(input("y2: "))  
  
distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)  
print("La distancia entre los dos puntos es de", round(distance, 3))
```

3. Realice un programa que permita leer un número entero de 3 dígitos y el programa imprima el número al revés. Desarrolle el programa utilizando los operadores matemáticos y trabaje bajo el supuesto que el usuario siempre ingresará un número de 3 dígitos.

```python
num = int(input("Ingrese un número de tres dígitos: "))  
  
d0 = num % 10  
d1 = (num // 10) % 10  
d2 = num // 100  
  
num_reversed = 100 * d0 + 10 * d1 + d2  
print("El número al revés es", num_reversed)
```

4. Tai Loy, ha decidido empaquetar en sus bodegas colores, en cajas de 6, 12 y 24 unidades. De tal manera que reducirá sus costos al ser ellos mismos quienes realicen el empaque de colores. Se pide realizar un programa que capture como dato de entrada un número entero que representaría la cantidad de colores a ser empaquetados y el programa halle el menor número de cajas de colores de 24, 12, 6 e indicar el número de colores sobrantes.

```python
colors = int(input("Colores: "))  
  
boxes_24 = colors // 24  
rem_24 = colors % 24  
  
boxes_12 = rem_24 // 12  
rem_12 = rem_24 % 12  
  
boxes_6 = rem_12 // 6  
rem = rem_12 % 6  
  
print(f"{boxes_24} caja(s) de 24 colores")  
print(f"{boxes_12} caja(s) de 12 colores")  
print(f"{boxes_6} caja(s) de 6 colores")  
print(f"{rem} colore(s) sobrarían.")
```

5. Desarrolle un programa que permita convertir segundos a: días, horas, minutos y segundos. El programa deberá mostrar el equivalente de los segundos utilizando el formato: D:HH:MM:SS, donde D,HH,MM y SS representan los días, horas, minutos y segundos respectivamente. Las horas, minutos y segundos deberá formatearse de tal manera que solo ocupe exactamente dos dígitos, incluyendo el 0 si es necesario.

```python
total_seconds = int(input("Segundos: "))  
  
total_minutes = total_seconds // 60  
seconds = total_seconds % 60  
  
total_hours = total_minutes // 60  
minutes = total_minutes % 60  
  
days = total_hours // 24  
hours = total_hours % 24  
  
print(f"Equivale a: {str(days).rjust(2, '0')}:{str(hours).rjust(2, '0')}:{str(minutes).rjust(2, '0')}:{str(seconds).rjust(2, '0')}")
```

6. Un polígono regular, es aquel que tiene longitud de sus lados iguales y el ángulo entre los lados adyacentes es igual. Desarrolle un programa que permita calcular el área de un polígono regular $A = \frac{ns^{2}}{4\tan\left( \frac{\pi}{n} \right)}$.

```python
import math  
  
n = int(input("Número de lados: "))  
s = float(input("Longitud de lado: "))  
  
area = (n * (s ** 2)) / (4 * math.tan(math.pi / n))  
print("El área del polígono es ", round(area, 3))
```

**Problema extra:** https://codeforces.com/problemset/problem/842/B
