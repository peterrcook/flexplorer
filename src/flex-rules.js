export default {
    /* FLEX CONTAINER */
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly'],

    /* align items along cross-axis */
    alignItems: ['normal', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline'],

    /* if multiline (due to wrapping) define how lines are distributed along cross-axis */
    alignContent: ['normal', 'flex-start', 'flex-end', 'center', 'stretch', 'space-around', 'space-between'],

    /* FLEX ITEMS */
    alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
}
