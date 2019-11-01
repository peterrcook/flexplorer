var store = {
    state: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    setItem(key, value) {
        this.state[key] = value;
    }
}

export default store;
