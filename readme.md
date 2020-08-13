# React Layout

- **Drop-in**. No config, Provider or other setup required. Use them where you need them.
- **Responsive**. Each layout is built to adapt to smaller screen sizes. Instead of fixed @media breakpoints, our components work more like [Container Queries](https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/) and adapt their layout based on their own width.
- **Extremely small**. Components are very small in size, so they don’t add bundle overhead. Plus, React Layout has no dependencies.
- **Customize and abstract however you want**. You control the style and behavior of everything. React Layout does not contain any styles beside necessary layout CSS.
- **Zero config**. Tweak style parameters and spacing rhythm via CSS Variables (a.k.a. CSS Custom Properties). No complicated setup.


React Layout focuses on providing simple layout *primitives* which make it possible to build all kinds of layouts, without writing much JS or CSS (or at all). This way you rarely have to manually write CSS Flex rules or fiddle with margin or @media breakpoints.

**Layout components manage the layout and spacing for their direct children.**


## Install

`npm install @quantargo/react-layout`


## Usage

React Layout doesn’t need any configuration out-of-the-box.

To use e.g. a vertical stack for consistent spacing, import the LayoutVStack component and place children inside it:

``` js
// TBD: Example with simple LayoutVStack
```

Use the `spacing` prop to customize the amount of space between the children. This, together with nesting Stacks is a very powerful technique to create good looking and consistent components.

Similar to the vertical LayoutVStack, there is a LayoutHStack for horizontal layouts. LayoutHStack provides a `collapseAt`. This ensures the layout collapses to a vertical one on narrow screens:

``` jsx
function MySection () {
  return (
    <LayoutHStack
      collapseAt='46em' // Children will collapse into a vertical layout when they reach 46em
      gap={5}
    >
      <LayoutVStack>
        <h4>Heading 1</h4>
        <p>
          Some text
        </p>
      </LayoutVStack>

      <LayoutVStack>
        <h4>Heading 2</h4>
        <p>
          Some text
        </p>
      </LayoutVStack>

      <LayoutVStack>
        <h4>Heading 3</h4>
        <p>
          Some text
        </p>
      </LayoutVStack>
    </LayoutHStack>
  )
}

```


## Available Components

**LayoutFlex** -> Direct CSS Flex abstraction

**LayoutAuto** -> Implements gap prop via the [negative-margin-technique](https://every-layout.dev/layouts/cluster/). 

**LayoutHStack** -> Horizontal stack; Adds `collapseAt` prop, via the [Holy Albatros technique](https://heydonworks.com/article/the-flexbox-holy-albatross/)

**LayoutVStack** -> Vertical stack


## Configuration

React Layout doesn’t need any configuration out-of-the-box. The components should Just Work.

Some components accept spacing or gap props to control the flow of the layout. These are defined as an integer and the default for `1` is `1rem`. You can customize this relationship via the **`--rl-gap-size`** CSS variable. You can change it globally (e.g. on the `html` element) or locally:

``` css
.smaller-spacings {
  /* All child elements will have half the spacing/gap */
  --rl-gap-size: 0.5em
}
```

**—-rl-gap-size** -> Baseline multiplication unit for spacing/gap props; Defaults to 1em
