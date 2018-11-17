class gf {
    constructor(q) {
        this.eq = document.querySelectorAll(q);
        if (this.eq.length === 1) {
            this.e = this.eq[0];
        }
        this.res;
        return this;
    }

    css(o) {
        Object.keys(o).forEach(function (i) {
            this.e.style[i] = o[i];
        }.bind(this));
        return this;
    }

    attr(f) {
        console.log(f);
    }

    attr(f, s) {
        console.log(f, s);
    }
    
    log(e = true) {
        if(e) {
           console.log(this.e); 
        } else {
           console.log(this.res); 
        }
        return this;
    }
    
    every(callback) {
        this.e.forEach(function(t, i) {
           callback(t, i); 
        });
    }
    
    html(d = "") {
        if(d != "") {
            this.e.innerHTML = d;
        } else {
            if(!this.e.length) {
                this.res = this.e.innerHTML;
                return this.res;
            }
        }
    }
    
    addC(c) {
        this.eq.forEach(function(it) {
            it.classList.add(c);
        });
        return this;
    }
    
    remC(c) {
        this.eq.forEach(function(it) {
            it.classList.remove(c);
            console.log("Hello",it);
        });
        return this;
    }
}

window.$a = function ($abc) {
    return new gf($abc);
};


$a("#header");
