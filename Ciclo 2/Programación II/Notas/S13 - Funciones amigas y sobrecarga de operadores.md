## Funciones amigas

Las relaciones de **amistad** entre clases permiten a ciertas clases selectas acceder a los atributos privados de otra clase.

Algunas características importantes:

- La amistad **no es transitiva**.
- La amistad **no se hereda**.
- La amistad **no es simétrica**.

## Sobrecarga de operadores

Nos permite implementar operadores como `+`, `-`, `*`, `/` y `<<` en nuestras propias clases.

```cpp
class Complex {
public:
	double re;
	double im;

	Complex(const double re, const double im) : re(re), im(im) {}

	Complex operator+(const Complex& other) {
		return Complex(this->re + other.re, this->im + other.im);
	}

	friend class std::ostrea
};

Complex a(2, 3);
Complex b(-1, 4);
Complex c = a + b;

```