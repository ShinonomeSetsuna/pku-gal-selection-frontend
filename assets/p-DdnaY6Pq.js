import{y as u,d as v,x as y,G as $,c as m,R as w,h as z,P as f,a3 as F,a4 as P,m as H,b as B,e as g,s as S,H as T}from"./index-DIkc4vSZ.js";function M(e,r="default",o=[]){const n=e.$slots[r];return n===void 0?o:n()}const j={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function D(){return j}const O={name:"Flex",self:D},L=Object.assign(Object.assign({},u.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),G=v({name:"Flex",props:L,setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:o}=y(e),a=u("Flex","-flex",void 0,O,e,r);return{rtlEnabled:$("Flex",o,r),mergedClsPrefix:r,margin:m(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[f("gap",t)]:i}}=a.value,{row:s,col:d}=F(i);return{horizontal:P(d),vertical:P(s)}})}},render(){const{vertical:e,reverse:r,align:o,inline:a,justify:n,margin:t,wrap:i,mergedClsPrefix:s,rtlEnabled:d}=this,l=w(M(this),!1);return l.length?z("div",{role:"none",class:[`${s}-flex`,d&&`${s}-flex--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:e&&!r?"column":e&&r?"column-reverse":!e&&r?"row-reverse":"row",justifyContent:n,flexWrap:!i||e?"nowrap":"wrap",alignItems:o,gap:`${t.vertical}px ${t.horizontal}px`}},l):null}}),E={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function V(e){const{primaryColor:r,textColor2:o,borderColor:a,lineHeight:n,fontSize:t,borderRadiusSmall:i,dividerColor:s,fontWeightStrong:d,textColor1:l,textColor3:h,infoColor:c,warningColor:p,errorColor:x,successColor:C,codeColor:b}=e;return Object.assign(Object.assign({},E),{aTextColor:r,blockquoteTextColor:o,blockquotePrefixColor:a,blockquoteLineHeight:n,blockquoteFontSize:t,codeBorderRadius:i,liTextColor:o,liLineHeight:n,liFontSize:t,hrColor:s,headerFontWeight:d,headerTextColor:l,pTextColor:o,pTextColor1Depth:l,pTextColor2Depth:o,pTextColor3Depth:h,pLineHeight:n,pFontSize:t,headerBarColor:r,headerBarColorPrimary:r,headerBarColorInfo:c,headerBarColorError:x,headerBarColorWarning:p,headerBarColorSuccess:C,textColor:o,textColor1Depth:l,textColor2Depth:o,textColor3Depth:h,textColorPrimary:r,textColorInfo:c,textColorSuccess:C,textColorWarning:p,textColorError:x,codeTextColor:o,codeColor:b,codeBorder:"1px solid #0000"})}const R={name:"Typography",common:H,self:V},N=B("h",`
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
 `),g("&::before",{backgroundColor:"var(--n-bar-color)"})])]),k=Object.assign(Object.assign({},u.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),W=e=>v({name:`H${e}`,props:k,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=y(r),n=u("Typography","-h",N,R,r,o),t=m(()=>{const{type:s}=r,{common:{cubicBezierEaseInOut:d},self:{headerFontWeight:l,headerTextColor:h,[f("headerPrefixWidth",e)]:c,[f("headerFontSize",e)]:p,[f("headerMargin",e)]:x,[f("headerBarWidth",e)]:C,[f("headerBarColor",s)]:b}}=n.value;return{"--n-bezier":d,"--n-font-size":p,"--n-margin":x,"--n-bar-color":b,"--n-bar-width":C,"--n-font-weight":l,"--n-text-color":h,"--n-prefix-width":c}}),i=a?T(`h${e}`,m(()=>r.type[0]),t,r):void 0;return{mergedClsPrefix:o,cssVars:a?void 0:t,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var r;const{prefix:o,alignText:a,mergedClsPrefix:n,cssVars:t,$slots:i}=this;return(r=this.onRender)===null||r===void 0||r.call(this),z(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:a}],style:t},i)}}),_=W("1"),K=W("2"),I=B("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[g("&:first-child","margin-top: 0;"),g("&:last-child","margin-bottom: 0;")]),q=Object.assign(Object.assign({},u.props),{depth:[String,Number]}),J=v({name:"P",props:q,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=y(e),a=u("Typography","-p",I,R,e,r),n=m(()=>{const{depth:i}=e,s=i||"1",{common:{cubicBezierEaseInOut:d},self:{pFontSize:l,pLineHeight:h,pMargin:c,pTextColor:p,[`pTextColor${s}Depth`]:x}}=a.value;return{"--n-bezier":d,"--n-font-size":l,"--n-line-height":h,"--n-margin":c,"--n-text-color":i===void 0?p:x}}),t=o?T("p",m(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),z("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{_ as N,J as a,G as b,K as c,M as g};
