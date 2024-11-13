## Funciones amigas

Las relaciones de **amistad** entre clases permiten a ciertas clases selectas acceder a los atributos privados de otra clase.

Algunas características importantes:

- La amistad **no es transitiva**.
- La amistad **no se hereda**.
- La amistad **no es simétrica**.

## Sobrecarga de operadores

Nos permite implementar operadores como `+`, `-`, `*`, `/` y `<<` en nuestras propias clases.

Para implementar el operador `<<` en `std::ostream` (de modo que podamos imprimir una clase), se necesita marcar al método como amigo desde la clase en cuestión.

```cpp
class Complex {
private:
	double re;
	double im;

public:
	Complex(const double re, const double im) : re(re), im(im) {}

	double get_re() { return this->re; }

	double get_im() { return this->im; }

	Complex operator+(const Complex& other) {
		return Complex(this->re + other.re, this->im + other.im);
	}

	Complex operator-(const Complex& other) {
		return Complex(this->re - other.re, this->im - other.im);
	}

	Complex operator*(const Complex& other) {
		return Complex(
			this->re * other.re - this->im * other.im,
			this->re * other.im + this->im * other.re
		);
	}

	friend std::ostream& operator<<(std::ostream& out, const Complex& z);
};

std::ostream& operator<<(std::ostream& out, const Complex& z) {
	out << z.re << " + " << z.im << "i";
	return out;
}

Complex a(2, 3);
Complex b(-1, 4);
Complex c = a + b;
Complex d = a * b;

std::cout << "Suma: " << c << std::endl;
std::cout << "producto: " << d << std::endl;
```