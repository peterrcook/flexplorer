var store = {
    state: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'normal',
        alignContent: 'normal',

        controlSizeOfContainer: true,

        items: [
            {
                id: 0,
                text: "Item 1"
            },
            {
                id: 1,
                text: "Item 2"
            },
            {
                id: 2,
                text: "Item 3"
            },
            {
                id: 3,
                text: "Item 4"
            },
            {
                id: 4,
                text: "Item 5"
            }
        ]
    },
    setItem(key, value) {
        this.state[key] = value;
    },
    addItem() {
        var newId = this.state.items.length;
        this.state.items.push({
            id: newId,
            text: "Item " + (newId + 1)
        });
    },
    removeItem() {
        this.state.items.pop();
    }
}

export default store;
