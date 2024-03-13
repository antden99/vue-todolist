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
                    done: true,
                },
                {
                    text: "Banana",
                    done: true,
                },
                {
                    text: "Pera",
                    done: true,
                },
                {
                    text: "Prezzemolo",
                    done: true,
                },
            ]
        }

    },



}).mount("#app")