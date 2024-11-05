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

    double apotema() {
        return this->side / 2.0;
    }

    double semiperimeter() {
        return 2.0 * this->side;
    }
};

class Triangle : public Polygon {
public:
    Triangle(double side) : Polygon(side) {}

    double apotema() {
        return (std::sqrt(3) / 6) * this->side;
    }

    double semiperimeter() {
        return this->side * 1.5;
    }
};
```
