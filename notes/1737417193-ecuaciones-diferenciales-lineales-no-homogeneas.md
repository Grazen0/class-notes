---
id: 1737417193-ecuaciones-diferenciales-lineales-no-homogeneas
aliases:
  - Ecuaciones diferenciales lineales no homogéneas
tags:
  - mates/edo
createdAt: 2025-01-20 18:53
---

# Ecuaciones diferenciales lineales no homogéneas

> [!DEFINITION] Definición
> Una [[1737268601-ecuaciones-diferenciales-lineales|ecuación diferencial lineal]] es **no homogénea** cuando es de la forma
>
> $$
> a_n(x) \frac{d^ny}{dx^n} + a_{n-1}(x) \frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1(x) \frac{dy}{dx} + a_0(x)y = g(x)
> $$
>
> donde $g(x) \neq 0$.

Su proceso de resolución incluye resolver una [[1737414399-ecuaciones-diferenciales-lineales-homogeneas|ED lineal homogénea]], pero tiene un paso adicional.

## Método de coeficientes indeterminados

1. [[1737414399-ecuaciones-diferenciales-lineales-homogeneas#Métodos de resolución|Resolver la ED lineal homogénea]] asociada a nuestra ED (cuya solución llamaremos $y_h(x)$).
2. Proponer una **solución particular** $y_p(x)$, la cual tendrá ciertos coeficientes que nos hace falta encantar.
3. Reemplazar $y_p(x)$ en la ED lineal no homogénea, igualar términos y resolver un [[1725904856-sistemas-de-ecuaciones|sistema de ecuaciones]] para hallar los coeficientes de $y_p(x)$.

Finalmente, la solución general de la ED lineal no homogénea será

$$
y(x) = y_h(x) + y_p(x)
.$$

### Tabla de soluciones particulares

|              $g(x)$               |                      $y_p(x)$                      |
| :-------------------------------: | :------------------------------------------------: |
|          $a e^{\beta x}$          |                   $Ae^{\beta x}$                   |
| $a\cos(\beta x) + b\sin(\beta x)$ |         $A\cos(\beta x) + B\sin(\beta x)$          |
|      Polinomio de grado $n$       | $A_n x^n + A_{n-1} x^{n-1} + \ldots + A_1 x + A_0$ |

Cabe destacar que el caso de $a\cos(\beta x) + b\sin(\beta x)$ aplica también para casos donde únicamente hay un seno o un coseno.

Si $g(x)$ es **suma** o **producto** de algunas de estas funciones, entonces $y_p(x)$, por su parte, también tiene que ser un producto de las distintas propuestas de solución para dichas funciones. Por ejemplo:

|            $g(x)$            |                            $y_p(x)$                            |
| :--------------------------: | :------------------------------------------------------------: |
|    $(ax + b)e^{\beta x}$     |                     $(Ax + B)e^{\beta x}$                      |
| $e^{\beta x}\cos(\gamma x)$  |        $e^{\beta x}(A\cos(\gamma x) + B\sin(\gamma x))$        |
| $xe^{\beta x}\cos(\gamma x)$ | $e^{\beta x}((Ax + B)\cos(\gamma x) + (Cx + D)\sin(\gamma x))$ |
