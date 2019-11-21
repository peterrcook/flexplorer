export default {
    container: {
        flexDirection: {
            id: 'flexDirection',
            label: 'flex-direction',
            values: ['row', 'row-reverse', 'column', 'column-reverse']
        },
        flexWrap: {
            id: 'flexWrap',
            label: 'flex-wrap',
            values: ['nowrap', 'wrap', 'wrap-reverse']
        },
        justifyContent: {
            id: 'justifyContent',
            label: 'justify-content',
            values: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'/*, 'space-evenly'*/]
        },
        alignItems: {
            id: 'alignItems',
            label: 'align-items',
            values: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline']
        },
        alignContent: {
            id: 'alignContent',
            label: 'align-content',
            values: ['stretch', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between']
        }
    },

    items: {
        alignSelf: {
            id: 'alignSelf',
            label: 'align-self',
            values: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
        }
    }
}
