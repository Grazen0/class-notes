```cpp
class Dog {
private:
	std::string name;
	std::string breed;

public:
	// Constructor de la clase
	Dog(std::string name, std::string breed) : name(name), breed(breed) {
		std::cout << name << " ha nacido." << std::endl;
	}

	void bark() {
		std::cout << this->name << " dice \"Guau!\"" << std::endl;
	}

	std::string get_name() {
		return this->name;
	}

	std::string get_breed() {
		return this->breed;
	}

	// Se ejecuta cuando una instancia se borra de la memoria
	~Dog() {
		std::cout << this->name << " ha dejado de existir" << std::endl;
	}
};

Dog my_dog("Juan", "Husky");
std::cout << "Mi perro se llama " << my_dog.get_name() << std::endl;
my_dog.bark();
```

Suele ser una buena práctica poner **atributos en privado** y **métodos en público**.

## Modelo UML

Las clases se suelen representar de forma abstracta en un diagrama como el siguiente:

![[diagrama uml.png]]