export default {
    container: [
        {
            id: 'flexDirection',
            label: 'flex-direction',
            values: ['row', 'row-reverse', 'column', 'column-reverse']
        },
        {
            id: 'flexWrap',
            label: 'flex-wrap',
            values: ['nowrap', 'wrap', 'wrap-reverse']
        },
        {
            id: 'justifyContent',
            label: 'justify-content',
            values: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'/*, 'space-evenly'*/]
        },
        {
            id: 'alignItems',
            label: 'align-items',
            values: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline']
        },
        {
            id: 'alignContent',
            label: 'align-content',
            values: ['stretch', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between']
        }
    ],

    items: [
        {
            id: 'alignSelf',
            label: 'align-self',
            values: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
        }
    ]
}
