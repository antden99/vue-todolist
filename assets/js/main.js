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



}).mount("#app")