const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    ,
    get appetizers() {
   
    },
    set appetizers(appetizerIn) {
   
    },
    get mains() {
   
    },
    set mains(appetizerIn) {
   
    },
    get mains() {
   
    },
    set mains(appetizerIn) {
   
    },
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish); 
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() + dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse("appetizers");
      const main = this.getRandomDishFromCourse("mains");
      const dessert = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}  and the total price is ${totalPrice}`;
    }
  };
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'fried chicken', 8.25);
  menu.addDishToCourse('appetizers', 'Salad', 3.25);
  
  menu.addDishToCourse('mains', 'C Salad', 4.25);
  menu.addDishToCourse('mains', 'local', 3.5);
  menu.addDishToCourse('mains', 'foreign', 6.25);
  
  menu.addDishToCourse('desserts', 'Caesar Salad', 2.56);
  menu.addDishToCourse('desserts', 'don simon', 1.25);
  menu.addDishToCourse('desserts', 'green', 2.15);
  
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  
   
  