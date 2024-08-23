En este curso, el espacio en tres dimensiones está orientado de la siguiente forma:

![[Espacio 3D.excalidraw]]

```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=green]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=cyan] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
```

## Cuerpos en tres dimensiones

Las ecuaciones de estos cuerpos se encuentran con origen en $\left< 0, 0, 0 \right>$. Su traslación es trivial.

### Elipsoide

$$
\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1
$$

donde $a$, $b$ y $c$ son los radios del elipse en cada dimensión respectivamente.

![[elipsoide.png]]
#### Esfera

Caso particular del elipsoide donde $a = b = c$.

$$
x^{2} + y^{2} + z^{2} = r^{2}
$$
![[esfera.png]]
### Paraboloide

$$
x^{2} + y^{2} = z
$$

![[paraboloide.png]]

### Hiperboloide

$$
-\frac{x^{2}}{a^{2}} - \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1
$$

![[hiperboloide.png]]