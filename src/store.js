var store = {
    state: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'normal',
        alignContent: 'normal',

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
                text: "Lorem ipsum more text more text"
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
    }
}

export default store;
