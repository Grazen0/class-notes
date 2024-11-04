## Cálculo simbólico

```
% Definir variables reales a, b, c
syms a b c real

% Sumar a, b y c y simplificar el resultado
S = simplify(a + b + c)
```

## Operaciones y propiedades básicas

```
% Matriz identidad
I = eye(n) 
I = eye(m, n)

% Números aleatorios
A = rand(n)
A = rand(m, n)

% Rango de A
r = rank(A)

% Inversa de A
C = inv(A)

% Forma escalonada reducida de A
Ar = rref(A)
[Ar, p] = rref(A) % p contiene los índices de los pivotes
```

### Operaciones elementales

```
% Intercambiar filas i y j
A([i j],:) = A([j i],:)

% Multiplicar la fila i por k
A(i,:) = k * A(i,:)

% Sumar a la fila i un múltiplo k de la fila j
A(i,:) = A(i,:) + k * A(j,:)
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

```
[R, p] = rref(A); % Matriz escalonada reducida + índices de pivotes
V = A(:,p) % Base de col(A)

% Espacio nulo de A
V = null(A, 'r') % El 'r' indica que queremos elementos racionales
```

## Valores y vectores propios

```
syms x;
p_A = charpoly(A, x) % Polinomio característico de A
E = solve(p_A) % Valores propios de A
```

```
E = eig(A) % Valores propios de A

% V: Vectores propios normalizados de A
% D: Matriz diagonal con los valores propios de A
[V, D] = eig(A)
```

## Ortogonalidad

```
% Ortogonalización de A
O = orth(A)
```

### Diagonalización

```
[P, D] = eig(A)
% Se cumple que P*D*inv(P) = 1
% Si A es simétrica, P será ortogonal
```

## Factorizaciones

### Factorización QR

```
[Q, R] = qr(A)
% Se cumple que Q*R = A
```

### Descomposición SVD

```
[U, S, V] = svd(A)
% Se cumple que U*S*V' = A
```