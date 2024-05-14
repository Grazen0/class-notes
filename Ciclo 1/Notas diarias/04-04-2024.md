## Programación (Lab)

### Notas video

[Tu cerebro puede hacer algoritmos - David J. Malan](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ted.com/talks/david_j_malan_what_s_an_algorithm%3Flanguage%3Des&ved=2ahUKEwje1YDD-6iFAxV6K7kGHZaICuoQwqsBegQIDxAE&usg=AOvVaw1RWSLwYTR5W3N0e0-gmvpw)

Estos son ejemplos de algoritmos en pseudocódigo:

```python
# Algoritmo para contar todas las personas en un cuarto

let n = 0

for each person in room
	set n = n + 1
```

```python
# Versión optimizada del algoritmo anterior
# Cuenta las personas de dos en dos
# ¡Tiene un bug!

let n = 0

for each pair of people in room
	set n = n + 2
```

```python
# Versión optimizada y arreglada del algoritmo anterior
# Cuenta las personas de dos en dos
# Considera un número tanto par como impar de personas

let n = 0

for each pair of people in room
	set n = n + 2

if 1 person remains then
	set n = n + 1
```
