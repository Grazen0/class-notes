```ad-definition
title: Definición (Máximo común divisor).

El **máximo común divisor** de dos enteros $a$ y $b$, denotado con $\gcd(a,b)$, es el mayor divisor en común que tienen $a$ y $b$.
```

**Ejemplos:**

- $\gcd(20,22) = 2$
- $\gcd(15,9) = 3$

```ad-definition
title: Definición (Mínimo común múltiplo).

El **mínimo común múltiplo** de dos enteros $a$ y $b$, denotado con $\lcm(a,b)$, es menor múltiplo positivo en común que tienen $a$ y $b$.
```

**Ejemplos:**

- $\lcm(6,9) = 18$

## Calcular usando la descomposición canónica

```ad-theorem

Sean $a,b$ dos enteros positivos en su descomposición canónica de la siguiente forma:

$$
\begin{align}
a &= p_{1}^{\alpha_{1}} \cdot p_{2}^{\alpha_{2}} \cdot \ldots \cdot p_{k}^{\alpha_{k}} \\
b &= p_{1}^{\beta_{1}} \cdot p_{2}^{\beta_{2}} \cdot \ldots \cdot p_{k}^{\beta_{k}} \\
\end{align}
$$

Entonces, se cumple que

$$
\gcd(a,b) = p_{1}^{\min(\alpha_{1},\beta_{1})} \cdot p_{2}^{\min(\alpha_{2},\beta_{2})} \cdot \ldots \cdot p_{k}^{\min(\alpha_{k},\beta_{k})}
$$

y

$$
\lcm(a,b) = p_{1}^{\max(\alpha_{1},\beta_{1})} \cdot p_{2}^{\max(\alpha_{2},\beta_{2})} \cdot \ldots \cdot p_{k}^{\max(\alpha_{k},\beta_{k})}
$$

```

```ad-exercise
title: Ejercicios
collapse: closed

1. Hallar $\gcd(20,25)$.

$$
\begin{align}
20 &= 2^{2} \cdot 5^{1} \\
25 &= 2^{0} \cdot 5^{2} \\
\hline
\therefore \gcd(20,25) &= 2^{0} \cdot 5^{1}  \\
&= 5
\end{align}
$$

2. Hallar $\gcd(6^{10},9^{10})$.

$$
\begin{align*}
6^{10} &= 2^{10} \cdot 3^{10} \\
9^{10} &= 2^{0} \cdot 3^{20} \\
\hline
\therefore \gcd(6^{10},9^{10}) &= 2^{0} \cdot 3^{10} \\
\gcd(6^{10},9^{10}) &= 3^{10}
\end{align*}
$$

3. Hallar $\lcm(3^{5},2 \cdot 3^{4})$.

$$
\begin{align}
3^{5}     &= 2^{0} \cdot 3^{5} \\
2 \cdot 3^{4} &= 2^{1} \cdot 3^{4} \\
\hline
\therefore \lcm(3^{5},2 \cdot 3^{4}) &= 2^{1} \cdot 3^{5} \\
\lcm(3^{5},2 \cdot 3^{4}) &= 2 \cdot 3^{5}
\end{align}
$$

5. Hallar la cantidad de divisores positivos de $\lcm(6^{10},15^{11})$.

Primero, hallamos $\lcm(6^{10}, 15^{11})$:

$$
\begin{align}
6^{10}  &= 2^{10} \cdot 3^{10} \cdot 5^{0} \\
15^{11} &= 2^{0} \cdot 3^{11} \cdot 5^{11} \\
\hline
\therefore \lcm(6^{10}, 15^{11}) &= 2^{10} \cdot 3^{11} \cdot 5^{11}
\end{align}
$$

Ahora, empleamos la fórmula de cantidad de divisores positivos.

$$
\begin{align}
\text{\# divisores }(\lcm(6^{10}, 15^{11})) &= \text{\# divisores }(2^{10} \cdot 3^{11} \cdot 5^{11}) \\
&= (10 + 1)(11 + 1)(11 + 1) \\
&= 1584
\end{align}
$$

```

`````ad-theorem

Dados dos enteros $a,b$,

$$
\gcd(a,b) \cdot \lcm(a,b) = ab
$$

```ad-proof
collapse: closed

Sean $a,b$ dos números enteros cualesquiera en su descomposición canónica de la siguiente forma:

$$
\begin{align}
a &= p_{1}^{\alpha_{1}} \cdot p_{2}^{\alpha_{2}} \cdot \ldots \cdot p_{k}^{\alpha_{k}} \\
b &= p_{1}^{\beta_{1}} \cdot p_{2}^{\beta_{2}} \cdot \ldots \cdot p_{k}^{\beta_{k}} \\
\end{align}
$$

Entonces, por el teorema anterior,

$$
\begin{align}
\gcd(a,b) \cdot \lcm(a,b) &= \left(p_{1}^{\min(\alpha_{1},\beta_{1})} \cdot p_{2}^{\min(\alpha_{2},\beta_{2})} \cdot \ldots \cdot p_{k}^{\min(\alpha_{k},\beta_{k})}\right)\left(p_{1}^{\max(\alpha_{1},\beta_{1})} \cdot p_{2}^{\max(\alpha_{2},\beta_{2})} \cdot \ldots \cdot p_{k}^{\max(\alpha_{k},\beta_{k})}\right) \\
&= p_{1}^{\min(\alpha_{1}, \beta_{1}) + \max(\alpha_{1},\beta_{1})} \cdot p_{2}^{\min(\alpha_{2}, \beta_{2}) + \max(\alpha_{2},\beta_{2})} \cdot \ldots \cdot p_{k}^{\min(\alpha_{k}, \beta_{k}) + \max(\alpha_{k},\beta_{k})} \\
&= p_{1}^{\alpha_{1} + \beta_{1}} \cdot p_{2}^{\alpha_{2}+\beta_{2}} \cdot \ldots \cdot p_{k}^{\alpha_{k}+\beta_{k}} \\
&= p_{1}^{\alpha_{1}} \cdot p_{1}^{\beta_{1}} \cdot p_{2}^{\alpha_{2}} \cdot p_{2}^{\beta_{2}} \cdot \ldots \cdot p_{k}^{\alpha_{k}} \cdot p_{k}^{\beta_{k}} \\
&= \left(p_{1}^{\alpha_{1}} \cdot p_{2}^{\alpha_{2}} \cdot \ldots \cdot p_{k}^{\alpha_{k}}\right)\left(p_{1}^{\beta_{1}} \cdot p_{2}^{\beta_{2}} \cdot \ldots \cdot p_{k}^{\beta_{k}}\right) \\
\gcd(a,b) \cdot \lcm(a,b) &= ab \\
\qed
\end{align}
$$
$$\qed$$

```

`````
