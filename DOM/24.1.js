// You are given a function, Square, that takes four parameters, a,
// b, c, d, denoting the length of the square edges.
// Using prototype properties, add a method to Square named
// isSquare that prints true if a Square object has equal edges
// and false if they are unequal.
// Here is the Square function:


function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }


    Square.prototype.isSquare = function() {
        return this.a==this.b==this.c==this.d;
    };

    const s1 = new Square(1,2,3,4);
    console.log(s1.isSquare());

    
    const s2 = new Square(1,1,1,1);
    console.log(s2.isSquare());