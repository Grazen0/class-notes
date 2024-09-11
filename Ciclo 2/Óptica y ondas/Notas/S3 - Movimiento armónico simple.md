## En un sistema masa-resorte

La posición $x$ de una masa a lo largo del tiempo $t$ es igual a

$$
x = A\cos(\omega t + \phi)
,$$

donde

- $A$: amplitud
- $\omega = \sqrt{\frac{k}{m}}$: frecuencia angular ($\mathrm{\frac{rad}{s}}$)
	- $k$: constante elástica
	- $m$: masa
- $\phi$: ángulo de fase

Aquí definimos la **frecuencia natural** y el **periodo** ($f$ y $T$ respectivamente) como

$$
\omega = 2\pi f = \frac{2\pi}{T}
.$$

Nótese además que **la frecuencia y el periodo son recíprocos**. Es decir,

$$
f = \frac{1}{T} \qquad T = \frac{1}{f}
.$$

```ad-exercise
title: Ejercicio (para practicar unidades).
collapse: closed

Un transductor ultrasónico (una especie de altavoz) empleado para el diagnóstico médico oscila con una frecuencia de $6.7$ MHz. ¿Cuánto tarda cada oscilación y qué frecuencia angular tiene?

**Resolución:**

Recordemos que $1\,\mathrm{MHz} = 10^{6}\,\mathrm{Hz}$ y $1\,\mathrm{s} = 10^{6}\,\mathrm{\micro s}$.

Ahora, para hallar el periodo:

$$
T = \frac{1}{f} = \frac{1}{6.7 \cdot 10^{6}} \approx 0.15 \cdot 10^{-6} = 0.15\,\mathrm{\micro s}
$$

Y para hallar la frecuencia angular:

$$
\omega = 2\pi f = 2\pi (6.7 \cdot 10^{6}) \approx 42097341.56\,\mathrm{\frac{rad}{s}}
$$

```

### Velocidad y aceleración

Derivando la posición de la masa obtenemos su velocidad,

$$
v = -\omega A \sin(\omega  t + \phi)
,$$

y su aceleración,

$$
a = -\omega^{2}A\cos(\omega t + \phi)
$$

```ad-note
title: Nota

Los máximos de la velocidad y aceleración son

$$
v_\text{máx} = \pm\omega A
$$

y

$$
a_\text{máx} = \pm\omega^{2}A
.$$

```

### Energía del sistema

En un sistema masa-resorte, **la energía mecánica es constante**, e igual a

$$
E = \frac{1}{2}kA^{2}
.$$

```ad-proof
collapse: closed

$$
\begin{align}
K &= \frac{1}{2}mv^{2} \\
  &= \frac{1}{2}m\omega^{2}A^{2}\sin^{2}(\omega t + \phi) \\
K &= \frac{1}{2}kA^{2}\sin^{2}(\omega t + \phi)
.\end{align}
$$

$$
U_s = \frac{1}{2}kx^{2} = \frac{1}{2}kA^{2}\cos^{2}(\omega t + \phi)
$$

Entonces,

$$
\begin{align}
E &= K + U_s = \frac{1}{2}kA^{2}\sin(\omega t + \phi) + \frac{1}{2}kA^{2}\cos(\omega t + \phi) \\
  &= \frac{1}{2}kA^{2}(\sin^{2}(\omega t + \phi) + \cos^{2}(\omega t + \phi)) \\
E &= \frac{1}{2}kA^{2}
.\end{align}
$$

```

## En un sistema pendular

Definimos la **frecuencia angular** como

$$
\omega = \sqrt{\frac{g}{L}}
$$

y el **periodo de oscilación** como

$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L}{g}}
,$$

donde $L$ es la longitud del péndulo.

## Oscilaciones forzadas con amortiguamiento

Si se tiene un sistema oscilatorio con cierta **amortiguación** y se le aplica una **fuerza impulsora** periódica, el sistema después de algún tiempo de desorden se estabilizará con la forma

$$
x = A\cos(\omega t + \phi)
,$$

donde la amplitud será igual a

$$
A = \frac{F_0}{\sqrt{ m^{2}(\omega^{2} - \omega_0^{2})^{2} + b^{2}\omega^{2}}}
,$$

donde:

- $F_0$: amplitud de la fuerza impulsora,
- $w_0$: frecuencia angular de la fuerza impulsora,
- $b$: factor de amortiguación.

```ad-note
title: Nota

La máxima amplitud del sistema oscilatorio será

$$
A_\text{máx} = \frac{F_0}{b\omega}
.$$

```
