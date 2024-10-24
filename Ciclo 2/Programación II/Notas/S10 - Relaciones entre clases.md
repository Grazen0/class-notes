Existen 4 tipos de relaciones entre clases:

- **Asociación:** "A tiene un B"
- **Composición:**
- **Agregación**
- **Herencia:** "A es una subclase de B"
## Asociación

> "A tiene un B"

A y B son **independientes**, pero tienen cierta relación.

En código, esto implica que A y B se crean **independientemente**.

```cpp
class Order {
public:
	int quantity;

	Order(int quantity) : quantity(quantity) {}
};

class Person {
	Order* order;

public:
	void set_order(Order* order) {
		this->order = order;
	}

	void print_order() {
		std::cout << "Pedido de " << this->order->quantity << std::endl;
	}
};

Person john;
Order pizza(2);

john.set_order(&pizza);
john.print_order();
```

## Agregación

> "A tiene varios B"
