var store = {
    state: {
        // Flex CSS rules
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'normal',
        alignContent: 'normal',

        controlSizeOfContainer: true,
        selectedItem: null,

        items: [
            {
                id: 0,
                text: "Item 1",
                order: 0,
                flexShrink: 1,
                flexGrow: 0,
                flexBasis: 'auto',
                alignSelf: 'auto'
            },
            {
                id: 1,
                text: "Item 2",
                order: 0,
                flexShrink: 1,
                flexGrow: 0,
                flexBasis: 'auto',
                alignSelf: 'auto'
            },
            {
                id: 2,
                text: "Item 3",
                order: 0,
                flexShrink: 1,
                flexGrow: 0,
                flexBasis: 'auto',
                alignSelf: 'auto'
            },
            {
                id: 3,
                text: "Item 4",
                order: 0,
                flexShrink: 1,
                flexGrow: 0,
                flexBasis: 'auto',
                alignSelf: 'auto'
            },
            {
                id: 4,
                text: "Item 5",
                order: 0,
                flexShrink: 1,
                flexGrow: 0,
                flexBasis: 'auto',
                alignSelf: 'auto'
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
            text: "Item " + (newId + 1),
            order: 0,
            flexShrink: 1,
            flexGrow: 0,
            flexBasis: 'auto',
            alignSelf: 'auto'
        });
    },
    removeItem() {
        this.state.items.pop();
    },
    selectItem(i) {
        this.state.selectedItem = i;
    },
    setSelectedItemValue(id, value) {
        // console.log('setting', id, 'of item', this.state.selectedItem, 'to', value);
        this.state.items[this.state.selectedItem][id] = value;
    }
}

export default store;
