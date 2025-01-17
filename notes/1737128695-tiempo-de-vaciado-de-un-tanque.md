---
id: 1737128695-tiempo-de-vaciado-de-un-tanque
aliases:
  - Tiempo de vaciado de un tanque
tags:
  - mates/edo
createdAt: 2025-01-17 10:44
---

# Tiempo de vaciado de un tanque

Consideremos un tanque de agua al que se le hace un orificio pequeño en la base.

![vaciado-de-un-tanque.png](attachments/vaciado-de-un-tanque.png)

Por principio de Bernoulli y otros teoremas de física (de los cuales desconozco porque soy de CS), la [[1736190391-ecuaciones-diferenciales-clasificacion|ecuación]] que modela este fenómeno es

$$
\frac{dh}{dt} = -c \frac{A_0}{A_h} \sqrt{2gh}
,$$

donde:

- $h$: altura del agua dentro del tanque.
- $A_h$: área del círculo al top del agua.
- $A_0$: área del agujero.
- $g$: aceleración de la gravedad ($\approx 9.8 \mathrm{\frac{m}{s^2}}$).
- $k$: una constante.

Cuando el tanque es cilíndrico (como en la imagen previa), ocurre que $A_h$ es constante y, por lo tanto, la ecuación se puede simplificar a

$$
\frac{dh}{dt} = \alpha \sqrt{h}
.$$

Sin embargo, puede ocurrir que $A_h$ no sea constante, en cuyo caso hay que hallar su expresión en función de $t$ y usarla en la ED.

> [!EXAMPLE]+
> ![tanque-conico.png](attachments/tanque-conico.png)
> En un tanque cónico invertido con el agua a una altura y radio inicial de $h_0$ y $r_0$ respectivamente, $A_h$ sería igual a
>
> $$
> A_h(t) = \pi r^2 = \pi \left( \frac{r_0}{h_0} \right)^2 h^2
> ,$$
> 
> ya que, por semejanza de triángulos, $r = \frac{r_0}{h_0} h$.
>  
