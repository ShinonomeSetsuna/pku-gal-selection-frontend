import{ao as u,a as v,an as y,b1 as $,j as m,b8 as w,h as z,aM as f,b9 as F,ba as P,ag as M,ai as B,ah as g,al as S,as as T}from"./index-DdUj8tvb.js";function j(e,r="default",o=[]){const n=e.$slots[r];return n===void 0?o:n()}const D={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function H(){return D}const O={name:"Flex",self:H},L=Object.assign(Object.assign({},u.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),_=v({name:"Flex",props:L,setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:o}=y(e),i=u("Flex","-flex",void 0,O,e,r);return{rtlEnabled:$("Flex",o,r),mergedClsPrefix:r,margin:m(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[f("gap",t)]:a}}=i.value,{row:s,col:d}=F(a);return{horizontal:P(d),vertical:P(s)}})}},render(){const{vertical:e,reverse:r,align:o,inline:i,justify:n,margin:t,wrap:a,mergedClsPrefix:s,rtlEnabled:d}=this,l=w(j(this),!1);return l.length?z("div",{role:"none",class:[`${s}-flex`,d&&`${s}-flex--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e&&!r?"column":e&&r?"column-reverse":!e&&r?"row-reverse":"row",justifyContent:n,flexWrap:!a||e?"nowrap":"wrap",alignItems:o,gap:`${t.vertical}px ${t.horizontal}px`}},l):null}}),E={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function V(e){const{primaryColor:r,textColor2:o,borderColor:i,lineHeight:n,fontSize:t,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:d,textColor1:l,textColor3:h,infoColor:c,warningColor:p,errorColor:x,successColor:C,codeColor:b}=e;return Object.assign(Object.assign({},E),{aTextColor:r,blockquoteTextColor:o,blockquotePrefixColor:i,blockquoteLineHeight:n,blockquoteFontSize:t,codeBorderRadius:a,liTextColor:o,liLineHeight:n,liFontSize:t,hrColor:s,headerFontWeight:d,headerTextColor:l,pTextColor:o,pTextColor1Depth:l,pTextColor2Depth:o,pTextColor3Depth:h,pLineHeight:n,pFontSize:t,headerBarColor:r,headerBarColorPrimary:r,headerBarColorInfo:c,headerBarColorError:x,headerBarColorWarning:p,headerBarColorSuccess:C,textColor:o,textColor1Depth:l,textColor2Depth:o,textColor3Depth:h,textColorPrimary:r,textColorInfo:c,textColorSuccess:C,textColorWarning:p,textColorError:x,codeTextColor:o,codeColor:b,codeBorder:"1px solid #0000"})}const W={name:"Typography",common:M,self:V},N=B("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[g("&:first-child",{marginTop:0}),S("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[S("align-text",{paddingLeft:0},[g("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),g("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),g("&::before",{backgroundColor:"var(--n-bar-color)"})])]),k=Object.assign(Object.assign({},u.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),R=e=>v({name:`H${e}`,props:k,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=y(r),n=u("Typography","-h",N,W,r,o),t=m(()=>{const{type:s}=r,{common:{cubicBezierEaseInOut:d},self:{headerFontWeight:l,headerTextColor:h,[f("headerPrefixWidth",e)]:c,[f("headerFontSize",e)]:p,[f("headerMargin",e)]:x,[f("headerBarWidth",e)]:C,[f("headerBarColor",s)]:b}}=n.value;return{"--n-bezier":d,"--n-font-size":p,"--n-margin":x,"--n-bar-color":b,"--n-bar-width":C,"--n-font-weight":l,"--n-text-color":h,"--n-prefix-width":c}}),a=i?T(`h${e}`,m(()=>r.type[0]),t,r):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:t,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r;const{prefix:o,alignText:i,mergedClsPrefix:n,cssVars:t,$slots:a}=this;return(r=this.onRender)===null||r===void 0||r.call(this),z(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:i}],style:t},a)}}),G=R("1"),K=R("2"),I=B("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[g("&:first-child","margin-top: 0;"),g("&:last-child","margin-bottom: 0;")]),q=Object.assign(Object.assign({},u.props),{depth:[String,Number]}),J=v({name:"P",props:q,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=y(e),i=u("Typography","-p",I,W,e,r),n=m(()=>{const{depth:a}=e,s=a||"1",{common:{cubicBezierEaseInOut:d},self:{pFontSize:l,pLineHeight:h,pMargin:c,pTextColor:p,[`pTextColor${s}Depth`]:x}}=i.value;return{"--n-bezier":d,"--n-font-size":l,"--n-line-height":h,"--n-margin":c,"--n-text-color":a===void 0?p:x}}),t=o?T("p",m(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),z("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{_ as N,G as a,J as b,K as c};
