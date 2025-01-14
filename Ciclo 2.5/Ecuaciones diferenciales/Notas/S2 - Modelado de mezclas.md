Al considerar el modelado de la mezcla de dos **soluciones salinas** de distintas concentraciones surge una EDO de primer orden que involucra las **cantidades de sal** en cada mezcla.

![mezclas.png](mezclas.png)

Consideremos las siguientes variables:

- $A(t)$: concentración de sal en el tanque.
- $s_{\text{in/out}}$: concentración de entrada/salida de sal.
- $q_{\text{in/out}}$: velocidad de entrada/salida de líquido.
- $R_{\text{in/out}}$: velocidad de entrada/salida de sal.

Sea $A(t)$ la concentración de sal en el tanque. Entonces, se cumple

$$
\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}}
,$$

donde $R_{\text{in}}$ y $R_{\text{out}}$ son las tasas de cambio de la concentración de sal que entra y sale del tanque respectivamente.

Como se cumple que $R_{\text{in}} = s_{\text{in}} \cdot q_{\text{in}}$ (y lo mismo, análogamente para $R_{\text{out}}$), entonces la ecuación diferencial ahora es

$$
\frac{dA}{dt} = s_{\text{in}} \, q_{\text{in}} - s_{\text{out}} \, q_{\text{out}}
.$$

Ahora, el método de resolución de esta ED dependerá más o menos del problema particular. Depende de cómo se construyan las expresiones para los flujos y concentraciones de entrada y salida.

> [!NOTE]
> Nunca olvidemos que
>
> $$
> \text{densidad} = \frac{\text{masa}}{\text{volumen}}
> .$$
