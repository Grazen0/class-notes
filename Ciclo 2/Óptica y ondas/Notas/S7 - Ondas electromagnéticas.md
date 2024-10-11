Para propósitos de este curso, describimos a la luz como una **onda**.

## Fuerza y campos eléctricos

La fuerza de atracción o repulsión entre dos partículas de cargas $q_1$ y $q_2$ es igual a

$$
F = k \frac{q_1q_2}{r^2}
$$

donde $k$ es la constante de Coulomb.

La dirección de la fuerza depende de las cargas:

- **Cargas iguales:** Se repelen.
- **Cargas diferentes:** Se atraen.

Un objeto con carga genera un **campo eléctrico**, el cual transfiere energía a otros objetos con carga mediante la fuerza eléctrica. Se denotan con $E$.

$$
E = \frac{F}{q} = \frac{kQ_\text{fuente}}{r^2}
$$

![[Campo electrico.png]]

## Magnetismo

El **magnetismo** es la propiedad física de la materia que resulta en fuerzas de atracción o repulsión entre objetos.

![[magnetismo.png]]

Las **fuentes** de campos magnéticos son **siempre dipolos** (norte y sur).

Las líneas de campo magnético viajan **de norte a sur**.

### Campos magnéticos

Los campos magnéticos se generan con **flujo eléctrico**. Se denotan con $B$.

![[rght hand rule 2.png]]

## Ecuaciones de Maxwell

### Constantes involucradas

La **permitividad eléctrica** ($\varepsilon$)  de un medio relaciona la **carga eléctrica** con los **efectos físicos** causados por los **campos eléctricos** en ese medio.

La **permeabilidad magnética** $(\mu)$ de un medio es la capacidad que tiene de variar sus características físicas ante la presencia de un **campo magnético**.

### Las leyes

#### Ley de Gauss de la electricidad

El flujo eléctrico a través de una superficie cerrada es proporcional a la carga total contenida en dicha **superficie**. Matemáticamente,

$$
\oint \vec{E} \, d\vec{A} = \frac{Q_\text{enc}}{\varepsilon_0}
$$

donde $Q_\text{enc}$ es la carga eléctrica contenida en la superficie.

#### Ley de Gauss del magnetismo

El flujo magnético a través de una superficie cerrada es cero. Matemáticamente,

$$
\oint \vec{B} \, d\vec{A} = 0
.$$

#### Ley de Faraday

Un campo magnético que varía en el tiempo induce la presencia de un campo eléctrico. Matemáticamente,

$$
\oint \vec{E} \, d\vec{l} = -\frac{d\Phi_B}{dt}
$$

donde $\Phi_B$ es el flujo magnético.

#### Ley de Ampere

Un campo eléctrico que varía en el tiempo genera un campo magnético. Matemáticamente,

$$
\oint \vec{B} \, d\vec{l} = \mu_0\left( i_C + \varepsilon_0 \frac{d\Phi_E}{dt} \right)
$$

donde $i_C$ es la **corriente eléctrica** y - $\Phi_E$ es el **flujo eléctrico**.

### Consecuencias de las leyes de Maxwell

- Un campo eléctrico variable genera un campo magnético.
- Un campo magnético variable genera un campo eléctrico.

Estas dos consecuencias generan un **ciclo de retroalimentación continua**.

Estas oscilaciones son las que generan **ondas electromagnéticas**.
## Ondas electromagnéticas

Una onda electromagnética se produce como el resultado de un campo eléctrico y un campo electromagnético.

![[ondas electromagneticas.png]]

- Se propagan en el vacío.
- Se propagan a la velocidad de la luz ($c = 3 \times 10^{8} \mathrm{\frac{m}{s}}$).
- Transportan energía.

### Propagación

- **Eje X:** dirección de **propagación de la onda**.
- **Eje Y:** dirección de oscilación del **campo eléctrico**.
- **Eje Z:** dirección de oscilación del **campo magnético**.

![[propagacion de onda electromagnetica.png]]

Matemáticamente, describimos el campo eléctrico y magnético de la onda respectivamente como

$$
\begin{align}
\vec{E}(x,t) &= E_\text{máx}\cos(kx - \omega t)\hat{j} \\
\vec{B}(x,t) &= B_\text{máx}\sin(kx - \omega t)\hat{k}
,\end{align}
$$

donde $E_\text{máx}$ y $B_\text{máx}$ se miden en **teslas** ($\mathrm{T}$).

Nótese que estas funciones **producen vectores**. Cada una incluye una **dirección** ($\hat{j}$ y $\hat{k}$ respectivamente).

#### Regla de la mano derecha

En general, una onda electromagnética viaja en la dirección de $\vec{E} \times \vec{B}$, por lo que podemos usar la regla de la mano derecha para determinar dicha dirección.

Algunas equivalencias útiles son:

$$
\begin{align}
\vec{E} \times \vec{B} &\parallel \vec{S} \\
\vec{S} \times \vec{E} &\parallel \vec{B} \\
\vec{B} \times \vec{S} &\parallel \vec{E}
.\end{align}
$$

### Campos

$$
\lVert \vec{E} \rVert  = c\lVert \vec{B} \rVert 
.$$

En particular:

$$
E_\text{máx} = cB_\text{máx}
.$$

Y además:
$$
\lVert \vec{B} \rVert  = \varepsilon_0\mu_0 c\lVert \vec{E} \rVert 
.$$

(Recordemos que $c = 3 \cdot 10^{8} \mathrm{\frac{m}{s}}$ es la **velocidad de la luz** en el vacío)

### Rapidez

1. En el **vacío**:

$$
c = \frac{1}{\sqrt{\varepsilon_0\mu_0}} = 3 \cdot 10^{8} \mathrm{\frac{m}{s}}
$$

2. En un **medio** (dieléctrico):

$$
v = \frac{1}{\sqrt{\varepsilon\mu}} = \frac{c}{\sqrt{KK_m}}
$$

Además, se sigue cumpliendo que la velocidad de la onda es igual a

$$
v = \lambda f
$$

donde $\lambda$ es la **longitud de onda** y $f$ es la **frecuencia**.
