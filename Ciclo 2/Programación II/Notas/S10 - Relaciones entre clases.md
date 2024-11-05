Existen 4 tipos de relaciones entre clases:

- **Asociación:** "A tiene un B"
- **Composición:**
- **Agregación**
- **Herencia:** "A es una subclase de B"
## Asociación

> "A tiene un B"

A y B son **independientes**, pero tienen cierta relación.

![[asociacion.png]]

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

![[agregacion.png]]

Es similar a la asociación. De lo que entiendo, es lo mismo, pero existe una relación de "uno a varios".

## Composición

> "A tiene B", pero más fuerte

Es esencialmente una asociación donde **A es dueño de B**. Es decir, B no puede existir sin A.

![[composicion.png]]

## Herencia

Ver también: [[S12 - Polimorfismo]]
