```python
person = {
	'name': 'Joe',
	'age': 23,
	'pet_names': ['Max', 'Snowy'],
}
```

- La llave de un diccionario puede ser de cualquier tipo, mientras que sea **inmutable**.

## Eliminar elementos

```python
del my_dict['key']
my_dict('key')
```

## Vaciar un diccionario

```python
my_dict.clear()
```

## Recorrer un diccionario

```python
for key in my_dict:
	print(key, ':', my_dict[key])

for key in my_dict.keys():
	print(key, ':', my_dict[key])

for item in my_dict.values():
	print(item)

for key, item in my_dict.items():
	print(key, ':', item)
```