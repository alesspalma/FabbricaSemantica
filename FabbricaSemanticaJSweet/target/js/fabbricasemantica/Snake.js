/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @param {HTMLCanvasElement} canvas canvas su cui viene disegnato
     * @class
     * @author aless
     */
    class Snake {
        constructor(canvas) {
            /**
             * Numero che rappresenta la difficolta', piu'
             * e' alto piu' il serpente andra' veloce
             */
            /*private*/ this.difficulty = 7;
            /**
             * Lista di cibi che appaiono su schermo, ogni cibo sara' del colore
             * della stringa nella posizione corrispondente, ma nell'array COLORS
             */
            /*private*/ this.foods = ([]);
            /**
             * Label che contiene la definizione corrente
             */
            /*private*/ this.definition = fabbricasemantica.HTMLElementBuilder.getEmptyLabel(["font-weight", "bold"]);
            /**
             * Lista di label che conterranno le possibili risposte alla definizione
             * data, solo una di queste sara' giusta ogni label sara' del colore posto nella stessa posizione
             * ma nell'array COLORS
             */
            /*private*/ this.answers = ([]);
            if (this.head === undefined)
                this.head = null;
            if (this.points === undefined)
                this.points = 0;
            if (this.canvas === undefined)
                this.canvas = null;
            if (this.cxt === undefined)
                this.cxt = null;
            if (this.direction === undefined)
                this.direction = null;
            this.canvas = canvas;
            for (let index123 = 0; index123 < Snake.COLORS_$LI$().length; index123++) {
                let col = Snake.COLORS_$LI$()[index123];
                /* add */ (this.answers.push(fabbricasemantica.HTMLElementBuilder.getEmptyLabel$java_lang_String_A(["font-weight", "bold", "color", col])) > 0);
            }
            let divQuestion = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divQuestion).css("position", "relative");
            $(divQuestion).css("left", "17.5%");
            $(divQuestion).css("width", "65%");
            $(divQuestion).append(this.definition);
            for (let index124 = 0; index124 < this.answers.length; index124++) {
                let label = this.answers[index124];
                $(divQuestion).append(label);
            }
            $("body").append(divQuestion);
            this.nextQuestion();
            let moving = () => {
                this.move();
                this.getContest().clearRect(0, 0, canvas.width, canvas.height);
                this.draw();
                this.drawFood();
                if (this.dead()) {
                    window.clearInterval(Snake.animation);
                    alert("Game over. Aggiorna la pagina per rigiocare.");
                }
            };
            Snake.animation = window.setInterval(moving, (1000 / this.difficulty | 0));
            window.addEventListener("keydown", (ev) => {
                let evKey = ev;
                switch (((evKey.keyCode | 0))) {
                    case 38:
                        {
                            evKey.preventDefault();
                            this.up();
                        }
                        ;
                        break;
                    case 37:
                        {
                            evKey.preventDefault();
                            this.left();
                        }
                        ;
                        break;
                    case 40:
                        {
                            evKey.preventDefault();
                            this.down();
                        }
                        ;
                        break;
                    case 39:
                        {
                            evKey.preventDefault();
                            this.right();
                        }
                        ;
                        break;
                    case 87:
                        {
                            evKey.preventDefault();
                            this.up();
                        }
                        ;
                        break;
                    case 65:
                        {
                            evKey.preventDefault();
                            this.left();
                        }
                        ;
                        break;
                    case 83:
                        {
                            evKey.preventDefault();
                            this.down();
                        }
                        ;
                        break;
                    case 68:
                        {
                            evKey.preventDefault();
                            this.right();
                        }
                        ;
                        break;
                }
            });
            this.head = new fabbricasemantica.Square(45, 0);
            this.cxt = canvas.getContext("2d");
            this.direction = "right";
            for (let i = 0; i < 4; i++) {
                this.head.addSquare();
            }
            this.draw();
        }
        static COLORS_$LI$() { if (Snake.COLORS == null)
            Snake.COLORS = ["#C031C7", "red", "green", "blue"]; return Snake.COLORS; }
        ;
        /**
         * Ritorna il punteggio
         * @return {string} punteggio
         */
        getPoints() {
            return "Punteggio: " + this.points;
        }
        /**
         * Setta la difficolta'
         * @param {number} n difficolta'
         */
        setDifficulty(n) {
            this.difficulty = n;
        }
        /**
         * Ritorna il contesto del canvas
         * @return {CanvasRenderingContext2D} canvas context
         */
        getContest() {
            return this.cxt;
        }
        /**
         * Disegna il serpente
         */
        draw() {
            this.head.draw(this.cxt);
        }
        /**
         * Richiede alla servlet la prossima definizione con
         * le prossime possibili risposte
         */
        nextQuestion() {
            this.populateFoods();
            $.getJSON(Snake.NEXT_EX_SRV, "task=SNAKE_WORD_VALIDATION", (result, a, ctx) => {
                let json = result;
                let options = ([]);
                $(this.definition).text("Definition: " + (json["description"]));
                /* add */ (options.push("- " + (json["opt1"])) > 0);
                /* add */ (options.push("- " + (json["opt2"])) > 0);
                /* add */ (options.push("- " + (json["opt3"])) > 0);
                let indiceCasuale = (Math.floor(Math.random() * this.answers.length) | 0);
                for (let i = 0; i < this.answers.length; i++) {
                    {
                        if (i === indiceCasuale) {
                            $(/* get */ this.answers[indiceCasuale]).text("- " + (json["answer"]));
                            /* get */ this.foods[indiceCasuale].setAnswer();
                        }
                        else
                            $(/* get */ this.answers[i]).text(/* remove */ options.splice(0, 1)[0]);
                    }
                    ;
                }
                return null;
            });
        }
        /**
         * Disegna i cibi e controlla se un cibo e stato
         * mangiato
         */
        drawFood() {
            for (let i = 0; i < this.foods.length; i++) {
                {
                    let f = this.foods[i];
                    f.draw(this.cxt);
                    if (this.hittedFood(f)) {
                        this.eat(f, i);
                        this.nextQuestion();
                    }
                }
                ;
            }
        }
        /**
         * Elimina i cibi e ne ricrea di nuovi
         * @private
         */
        /*private*/ populateFoods() {
            /* clear */ (this.foods.length = 0);
            /* addAll */ ((l1, l2) => l1.push.apply(l1, l2))(this.foods, fabbricasemantica.Food.getInstances(this.canvas, Snake.COLORS_$LI$()));
        }
        /**
         * Salva la risposta scelta e , se giusta, aumenta punteggio e lunghezza serpente
         * @param {fabbricasemantica.Food} f cibo mangiato
         * @param {number} i indice del cibo mangiato all'interno della lista food
         */
        eat(f, i) {
            $.get(Snake.TASK_SRV, "definition=" + this.definition.textContent + "&userAnswer=" + this.answers[i].textContent + "&isCorrect=" + f.isAnswer());
            if (f.isAnswer()) {
                this.points++;
                this.head.addSquare();
                document.getElementById("counter").textContent = this.getPoints();
            }
        }
        /**
         * Muove il serpente
         */
        move() {
            switch ((this.direction)) {
                case "up":
                    this.head.up();
                    break;
                case "down":
                    this.head.down();
                    break;
                case "right":
                    this.head.right();
                    break;
                case "left":
                    this.head.left();
                    break;
            }
        }
        /**
         * Controlla se il cibo e' stato mangiato dallo snake
         * @param {fabbricasemantica.Food} f cibo su cui effettuare il controllo
         * @return {boolean} true se e' stato mangiato, false altrimenti
         */
        hittedFood(f) {
            let ris = false;
            if (this.head.x === f.x && this.head.y === f.y)
                ris = true;
            return ris;
        }
        /**
         * Controlla che il serpente non abbia colpito il bordo del canvas
         * @return {boolean} true se ha colpito il bordo, false altrimenti
         */
        hittedBorder() {
            return this.head.x > this.canvas.width - fabbricasemantica.DisplayElement.SIDE || this.head.x < 0 || this.head.y < 0 || this.head.y > this.canvas.height - fabbricasemantica.DisplayElement.SIDE;
        }
        /**
         * Controlla che il serpente sia morto
         * @return {boolean} true se e' morto, false se e' vivo
         */
        dead() {
            return this.head.hit(this.head) || this.hittedBorder();
        }
        /**
         * Cambia la direzione verso sopra
         */
        up() {
            if (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.direction, "down"))
                return;
            this.direction = "up";
        }
        /**
         * Cambia la direzione verso il basso
         */
        down() {
            if (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.direction, "up"))
                return;
            this.direction = "down";
        }
        /**
         * Cambia la direzione verso destra
         */
        right() {
            if (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.direction, "left"))
                return;
            this.direction = "right";
        }
        /**
         * Cambia la direzione verso sinistra
         */
        left() {
            if (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.direction, "right"))
                return;
            this.direction = "left";
        }
    }
    /**
     * URL servlet che fornisce il prossimo esempio
     */
    Snake.NEXT_EX_SRV = "nextExample.jsp";
    /**
     * URL servlet che salva le risposte dell'utente
     */
    Snake.TASK_SRV = "snakeWordValidation.jsp";
    /**
     * Campo che incapsula il framerate del videogioco, gli sara' assegnata una funzione
     * che fa muovere il serpente e controlla tutte le sue azioni
     */
    Snake.animation = 0.0;
    fabbricasemantica.Snake = Snake;
    Snake["__class"] = "fabbricasemantica.Snake";
})(fabbricasemantica || (fabbricasemantica = {}));
fabbricasemantica.Snake.COLORS_$LI$();
