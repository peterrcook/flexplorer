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
                text: "Lorem ipsum 1"
            },
            {
                id: 1,
                text: "Lorem ipsum 2"
            },
            {
                id: 2,
                text: "Lorem ipsum 3"
            },
            {
                id: 3,
                text: "Lorem ipsum 4"
            },
            {
                id: 4,
                text: "Lorem ipsum 5"
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
            text: "Lorem ipsum " + (newId + 1)
        });
    },
    removeItem() {
        this.state.items.pop();
    }
}

export default store;
