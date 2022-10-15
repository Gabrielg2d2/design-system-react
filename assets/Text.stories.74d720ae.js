var r=Object.defineProperty;var n=(e,a)=>r(e,"name",{value:a,configurable:!0});import{j as o}from"./jsx-runtime.fa507056.js";import"./index.b876a0ea.js";import"./iframe.be368328.js";function c(e){switch(e){case"sm":return"text-sm";case"md":return"text-base";case"lg":return"text-lg"}}n(c,"color");function t({children:e,size:a="md",component:l="span",className:s}){return o(l,{className:`text-gray-100 font-sans ${c(a)} ${s}`,children:e})}n(t,"Text");try{t.displayName="Text",t.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},component:{defaultValue:{value:"span"},description:"",name:"component",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'},{value:'"div"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Text/index.tsx#Text"]={docgenInfo:t.__docgenInfo,name:"Text",path:"src/components/Text/index.tsx#Text"})}catch{}const x={parameters:{storySource:{source:`import { Meta, Story } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    component: {
      control: {
        type: "select",
        options: ["p", "span", "div"],
      },
    },
  },
} as Meta<TextProps>;

export const Default: Story = (args) => <Text {...args}>Default</Text>;

export const Small: Story = (args) => <Text {...args}>Small</Text>;

export const Large: Story = (args) => <Text {...args}>Large</Text>;

export const Custom: Story = (args) => (
  <Text {...args} component="p">
    Large
  </Text>
);
`,locationsMap:{default:{startLoc:{col:30,line:23},endLoc:{col:70,line:23},startBody:{col:30,line:23},endBody:{col:70,line:23}},small:{startLoc:{col:28,line:25},endLoc:{col:66,line:25},startBody:{col:28,line:25},endBody:{col:66,line:25}},large:{startLoc:{col:28,line:27},endLoc:{col:66,line:27},startBody:{col:28,line:27},endBody:{col:66,line:27}},custom:{startLoc:{col:29,line:29},endLoc:{col:1,line:33},startBody:{col:29,line:29},endBody:{col:1,line:33}}}}},title:"Text",component:t,argTypes:{size:{control:{type:"select",options:["sm","md","lg"]}},component:{control:{type:"select",options:["p","span","div"]}}}},y=n(e=>o(t,{...e,children:"Default"}),"Default"),g=n(e=>o(t,{...e,children:"Small"}),"Small"),T=n(e=>o(t,{...e,children:"Large"}),"Large"),f=n(e=>o(t,{...e,component:"p",children:"Large"}),"Custom"),S=["Default","Small","Large","Custom"];export{f as Custom,y as Default,T as Large,g as Small,S as __namedExportsOrder,x as default};
//# sourceMappingURL=Text.stories.74d720ae.js.map
