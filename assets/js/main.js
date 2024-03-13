console.log("tutto ok");

const { createApp } = Vue;

createApp({
    data() {
        return {
            listTodo: [
                {
                    text: "Melanzana",
                    done: true,
                },
                {
                    text: "Cipolla",
                    done: false,
                },
                {
                    text: "Banana",
                    done: true,
                },
                {
                    text: "Pera",
                    done: false,
                },
                {
                    text: "Prezzemolo",
                    done: true,
                },
            ],
            areaInput: "",

        }

    },
    methods: {
        remove(index) {
            //faccio il console log per vedere la stringa rimosso e su quale elemento sto cliccando la X tramite l'indice
            console.log("rimosso", index);
            //richiamo il metodo splice per rimuovere l'elemento dall'array listTodo
            this.listTodo.splice(index, 1)
        },
        addTodo() {
            console.log("aggiungo questa todo", this.areaInput)
            if (this.areaInput.length > 3) {
                const newTodo = {
                    text: this.areaInput,
                    done: false,
                };                

                //faccio il console log del nuovo oggetto
                console.log(newTodo)
                //assegno il nuovo oggetto all'inizio della lista Todo utilizzando unshift
                this.listTodo.unshift(newTodo);
                // svuoto area input
                this.areaInput=""
                //controllo la nuova lista
                console.log(this.listTodo)
            }
        }
    },




}).mount("#app")

