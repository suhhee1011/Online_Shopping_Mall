const productDB = {

    fakeDB: [],
    init() {
        this.fakeDB.push({ name: "Carhartt Men's Acrylic Watch Hat", price: 16.99, source: "Carhartt Men's Acrylic Watch Hat.PNG", category: "Men's Clothes", Bestseller: "yes" });
        this.fakeDB.push({ name: "2-pack Tech Stretch Racerback Tank Top", source: "top.PNG", price: 24, category: "Woman's Clothes", Bestseller: "yes" });
        this.fakeDB.push({ name: "ALONG FIT Yoga Pants with Side Pockets", price: 25.95, source: "leggings.PNG", category: "Woman's Clothes", Bestseller: "yes" });
        this.fakeDB.push({ name: "20% Vitamin C Serum - 60 ml ", price: 23.69, source: "vitaminc.PNG", category: "Beauty and personal care", Bestseller: "no" });
        this.fakeDB.push({ name: "Smart speaker with Alexa", price: 99.99, source: "speaker.PNG", category: "Home and Kitchen", Bestseller: "yes" });
        this.fakeDB.push({ name: "FOSHIO Car Vinyl Wrap Window Tint Tools Kit", price: 22.99, source: "cartoolkit.PNG", category: "Automotive", Bestseller: "yes" });
        this.fakeDB.push({ name: "UNO Card Game", price: 6.93, source: "uno.PNG", category: "Toys and Games", Bestseller: "no" });

    },
    getAllProducts() {
        return this.fakeDB;
    },
    getBestSellers() {
        let fakeDB2 = [];
        let count = 0;
        for (let i = 0; i < this.fakeDB.length; i++) {

            if (this.fakeDB[i].Bestseller == "yes") {

                fakeDB2.push({ name: this.fakeDB[i].name, price: this.fakeDB[i].price, source: this.fakeDB[i].source, category: this.fakeDB[i].category, Bestseller: this.fakeDB[i].Bestseller });
                count++;
            }

        }

        return fakeDB2;
    },
    getCategories() {
        let fakeDB3 = [];
        let count = 1;
        let check = true;
        fakeDB3.push({ name: this.fakeDB[0].name, price: this.fakeDB[0].price, source: this.fakeDB[0].source, category: this.fakeDB[0].category, Bestseller: this.fakeDB[0].Bestseller });
        for (let i = 1; i < this.fakeDB.length; i++) {
            for (let j = 0; j < fakeDB3.length; j++) {
                if (this.fakeDB[i].category != fakeDB3[j].category) {
                    check = false;
                }
            }
            if (!check && count < 4) {
                fakeDB3.push({ name: this.fakeDB[i].name, price: this.fakeDB[i].price, source: this.fakeDB[i].source, category: this.fakeDB[i].category, Bestseller: this.fakeDB[i].Bestseller });
                count++;

            }


        }
        return fakeDB3;
    }

}
productDB.init();
module.exports = productDB;