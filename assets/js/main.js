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
            ]
        }

    },
    methods:{
        remove(index){
            //faccio il console log per vedere la stringa rimosso e su quale elemento sto cliccando la X tramite l'indice
            console.log("rimosso",index);
            //richiamo il metodo splice per rimuovere l'elemento dall'array listTodo
            this.listTodo.splice(index,1)
        }
    }



}).mount("#app")