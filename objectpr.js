const product={
    name: 'aloo',
    code: 'GD31',
    cost: 34,
    type: 'veg'
}

function createProduct(name,code,cost, type) {
    return{
        name: name,
        code: code,
        cost: cost,
        type: type
    }
}

const Lays= createProduct('lays', 'JD34', 12, 'veg');

function Product(name, code, cost, type){
    this.name= name;
    this.code= code;
    this.cost= cost;
    this.type= type;
    this.discount= function(){
        return cost* 0.5;
    }
}

const yippee= new Product ('noodles', 'SD53', 300000, 'non-veg')

//yippee.discount()
// paste this upper comment in the console to get the desired discounted price
