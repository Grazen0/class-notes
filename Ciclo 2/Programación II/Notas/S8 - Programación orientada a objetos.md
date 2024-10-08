```cpp
class Dog 
public:
	std::string breed;

	constructor(std::string name) :  {
		std::cout << name << " ha nacido." << std::endl;
	}

	void bark() {
		std::cout << this->name << " dice \"Guau!\"" << std::endl;
	}
};

Dog my_dog("Juan");
my_dog.bark();
```