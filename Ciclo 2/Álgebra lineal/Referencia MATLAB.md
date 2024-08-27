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

#### Adición de una fila por un escalar ($f_{i} \to f_{i} + k\,f_{j}$)

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
Aur = rref(Au) % Forma escalonada reducida de Au
```
