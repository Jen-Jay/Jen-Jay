/* Assignment:
•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.
*/



class Items {
    constructor(name){
        this.name = name;
        
    }

    describe() {
        return `${this.name}`;

    }
}
//Each order will have a name, each order will have an array of menu items attached to it, that's the name and
class Orders {
    constructor(name) {
        this.name = name;
        this.items = [];
        }
// This will add items to orders
addItems(item) {
    if (item instanceof Items) {
       this.items.push(item);
    }   else {
       throw new Error(`This in not an orderable item. ${Items}`);
    }
   }

   describe() {
       return `${this.name} is a great choice.`;
   }

}

//This is the actual menu app that will run
class Menu {
    constructor() {
        this.orders = [];
        this.selectedOrder = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrder();
                    break;
                default:
                    selection =0;    
            }
            selection = this.showMainMenuOptions();
        }
        alert('Thank you, come again!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new order
        2) view order
        3) delete order
        4) display all orders
        `);
    }
    
    showOrderMenuOptions(orderInfo) {
        return prompt(`
        0) back
        1) add item to order
        2) delete item from order
        --------------------------
        ${orderInfo}
        `);
    }

    displayOrder() {
        let orderString = '';//blank string to build on as orders are added
        for (let i = 0; i < this.orders.length; i++) {
           orderString += i + ') ' + this.orders[i].name + '\n'; //adds order names and a new line
        }
        alert(orderString);
    }
    
    createOrder() {
        let name = prompt('What name would you like to put on your order?');
        this.orders.push(new Orders(name));
        console.log(this.orders);
    }
    deleteOrder() {
        let index = prompt ('Enter the index of the order you wish to delete:');
        if (index > -1 && index < this.orders.length) {
            this.orders.splice(index, 1);
        }
    }
    viewOrder() {
        let index = prompt('Enter the index of the order you wish to view:');
        if (index > -1 && index < this.orders.length) {
            this.selectedOrder = this.orders[index];//validates the index, changes the null for you?
            //console.log(this.selectedOrder);
            let description = 'Order Name: ' + this.selectedOrder.name + '\n';
//This can view all the orders not ask for a which one to view all orders, create an  alert 'all your orders'
            for (let i = 0; i < this.selectedOrder.items.length; i++) {
                description += i + ') ' + this.selectedOrder.orders[i].name + ' - ' + this.selectedOrder.orders
                
                [i] + '\n';
            }
            //under displays the order and options for the order
            let selection = this.showOrderMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createItem();
                    break;
                case '2':
                    this.deleteItem();

            }
        }
    }
    createItem() {
        let name = prompt('What would you like to order?');
        this.selectedOrder.items.push(new Items(name));
    }
    deleteItem() {
        let index = prompt('Enter the index of the item you wish to delete:');//then we validate
        if (index > -1 && index < this.selectedOrder.items.length) {
            this.selectedOrder.items.splice(index,1);//removes only 1 element
        }
    }
} 

let menu = new Menu();
menu.start();