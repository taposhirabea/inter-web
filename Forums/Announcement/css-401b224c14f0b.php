@charset "UTF-8";

/********* public:structured_list.less ********/
.structItemContainer{border-collapse:collapse;list-style:none;margin:0;padding:0;width:100%}.structItemContainer>.structItem:first-child,.structItemContainer>.structItemContainer-group:first-child>.structItem:first-child{border-top:none}.structItem{display:table;table-layout:fixed;border-collapse:collapse;border-top:1px solid #6e5c8a;list-style:none;margin:0;padding:0;width:100%}.structItem.is-highlighted,.structItem.is-moderated{background:#362a51}.structItem.is-deleted{opacity:.7}.structItem.is-deleted .structItem-title>*{text-decoration:line-through}.structItem.is-mod-selected{background:#393722;opacity:1}.structItem-cell{display:table-cell;vertical-align:top;padding:12px 16px}.structItem--middle .structItem-cell{vertical-align:middle}.structItem-cell.structItem-cell--vote{width:72px}.structItem-cell.structItem-cell--icon{width:68px;position:relative}.structItem-cell.structItem-cell--icon.structItem-cell--iconExpanded{width:80px}.structItem-cell.structItem-cell--icon.structItem-cell--iconEnd{width:56px;padding-left:8px}.structItem-cell.structItem-cell--icon.structItem-cell--iconEnd .structItem-iconContainer{padding-top:6px}.structItem-cell.structItem-cell--icon.structItem-cell--iconFixedSmall{width:92px}.structItem-cell.structItem-cell--icon.structItem-cell--iconFixedSmallest{width:56px}.structItem-cell.structItem-cell--icon .solutionIcon{padding-left:0;padding-right:0}.structItem-cell.structItem-cell--meta{width:135px}.structItem-cell.structItem-cell--latest{width:190px;text-align:right}.structItem-iconContainer{position:relative}.structItem-iconContainer img{display:block;width:100%}.structItem-iconContainer .avatar{width:36px;height:36px;font-size:22px}.structItem-iconContainer .avatar.avatar--xxs{width:24px;height:24px;font-size:14px}.structItem-iconContainer .structItem-secondaryIcon{position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;font-size:12px}.structItem-cell--iconExpanded .structItem-iconContainer .avatar{width:48px;height:48px;font-size:29px}.structItem-cell--iconExpanded .structItem-iconContainer .structItem-secondaryIcon{width:22px;height:22px;font-size:13px}.structItem-title{font-size:14px;font-weight:400;margin:0;padding:0}.structItem-title .label{font-weight:400}.is-unread .structItem-title{font-weight:600}.structItem-minor{font-size:12px;color:#a08fbd}.structItem-minor a{color:inherit;text-decoration:none}.structItem-minor a:hover{text-decoration:underline}.structItem-parts{list-style:none;margin:0;padding:0;display:inline}.structItem-parts>li{display:inline;margin:0;padding:0}.structItem-parts>li:nth-child(even){color:#a08fbd}.structItem-parts>li:before{content:"\00B7\20"}.structItem-parts>li:first-child:before{content:"";display:none}.structItem-pageJump{margin-left:8px;font-size:11px}.structItem-pageJump a{color:#a08fbd;background:#362a51;border:1px solid #6e5c8a;text-decoration:none;border-radius:4px;padding:0 3px;opacity:.5;-webkit-transition: all .25s ease;transition: all .25s ease}.structItem:hover .structItem-pageJump a,.has-touchevents .structItem-pageJump a{opacity:1}.structItem-pageJump a:hover{text-decoration:none;background:#483663}.structItem-statuses,.structItem-extraInfo{list-style:none;margin:0;padding:0;float:right}.structItem-statuses>li,.structItem-extraInfo>li{float:left;margin-left:8px}.structItem-statuses input[type=checkbox],.structItem-extraInfo input[type=checkbox]{vertical-align:-2px}.structItem-statuses .reactionSummary{vertical-align:-2px}.structItem-extraInfo .reactionSummary{vertical-align:middle}.structItem-status::before{font-family:'Font Awesome 5 Pro';font-size:inherit;font-style:normal;font-weight:400;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-size:90%;color:#a08fbd}.structItem-status--deleted::before{content:"\f2ed";width:.875em;display:inline-block;text-align:center}.structItem-status--locked::before{content:"\f023";width:.875em;display:inline-block;text-align:center}.structItem-status--moderated::before{content:"\f132";width:1em;display:inline-block;text-align:center;color:#e8e0f5}.structItem-status--redirect::before{content:"\f08e";width:1em;display:inline-block;text-align:center}.structItem-status--starred::before{content:"\f005";width:1.125em;display:inline-block;text-align:center;color:#e8e0f5}.structItem-status--sticky::before{content:"\f08d";width:.75em;display:inline-block;text-align:center}.structItem-status--watched::before{content:"\f0f3";width:.875em;display:inline-block;text-align:center}.structItem-status--solved::before{content:"\f058";width:1em;display:inline-block;text-align:center;color:#63b265}.structItem-status--attention::before{content:"\f0a1";width:1.125em;display:inline-block;text-align:center;color:#e8e0f5}.structItem-status--upvoted::before{content:"\f164";width:1em;display:inline-block;text-align:center}.structItem-status--downvoted::before{content:"\f165";width:1em;display:inline-block;text-align:center}.structItem.structItem--note{color:#a08fbd;background:#362a51;color:#e8e0f5}.structItem.structItem--note .structItem-cell{padding-top:6px;padding-bottom:6px;font-size:12px;text-align:center}@media (max-width:900px){.structItem-cell{vertical-align:top}.structItem-cell.structItem-cell--meta{width:115px;font-size:12px}.structItem-cell.structItem-cell--latest{width:140px;font-size:12px}}@media (max-width:650px){.structItem-cell+.structItem-cell.structItem-cell--icon{padding-left:0;width:52px}.structItem-cell.structItem-cell--main,.structItem-cell.structItem-cell--newThread{display:block;padding-bottom:.2em}.structItem-cell+.structItem-cell.structItem-cell--main,.structItem-cell+.structItem-cell.structItem-cell--newThread{padding-left:0}.structItem-cell.structItem-cell--meta{display:block;width:auto;float:left;padding-top:0;padding-left:0;padding-right:0;color:#a08fbd}.structItem-cell.structItem-cell--meta .structItem-minor{display:none}.structItem-cell.structItem-cell--meta .pairs>dt,.structItem-cell.structItem-cell--meta .pairs>dd{display:inline;float:none;margin:0}.structItem-cell.structItem-cell--latest{display:block;width:auto;float:left;padding-top:0;padding-left:0}.structItem-cell.structItem-cell--latest:before{content:"\00A0\00B7\20";color:#a08fbd}.structItem-cell.structItem-cell--latest a{color:#a08fbd}.structItem-cell.structItem-cell--latest .structItem-minor{display:none}.structItem-cell.structItem-cell--iconEnd{display:none}.structItem-pageJump,.structItem-extraInfoMinor{display:none}.is-unread .structItem-latestDate{font-weight:400}}@media (max-width:480px){.structItem-parts .structItem-startDate{display:none}.structItem.structItem--quickCreate .structItem-cell--icon,.structItem.structItem--quickCreate .structItem-cell--vote{display:none}.structItem.structItem--quickCreate .structItem-cell--newThread{padding-left:16px;padding-bottom:16px}}.structItem-status--scheduled::before{content:"\f017";width:1.28571429em;display:inline-block;text-align:center;color:#e8e0f5}

/********* public:extra.less ********/
.message--simple .message-cell.message-cell--user{flex:0 0 102px !important}.siropuShoutboxBanned{display:none !important}.node-icon{display:none}.node-title a{color:#e8e0f5}.node-description p{margin:0}.node--category .node-stats dl:not(:first-child){display:none}.p-breadcrumbs--container{background:none;border:none}.block .block-tabHeader{color:#a08fbd}.block .block-tabHeader .tabs-tab{margin-left:-1px}.block .block-tabHeader .tabs-tab.is-active{color:#e8e0f5}.block .block-tabHeader .tabs-tab:hover{color:#e8e0f5}.block--treeEntryChooser .block-container{border:1px solid #6e5c8a !important;border-radius:4px !important}.block--treeEntryChooser .block-row--clickable{background:#554270 !important}.block--treeEntryChooser .block-row--clickable:hover{background:#6e5c8a !important;color:#e8e0f5}.block--treeEntryChooser .block-row--clickable:hover .contentRow-suffix dt{background:#6e5c8a !important}.block--treeEntryChooser .block-row--clickable .contentRow-suffix dt{background:#554270 !important}.block[data-type="thread"] .block-container{border:1px solid #6e5c8a}.block-search .block-container{border:1px solid #6e5c8a}.block-category .block-container{border:1px solid #6e5c8a;border-radius:6px}.block-report .block-container{border:1px solid #6e5c8a;border-radius:6px}.block-report .tabs a{margin-left:0px !important}.block-report .tabs a:first-child{border-top-left-radius:4px}.block-report .tabs a:last-child{border-top-right-radius:4px}.block-help .block-container{border:1px solid #6e5c8a;border-radius:6px}.block.block--category .block-header{border-top:none}.block-alerts .block-container{border:1px solid #6e5c8a;border-radius:6px}.block-alerts .block-container li:first-child{border-top-left-radius:6px;border-top-right-radius:6px}.block-alerts .block-container li:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.block-gradient{width:100%;height:100%;background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%);border-radius:6px 6px 0 0}.block-gradient-container{width:calc(100% + 2px);height:5px;position:absolute;top:-1px;left:-1px;box-shadow:0px 0px 5px rgba(209,106,71,0.5)}.p-navgroup-link.p-navgroup-link--user .avatar{width:32px;height:32px;margin-right:8px}.avatar{flex-shrink:0 !important}.node-extra{font-size:12px}.node-extra .node-extra-title{color:#e8e0f5;font-weight:600}.node-extra .listInline{font-weight:500}.node-extra .node-extra-user{font-weight:600}.node-extra-placeholder{font-size:13px;color:#a08fbd}.menu-separator{margin:0}.hScroller-scroll .menu.menu--structural{display:none !important}.hScroller-scroll .p-nav-list .p-navEl .p-navEl-splitTrigger{display:none !important}.p-nav-list .p-navEl-link.p-navEl-link--splitMenu{padding-right:16px}.menu--structural.menu--left .menu-content{border-top-left-radius:6px}.menu--structural.menu--right .menu-content{border-top-right-radius:6px}.p-nav-list .p-navEl-link{border-radius:4px}.button--link{border:1px solid #6e5c8a}.button.is-disabled{pointer-events:none;opacity:0.75}.buttonGroup .button{border:1px solid #6e5c8a;transition:all 150ms ease-in-out}.buttonGroup .button:hover{color:#e8e0f5;background:#6e5c8a;transition:all 150ms ease-in-out}.buttonGroup a.button{transition:all 150ms ease-in-out}.buttonGroup a.button:hover{color:#e8e0f5;background:#6e5c8a;transition:all 150ms ease-in-out}.block--category{border:1px solid #6e5c8a;border-radius:7px}.pageNav-jump{background:#554270;color:#a08fbd;transition:all 150ms ease-in-out;font-weight:500;border:1px solid #6e5c8a !important}.pageNav-jump:hover{background:#6e5c8a;color:#e8e0f5;transition:all 150ms ease-in-out;font-weight:500}.pageNav-page{background:#554270;color:#a08fbd;transition:all 150ms ease-in-out;font-weight:500;border-right:1px solid #6e5c8a !important}.pageNav-page--current{background:#6e5c8a !important;color:#e8e0f5 !important}.pageNav-page:last-child{border-right:0 !important}.pageNav-page:hover{background:#6e5c8a;color:#e8e0f5;transition:all 150ms ease-in-out;font-weight:500}.pageNav-main{border:1px solid #6e5c8a;border-radius:6px}.message-signature{margin-top:0 !important;padding:12px !important}.message-userArrow{display:none}.message-userBanner{margin-top:8px !important}.message-cell header{padding:12px;font-weight:600}.message-cell .message-content{padding:12px}.message-cell .message-body{margin-top:0}.message-cell--user{padding:24px 16px}.message-actionBar{padding:6px 12px;border-top:1px solid #6e5c8a}.message-actionBar .actionBar-set{margin-top:0;font-size:12px}.message-actionBar .actionBar-set a{font-weight:600}.message-actionBar-action{margin-left:2px}.message .reactionsBar{margin:0 12px 6px 12px;border-radius:4px;border-left:1px solid #6e5c8a !important;background:#362a51 !important}.username{color:#e8e0f5}.message-userTitle{font-weight:600;color:#a08fbd}.message-avatar-online{display:none}.tooltip-content{border-radius:6px}.memberTooltip-info{padding:16px !important}.memberTooltip-banners{margin-top:0 !important}.memberTooltip-name{text-transform:none !important}.memberTooltip-blurb{margin-top:2px !important}.memberTooltip-blurb .userTitle{font-weight:500;font-size:14px;color:#a08fbd}.memberTooltip-blurbContainer{margin-top:8px}.memberTooltip-blurbContainer .memberTooltip-blurb{font-size:12px;font-weight:500}.bookmarkLink{color:#a08fbd}.bookmarkLink:hover{color:#e8e0f5}.bookmarkLink.is-bookmarked{color:#e8e0f5 !important}.block-row{padding:12px 16px}.formRow dd{padding:8px 12px}.formRowSep{margin:-1px 0 0}.formSubmitRow-controls{padding:12px 0}.formSubmitRow-bar{background:transparent}.overlay{border:1px solid #6e5c8a}.overlay .block-body:last-child dt{background:#554270;border-bottom-left-radius:5px}.blockMessage{padding:16px}.blockMessage--important{background:#554270 !important;border:1px solid #6e5c8a !important;color:#e8e0f5 !important}.blockMessage--important.blockMessage--iconic:before{display:none !important}.blockMessage--warning{border:1px solid #605c39;border-left-width:1px !important;background:#393722;color:#fdee9b}.blockMessage--warning.blockMessage--iconic:before{display:none}.blockMessage--error{border:1px solid #81313e;border-left-width:1px !important;background:#4d1922;color:#ff8095}.blockMessage--error.blockMessage--iconic:before{display:none}.blockMessage--iconic{min-height:auto !important}.fr-command.fr-btn.fr-active+.fr-dropdown-menu{border:1px solid #6e5c8a !important}.fr-toolbar.fr-top{border-bottom:1px solid #6e5c8a}.fr-toolbar .rte-tab--preview{border-bottom:0}.fr-toolbar .rte-tab--preview button{padding:0px 16px !important}.fr-toolbar .fr-btn-grp{padding:2px 4px !important;border-color:#6e5c8a}.fr-toolbar .fr-btn-grp.rte-tab--inactive{border-bottom-width:0}.fr-wrapper .fr-placeholder{color:#a08fbd}.fr-wrapper{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.fr-box.fr-basic{border:1px solid #6e5c8a !important}.fr-box.fr-basic.is-focused{border:1px solid #6e5c8a !important}.js-quickReply .block-container{background:none !important;box-shadow:none !important;border:0}.js-quickReply .block-container .message-cell--main{padding:0 !important}.message.is-mod-selected,.block--messages .message.is-mod-selected{border:1px solid #605c39 !important;color:#fdee9b !important}.message.is-mod-selected .message-cell--user,.block--messages .message.is-mod-selected .message-cell--user{border-right:1px solid #605c39}.message.is-mod-selected .message-attribution,.block--messages .message.is-mod-selected .message-attribution{border-bottom:1px solid #605c39}.message.is-mod-selected .message-attribution a,.block--messages .message.is-mod-selected .message-attribution a{color:#fdee9b !important}.message.is-mod-selected .message-footer,.block--messages .message.is-mod-selected .message-footer{border-top:1px solid #605c39}.message.is-mod-selected .actionBar-action,.block--messages .message.is-mod-selected .actionBar-action,.message.is-mod-selected .actionBar-action label,.block--messages .message.is-mod-selected .actionBar-action label{color:#fdee9b !important}.filterBar-menuTrigger{background:#554270;border:1px solid #6e5c8a;color:#e8e0f5;padding:4px 8px;transition:all 150ms ease-in-out}.filterBar-menuTrigger:hover{background:#6e5c8a !important;transition:all 150ms ease-in-out}.filterBar-filterToggle{background:#6e5c8a !important;color:#e8e0f5 !important}.pairs--flex{display:flex}.pairs--flex dl:first-child{margin-right:12px}.structItem-cell--meta{width:20% !important}.structItem-title a{color:#e8e0f5;font-size:14px;font-weight:500}.inputTypes-input:checked+.inputTypes-display,.inputTypes-display:hover{background:#483663 !important}.formSubmitRow dd{padding:0}form .block-container{border:1px solid #6e5c8a}.fr-desktop .fr-command:hover:not(.fr-table-cell){background:#6e5c8a}.fr-desktop .fr-command.fr-btn{padding:4px;margin:2px}.fr-desktop .fr-command.fr-btn.fr-active:not(.fr-disabled){color:#e8e0f5}.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover{background:#6e5c8a}.p-title-value{color:#e8e0f5}.block-row.block-row--separated{padding:16px}.tabs--standalone+.block .block-container{border:1px solid #6e5c8a}.p-body-sideNavContent .block-container{border:1px solid #6e5c8a}.p-body-sideNavContent .block-minorHeader{border-radius:0}.p-body-sideNavContent .block-header{background:#362a51;padding:16px;border-bottom:1px solid #6e5c8a}.p-body-sideNavContent .blockLink{padding:16px;font-size:14px;font-weight:500}.p-body-sideNavContent .blockLink:hover{background:transparent}.p-body-sideNavContent .blockLink.is-selected{background:#6e5c8a;border-left:none;color:#e8e0f5}.userbanner{border-radius:6px;font-size:14px;font-weight:600;padding:8px 12px;margin-top:8px}.userbanner:before{font-family:'Font Awesome 5 Pro';margin-right:8px}.userbanner--admin{background:#4D1922;border:1px solid #81313e;color:#FF8095}.userbanner--admin:before{content:"\f084";width:1em;display:inline-block;text-align:center}.userbanner--reseller{background:#2D502B;border:1px solid #3d902c;color:#77EF6C}.userbanner--reseller:before{content:"\f2b5";width:1em;display:inline-block;text-align:center}.userbanner--retired{background:#0A4F5C;border:1px solid #16869c;color:#80EAFF}.userbanner--retired:before{content:"\f254";width:1em;display:inline-block;text-align:center}.userbanner--head-mod{background:#481452;border:1px solid #7a288a;color:#EA80FF}.userbanner--head-mod:before{content:"\f0e3";width:1em;display:inline-block;text-align:center}.userbanner--mod{background:#0F2757;border:1px solid #1f4693;color:#80AAFF}.userbanner--mod:before{content:"\f132";width:1em;display:inline-block;text-align:center}.userbanner--customer{background:#57270F;border:1px solid #93461f;color:#FFAA80}.userbanner--customer:before{content:"\f005";width:1em;display:inline-block;text-align:center}.userbanner--trusted-reseller{background:#233527;border:1px solid #39653c;color:#AAEEB1}.userbanner--trusted-reseller:before{content:"\f51e";width:1em;display:inline-block;text-align:center}.member-block{border:1px solid #6e5c8a;border-radius:6px;overflow:hidden}.member-block .block-tabHeader{border-top:1px solid #6e5c8a;color:#a08fbd}.member-block .block-tabHeader .tabs-tab{margin-left:-1px}.member-block .block-tabHeader .tabs-tab.is-active{color:#e8e0f5}.member-block .block-tabHeader .tabs-tab:hover{color:#e8e0f5}.member-block .memberHeader-avatar{padding:24px}.member-block .memberHeader-banners{margin-top:8px}.member-block .memberHeader-blurb{margin-top:0}.member-block .memberHeader-blurb .userTitle{font-weight:500;font-size:14px;color:#a08fbd}.member-block .memberHeader-blurbContainer{margin-top:12px}.member-block .memberHeader-blurbContainer .memberHeader-blurb{font-size:14px;font-weight:500}.member-block .memberHeader-name{text-transform:none;font-size:28px}.member-block .memberHeader-stats--content{display:flex;align-items:center;flex-wrap:wrap}.member-block .memberHeader-stats--content dl:not(:last-child){margin-right:24px}.member-block .memberHeader-content{padding:24px;padding-left:239px}.tabPanes .block{border:1px solid #6e5c8a;border-radius:6px}.tabs--standalone{background:#362a51;overflow:hidden}.tabs--standalone .tabs-tab{border:0;color:#a08fbd;background:#362a51;border-right:1px solid #6e5c8a}.tabs--standalone .tabs-tab:hover{color:#e8e0f5;background:#483663}.tabs--standalone .tabs-tab.is-active{background:#483663;border-right:1px solid #6e5c8a}.select2 input{color:#e8e0f5}.badgeContainer.badgeContainer--highlighted:after{background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%);box-shadow:0px 0px 5px rgba(209,106,71,0.5);color:#e8e0f5;font-weight:700}.menu .menu-row.menu-row--highlighted a{color:#e8e0f5}.xfa-nit-node-icon{width:52px;padding:20px 0 0 20px;vertical-align:baseline}.xfa-nit-node-icon i{border-radius:6px;line-height:1 !important}.node-subNodeFlatList{margin-top:8px;line-height:2rem}.node-subNodeFlatList .subNodeLink .xfa-nit-node-icon-small{display:inline-block;width:24px}.node-subNodeFlatList .subNodeLink .xfa-nit-node-icon-small i{background-size:20px 20px !important;line-height:1 !important;border-radius:4px;font-size:16px !important}.node-subNodeFlatList .subNodeLink .xfa-nit-node-icon-small i:before{width:20px}.menu.menu--medium{width:450px;max-width:calc(90%)}.menu-row{padding:12px;border-radius:0 !important}.menu-row a{color:#e8e0f5}.menu-row .username{color:#a08fbd}.menu-row time{font-weight:500;font-size:12px}.bbCodeDemoBlock-item dd{border-radius:4px !important;margin-top:6px}.bbCodeDemoBlock-item .bbImage{width:34px}.bbCodeBlock--code .bbCodeBlock-title{border-top-left-radius:4px;border-top-right-radius:4px}.bbTable th{background:#362a51 !important;border-top-left-radius:4px;border-top-right-radius:4px}.dataList-cell--alt{border-right:1px solid #7d699b !important}.formRow dd .inputTypes{margin:0 -16px}.is-disabled .inputGroup{pointer-events:none !important}.inputGroup.inputGroup--joined .input+.inputGroup-text{border:1px solid #7d699b !important}.inputGroup.inputGroup--joined .inputGroup-text:first-child{border-right:0 !important;border:1px solid #6e5c8a}.inputGroup.inputGroup--joined .inputGroup-text+.input{border-left:1px solid #6e5c8a !important}.inputGroup.inputGroup--joined .inputNumber-button{background:#554270 !important;color:#a08fbd !important}.inputGroup.inputGroup--joined .inputNumber-button:hover{background:#6e5c8a !important;color:#e8e0f5 !important}body[data-template="forum_view"] .block .block-container .block-body:only-child,body[data-template="forum_view_type_suggestion"] .block .block-container .block-body:only-child{border:1px solid #6e5c8a}body[data-template="nf_tickets_kb_index"] .block-questions{padding:0}body[data-template="nf_tickets_kb_index"] .block-questions--left{display:flex;flex-direction:column}body[data-template="nf_tickets_kb_index"] .block-questions--left .block-question{width:100% !important;padding:16px !important;border-bottom:1px solid #6e5c8a}body[data-template="nf_tickets_kb_index"] .block-questions--left .block-question:first-child{margin-top:-1px}body[data-template="nf_tickets_kb_index"] .block-questions--left .block-question:last-child{border-bottom:0 !important}body[data-template="nf_tickets_kb_index"] .block-popular{border-left:4px solid #6e5c8a}@media (max-width:900px){body[data-template="nf_tickets_kb_index"] .block-popular{border-top:4px solid #6e5c8a;border-left:none}}body[data-template="nf_tickets_kb_index"] .block-popular .block-minorHeader{border-top-left-radius:0px;border-top-right-radius:0px}body[data-template="nf_tickets_kb_article_view"] .articleExtraLinks{margin-top:0;padding:0;background:#554270}body[data-template="nf_tickets_kb_article_view"] .articleExtraLinks a{text-decoration:underline}body[data-template="conversation_view"] .p-body-sidebar .block-container,body[data-template="nf_tickets_ticket_view"] .p-body-sidebar .block-container,body[data-template="nf_tickets_ticket_activity"] .p-body-sidebar .block-container,body[data-template="nf_tickets_ticket_field"] .p-body-sidebar .block-container,body[data-template="online_list"] .p-body-sidebar .block-container{border:1px solid #6e5c8a}body[data-template="nf_tickets_member_view"] .block-container{border:1px solid #6e5c8a}body[data-template="nf_tickets_list_queue"] .p-body-content .block-container,body[data-template="nf_tickets_category_view"] .p-body-content .block-container,body[data-template="nf_tickets_kb_index"] .p-body-content .block-container,body[data-template="nf_tickets_kb_article_view"] .p-body-content .block-container,body[data-template="online_list"] .p-body-content .block-container,body[data-template="help_index"] .p-body-content .block-container,body[data-template="account_reactions"] .p-body-content .block-container,body[data-template="member_ip_users_list"] .p-body-content .block-container{border:1px solid #6e5c8a}body[data-template="nf_tickets_list_queue"] .categoryList-label,body[data-template="nf_tickets_category_view"] .categoryList-label,body[data-template="nf_tickets_kb_index"] .categoryList-label,body[data-template="nf_tickets_kb_article_view"] .categoryList-label,body[data-template="online_list"] .categoryList-label,body[data-template="help_index"] .categoryList-label,body[data-template="account_reactions"] .categoryList-label,body[data-template="member_ip_users_list"] .categoryList-label{padding-right:16px !important}body[data-template="nf_tickets_ticket_view"] .block-tabHeader{display:none}body[data-template="nf_tickets_ticket_view"] .message--quickReply .message-cell--main{padding:8px !important}body[data-template="nf_tickets_ticket_view"] .message--quickReply .ticketReply--extraControls{margin-top:16px}body[data-template="nf_tickets_ticket_view"] .message-cell--main .message-content{padding:0 !important}body[data-template="nf_tickets_ticket_view"] .message-cell--main header{padding:8px;border-bottom:1px solid #6e5c8a}body[data-template="nf_tickets_ticket_view"] .message-cell--main .message-body{margin:0;padding:12px}body[data-template="report_view"] .block-container,body[data-template="account_following"] .block-container,body[data-template="account_ignored"] .block-container,body[data-template="account_bookmarks"] .block-container,body[data-template="conversation_list"] .block-container,body .siropuShoutbox .block-container{border:1px solid #6e5c8a;border-radius:6px}body[data-template="report_view"] .block-header,body[data-template="account_following"] .block-header,body[data-template="account_ignored"] .block-header,body[data-template="account_bookmarks"] .block-header,body[data-template="conversation_list"] .block-header,body .siropuShoutbox .block-header{border-bottom:1px solid #6e5c8a}.block-header{padding:12px;border-bottom:1px solid #6e5c8a;color:#e8e0f5 !important}.autoCompleteList{background:#483663 !important;border-radius:4px !important}.autoCompleteList li{border-radius:4px !important}.autoCompleteList li .is-selected{background:#554270 !important;border-radius:4px !important;color:#e8e0f5 !important}.autoCompleteList li:hover{background:#554270 !important;border-radius:4px !important;color:#e8e0f5 !important}.message-body a[data-xf-init="member-tooltip"]{background:#6e5c8a;border:1px solid transparent;border-radius:3px;padding:3px 6px}.tabs-tab{padding:16px !important}meter.meterBar{background-color:transparent}.button:disabled{pointer-events:none !important;opacity:0.5 !important;cursor:pointer !important}.siropuShoutbox .block-header .fa-bullhorn,.siropuShoutbox .block-header .fa-minus,.siropuShoutbox .block-header .fa-arrow-down,.siropuShoutbox .block-header .fa-arrow-up{display:none}.siropuShoutbox .block-body{padding:0}.siropuShoutbox form{padding:12px;border-bottom:1px solid #6e5c8a;margin-bottom:0}.siropuShoutbox form.siropuShoutboxReverse{border-bottom:0 !important}.siropuShoutbox form span button[type="submit"]{display:none}.siropuShoutboxShouts li{padding:8px;border-bottom:1px solid #6e5c8a;margin-bottom:0;display:flex;flex-wrap:wrap;align-items:start}.siropuShoutboxShouts li .avatar{margin-right:8px;flex-shrink:0}.siropuShoutboxShouts li .siropuShoutboxMessage{margin:0 4px;width:100%;max-width:70%}.siropuShoutboxShouts li .u-dt{margin-left:auto;margin-top:4px}.siropuShoutboxShouts li .siropuShoutboxActions{margin-left:12px;text-align:right}@media (max-width:768px){.siropuShoutboxShouts li .siropuShoutboxActions{margin-left:auto !important}}.notices--bottom_fixer .notice--cookie{border-top:1px solid #6e5c8a !important;background:#554270 !important;color:#e8e0f5 !important}.notices--bottom_fixer .notice--cookie .button--notice{color:#e8e0f5 !important}.notice--primary{border:1px solid #605c39 !important;background:#393722 !important;color:#fdee9b !important}.notice--primary a{color:#fdee9b !important;text-decoration:underline}.notice--accent{background:#554270 !important;color:#e8e0f5 !important}.notice--accent .notice-content{border:1px solid #6e5c8a !important;border-radius:6px;margin:-1px}.notice--accent .notice-content a{text-decoration:underline;color:#a08fbd !important}.notice--accent .notice-content a:hover{color:#e8e0f5 !important}.overlay-content .menu-linkRow.menu-linkRow--alt{color:#e8e0f5 !important}.CodeMirror-gutters{background:#483663 !important;border-right:1px solid #6e5c8a !important}.CodeMirror-linenumber{color:#a08fbd !important}.tabPanes dt{background:#483663 !important}.js-replyNewMessageContainer .message--quickReply .message-cell--main{padding:8px !important}.js-replyNewMessageContainer .message--quickReply .ticketReply--extraControls{margin-top:16px}.js-replyNewMessageContainer .message-cell--main .message-content{padding:0 !important}.js-replyNewMessageContainer .message-cell--main header{padding:8px;border-bottom:1px solid #6e5c8a}.js-replyNewMessageContainer .message-cell--main .message-body{margin:0;padding:12px}.menu--account .menu-row--alt{border-top-right-radius:6px !important;border-top-left-radius:6px !important}[data-widget-definition="members_online"]{border:1px solid #6e5c8a;border-radius:6px}[data-widget-definition="members_online"] .block-footer{padding:12px 16px !important}.shareButtons{display:none}.label--red{background:#4d1922 !important;border:1px solid #81313e !important;color:#ff8095 !important}.label--green{background:#233527 !important;border:1px solid #39653c !important;color:#AAEEB1 !important}.label--legacy{background:#6e5c8a;border:1px solid #6e5c8a;border-radius:2px !important}.fr-box .smilie,.bbWrapper .smilie,.siropuShoutboxShouts li .siropuShoutboxMessage .smilie{max-width:30px !important;margin:0 4px;vertical-align:middle !important}.fr-toolbar .fr-more-toolbar.fr-expanded{border-top:1px solid #6e5c8a;background:#554270}.formSubmitRow.formSubmitRow--sticky.is-sticky .formSubmitRow-bar{backdrop-filter:none !important;background:#483663;border-top:1px solid #6e5c8a}.label{border-radius:4px;font-size:11px !important;font-weight:600 !important;padding:2px 8px !important}.label--bug,.label--closed{background:#4d1922;border:1px solid #81313e;color:#ff8095}.label--new-feature,.label--solved{background:#233527;border:1px solid #39653c;color:#AAEEB1}.label--improvement{background:#164042;border:1px solid #21777d;color:#9BF4FD}.label--legacy{background:#554270;border:1px solid #6e5c8a;color:#a08fbd}.label--config{background:#554270;border:1px solid #6e5c8a;color:#e8e0f5}.label--accent{border:1px solid transparent !important;background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%) !important;box-shadow:0px 0px 5px rgba(209,106,71,0.5) !important;color:#e8e0f5 !important;text-transform:uppercase !important;font-size:11px !important;font-weight:700 !important;padding:2px 8px !important;border-radius:4px !important}.menu .menuPrefix{display:inline !important}.menu .js-prefixMenuContent .menu-row:hover{background:#554270;cursor:pointer}.menu .js-prefixMenuContent .menu-row .label{cursor:pointer}.menu .label{border-radius:4px;font-size:11px !important;font-weight:600 !important;padding:2px 8px !important}.menu .label--bug,.menu .label--closed{background:#4d1922;border:1px solid #81313e;color:#ff8095}.menu .label--new-feature,.menu .label--solved{background:#233527;border:1px solid #39653c;color:#AAEEB1}.menu .label--improvement{background:#164042;border:1px solid #21777d;color:#9BF4FD}.menu .label--legacy{background:#554270;border:1px solid #6e5c8a;color:#a08fbd}.message--deleted .message-attribution{padding:8px}.message--deleted .messageNotice{margin:12px !important}.messageNotice{border:1px solid #6e5c8a;border-radius:4px;margin:8px}.messageNotice a{color:#a08fbd !important}.messageNotice a:hover{color:#e8e0f5 !important}.message-lastEdit{margin-top:0;padding:12px}.structItemContainer-group--sticky{background:#554270}.structItemContainer-group--sticky .structItem-title{margin-bottom:6px}.structItemContainer-group--sticky .structItem-title:before{content:"Sticky";border:1px solid transparent;background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%);box-shadow:0px 0px 5px rgba(209,106,71,0.5);color:#e8e0f5;text-transform:uppercase;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}.link--external,.link--internal{color:#a08fbd !important;text-decoration:underline;transition:color 150ms ease-in-out}.link--external:hover,.link--internal:hover{color:#e8e0f5 !important;text-decoration:underline;transition:color 150ms ease-in-out}.attachmentUploads{margin-top:10px}.message-attachments{margin:0 !important;padding:12px}.siropuShoutboxTagged{border:0;border-radius:0 !important;padding:0;background:#554270}.label.label--primary{background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%);box-shadow:0px 0px 5px rgba(209,106,71,0.5);color:#e8e0f5;border:1px solid transparent;font-weight:700}.fr-popup{border:1px solid #6e5c8a}.fr-popup .fr-image-upload-layer{border:2px dashed #6e5c8a !important;color:#a08fbd !important}.fr-popup .fr-image-upload-layer:hover{background:#6e5c8a !important;color:#e8e0f5 !important}.fr-popup .fr-tabs{border-bottom:1px solid #6e5c8a}.blockMessage.blockMessage--important{background:#483663 !important;border:1px solid #6e5c8a !important}.blockMessage.blockMessage--important a{color:#a08fbd;text-decoration:underline;transition:color 150ms ease-in-out}.blockMessage.blockMessage--important a:hover{color:#e8e0f5;transition:color 150ms ease-in-out}.input[readonly]{background:#554270;border:1px solid #6e5c8a;opacity:.5 !important;pointer-events:none !important}@media (max-width:650px){.message:not(.message--forceColumns) .message-userDetails{display:flex !important;flex-direction:column}.userBanner{text-align:center !important}.message-cell{border-top-left-radius:5px !important;border-top-right-radius:5px !important}.message-cell--main{padding-left:0 !important}.blockStatus{margin:0 !important;border-radius:5px !important;border-right:1px solid #6e5c8a !important}.block-filterBar{border-top-left-radius:5px !important;border-top-right-radius:5px !important}}.approvalQueue-item .message-cell--extra{padding:8px}.structItem.is-unread{background:#554270}.structItem.is-unread .structItem-title{color:#e8e0f5}.structItem.is-unread .structItem-title:after{content:"UNREAD";background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%);box-shadow:0px 0px 5px rgba(209,106,71,0.5);border-radius:4px;font-size:10px;padding:2px 6px;color:#e8e0f5;font-weight:700;margin-left:4px}.structItem--ticket .structItem-title a{color:#a08fbd !important}.structItem--ticket1{background:#554270 !important}.structItem--ticket1 .structItem-title a{color:#e8e0f5 !important}.js-convMenuBody .fauxBlockLink-blockLink{color:#a08fbd;transition:color 150ms ease-in-out}.js-convMenuBody .fauxBlockLink-blockLink:hover{color:#e8e0f5;transition:color 150ms ease-in-out}.js-convMenuBody .menu-row--highlighted{background:#554270 !important}.js-convMenuBody .menu-row--highlighted .fauxBlockLink-blockLink:after{content:"UNREAD";background:linear-gradient(90deg, #d16a47 0%, #d1475e 100%);box-shadow:0px 0px 5px rgba(209,106,71,0.5);border-radius:4px;font-size:10px;padding:2px 6px;color:#e8e0f5;font-weight:700;margin-left:4px}.js-threadList .is-unread{background:#483663 !important}.js-threadList .is-unread .structItem-title a{color:#e8e0f5 !important}.js-threadList .structItem-title a{color:#a08fbd !important;transition:color 150ms ease-in-out}.js-threadList .structItem-title a:hover{color:#e8e0f5 !important;transition:color 150ms ease-in-out}.siropuShoutboxHeader{margin:0;padding:12px;background:#393722;color:#fdee9b}.siropuShoutboxHeader a{color:#fdee9b;text-decoration:underline}.siropuShoutboxHeader h3{margin:0;margin-bottom:4px}.pageNavSimple-el.pageNavSimple-el--current{background:none}.pageNavSimple-el.pageNavSimple-el--current:hover{background:#554270}.js-visitorMenuBody .userbanner:not(:first-child){display:none}.bbCodeBlock-title .copy-button{background:#554270;border:1px solid #6e5c8a;color:#e8e0f5;font-size:11px;font-weight:500;padding:2px 6px;border-radius:3px}.js-newMessagesIndicator .message-cell--alert{background:#554270 !important}.js-newMessagesIndicator .message-cell--alert a{color:#a08fbd;text-decoration:underline;transition:color 150ms ease-in-out}.js-newMessagesIndicator .message-cell--alert a:hover{color:#e8e0f5;transition:color 150ms ease-in-out}.select2-container{border-radius:3px !important}.select2-container--open .select2-container--above .select2-selection--single{border-top-left-radius:0 !important;border-top-right-radius:0 !important;border-top:0 !important}.select2-container--open .select2-container--below .select2-selection--single{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important;border-bottom:0 !important}.select2-selection--single{background-color:#554270 !important;border:1px solid #6e5c8a !important}.select2-selection__rendered{color:#a08fbd !important}.select2-dropdown{background-color:#554270 !important;border:1px solid #6e5c8a !important;border-radius:3px !important}.select2-dropdown--below{border-top-left-radius:0 !important;border-top-right-radius:0 !important}.select2-dropdown--above{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.select2-search{border-bottom:1px solid #6e5c8a !important}.select2-search__field{border:0 !important;background-color:#554270 !important;color:#e8e0f5 !important}.select2-results__option[aria-selected=true]{background-color:#6e5c8a !important}.select2-results__option--highlighted{background-color:#6e5c8a !important}