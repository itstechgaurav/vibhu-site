class scrol {
    constructor(c, t, ac = "text-prime") {
        this.e = document.querySelectorAll("a" + c);
        this.er = [];
        this.c = c;
        this.t = t;
        this.ac = ac;
        this.main();
    }

    main() {
        let it = this;
        it.e.forEach(function (itm) {
            let ref = itm.getAttribute("href") + "";
            if (ref.split("").length && ref.split("")[0] === "#") {
                this.er.push(itm);
                itm.addEventListener("click", this.evt.bind(this));
            }
        }.bind(this));
    }

    evt(e) {
        e.preventDefault();
        let ref = e.target.getAttribute("href") + "";
        ref = ref.replace("#", "");
        let tr = document.getElementById(ref);
        $("html, body").animate({
            scrollTop: tr.offsetTop
        }, this.t);
        this.resetActive(e.target);
        return false;
    }

    resetActive(crnt) {
        this.er.forEach(function (it) {
            it.classList.remove(this.ac);
        }.bind(this));
        crnt.classList.add(this.ac);
    }


}

new scrol(".link", 600);
