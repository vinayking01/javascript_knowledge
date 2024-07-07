## Class

### #Rules 

1. Class Declaration: - 
- Use the class keyword followed by the class name. 
- Optionally, extend another class using extends.

    ```
    class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
    }

    class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
    }

    const dog = new Dog('Buddy');
    dog.speak(); // Output: Buddy barks.

    ```

2. Constructor Method:
- Use constructor to initialize properties when an instance is created.
- Always call super() if the class extends another class to access the parent's properties and methods.

    ```
        class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    }

    const myCar = new Car('Toyota', 'Camry');
    ```

3. Class Methods:
- Define methods inside the class to add behavior.
    ```
    class Counter {
    constructor() {
        this.count = 0;
    }
    ```


4.Class Properties:
- In JavaScript classes, you cannot executable code, such as variable declarations, directly within the class body. Executable code must be placed inside methods. directly inside the class body is that the class body is not designed to execute code.

- In JavaScript classes, when you extend a class and the child class does not define its own property with the same name as a property in the parent class, the child class instances will inherit and use the property from the parent class. However, if the child class does define its own property with the same name, it will override the parent class's property for instances of the child class.

5. Inheritance:
- Use extends to create a subclass (child) from a superclass (parent).


## Note - 
```
1. this keyword is essential for referring to the current instance of an object within a class or method. It allows you to access and modify the object's properties and methods from within the class or its instances.

2. when you extend a class using the extends keyword, it's essential to call super() in the constructor of the child class. This is crucial because it initializes the parent class's properties and sets up the object state that the child class inherits.

3. In JavaScript classes, when you extend a class and the child class does not define its own property with the same name as a property in the parent class, the child class instances will inherit and use the property from the parent class. However, if the child class does define its own property with the same name, it will override the parent class's property for instances of the child class.
```