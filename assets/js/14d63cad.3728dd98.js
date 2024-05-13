"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[9731],{8206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>Y,contentTitle:()=>A,default:()=>P,frontMatter:()=>T,metadata:()=>I,toc:()=>N});var o=t(4848),s=t(8453),r=t(6540),a=t(4164),l=t(3104),i=t(6347),c=t(205),d=t(7485),u=t(1682),h=t(9466);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=m(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:t,groupId:o}),[u,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,h.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),b=(()=>{const e=i??u;return y({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var x=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=i[t].value;o!==s&&(d(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=b(e);return(0,o.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,o.jsx)(j,{...e,...n}),(0,o.jsx)(v,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,o.jsx)(w,{...e,children:p(e.children)},String(n))}const C={tabItem:"tabItem_Ymn6"};function k(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(C.tabItem,s),hidden:t,children:n})}const T={sidebar_position:6,sidebar_title:"Styled Components"},A="Using Styled Components",I={id:"web-mobile-app-dev/frontend/styled-components",title:"Using Styled Components",description:"What is Styled Components?",source:"@site/docs/web-mobile-app-dev/frontend/styled-components.md",sourceDirName:"web-mobile-app-dev/frontend",slug:"/web-mobile-app-dev/frontend/styled-components",permalink:"/redback-documentation/docs/web-mobile-app-dev/frontend/styled-components",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/web-mobile-app-dev/frontend/styled-components.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_title:"Styled Components"},sidebar:"tutorialSidebar",previous:{title:"Creating a new component",permalink:"/redback-documentation/docs/web-mobile-app-dev/frontend/new-components"},next:{title:"Using React Router",permalink:"/redback-documentation/docs/web-mobile-app-dev/frontend/react-router"}},Y={},N=[{value:"What is Styled Components?",id:"what-is-styled-components",level:2},{value:"Why use Styled Components?",id:"why-use-styled-components",level:2},{value:"What is a theme?",id:"what-is-a-theme",level:3},{value:"Why use CSS-in-JS for theming?",id:"why-use-css-in-js-for-theming",level:3},{value:"How to use Styled Components",id:"how-to-use-styled-components",level:2},{value:"For a new component",id:"for-a-new-component",level:3},{value:"Converting from CSS modules or plain CSS",id:"converting-from-css-modules-or-plain-css",level:3},{value:"Useful Links",id:"useful-links",level:2}];function V(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"using-styled-components",children:"Using Styled Components"}),"\n",(0,o.jsx)(n.h2,{id:"what-is-styled-components",children:"What is Styled Components?"}),"\n",(0,o.jsx)(n.p,{children:"Styled Components is a CSS-in-JS library that allows you to write CSS directly in your JavaScript files, co-located with the React component code that outputs the HTML and handles interactivity."}),"\n",(0,o.jsx)(n.h2,{id:"why-use-styled-components",children:"Why use Styled Components?"}),"\n",(0,o.jsx)(n.p,{children:"When using Styled Components, styling is scoped to the components you create with it. This means that you can write CSS that is specific to a component, and not have to worry about it affecting other components. You can also use variables to dynamically set styles."}),"\n",(0,o.jsx)(n.p,{children:"You might be thinking, but I can do that with CSS modules, or a basic global stylesheet! They're scoped to the component, and I can use CSS variables to set my theme colours! That's true, but a key advantage of Styled Components over plain CSS or CSS modules is in the realm of theming."}),"\n",(0,o.jsx)(n.h3,{id:"what-is-a-theme",children:"What is a theme?"}),"\n",(0,o.jsx)(n.p,{children:'With Styled Components, you can create a theme object that you can pass down to all your components. This allows us to create highly reusable components that will take on the styling of the website/app they\'re being used on without any changes to the component itself. For example, your theme might define the "primary" colour as blue, and all components that use the "primary" colour will be blue. If you decide to change the primary colour to red, you only need to change it in one place; and if another app using your component has a "primary" colour of yellow, the same component will appear yellow throughout that app. Likewise for typefaces, font sizes, spacing, and more.'}),"\n",(0,o.jsx)(n.h3,{id:"why-use-css-in-js-for-theming",children:"Why use CSS-in-JS for theming?"}),"\n",(0,o.jsx)(n.p,{children:"Yes, you can do most of the above by setting CSS variables in a global stylesheet, or using a pre-processor like SASS. Styled Components has been selected for our projects because it's a little simpler than using SCSS in our environment, and it's more powerful than CSS variables."}),"\n",(0,o.jsx)(n.p,{children:"Some examples of the power of CSS-in-JS are in the ability to perform calculations using variables, such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Setting a button's hover colour to 10% darker than its usual colour (without needing to know the colour in advance or calculate what hex code or RGB value 10% darker would be)"}),"\n",(0,o.jsxs)(n.li,{children:["Choosing whether to show black or white text on an element based on its background colour, without needing to know the background colour in advance or manually check the contrast ratio (the supplementary library ",(0,o.jsx)(n.a,{href:"https://polished.js.org/",children:'"Polished"'})," has utilities for this)"]}),"\n",(0,o.jsx)(n.li,{children:"Make other dynamic adjustments for accessibility, such as darkening a pale colour a few shades when it's on a white background (without needing to know any of this in advance - we can simply add calculations when creating the component that checks the passed-in colours from the theme and adjusts them if needed)."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use-styled-components",children:"How to use Styled Components"}),"\n",(0,o.jsx)(n.h3,{id:"for-a-new-component",children:"For a new component"}),"\n",(0,o.jsxs)(n.p,{children:["Please follow the ",(0,o.jsx)(n.a,{href:"/redback-documentation/docs/web-mobile-app-dev/frontend/new-components",children:"Creating a new component"})," guide when creating a new component in a Redback project. The guide will help you set up the component with the correct file structure and naming conventions. The below steps assume you have done this."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"YourComponent.tsx"}),' file, you should have a "starter" styled component, called ',(0,o.jsx)(n.code,{children:"StyledYourComponent"}),". That component is defined as a Styled Component in ",(0,o.jsx)(n.code,{children:"YourComponent.style.ts"}),".\r\n2. The first step is to consider what HTML element your component should ultimately render as. The generator will have set this to a ",(0,o.jsx)(n.code,{children:"div"})," by default, but you should change it to the most semantically appropriate element. For example, if your component is a list, you should change it to the type of list it should be (e.g. ",(0,o.jsx)(n.code,{children:"ul"})," or ",(0,o.jsx)(n.code,{children:"ol"}),"). You can also adjust the name as appropriate."]}),"\n",(0,o.jsxs)(S,{children:[(0,o.jsx)(k,{value:"before",label:"Before",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const StyledYourComponent = styled.div`\r\n    /* Your styles here */\r\n`;\n"})})}),(0,o.jsx)(k,{value:"after",label:"After",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const StyledList = styled.ul`\r\n    /* Your styles here */\r\n`;\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The backticks `` after ",(0,o.jsx)(n.code,{children:"styled"})," define a ",(0,o.jsx)(n.a,{href:"https://styled-components.com/docs/api",children:"tagged template literal"}),", which is a string that allows you to interpolate variables and expressions. This is how you can write CSS directly in your JavaScript file, just as you would in a plain CSS file, a CSS module, or a SCSS file. This format supports SCSS-like syntax and nesting, including nesting media queries. There's just one important difference - the theming and use of variables discussed above."]}),"\n",(0,o.jsx)(n.p,{children:"Here's the basic syntax for using a theme variable, using spacing as an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const StyledList = styled.ul`\r\n    padding: ${props => props.theme.spacing.sm};\r\n`;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["(You don't need to explicitly pass the props/theme here - as long as your component is wrapped in a ThemeProvider, which we do using ",(0,o.jsx)(n.code,{children:"RedbackUiThemeProvider"}),", the theme will be available to all styled components in the app using this syntax)."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find the expected theme structure in the ",(0,o.jsx)(n.a,{href:"https://github.com/Redback-Operations/redback-ui/tree/main/src/themes",children:"Redback UI codebase"})," and refer to ",(0,o.jsx)(n.a,{href:"https://redback-operations.github.io/redback-ui/?path=/docs/design-tokens-colours--docs",children:"the documentation"})," for some of the provided theme variables such as colours and fonts."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also pass props from your main React component to your styled component, and use them to conditionally apply styles. For example, an ",(0,o.jsx)(n.code,{children:"Alert"})," component could have a ",(0,o.jsx)(n.code,{children:"type"})," prop that determines whether it's a success, warning, or error alert, and the styled component could change the styling based on this prop."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Because we're using TypeScript, you just also need to tell it the props that can be passed in and their expected value type (in the below example it's a specific set of valid strings, but it can also be a primitive type such as ",(0,o.jsx)(n.code,{children:"number"}),")."]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["This example also uses the ",(0,o.jsx)(n.code,{children:"readableColor"})," function from the Polished library to automatically set the text colour to black or white based on the background colour. This is a great example of the power of CSS-in-JS."]})}),"\n",(0,o.jsxs)(S,{children:[(0,o.jsx)(k,{value:"component",label:"Alert.tsx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"    import { FC, PropsWithChildren } from 'react';\r\n    import { StyledAlert } from './Alert.style';\r\n\r\n    type AlertProps = {\r\n        type?: 'success' | 'info' | 'warning' | 'error';\r\n    }\r\n\r\n    export const Alert: FC<PropsWithChildren<AlertProps>> = ({ type, children }) => {\r\n        return (\r\n            <StyledAlert data-testid=\"Alert\" type={type ?? 'info'}>\r\n                {children}\r\n            </StyledAlert>\r\n        );\r\n    };\n"})})}),(0,o.jsx)(k,{value:"styled",label:"Alert.style.ts",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import styled from 'styled-components';\r\nimport { readableColor } from 'polished';\r\n\r\nexport const StyledAlert = styled.div<{type: 'success' | 'info' | 'warning' | 'error'}>`\r\n    background: ${props => props.theme.colors[props.type]};\r\n    color: ${props => readableColor(props.theme.colors[props.type])};\r\n`;\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"type"})," is a prop passed to the styled component which is expected to match a colour name in the theme. For example, for ",(0,o.jsx)(n.code,{children:'<Alert type="success"/>'}),", this would translate to ",(0,o.jsx)(n.code,{children:"props.theme.colours.success"}),", so it will look up ",(0,o.jsx)(n.code,{children:"colours"})," in the theme object and find the value of ",(0,o.jsx)(n.code,{children:"success"})," and use that colour."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You can add more styled components to this file as needed, just as you would for adding CSS classes for parts of your overall React component. For example, if you are creating a list, you don't need to create entirely separate components for the list and the list items. You can create a styled component for the list, and a styled component for the list items."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"converting-from-css-modules-or-plain-css",children:"Converting from CSS modules or plain CSS"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Generate new component files using the ",(0,o.jsx)(n.a,{href:"/redback-documentation/docs/web-mobile-app-dev/frontend/new-components",children:"Creating a new component"})," guide."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For each HTML element you have styled in your CSS module or plain CSS file, create a styled component in the ",(0,o.jsx)(n.code,{children:"YourComponent.style.ts"})," file. Here's an example of converting the syntax:"]}),"\n",(0,o.jsxs)(S,{children:[(0,o.jsx)(k,{value:"before",label:"Before",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n"})})}),(0,o.jsx)(k,{value:"after",label:"After",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export const StyledContainer = styled.div`\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n`;\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:'Follow the "For a new component" guide above for more information on how to use theme variables and props in your styled components.'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy your HTML into the new ",(0,o.jsx)(n.code,{children:"YourComponent.tsx"})," file, and replace the HTML tags with their corresponding styled components. For example, if you have a ",(0,o.jsx)(n.code,{children:"div"})," with a class of ",(0,o.jsx)(n.code,{children:"container"}),", you would replace it with ",(0,o.jsx)(n.code,{children:"StyledContainer"})," in the ",(0,o.jsx)(n.code,{children:"YourComponent.tsx"})," file. Here's an example of how this might look:"]}),"\n",(0,o.jsxs)(S,{children:[(0,o.jsx)(k,{value:"before",label:"Before",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<div class="container">\r\n    \x3c!--content--\x3e\r\n</div>\n'})})}),(0,o.jsx)(k,{value:"after",label:"After",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { FC, PropsWithChildren } from 'react';\r\nimport { StyledContainer } from './YourComponent.style';\r\n\r\nexport const YourComponent: FC<PropsWithChildren> = ({ children }) => {\r\n    return (\r\n        <StyledContainer>\r\n            {children}\r\n        </StyledContainer>\r\n    );\r\n};\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"useful-links",children:"Useful Links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://styled-components.com/",children:"Styled Components documentation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://polished.js.org/",children:"Polished documentation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://redback-operations.github.io/redback-ui/?path=/docs/design-tokens-colours--docs",children:"Redback UI themes"})}),"\n"]})]})}function P(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(V,{...e})}):V(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);