En esencia, el polimorfismo trata de que **un identificador** pueda ser **varias cosas a la vez**.

## Mediante funciones genéricas

Una función puede tomar uno o más **parámetros genéricos** mediante un `template`. En esencia, el compilador de C++ va a crear diferentes "versiones" especializadas de la función: una para cada tipo que se utiliza en el código.

```cpp
#include <vector>

template <typename T>
T maximum(std::vector<T>& vec) {
	T max = vec[0];

	for (auto el : vec) {
		if (el > max) {
			max = el;
		}
	}

	return max;
}

// maximum se puede usar tanto para `int`s...
std::vector ints { 1, 4, 2, 5, 3 };
int max_int = maximum(ints);
std::cout << "Máximo de los ints: " << max_int << std::endl;

// ...para `double`s...
std::vector doubles { -2.2, 4.2, 3.14, 1.618 };
double max_double = maximum(doubles);
std::cout << "Máximo de los doubles: " << max_double << std::endl;

// y cualquier otro tipo que sea comparable consigo mismo.

// C++ creará una  versión de `maximum` para
// `int`s y para `double`s por separado.
```

## Mediante clases

### Clases genéricas

Al igual que las funciones, las clases también pueden ser genéricas.

La sintaxis es esencialmente la misma.

### Métodos virtuales

C++ permite a clases hijas **sobreescribir** los métodos de sus clases base mediante el keyword `virtual`.

```cpp
#include <cmath>

class Polygon {
protected:
    double side;

public:
    Polygon(double side) : side(side) {}

    // Es necesario declarar al destructor como virtual si la clase va a ser
    // heradada
    virtual ~Polygon() {}

    virtual double apotema() = 0;

    virtual double semiperimeter() = 0;

    double area() {
        return this->apotema() * this->semiperimeter();
    }
};

class Square : public Polygon {
public:
    Square(double side) : Polygon(side) {}

    double apotema() override {
        return this->side / 2.0;
    }

    double semiperimeter() override {
        return 2.0 * this->side;
    }
};

class Triangle : public Polygon {
public:
    Triangle(double side) : Polygon(side) {}

    double apotema() override {
        return (std::sqrt(3) / 6) * this->side;
    }

    double semiperimeter() override {
        return this->side * 1.5;
    }
};
```
