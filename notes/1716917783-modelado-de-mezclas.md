---
id: 1716917783-modelado-de-mezclas
aliases:
  - Modelado de mezclas
tags:
  - mates/edo
createdAt: 2024-05-28 12:36
---

# Modelado de mezclas

Al considerar el modelado de la mezcla de dos **soluciones salinas** de distintas concentraciones surge una EDO de primer orden que involucra las **cantidades de sal** en cada mezcla.

![mezclas.png](mezclas.png)

Consideremos las siguientes variables:

- $X(t)$: concentración de sal en el tanque.
- $s_{\text{in/out}}$: concentración de entrada/salida de sal.
- $q_{\text{in/out}}$: velocidad de entrada/salida de líquido.
- $R_{\text{in/out}}$: velocidad de entrada/salida de sal.

Sea $X(t)$ la concentración de sal en el tanque. Entonces, se cumple

$$
\frac{dX}{dt} = R_{\text{in}} - R_{\text{out}}
,$$

donde $R_{\text{in}}$ y $R_{\text{out}}$ son las tasas de cambio de la concentración de sal que entra y sale del tanque respectivamente.

Como se cumple que $R_{\text{in}} = s_{\text{in}} \cdot q_{\text{in}}$ (y lo mismo, análogamente para $R_{\text{out}}$), entonces la ecuación diferencial ahora es

$$
\frac{dX}{dt} = s_{\text{in}} \, q_{\text{in}} - s_{\text{out}} \, q_{\text{out}}
.$$

En particular, el volumen de líquido en el tanque tiene la forma

$$
V(t) = V(0) + (q_\text{in} - q_\text{out})t
$$

(donde $V(0)$ se establece con la condición inicial del problema), mientras que $q_\text{out}$ siempre será de la forma

$$
,q_\text{out} = \frac{X}{V}
,$$

ya que $\text{densidad} = \frac{\text{masa}}{\text{volumen}}$. Usualmente, el resto de parámetros son constantes.

Ahora, el método de resolución de esta ED dependerá más o menos del problema particular. Depende de cómo se construyan las expresiones para los flujos y concentraciones de entrada y salida.

## Para dos tanques en cadena

Si consideramos una disposición de dos tanques conectados uno tras otro, las EDs que describe esta situación consiste en considerar a la salida del primer tanque como la entrada del segundo tanque.

![[Pasted image 20250117100518.png]]

Consideremos las siguientes variables:

- $X_1(t)$, $X_2(t)$: cantidad de sal en el primer y segundo tanque respectivamente.
- $V_1(t)$, $V_2(t)$: volumen de líquido en el primer y segundo tanque respectivamente.
- $q_\text{in}$, $q_\text{mid}$, $q_\text{out}$: concentración de sal que entra al primer tanque, pasa del primero al segundo y sale del segundo, respectivamente.
- $s_\text{in}$, $s_\text{mid}$, $s_\text{out}$: concentración de sal que entra al primer tanque, pasa del primero al segundo y sale del segundo, respectivamente.

Entonces, se cumple que

$$
s_\text{mid} = \frac{X_1}{V_1}, \quad s_\text{out} = \frac{X_2}{V_2}
,$$

por lo que la ecuación diferencial del segundo tanque involucrará a $X_1$. Por esta razón, podemos resolver este tipo de problemas resolviendo dos ecuaciones diferenciales sucesivamente:

$$
\frac{dX_1}{dt} = q_\text{in} s_\text{in} - q_\text{mid} \frac{X_1}{V_1}
$$

y

$$
\frac{dX_2}{dt} = q_\text{mid} \frac{X_1}{V_1} - q_\text{out} \frac{X_2}{V_2}
$$
