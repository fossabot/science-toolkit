!function(e){function t(t){for(var r,n,s=t[0],i=t[1],c=t[2],u=0,d=[];u<s.length;u++)n=s[u],l[n]&&d.push(l[n][0]),l[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(p&&p(t);d.length;)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var i=o[s];0!==l[i]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},l={interactiveWindow:0},a=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,function(e){if(e.exports&&!e.exports.__esModule&&void 0===e.exports.default){if(e.exports.headers&&e.exports.headers.common&&e.exports.headers.common.Accept&&e.exports.adapter&&e.exports.transformRequest&&e.exports.transformResponse)return;e.exports.default=e.exports}}(o),o.exports}n.e=function(e){var t=[],o=l[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=l[e]=[t,r]}));t.push(o[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=function(e){return n.p+""+({"vendors~dataresource~geojson~modeldebug~nteract_transforms~nteract_transforms_vsdom":"vendors~dataresource~geojson~modeldebug~nteract_transforms~nteract_transforms_vsdom",modeldebug:"modeldebug",nteract_transforms_vsdom:"nteract_transforms_vsdom","vendors~dataresource~vega":"vendors~dataresource~vega","vendors~dataresource":"vendors~dataresource","vendors~geojson":"vendors~geojson","vendors~nteract_transforms":"vendors~nteract_transforms","vendors~vega":"vendors~vega",vega:"vega","vendors~plotly":"vendors~plotly"}[e]||e)+".bundle.js"}(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var o=l[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,o[1](i)}l[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=i;a.push([1,"monaco","commons"]),o()}({"+oPt":function(e,t,o){(t=e.exports=o("I1BE")(!1)).i(o("9RTN"),""),t.push([e.i,"/* Import common styles and then override them below */\n.toolbar-menu-bar-child {\n  background: var(--override-background, var(--vscode-editor-background));\n  z-index: 10;\n}\n",""])},1:function(e,t,o){o("201c"),e.exports=o("EMpZ")},EMpZ:function(e,t,o){"use strict";o.r(t);o("HWNH"),o("usN3");var r=o("q1tI"),l=o("i8i4"),a=o("/MKj"),n=o("Aohs"),s=o("mrSG"),i=o("yXML"),c=o("jss3"),p=o("d+9d"),u=o("KNyV"),d=o("qUK1"),h=o("uunU"),m=o("btyL"),b=o("kobn"),f=o("cwXv"),C=o("t4XM"),v=(o("KbE7"),o("aUsF")),g=o("2g1K"),S=o("p1gK"),E=o("2rLJ"),y=o("PX74"),T=function(e){function t(t){return e.call(this,t)||this}return Object(s.c)(t,e),t.prototype.render=function(){var e="collapse-input-svg "+(this.props.open?" collapse-input-svg-rotate":"")+" collapse-input-svg-"+this.props.theme,t="collapse-input remove-style "+(this.props.visible?"":" invisible"),o=this.props.open?Object(f.a)("DataScience.collapseSingle","Collapse"):Object(f.a)("DataScience.expandSingle","Expand"),l=this.props.open?"true":"false";return r.createElement("button",{className:t,title:o,onClick:this.props.onClick,"aria-expanded":l},r.createElement("svg",{version:"1.1",baseProfile:"full",width:"8px",height:"11px"},r.createElement("polygon",{points:"0,0 0,10 5,5",className:e,fill:"black"})),this.props.label&&r.createElement("label",{className:"collapseInputLabel"},this.props.label))},t}(r.Component),O=o("QZoQ"),k=o("M7O9"),M=function(){function e(){this.historyStack=[]}return e.prototype.completeUp=function(e){if(this.historyStack.length>0){void 0===this.up&&(this.up=0);var t=this.up<this.historyStack.length?this.historyStack[this.up]:e;return this.adjustCursors(this.up),t}return e},e.prototype.completeDown=function(e){if(this.historyStack.length>0&&void 0!==this.down){var t=this.historyStack[this.down];return this.adjustCursors(this.down),t}return e},e.prototype.add=function(e,t){this.historyStack=0===this.last&&this.historyStack.length>0&&this.historyStack[this.last]===e?this.historyStack:Object(s.f)([e],this.historyStack),t?this.reset():0===this.last?(this.up=void 0,this.down=void 0):this.last&&(this.up=this.last+1,this.down=this.last-1)},e.prototype.reset=function(){this.up=void 0,this.down=void 0},e.prototype.adjustCursors=function(e){this.last=e,this.historyStack.length>1&&(e<this.historyStack.length?this.up=e+1:(this.up=this.historyStack.length,e=this.historyStack.length-1),this.down=e>0?e-1:void 0)},e}(),L=o("pm+A"),V={refreshVariables:function(e){return{type:L.a.REFRESH_VARIABLES,payload:{newExecutionCount:e}}},restartKernel:function(){return{type:L.a.RESTART_KERNEL}},interruptKernel:function(){return{type:L.a.INTERRUPT_KERNEL}},deleteAllCells:function(){return{type:L.a.DELETE_ALL_CELLS}},deleteCell:function(e){return{type:L.a.DELETE_CELL,payload:{cellId:e}}},undo:function(){return{type:L.a.UNDO}},redo:function(){return{type:L.a.REDO}},linkClick:function(e){return{type:L.a.LINK_CLICK,payload:{href:e}}},showPlot:function(e){return{type:L.a.SHOW_PLOT,payload:{imageHtml:e}}},toggleInputBlock:function(e){return{type:L.a.TOGGLE_INPUT_BLOCK,payload:{cellId:e}}},gotoCell:function(e){return{type:L.a.GOTO_CELL,payload:{cellId:e}}},copyCellCode:function(e){return{type:L.a.COPY_CELL_CODE,payload:{cellId:e}}},gatherCell:function(e){return{type:L.a.GATHER_CELL,payload:{cellId:e}}},clickCell:function(e){return{type:L.a.CLICK_CELL,payload:{cellId:e}}},doubleClickCell:function(e){return{type:L.a.DOUBLE_CLICK_CELL,payload:{cellId:e}}},editCell:function(e,t,o,r){return{type:L.a.EDIT_CELL,payload:{cellId:e,changes:t,modelId:o,code:r}}},submitInput:function(e,t){return{type:L.a.SUBMIT_INPUT,payload:{code:e,cellId:t}}},toggleVariableExplorer:function(){return{type:L.a.TOGGLE_VARIABLE_EXPLORER}},expandAll:function(){return{type:L.a.EXPAND_ALL}},collapseAll:function(){return{type:L.a.COLLAPSE_ALL}},export:function(){return{type:L.a.EXPORT}},showDataViewer:function(e,t){return{type:L.a.SHOW_DATA_VIEWER,payload:{variable:e,columnSize:t}}},editorLoaded:function(){return{type:L.a.EDITOR_LOADED}},scroll:function(e){return{type:L.a.SCROLL,payload:{isAtBottom:e}}},unfocus:function(e){return{type:L.a.UNFOCUS_CELL,payload:{cellId:e}}},codeCreated:function(e,t){return{type:L.a.CODE_CREATED,payload:{cellId:e,modelId:t}}},editorUnmounted:function(){return{type:L.a.UNMOUNT}},selectKernel:function(){return{type:L.a.SELECT_KERNEL}},selectServer:function(){return{type:L.a.SELECT_SERVER}},getVariableData:function(e,t,o){return void 0===t&&(t=0),void 0===o&&(o=100),{type:L.a.GET_VARIABLE_DATA,payload:{executionCount:e,sortColumn:"name",sortAscending:!0,startIndex:t,pageSize:o}}}},I=function(e){function t(t){var o=e.call(this,t)||this;return o.codeRef=r.createRef(),o.wrapperRef=r.createRef(),o.toggleInputBlock=function(){var e=o.getCell().id;o.props.toggleInputBlock(e)},o.getCell=function(){return o.props.cellVM.cell},o.isCodeCell=function(){return"code"===o.props.cellVM.cell.data.cell_type},o.renderNormalToolbar=function(){var e=o.getCell(),t=e.id,l=!e||!e.file||e.file===i.a.EmptyFileName;return r.createElement("div",{className:"cell-toolbar",key:0},r.createElement(b.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.gatherCell(t)},hidden:!o.props.settings.enableGather,tooltip:Object(f.a)("DataScience.gatherCodeTooltip","Gather code")},r.createElement(m.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:m.b.GatherCode})),r.createElement(b.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.gotoCell(t)},tooltip:Object(f.a)("DataScience.gotoCodeButtonTooltip","Go to code"),hidden:l},r.createElement(m.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:m.b.GoToSourceCode})),r.createElement(b.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.copyCellCode(t)},tooltip:Object(f.a)("DataScience.copyBackToSourceButtonTooltip","Paste code into file"),hidden:!l},r.createElement(m.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:m.b.Copy})),r.createElement(b.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.deleteCell(t)},tooltip:Object(f.a)("DataScience.deleteButtonTooltip","Remove Cell")},r.createElement(m.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:m.b.Cancel})))},o.onMouseClick=function(e){o.props.clickCell&&(e.stopPropagation(),o.props.clickCell(o.props.cellVM.cell.id))},o.onMouseDoubleClick=function(e){o.props.doubleClickCell&&(e.stopPropagation(),o.props.doubleClickCell(o.props.cellVM.cell.id))},o.renderControls=function(){var e=o.props.cellVM.cell.state===g.a.init||o.props.cellVM.cell.state===g.a.executing,t=o.props.cellVM.inputBlockCollapseNeeded&&o.props.cellVM.inputBlockShow&&!o.props.cellVM.editable&&o.isCodeCell(),l=o.props.cellVM&&o.props.cellVM.cell&&o.props.cellVM.cell.data&&o.props.cellVM.cell.data.execution_count?o.props.cellVM.cell.data.execution_count.toString():"-",a=o.props.cellVM.cell.id===i.a.EditCellId,n=a?null:o.renderNormalToolbar();return r.createElement("div",{className:"controls-div"},r.createElement(O.a,{isBusy:e,count:a&&o.props.editExecutionCount?o.props.editExecutionCount:l,visible:o.isCodeCell()}),r.createElement(T,{theme:o.props.baseTheme,visible:t,open:o.props.cellVM.inputBlockOpen,onClick:o.toggleInputBlock,tooltip:Object(f.a)("DataScience.collapseInputTooltip","Collapse input block")}),n)},o.renderInput=function(){return o.isCodeCell()?r.createElement(E.a,{cellVM:o.props.cellVM,editorOptions:o.props.editorOptions,history:o.inputHistory,codeTheme:o.props.codeTheme,onCodeChange:o.onCodeChange,onCodeCreated:o.onCodeCreated,unfocused:o.onUnfocused,testMode:!!o.props.testMode,showWatermark:o.props.showWatermark,ref:o.codeRef,monacoTheme:o.props.monacoTheme,openLink:o.openLink,editorMeasureClassName:o.props.editorMeasureClassName,keyDown:o.isEditCell()?o.onEditCellKeyDown:void 0,showLineNumbers:o.props.cellVM.showLineNumbers,font:o.props.font,focusPending:o.props.focusPending}):null},o.onUnfocused=function(){o.props.unfocus(o.getCell().id)},o.onCodeChange=function(e,t,r){o.props.editCell(t,e,r,o.getCurrentCode())},o.onCodeCreated=function(e,t,r,l){o.props.codeCreated(r,l)},o.hasOutput=function(){return o.getCell().state===g.a.finished||o.getCell().state===g.a.error||o.getCell().state===g.a.executing},o.getCodeCell=function(){return o.props.cellVM.cell.data},o.onKeyDown=function(e){if(o.getCell().id===i.a.EditCellId){var t={code:e.key,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey,target:e.target,stopPropagation:function(){return e.stopPropagation()},preventDefault:function(){return e.preventDefault()}};o.onEditCellKeyDown(i.a.EditCellId,t)}},o.onEditCellKeyDown=function(e,t){"Escape"===t.code?o.editCellEscape(t):"Enter"===t.code&&t.shiftKey&&o.editCellSubmit(t)},o.editCellEscape=function(e){var t=document.activeElement;if(null!==t&&e.editorInfo&&!e.editorInfo.isSuggesting){var r=o.findTabStop(1,t);r&&r.focus()}},o.openLink=function(e){o.props.linkClick(e.toString())},o.state={showingMarkdownEditor:!1},t.cellVM.cell.id===i.a.EditCellId&&(o.inputHistory=new M),o}return Object(s.c)(t,e),t.prototype.render=function(){return"messages"===this.props.cellVM.cell.data.cell_type?r.createElement(k.a,{messages:this.props.cellVM.cell.data.messages}):this.renderNormalCell()},t.prototype.componentDidUpdate=function(e){!this.props.cellVM.selected||e.cellVM.selected||this.props.cellVM.focused||this.giveFocus(),this.props.cellVM.scrollCount!==e.cellVM.scrollCount&&this.scrollAndFlash()},t.prototype.shouldComponentUpdate=function(e){return!v(this.props,e)},t.prototype.scrollAndFlash=function(){var e=this;this.wrapperRef&&this.wrapperRef.current&&(this.wrapperRef.current.scrollIntoView&&this.wrapperRef.current.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}),this.wrapperRef.current.classList.add("flash"),setTimeout((function(){e.wrapperRef.current&&e.wrapperRef.current.classList.remove("flash")}),1e3))},t.prototype.giveFocus=function(){this.wrapperRef&&this.wrapperRef.current&&(this.wrapperRef.current.contains(document.activeElement)||this.wrapperRef.current.focus(),this.wrapperRef.current.scrollIntoView&&this.wrapperRef.current.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}))},t.prototype.renderNormalCell=function(){var e=this.props.settings.showCellInputCode||this.props.cellVM.directInput||this.props.cellVM.editable||this.shouldRenderResults(),t=this.props.cellVM.editable?"cell-outer-editable":"cell-outer",o=this.props.cellVM.editable?"cell-wrapper":"cell-wrapper cell-wrapper-noneditable",l=!!this.props.settings.themeMatplotlibPlots;return e?r.createElement("div",{className:o,role:this.props.role,ref:this.wrapperRef,tabIndex:0,onKeyDown:this.onKeyDown,onClick:this.onMouseClick,onDoubleClick:this.onMouseDoubleClick},r.createElement("div",{className:t},this.renderControls(),r.createElement("div",{className:"content-div"},r.createElement("div",{className:"cell-result-container"},this.renderInput(),r.createElement(y.a,{cellVM:this.props.cellVM,baseTheme:this.props.baseTheme,expandImage:this.props.showPlot,maxTextSize:this.props.maxTextSize,themeMatplotlibPlots:l}))))):null},t.prototype.isEditCell=function(){return this.getCell().id===i.a.EditCellId},t.prototype.getCurrentCode=function(){return(this.codeRef.current?this.codeRef.current.getContents():void 0)||Object(S.b)(this.props.cellVM.cell.data.source)},t.prototype.shouldRenderResults=function(){return this.isCodeCell()&&this.hasOutput()&&this.getCodeCell().outputs&&this.getCodeCell().outputs.length>0&&!this.props.cellVM.hideOutput},t.prototype.editCellSubmit=function(e){if(e.editorInfo&&e.editorInfo.contents){e.stopPropagation(),e.preventDefault();for(var t=e.editorInfo.contents.length-1;t>=0&&"\n"===e.editorInfo.contents[t];)t-=1;var o=e.editorInfo.contents.slice(0,t+1);this.inputHistory&&this.inputHistory.add(o,e.editorInfo.isDirty),e.editorInfo.clear(),this.props.submitInput(o,this.props.cellVM.cell.id)}},t.prototype.findTabStop=function(e,t){if(t){var o=document.querySelectorAll("input, button, select, textarea, a[href]");if(o){var r=Array.prototype.filter.call(o,(function(e){return e.tabIndex>=0})),l=r.indexOf(t);return e>=0?r[l+1]||r[0]:r[l-1]||r[0]}}},t}(r.Component);o("Zytl");function j(e){return Object(s.a)(Object(s.a)({},e.main),{variableState:e.variables})}var x=Object(a.b)(null,V)(I),R=function(e){function t(t){var o=e.call(this,t)||this;return o.mainPanelRef=r.createRef(),o.contentPanelRef=r.createRef(),o.renderCount=0,o.internalScrollCount=0,o.getInputExecutionCount=function(){return o.props.currentExecutionCount+1},o.getContentProps=function(e){return{baseTheme:e,cellVMs:o.props.cellVMs,testMode:o.props.testMode,codeTheme:o.props.codeTheme,submittedText:o.props.submittedText,skipNextScroll:!!o.props.skipNextScroll,editable:!1,newCellVM:void 0,renderCell:o.renderCell,scrollToBottom:o.scrollDiv}},o.getVariableProps=function(e){return{variables:o.props.variableState.variables,debugging:o.props.debugging,busy:o.props.busy,showDataExplorer:o.props.showDataViewer,skipDefault:o.props.skipDefault,testMode:o.props.testMode,closeVariableExplorer:o.props.toggleVariableExplorer,baseTheme:e,pageIn:o.pageInVariableData,fontSize:o.props.font.size,executionCount:o.props.currentExecutionCount}},o.pageInVariableData=function(e,t){o.props.getVariableData(o.props.currentExecutionCount,e,t)},o.renderCell=function(e,t,l){return o.props.settings&&o.props.editorOptions?r.createElement("div",{key:e.cell.id,id:e.cell.id,ref:l},r.createElement(h.a,null,r.createElement(x,{role:"listitem",editorOptions:o.props.editorOptions,maxTextSize:o.props.settings.maxOutputSize,autoFocus:!1,testMode:o.props.testMode,cellVM:e,baseTheme:o.props.baseTheme,codeTheme:o.props.codeTheme,showWatermark:e.cell.id===i.a.EditCellId,editExecutionCount:o.getInputExecutionCount().toString(),monacoTheme:o.props.monacoTheme,font:o.props.font,settings:o.props.settings,focusPending:o.props.activateCount}))):null},o.scrollDiv=function(e){o.props.isAtBottom&&(o.internalScrollCount+=1,e.scrollIntoView&&e.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}))},o.handleScroll=function(e){if(o.internalScrollCount>0)o.internalScrollCount-=1;else{var t=e.currentTarget.scrollHeight-e.currentTarget.scrollTop,r=t<e.currentTarget.clientHeight+2&&t>e.currentTarget.clientHeight-2;o.props.scroll(r)}},o.linkClick=function(e){Object(p.a)(e,o.props.linkClick)},o}return Object(s.c)(t,e),t.prototype.componentDidMount=function(){document.addEventListener("click",this.linkClick,!0),this.props.editorLoaded()},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.linkClick),this.props.editorUnmounted()},t.prototype.render=function(){var e={fontSize:this.props.font.size,fontFamily:this.props.font.family},t=this.props.busy&&!this.props.testMode?r.createElement(C.a,null):void 0;return this.props.testMode&&(this.renderCount=this.renderCount+1),r.createElement("div",{id:"main-panel",ref:this.mainPanelRef,role:"Main",style:e},r.createElement("div",{className:"styleSetter"},r.createElement("style",null,this.props.rootCss)),r.createElement("header",{id:"main-panel-toolbar"},this.renderToolbarPanel(),t),r.createElement("section",{id:"main-panel-variable","aria-label":Object(f.a)("DataScience.collapseVariableExplorerLabel","Variables")},this.renderVariablePanel(this.props.baseTheme)),r.createElement("main",{id:"main-panel-content",onScroll:this.handleScroll},this.renderContentPanel(this.props.baseTheme)),r.createElement("section",{id:"main-panel-footer","aria-label":Object(f.a)("DataScience.editSection","Input new cells here")},this.renderFooterPanel(this.props.baseTheme)))},t.prototype.renderToolbarPanel=function(){var e=this.props.variableState.visible?Object(f.a)("DataScience.collapseVariableExplorerTooltip","Hide variables active in jupyter kernel"):Object(f.a)("DataScience.expandVariableExplorerTooltip","Show variables active in jupyter kernel");return r.createElement("div",{id:"toolbar-panel"},r.createElement("div",{className:"toolbar-menu-bar"},r.createElement("div",{className:"toolbar-menu-bar-child"},r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.deleteAllCells,tooltip:Object(f.a)("DataScience.clearAll","Remove all cells")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.Cancel})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.redo,disabled:0===this.props.redoStack.length,tooltip:Object(f.a)("DataScience.redo","Redo")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.Redo})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.undo,disabled:0===this.props.undoStack.length,tooltip:Object(f.a)("DataScience.undo","Undo")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.Undo})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.interruptKernel,disabled:this.props.busy,tooltip:Object(f.a)("DataScience.interruptKernel","Interrupt IPython kernel")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.Interrupt})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.restartKernel,disabled:this.props.busy,tooltip:Object(f.a)("DataScience.restartServer","Restart IPython kernel")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.Restart})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.toggleVariableExplorer,tooltip:e},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.VariableExplorer})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.export,disabled:0===this.props.cellVMs.length||this.props.busy,tooltip:Object(f.a)("DataScience.export","Export as Jupyter notebook")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.SaveAs})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.expandAll,disabled:0===this.props.cellVMs.length,tooltip:Object(f.a)("DataScience.expandAll","Expand all cell inputs")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.ExpandAll})),r.createElement(b.a,{baseTheme:this.props.baseTheme,onClick:this.props.collapseAll,disabled:0===this.props.cellVMs.length,tooltip:Object(f.a)("DataScience.collapseAll","Collapse all cell inputs")},r.createElement(m.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:m.b.CollapseAll}))),r.createElement(u.a,{baseTheme:this.props.baseTheme,font:this.props.font,kernel:this.props.kernel,selectServer:this.props.selectServer,selectKernel:this.props.selectKernel})))},t.prototype.renderVariablePanel=function(e){if(this.props.variableState.visible){var t=this.getVariableProps(e);return r.createElement(d.a,Object(s.a)({},t))}return null},t.prototype.renderContentPanel=function(e){if(!this.props.monacoReady&&!this.props.testMode)return null;var t=this.getContentProps(e);return r.createElement(c.a,Object(s.a)({},t,{ref:this.contentPanelRef}))},t.prototype.renderFooterPanel=function(e){if(!(this.props.monacoReady&&this.props.editCellVM&&this.props.settings&&this.props.editorOptions))return null;var t=this.props.settings.maxOutputSize,o=t&&t<1e4&&t>0?t:void 0,l=this.getInputExecutionCount(),a=this.props.settings.colorizeInputBox?"edit-panel-colorized":"edit-panel";return r.createElement("div",{className:a},r.createElement(h.a,null,r.createElement(x,{role:"form",editorOptions:this.props.editorOptions,maxTextSize:o,autoFocus:document.hasFocus(),testMode:this.props.testMode,cellVM:this.props.editCellVM,baseTheme:e,codeTheme:this.props.codeTheme,showWatermark:!0,editExecutionCount:l.toString(),monacoTheme:this.props.monacoTheme,font:this.props.font,settings:this.props.settings,focusPending:this.props.activateCount})))},t}(r.Component);var A,w=o("TMpg"),D=o("U46q"),_=o("Ost8"),P=o("EWE8"),N=o("Z/LF"),B=o("XHnH"),K=o("QLg1"),U=o("9BvU");!function(e){function t(e,t){return!e.testMode||"messages"!==t.data.cell_type}function o(e,t,o,r){if("code"===e.cell.data.cell_type){if(e.inputBlockShow===o&&e.inputBlockOpen===r)return e;var l=Object(s.a)({},e);if(e.inputBlockShow!==o&&(l.inputBlockShow=!!o),e.inputBlockOpen!==r&&e.inputBlockCollapseNeeded&&e.inputBlockShow)if(r){var a=Object(K.f)(e,t);l.inputBlockOpen=!0,l.inputBlockText=a}else{(a=Object(K.f)(e,t)).length>0&&(a=(a=(a=a.split("\n",1)[0]).slice(0,255)).concat("...")),l.inputBlockOpen=!1,l.inputBlockText=a}return l}return e}function r(e,t){var r,l=Object(K.c)(e,t.settings,!1,t.debugging),a=!!t.settings&&t.settings.showCellInputCode,n=!(null===(r=t.settings)||void 0===r?void 0:r.collapseCellInputCodeByDefault);return(l=o(l,t.settings,a,n)).hasBeenRun=!0,l}e.alterCellVM=o,e.prepareCellVM=r,e.startCell=function(e){if(t(e.prevState,e.payload)){var o=U.a.updateOrAdd(e,r);if(o.cellVMs.length>e.prevState.cellVMs.length&&e.payload.id!==i.a.EditCellId){var l=o.cellVMs[o.cellVMs.length-1];e.queueAction(Object(D.c)(B.a.AddCell,{fullText:Object(K.f)(l,o.settings),currentText:l.inputBlockText,cell:l.cell}))}return o}return e.prevState},e.updateCell=function(e){return t(e.prevState,e.payload)?U.a.updateOrAdd(e,r):e.prevState},e.finishCell=function(e){return t(e.prevState,e.payload)?U.a.updateOrAdd(e,r):e.prevState},e.deleteAllCells=function(e){return e.queueAction(Object(D.c)(B.a.DeleteAllCells)),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:[],undoStack:U.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs),selectedCellId:void 0,focusedCellId:void 0})},e.deleteCell=function(e){var t=e.prevState.cellVMs.findIndex((function(t){return t.cell.id===e.payload.cellId}));if(t>=0&&e.payload.cellId){e.queueAction(Object(D.c)(B.a.DeleteCell)),e.queueAction(Object(D.c)(B.a.RemoveCell,{id:e.payload.cellId}));var o=e.prevState.cellVMs.filter((function(e,o){return o!==t}));return Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:o,undoStack:U.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs)})}return e.prevState},e.unmount=function(e){return Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:[],undoStack:[],redoStack:[],editCellVM:void 0})}}(A||(A={}));var G,H,F=o("y18Z"),q=o("Ja+E");(H=G||(G={})).expandAll=function(e){var t;if(null===(t=e.prevState.settings)||void 0===t?void 0:t.showCellInputCode){var o=e.prevState.cellVMs.map((function(t){return A.alterCellVM(Object(s.a)({},t),e.prevState.settings,!0,!0)}));return Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:o})}return e.prevState},H.collapseAll=function(e){var t;if(null===(t=e.prevState.settings)||void 0===t?void 0:t.showCellInputCode){var o=e.prevState.cellVMs.map((function(t){return A.alterCellVM(Object(s.a)({},t),e.prevState.settings,!0,!1)}));return Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:o})}return e.prevState},H.toggleInputBlock=function(e){if(e.payload.cellId){var t=Object(s.f)(e.prevState.cellVMs),o=e.prevState.cellVMs.findIndex((function(t){return t.cell.id===e.payload.cellId})),r=e.prevState.cellVMs[o];return t[o]=A.alterCellVM(Object(s.a)({},r),e.prevState.settings,!0,!r.inputBlockOpen),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:t})}return e.prevState},H.updateSettings=function(e){var t,o=JSON.parse(e.payload),r=Object(q.a)(o),l=o.extraSettings?o.extraSettings.fontFamily:e.prevState.font.family,a=o.extraSettings?o.extraSettings.fontSize:e.prevState.font.size;if(o&&o.extraSettings&&o.extraSettings.theme!==e.prevState.vscodeThemeName){var n=U.a.computeKnownDark(o);e.queueAction(Object(D.c)(F.a.GetCssRequest,{isDark:n})),e.queueAction(Object(D.c)(F.a.GetMonacoThemeRequest,{isDark:n}))}var i=e.prevState.cellVMs;return o.showCellInputCode!==(null===(t=e.prevState.settings)||void 0===t?void 0:t.showCellInputCode)&&(i=e.prevState.cellVMs.map((function(e){return A.alterCellVM(e,o,o.showCellInputCode,!o.collapseCellInputCodeByDefault)}))),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:i,settings:o,editorOptions:r,font:{size:a,family:l}})},H.scrollToCell=function(e){var t=e.prevState.cellVMs.findIndex((function(t){return t.cell.id===e.payload.id}));if(t>=0){var o=Object(s.f)(e.prevState.cellVMs);return o[t]=Object(s.a)(Object(s.a)({},o[t]),{scrollCount:o[t].scrollCount+1}),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:o,isAtBottom:!1})}return e.prevState},H.scrolled=function(e){return Object(s.a)(Object(s.a)({},e.prevState),{isAtBottom:e.payload.isAtBottom})},H.clickCell=function(e){return e.payload.cellId===i.a.EditCellId&&e.prevState.editCellVM&&!e.prevState.editCellVM.focused?Object(s.a)(Object(s.a)({},e.prevState),{editCellVM:Object(s.a)(Object(s.a)({},e.prevState.editCellVM),{focused:!0})}):e.prevState.editCellVM?Object(s.a)(Object(s.a)({},e.prevState),{editCellVM:Object(s.a)(Object(s.a)({},e.prevState.editCellVM),{focused:!1})}):e.prevState},H.unfocusCell=function(e){return e.payload.cellId===i.a.EditCellId&&e.prevState.editCellVM&&e.prevState.editCellVM.focused?Object(s.a)(Object(s.a)({},e.prevState),{editCellVM:Object(s.a)(Object(s.a)({},e.prevState.editCellVM),{focused:!1})}):e.prevState};var z,W,X,Z=o("xk4V"),J=o("PZUy"),Q=o("kYDi"),Y=o("BkRI");(W=z||(z={})).undo=function(e){if(e.prevState.undoStack.length>0){var t=e.prevState.undoStack[e.prevState.undoStack.length-1],o=e.prevState.undoStack.slice(0,e.prevState.undoStack.length-1),r=U.a.pushStack(e.prevState.redoStack,e.prevState.cellVMs),l=t.findIndex((function(e){return e.selected}));return e.queueAction(Object(D.c)(B.a.Undo)),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:t,undoStack:o,redoStack:r,skipNextScroll:!0,selectedCellId:l>=0?t[l].cell.id:void 0,focusedCellId:l>=0&&t[l].focused?t[l].cell.id:void 0})}return e.prevState},W.redo=function(e){if(e.prevState.redoStack.length>0){var t=e.prevState.redoStack[e.prevState.redoStack.length-1],o=e.prevState.redoStack.slice(0,e.prevState.redoStack.length-1),r=U.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs),l=t.findIndex((function(e){return e.selected}));return e.queueAction(Object(D.c)(B.a.Redo)),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:t,undoStack:r,redoStack:o,skipNextScroll:!0,selectedCellId:l>=0?t[l].cell.id:void 0,focusedCellId:l>=0&&t[l].focused?t[l].cell.id:void 0})}return e.prevState},W.startDebugging=function(e){return Object(s.a)(Object(s.a)({},e.prevState),{debugging:!0})},W.stopDebugging=function(e){return Object(s.a)(Object(s.a)({},e.prevState),{debugging:!1})},W.submitInput=function(e){var t=new J.a(e.prevState.settings);if(t.stripFirstMarker(e.payload.code).length>0&&e.prevState.editCellVM){var o=Y(e.prevState.editCellVM);o.cell.state=g.a.executing,o.cell.data.source=e.payload.code;var r=e.payload.code.splitLines({trim:!1}),l=r[0];t.isMarkdown(l)?(o.cell.data=Object(Q.a)(o.cell.data,"markdown"),o.cell.data.source=Object(S.d)(r),o.cell.state=g.a.finished):"markdown"===o.cell.data.cell_type&&(o.cell.state=g.a.finished),o=Object(K.c)(o.cell,e.prevState.settings,!1,!1);var a=!!e.prevState.settings&&e.prevState.settings.collapseCellInputCodeByDefault;return(o=A.alterCellVM(o,e.prevState.settings,!0,!a)).useQuickEdit=!1,o.cell.id=Z(),o.directInput=!0,o.cell.state!==g.a.finished&&e.queueAction(Object(D.c)(B.a.SubmitNewCell,{code:e.payload.code,id:o.cell.id})),Object(s.a)(Object(s.a)({},e.prevState),{cellVMs:Object(s.f)(e.prevState.cellVMs,[o]),undoStack:U.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs),skipNextScroll:!1,submittedText:!0})}return e.prevState};var $=((X={})[L.a.RESTART_KERNEL]=P.a.restartKernel,X[L.a.INTERRUPT_KERNEL]=P.a.interruptKernel,X[L.a.SELECT_KERNEL]=P.a.selectKernel,X[L.a.SELECT_SERVER]=P.a.selectJupyterURI,X[L.a.EXPORT]=N.a.exportCells,X[L.a.SAVE]=N.a.save,X[L.a.SHOW_DATA_VIEWER]=N.a.showDataViewer,X[L.a.DELETE_CELL]=A.deleteCell,X[L.a.UNDO]=z.undo,X[L.a.REDO]=z.redo,X[L.a.SHOW_PLOT]=N.a.showPlot,X[L.a.LINK_CLICK]=N.a.linkClick,X[L.a.GOTO_CELL]=N.a.gotoCell,X[L.a.TOGGLE_INPUT_BLOCK]=G.toggleInputBlock,X[L.a.COPY_CELL_CODE]=N.a.copyCellCode,X[L.a.GATHER_CELL]=N.a.gather,X[L.a.EDIT_CELL]=N.a.editCell,X[L.a.SUBMIT_INPUT]=z.submitInput,X[L.a.DELETE_ALL_CELLS]=A.deleteAllCells,X[L.a.EXPAND_ALL]=G.expandAll,X[L.a.COLLAPSE_ALL]=G.collapseAll,X[L.a.EDITOR_LOADED]=N.a.started,X[L.a.SCROLL]=G.scrolled,X[L.a.CLICK_CELL]=G.clickCell,X[L.a.UNFOCUS_CELL]=G.unfocusCell,X[L.a.UNMOUNT]=A.unmount,X[D.b.STARTCELL]=A.startCell,X[D.b.FINISHCELL]=A.finishCell,X[D.b.UPDATECELL]=A.updateCell,X[D.b.ACTIVATE]=_.a.activate,X[D.b.RESTARTKERNEL]=P.a.handleRestarted,X[D.b.GETCSSRESPONSE]=_.a.handleCss,X[D.b.MONACOREADY]=_.a.monacoReady,X[D.b.GETMONACOTHEMERESPONSE]=_.a.monacoThemeChange,X[D.b.GETALLCELLS]=N.a.getAllCells,X[D.b.EXPANDALL]=G.expandAll,X[D.b.COLLAPSEALL]=G.collapseAll,X[D.b.DELETEALLCELLS]=A.deleteAllCells,X[D.b.STARTPROGRESS]=_.a.startProgress,X[D.b.STOPPROGRESS]=_.a.stopProgress,X[D.b.UPDATESETTINGS]=G.updateSettings,X[D.b.STARTDEBUGGING]=z.startDebugging,X[D.b.STOPDEBUGGING]=z.stopDebugging,X[D.b.SCROLLTOCELL]=G.scrollToCell,X[D.b.UPDATEKERNEL]=P.a.updateStatus,X[D.b.LOCINIT]=_.a.handleLocInit,X);var ee,te,oe,re=Object(n.a)(),le=window.inTestMode,ae=!le&&"undefined"!=typeof acquireVsCodeApi,ne=(ee=ae,te=re,oe=le,w.a(ee,te,oe,!1,$)),se=Object(a.b)(j,V)(R);l.render(r.createElement(a.a,{store:ne},r.createElement(se,null)),document.getElementById("root"))},Zytl:function(e,t,o){var r=o("+oPt");"string"==typeof r&&(r=[[e.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(r,l);r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=interactiveWindow.js.map