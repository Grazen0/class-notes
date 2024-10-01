## Creación de matrices

### Matriz identidad

```
I = eye(n)
I = eye(m, n)
```

### Matriz de números aleatorios

```
A = rand(n)
A = rand(m, n)
```

## Propiedades de una matriz

### Rango

```
A = [1 2; 3 4]
r = rank(A)
```

## Cálculo simbólico

### Definir una variable simbólica

```
syms a
```

## Operaciones elementales e inversa

### Operaciones elementales

#### Intercambiar filas ($f_{i} \leftrightarrow f_{j}$)

```
A([i j],:) = A([j i],:)
```

#### Multiplicar fila por un escalar ($f_{i} \to k\,f_{i}$)

```
A(i,:) = k * A(i,:)
```

#### Adición de una fila por un escalar ($f_{i} \to f_{i} + kf_{j}$)

```
A(i,:) = A(i,:) + k * A(j,:)
```

### Inversa

```
C = inv(A)
```

### Forma escalonada reducida

```
n = size(A,1) % Orden de la matriz
Au = [A eye(n)] % Matriz aumentada
Aur = rref(Au) % Forma escalonada reducida de Au...
```

## Sistemas de ecuaciones lineales

Existen tres maneras resolver sistemas de ecuaciones:

```
% Solución de Ax = b
solution1 = linsolve(A, b)
solution2 = A \ b
solution3 = inv(A) * b
```

## Espacios fundamentales

### Espacio columna

```
A = [
	10   5   5 -20
	 1   2  -1   4
	40  10  30  30
	 9   8   1   6
];
[R, p] = rref(A); % Matriz escalonada reducida + índices de pivotes
V = A(:,p) % Espacio columna de A
```

Otra forma de calcular el espacio columna es con `syms`.

```
A = syms([
	1 2 3
	4 5 6
	7 8 9
]);
V = colspace(A)
```

### Espacio nulo

```
A = [
	1 2 3
	4 5 6
	7 8 9
];
V = null(A, 'r') % El 'r' indica que queremos elementos racionales
```
