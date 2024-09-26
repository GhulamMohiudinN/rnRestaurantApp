export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/categories/pizza-icon.png')
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/categories/hamburger.png')
    },
    {
        id: 3,
        name: 'Drink',
        image: require('../assets/images/categories/tropical-drink.png')
    },
    {
        id: 4,
        name: 'Fish',
        image: require('../assets/images/categories/tropical-fish.png')
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/categories/spaghetti.png')
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/categories/cupcake-emoji.png')
    },
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurant: [
        {
            id: 1,
            name: 'Papa JOhns',
            image: require('../assets/images/restaurants/pizza.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -122.4324,
            lat: 37.78825,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/dishes/pizza.jpeg')
                },
                {
                    id: 2,
                    name: 'Samosa',
                    description: 'Chicken samosa',
                    price: 10,
                    image: require('../assets/images/dishes/samosa.jpeg')
                },
                {
                    id: 3,
                    name: 'Burger',
                    description: 'Chicken Patty burger',
                    price: 10,
                    image: require('../assets/images/dishes/burger.jpeg')
                },
            ]
        },
        {
            id: 2,
            name: 'Papa Johns',
            image: require('../assets/images/restaurants/pizza.jpg'),
            description: 'Hot and spicy pizzas',
            lng: 38.2145602,
            lat: -85.5324269,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/dishes/pizza.jpeg')
                },
                {
                    id: 2,
                    name: 'Samosa',
                    description: 'Chicken samosa',
                    price: 10,
                    image: require('../assets/images/dishes/samosa.jpeg')
                },
                {
                    id: 3,
                    name: 'Burger',
                    description: 'Chicken Patty burger',
                    price: 10,
                    image: require('../assets/images/dishes/burger.jpeg')
                },
            ]
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/restaurants/pizza.jpg'),
            description: 'Hot and spicy pizzas',
            lng: 38.2145602,
            lat: -85.5324269,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/dishes/pizza.jpeg')
                },
                {
                    id: 2,
                    name: 'Samosa',
                    description: 'Chicken samosa',
                    price: 10,
                    image: require('../assets/images/dishes/samosa.jpeg')
                },
                {
                    id: 3,
                    name: 'Burger',
                    description: 'Chicken Patty burger',
                    price: 10,
                    image: require('../assets/images/dishes/burger.jpeg')
                },
            ]
        },
    ]
}