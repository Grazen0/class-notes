Son otros esquemas más de la inducción, donde los "saltos" de caso en caso son de dos en dos o de tres en tres.

Claro, esto implica que se necesita de dos casos base.

```ad-proposition
title: Inducción de dos en dos

Sea $P(n)$ una proposición definida para todo entero positivo $n$. Entonces, si se cumple que

- $P(1)$ y $P(2)$ son verdaderas, y
- si $P(k)$ es verdadera entonces $P(k + 2)$ también es verdadera,

entonces $P(n)$ es verdadera para todo entero positivo $n$.

```

La inducción de tres en tres se realiza de la misma forma.

```ad-proposition
title: Inducción de tres en tres

Sea $P(n)$ una proposición definida para todo entero positivo $n$. Entonces, si se cumple que

- $P(1)$, $P(2)$ y $P(3)$ son verdaderas, y
- si $P(k)$ es verdadera entonces $P(k + 3)$ también es verdadera,

entonces $P(n)$ es verdadera para todo entero positivo $n$.

```

Como siempre, podemos cambiar la posición de los casos iniciales dependiendo de la situación.

````ad-exercise
title: Ejercicio 1.

En un país solo hay billetes de $3$ y $7$ pesos. Demuestre que para todo entero $n \geq 12$ es posible pagar exactamente $n$ pesos.

```ad-proof
collapse: closed

(Inducción de tres en tres) Nótese que la proposición es cierta para $n \in \left\{ 12, 13, 14 \right\}$, ya que

$$
\begin{align}
12 &= 3 + 3 + 3 + 3 \\
13 &= 3 + 3 + 7 \\
14 &= 7 + 7
.\end{align}
$$

Ahora, para el paso inductivo, supongamos que la proposición es cierta para alguna cantidad de pesos $n = k$. Entonces, podemos agregar un billete de $3$ pesos para tener $k + 3$ pesos, por lo que la proposición es cierta para $n = k + 3$.

Con esto, la inducción está completa.
$$\qed$$

```

````

````ad-exercise
title: Ejercicio 2.

Demuestre que para todo $n \geq 6$ es posible dividir un cuadrado en $n$ cuadrados (no necesariamente del mismo tamaño).

```ad-proof
collapse: closed

(Inducción de tres en tres) Nótese que la proposición es cierta para $n \in \left\{ 6, 7, 8 \right\}$, ya que estos cuadrados se pueden dividir de las siguientes maneras:

![[induccion cuadrados.excalidraw]]

Ahora, para el paso inductivo, notemos que, dado un cuadrado dividido en alguna cantidad $n$ de cuadrados, podemos tomar cualquiera de esas divisiones en 4 cuadrados iguales. Entonces, tendremos una división en $n - 1 + 4 = n + 3$ cuadrados.

Con esto, la inducción está completa.
$$\qed$$

```

````
