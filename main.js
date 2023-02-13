let menu = fetch("menu.json")
    .then((response) => response.json())
    .then((data) => {
        menu = data;
        console.log(menu)
    })
    .then((ingPrice) => {
        return fetch("ingredientsPrice.json")
            .then((response) => response.json())
            .then((ingPrice) => {
                ingredientsPrice = ingPrice;
                console.log(ingredientsPrice)
            });
    })
    .then((costPrice) => {
        menu.forEach((element) => {
            let cost = element.ingredients.reduce((sum, item) => {
                return sum + ingredientsPrice[item]
            }, 0)
            costPrice = cost;
            console.log(costPrice);
        });
    })
    .then((costSumFunc) => {
        let costSum = menu.map((menuItem) => {
            let costPrice = menuItem.ingredients.reduce((sum, item) => {
                return sum + ingredientsPrice[item]
            }, 0)
            let newMenuItem = Object.assign({}, menuItem);
            newMenuItem.cost = costPrice;
            return newMenuItem;
            costSumFunc = costSum;
        });
        console.log(costSum)
    });