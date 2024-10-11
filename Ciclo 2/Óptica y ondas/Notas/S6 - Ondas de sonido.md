Las ondas de sonido se generan debido a **vibraciones** de alguna fuente que **perturban los elementos del medio**.

Estas perturbaciones se miden por **cambios en densidad y presión** a lo largo de la dirección de propagación.

Las ondas de sonido son **[[S4 - Ondas mecánicas|ondas mecánicas]]**, por lo que requieren de un medio para propagarse. Por ejemplo, el sonido no puede viajar a través del espacio.

## Movimiento de partículas

El **desplazamiento relativo** de una partícula se describe como

$$
s(x,t) = s_\text{máx}\cos(kx - \omega t)
,$$

mientras que la **variación en la presión** se describe como

$$
\Delta P = \Delta P_\text{máx}\sin(kx - \omega t)
.$$

```ad-note
title: Nota

Se escribe $\Delta P$ (y no simplemente $P$) porque $\Delta P = P - P_\text{atmosférica}$.

```

La **rapidez** de una onda sonora depende del medio.

- **Fluido:** $v = \sqrt{\frac{B}{\rho}}$, donde
	- $B$: Módulo volumétrico del fluido
	- $\rho$: Densidad del fluido
- **Varilla sólida:** $v = \sqrt{\frac{Y}{\rho}}$
	- $Y$: Módulo de Young del material de la varilla
	- $\rho$: Densidad del material de la varilla
- **Gas ideal**: $v = \sqrt{\frac{\gamma RT}{M}}$
	- $\gamma$: Coeficiente de capacidades caloríficas
	- $R$: Constante de los gases
	- $T$: Temperatura absoluta
	- $M$: Masa molar

## Intensidad de las ondas sonoras

La variación máxima de presión se halla con

$$
\Delta P_\text{máx} = \rho v \omega s_\text{máx}
$$

y la potencia promedio se halla con

$$
\text{(Potencia)}_\text{prom} = \frac{1}{2} \rho A \omega^2 (s_\text{máx})^2v
$$

donde $A$ es el área de la superficie abarcada por la onda ($4\pi r$). De aquí, hallamos que la **intensidad** de una onda de sonido es igual a

$$
I = \frac{1}{2}\rho \omega^2 (s_\text{máx})^2 v = \frac{(\Delta P_\text{máx})^2}{2\rho v}
.$$

## Interferencia de ondas sonoras

Ver [[S5 - Ondas mecánicas 2#Interferencia de ondas mecánicas]].

### Ondas estacionarias en tubos

![[onda sonora en tubo.png]]

En un tubo **abierto**:

$$
\lambda_n = \frac{2L}{n} \qquad f_n = n\frac{v}{2L}
,$$

mientras que  en un tubo **cerrado**:

$$
\lambda_n = \frac{4L}{n} \qquad f_n = n\frac{v}{4L}
$$

para $n = 1,3,5,\ldots$

## Nivel sonoro

El **nivel sonoro** de una onda se mide en *decibelios*, y se define como

$$
\beta = (10 \, \mathrm{dB}) \log_{10}\left( \frac{I}{I_0} \right)
,$$

donde $I_0 = 10^{-12} \mathrm{\frac{W}{m^2}}$ es el **umbral de la audición**.

El nivel sonoro se trata de una escala logarítmica de la intensidad del sonido. En realidad, es algo así como una definición *arbitraria*, pero es útil para fines de medición.

## Efecto Doppler

El efecto Doppler es lo que ocurre cuando un observador o emisor de sonido está **en movimiento**.

La **frecuencia percibida** de un sonido bajo el efecto Doppler es igual a

$$
f' = \left( \frac{v + v_o}{v + v_s} \right)f
$$

donde:

- $v$ es la velocidad de la onda,
- $v_o$ es la velocidad del observador, y
- $v_s$ es la velocidad de la fuente.

Los **signos** de $v_o$ y $v_s$ dependen de las direcciones del movimiento.

La estrategia es **definir un sentido positivo** del observador hacia la fuente. Es decir,

$$
\text{O} \xrightarrow{+} \text{S}
.$$

Las velocidades las medimos según este sentido.
