"use strict";(self.webpackChunkAngularArtGallery=self.webpackChunkAngularArtGallery||[]).push([[592],{132:(g,r,i)=>{i.d(r,{X:()=>a});let a=(()=>{class h{}return h.Tolerance=5e-5,h})()},939:(g,r,i)=>{i.d(r,{t:()=>h});var a=i(132);let h=(()=>{class m extends a.X{toString(){let t="<",e=0;for(let l of this.elements)e>0&&(t+=", "),t+=l,e++;return t+=">",t}}return m.DefaultStringInputDelimeter=" ",m})()},171:(g,r,i)=>{i.d(r,{Q:()=>m});var a=i(132),h=i(939);class m extends h.t{constructor(t,e){super(),null==t?null!=e&&(this.elements=new Array(e)):this.elements=t}magnitude(){let t=0;if(null!=this.elements&&this.elements.length>0)for(let e=0;e<this.elements.length;e++)t+=this.elements[e]*this.elements[e];return Math.sqrt(t)}normalize(){let t=this.magnitude();if(0!==t)for(let e=0;e<this.elements.length;e++)this.elements[e]/=t}dotProduct(t){let e=Math.min(this.elements.length,t.elements.length),l=0;for(let s=0;s<e;s++)l+=this.elements[s]*t.elements[s];return l}add(t){let e=Math.min(this.elements.length,t.elements.length);for(let l=0;l<e;l++)this.elements[l]+=t.elements[l]}getSumWith(t){const e=this.clone();return e.add(t),e}subtract(t){let e=Math.min(this.elements.length,t.elements.length);for(let l=0;l<e;l++)this.elements[l]-=t.elements[l]}getDifferenceWith(t){const e=this.clone();return e.subtract(t),e}multiplyByScalar(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}divideByScalar(t){for(let e=0;e<this.elements.length;e++)this.elements[e]/=t}getMidPointWith(t){let e=this.getSumWith(t);return e.divideByScalar(2),e}getWeightedAverageWithAnotherVector(t,e,l){const s=this.clone();s.multiplyByScalar(t);let n=Math.min(this.elements.length,e.elements.length);for(let u=0;u<n;u++)s.elements[u]+=e.elements[u]*l;return s}getDistanceTo(t){let e=0,l=0,s=Math.min(this.elements.length,t.elements.length);for(let n=0;n<s;n++)l=this.elements[n]-t.elements[n],e+=l*l;if(this.elements.length>s)for(let n=s;n<this.elements.length;n++)e+=this.elements[n]*this.elements[n];if(t.elements.length>s)for(let n=s;n<t.elements.length;n++)e+=t.elements[n]*t.elements[n];return e=Math.sqrt(e),e}clone(){const t=new m;if(null!=this.elements&&this.elements.length>0){t.elements=new Array(this.elements.length);for(let e=0;e<this.elements.length;e++)t.elements[e]=this.elements[e]}return t}equals(t){let e=!1;if(typeof t>"u")e=!1;else if(null==t)e=!1;else if(t instanceof h.t)if(null==this.elements&&null==t.elements)e=!0;else if(0===this.elements.length&&0===t.elements.length)e=!0;else if(this.elements.length===t.elements.length){e=!0;for(let l=0;l<this.elements.length;l++)if(Math.abs(this.elements[l]-t.elements[l])>a.X.Tolerance){e=!1;break}}else e=!1;else e=!1;return e}}}}]);