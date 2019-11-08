<template>
  <div class="lh-copy">
    <p>Flexplorer is an interactive app for exploring CSS Flexbox.</p>
    <p>Flexbox is a system for spacing and aligning HTML elements (flex items) within a container (flex container).</p>
    <p><span class="dn di-m di-l">To the right</span><span class="dn-ns">Below</span> is a flex container (<span class="bg-light-gray">light grey</span>) containing a number of flex items (<span class="bg-moon-gray">darker grey</span>).</p>
    <h4>Flex container</h4>
    <p>To make an HTML element a flex container add the CSS rule <code class="bg-light-gray">display: flex;</code>. Flexplorer's container already has this set.</p>
    <p>A flex container has other CSS properties such as <code class="bg-light-gray">flex-wrap</code> and <code class="bg-light-gray">justify-content</code> which affect how the flex items will be positioned. You can play with these properties in flexplorer (close this info panel to start!).</p>
    <p>You can also resize the flex container by dragging the container's resize handle at the bottom right. (Not all browsers support this unfortunately.)</p>
    <h4>Flex item</h4>
    <p>Flex items also have CSS properties (such as <code class="bg-light-gray">order</code> and <code class="bg-light-gray">flex-basis</code>). Click on an item to edit its properties.</p>
    <p>You can also add and remove items using the Add and Remove buttons near the bottom of the control panel.</p>
    <p>Text within a flex item can be edited by clicking the item and typing. This allows you to experiment with different amounts of content within each item.</p>
    <h4>Help on flexbox</h4>
    <p>If none of this makes any sense to you I recommend reading CSS Trick's <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" class="link dim silver">tutorial</a>, MDN's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" class="link dim silver">guide</a> or if you're feeling brave the <a href="https://www.w3.org/TR/css-flexbox-1/" class="link dim silver">W3C spec</a>. Hopefully once you've understood the basics this explorer will deepen your understanding.</p>
    <h4>About</h4>
    <p>Flexplorer was built for fun by <a href="https://petercook.dev" class="link dim silver">Peter Cook</a>. It's <a href="https://github.com/petercdev/flexplorer" class="link dim silver">open source</a> and contributions and comments are welcome.</p>
  </div>
</template>
