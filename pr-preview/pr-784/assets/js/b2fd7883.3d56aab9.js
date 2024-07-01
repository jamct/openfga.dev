"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[4875],{92581:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(74848),r=i(28453),s=i(36289);const o={title:"Google Drive",description:"Modeling Google Drive permissions",sidebar_position:1,slug:"/modeling/advanced/gdrive"},a="Modeling Google Drive permissions with ",l={id:"content/modeling/advanced/gdrive",title:"Google Drive",description:"Modeling Google Drive permissions",source:"@site/docs/content/modeling/advanced/gdrive.mdx",sourceDirName:"content/modeling/advanced",slug:"/modeling/advanced/gdrive",permalink:"/pr-preview/pr-784/docs/modeling/advanced/gdrive",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/advanced/gdrive.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Google Drive",description:"Modeling Google Drive permissions",sidebar_position:1,slug:"/modeling/advanced/gdrive"},sidebar:"docs",previous:{title:"Advanced Use-Cases",permalink:"/pr-preview/pr-784/docs/modeling/advanced"},next:{title:"GitHub",permalink:"/pr-preview/pr-784/docs/modeling/advanced/github"}},d={},c=[{value:"Before You Start",id:"before-you-start",level:2},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Modeling Concentric Relationships",id:"modeling-concentric-relationships",level:4},{value:"Modeling Object-to-Object Relationships",id:"modeling-object-to-object-relationships",level:4},{value:"Modeling Public Access",id:"modeling-public-access",level:4},{value:"Concepts &amp; Configuration Language",id:"concepts--configuration-language",level:4},{value:"What You Will Be Modeling",id:"what-you-will-be-modeling",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Defined Scenarios",id:"defined-scenarios",level:3},{value:"Modeling Google Drive&#39;s Permissions",id:"modeling-google-drives-permissions",level:2},{value:"01. Individual Permissions",id:"01-individual-permissions",level:3},{value:"02. Organization Permissions",id:"02-organization-permissions",level:3},{value:"03. Folder Permission Propagation",id:"03-folder-permission-propagation",level:3},{value:"04. Sharing Files And Folders Publicly",id:"04-sharing-files-and-folders-publicly",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"modeling-google-drive-permissions-with-",children:["Modeling Google Drive permissions with ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})]}),"\n",(0,n.jsx)(s.ZE,{}),"\n",(0,n.jsxs)(t.p,{children:["This tutorial explains how to represent ",(0,n.jsx)(t.a,{href:"https://www.google.com/intl/en-GB/drive/",children:"Google Drive"})," permissions model with ",(0,n.jsx)(s.bU,{format:s.Ed.ProductLink}),"."]}),"\n",(0,n.jsx)(s.u6,{title:"What you will learn",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Indicate ",(0,n.jsx)(s.OK,{section:"what-is-a-relationship",linkName:"relationships"})," between a group of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(s.OK,{section:"what-is-a-user",linkName:"users"})})," and an ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(s.OK,{section:"what-is-an-object",linkName:"object"})}),". See ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/user-groups",children:"Modeling User Groups"})," for more.",(0,n.jsx)("br",{}),"\nUsed here to indicate that all users within a domain can access a document (sharing a document within an organization)."]}),"\n",(0,n.jsxs)(t.li,{children:["Model ",(0,n.jsx)(t.strong,{children:"concentric relationship"})," to have a certain ",(0,n.jsx)(s.OK,{section:"what-is-a-relation",linkName:"relation"})," on an object imply another relation on the same object. See ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/building-blocks/concentric-relationships",children:"Modeling Concepts: Concentric Relationships"})," for more.",(0,n.jsx)("br",{}),"\nUsed here is to indicate that writers are also commenters and viewers."]}),"\n",(0,n.jsxs)(t.li,{children:["Using ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/configuration-language#the-union-operator",children:(0,n.jsx)(t.strong,{children:"the union operator"})})," condition to indicate that a user might have a certain relation with an object if they match any of the criteria indicated.",(0,n.jsx)("br",{}),"\nUsed here to indicate that a user can be a viewer on a document, or can have the viewer relationship implied through commenter."]}),"\n",(0,n.jsxs)(t.li,{children:["Using the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(s.OK,{section:"what-is-type-bound-public-access",linkName:"type bound public access"})})," in a ",(0,n.jsx)(s.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple's"})," user field to indicate that everyone has a certain relation with an object. See ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/public-access",children:"Modeling Public Access"})," for more.",(0,n.jsx)("br",{}),"\nUsed here to ",(0,n.jsx)(t.a,{href:"#04-sharing-files-and-folders-publicly",children:"share documents publicly"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Model ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/parent-child",children:(0,n.jsx)(t.strong,{children:"parent-child objects"})})," to indicate that a user having a relationship with a certain object implies having a relationship with another object in ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm}),".",(0,n.jsx)("br",{}),"\nUsed here is to indicate that a writer on a folder is a writer on all documents inside that folder."]}),"\n"]})}),"\n",(0,n.jsx)(s.QF,{title:"Google Drive",preset:"drive",example:"Google Drive",store:"gdrive"}),"\n",(0,n.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,n.jsxs)(t.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm})," concepts and know how to develop the things that we will list below."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsxs)("summary",{children:[(0,n.jsxs)(t.h3,{id:"-concepts",children:[(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})," Concepts"]}),(0,n.jsxs)(t.p,{children:["It would be helpful to have an understanding of some concepts of ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})," before you start."]})]}),(0,n.jsx)(t.h4,{id:"modeling-concentric-relationships",children:"Modeling Concentric Relationships"}),(0,n.jsxs)(t.p,{children:["You need to know how to update the authorization model to allow having nested relations such as all writers are readers. ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/building-blocks/concentric-relationships",children:"Learn more \u2192"})]}),(0,n.jsx)(t.h4,{id:"modeling-object-to-object-relationships",children:"Modeling Object-to-Object Relationships"}),(0,n.jsxs)(t.p,{children:["You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/building-blocks/object-to-object-relationships",children:"Learn more \u2192"})]}),(0,n.jsx)(t.p,{children:"Used here to indicate that users who have access to view a folder have access to view all documents inside it."}),(0,n.jsx)(t.h4,{id:"modeling-public-access",children:"Modeling Public Access"}),(0,n.jsxs)(t.p,{children:["You need to know how to add a relationship tuple to indicate that a resource is publicly available. ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/public-access",children:"Learn more \u2192"})]}),(0,n.jsx)(t.h4,{id:"concepts--configuration-language",children:"Concepts & Configuration Language"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(s.OK,{})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/configuration-language",children:"Configuration Language"})}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"what-you-will-be-modeling",children:"What You Will Be Modeling"}),"\n",(0,n.jsxs)(t.p,{children:["Google Drive is a system to store, share, and collaborate on files and folders. ",(0,n.jsx)(t.a,{href:"https://www.google.com/drive/",children:"Source"})]}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial, you will build a subset of the Google Drive permission model (detailed below) in ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm}),", using some scenarios to validate the model."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: For brevity, this tutorial will not model all of Google Drive's permissions. Instead, it will focus on modeling for the scenarios outlined below"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(t.p,{children:["Google Drive's permission model is represented in ",(0,n.jsx)(t.a,{href:"https://developers.google.com/drive/api/v3/ref-roles",children:"their documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial, you will be focusing on a subset of these permissions."}),"\n",(0,n.jsx)(t.p,{children:"Requirements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Users can be owners, editors, commenters and viewers of documents"}),"\n",(0,n.jsx)(t.li,{children:"Documents can be shared with all users in a domain"}),"\n",(0,n.jsx)(t.li,{children:"Folders can contain documents and users with a certain permission on a folder have that same permission to a document in that folder"}),"\n",(0,n.jsx)(t.li,{children:"Documents and folders can be shared publicly"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"defined-scenarios",children:"Defined Scenarios"}),"\n",(0,n.jsx)(t.p,{children:"There will be the following users:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Anne, who is in the xyz domain"}),"\n",(0,n.jsx)(t.li,{children:"Beth, who is in the xyz domain"}),"\n",(0,n.jsx)(t.li,{children:"Charles, who is in the xyz domain"}),"\n",(0,n.jsx)(t.li,{children:"Diane, who is NOT in the xyz domain"}),"\n",(0,n.jsx)(t.li,{children:"Erik, who is NOT in the xyz domain"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There will be:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"a 2021-budget document, owned by Anne, shared for commenting with Beth and viewable by all members of the xyz domain."}),"\n",(0,n.jsx)(t.li,{children:"a 2021-planning folder, viewable by Diane and contains the 2021-budget document"}),"\n",(0,n.jsx)(t.li,{children:"a 2021-public-roadmap document, owned by Anne, available for members xyz domain to comment on and is publicly viewable"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"modeling-google-drives-permissions",children:"Modeling Google Drive's Permissions"}),"\n",(0,n.jsx)(t.h3,{id:"01-individual-permissions",children:"01. Individual Permissions"}),"\n",(0,n.jsxs)(t.p,{children:["To keep thing simple and focus on ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm})," features rather than Google Drive complexity we will model only four ",(0,n.jsx)(t.a,{href:"https://developers.google.com/drive/api/v3/ref-roles",children:"roles"})," (Viewer, Commenter, Writer, Owner)."]}),"\n",(0,n.jsx)(t.p,{children:"At the end of this section we want to have the following permissions represented:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image showing permissions",src:i(16894).A+"",width:"940",height:"357"})}),"\n",(0,n.jsxs)(t.p,{children:["To represent permissions in ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})," we use ",(0,n.jsx)(s.OK,{section:"what-is-a-relation",linkName:"relations"}),". For document permissions we need to create the following ",(0,n.jsx)(s.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),":"]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{owner:{this:{}},writer:{this:{}},commenter:{this:{}},viewer:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},writer:{directly_related_user_types:[{type:"user"}]},commenter:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm})," service determines if a ",(0,n.jsx)(s.OK,{section:"what-is-a-user",linkName:"user"})," has access to an ",(0,n.jsx)(s.OK,{section:"what-is-an-object",linkName:"object"})," by ",(0,n.jsx)(s.OK,{section:"what-is-a-check-request",linkName:"checking"})," if the user has a relation to that object. Let us examine one of those relations in detail:"]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type:"document",relations:{viewer:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"}]}}}},skipVersion:!0}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:'The snippet above indicates that objects of type document have users related to them as "viewer" if those users belong to the userset of all users related to the document as "viewer".'}),(0,n.jsxs)(t.p,{children:["This means that a user can be ",(0,n.jsx)(s.OK,{section:"what-are-direct-and-implied-relationships",linkName:"directly related"}),' as a viewer to an object of type "document"']})]}),"\n",(0,n.jsxs)(t.p,{children:["If we want to say ",(0,n.jsx)(t.code,{children:"beth"})," is a commenter of ",(0,n.jsx)(t.strong,{children:"document:2021-budget"})," we create this relationship tuple:"]}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{user:"user:beth",relation:"commenter",object:"document:2021-budget"}]}),"\n",(0,n.jsxs)(t.p,{children:["We can now ask ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm}),' "is ',(0,n.jsx)(t.code,{children:"beth"})," a commenter of repository ",(0,n.jsx)(t.strong,{children:"document:2021-budget"}),'?"']}),"\n",(0,n.jsx)(s.ou,{user:"user:beth",relation:"commenter",object:"document:2021-budget",allowed:!0}),"\n",(0,n.jsxs)(t.p,{children:["We could also say that ",(0,n.jsx)(t.code,{children:"anne"})," is an owner of the same document:"]}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{user:"user:anne",relation:"owner",object:"document:2021-budget"}]}),"\n",(0,n.jsxs)(t.p,{children:["And ",(0,n.jsx)(s.OK,{section:"what-is-a-check-request",linkName:"ask"})," some questions to ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm}),":"]}),"\n",(0,n.jsx)(s.ou,{user:"user:anne",relation:"owner",object:"document:2021-budget",allowed:!0}),"\n",(0,n.jsx)(s.ou,{user:"user:anne",relation:"writer",object:"document:2021-budget",allowed:!1}),"\n",(0,n.jsxs)(t.p,{children:["The first reply makes sense but the second one does not. Intuitively, if ",(0,n.jsx)(t.code,{children:"anne"})," was an ",(0,n.jsx)(t.strong,{children:"owner"}),", she was also be a ",(0,n.jsx)(t.strong,{children:"writer"}),". In fact, Google Drive explains this in ",(0,n.jsx)(t.a,{href:"https://developers.google.com/drive/api/v3/ref-roles",children:"their documentation"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image showing roles",src:i(72163).A+"",width:"677",height:"789"})}),"\n",(0,n.jsxs)(t.p,{children:["To make ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm}),' aware of this "concentric" permission model we need to update our definitions:']}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{owner:{this:{}},writer:{union:{child:[{this:{}},{computedUserset:{relation:"owner"}}]}},commenter:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}}]}},viewer:{union:{child:[{this:{}},{computedUserset:{relation:"commenter"}}]}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},writer:{directly_related_user_types:[{type:"user"}]},commenter:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Let's examine one of those relations in detail:"}),(0,n.jsx)(t.p,{children:'objects of type document have users related to them as "viewer": if they belong to any of (the union of) the following:'}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'the userset of all users related to the document as "viewer"'}),"\n",(0,n.jsx)(t.li,{children:'the userset of all users related to the document as "commenter"'}),"\n"]})]}),"\n",(0,n.jsx)(t.p,{children:"With this update our model now supports nested definitions and now:"}),"\n",(0,n.jsx)(s.ou,{user:"user:anne",relation:"owner",object:"document:2021-budget",allowed:!0}),"\n",(0,n.jsx)(s.ou,{user:"user:anne",relation:"writer",object:"document:2021-budget",allowed:!0}),"\n",(0,n.jsx)(t.h3,{id:"02-organization-permissions",children:"02. Organization Permissions"}),"\n",(0,n.jsx)(t.p,{children:"Google Drive allows you to share a file with everyone in your organization as a viewer, commenter or writer/editor."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(56794).A+"",width:"1302",height:"724"})}),"\n",(0,n.jsx)(t.p,{children:"At the end of this section we want to end up with the following permissions represented:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image showing permissions",src:i(79517).A+"",width:"940",height:"542"})}),"\n",(0,n.jsxs)(t.p,{children:["To add support for domains and members all we need to do is add this object to the ",(0,n.jsx)(s.bU,{format:s.Ed.ProductLink})," ",(0,n.jsx)(s.OK,{section:"what-is-a-type-definition",linkName:"authorization model"}),". In addition, update the model to allow domain member to be assigned to document:"]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{owner:{this:{}},writer:{union:{child:[{this:{}},{computedUserset:{relation:"owner"}}]}},commenter:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}}]}},viewer:{union:{child:[{this:{}},{computedUserset:{relation:"commenter"}}]}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},writer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},commenter:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},viewer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]}}}},{type:"domain",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:'Objects of type "domain" have users related to them as "member" if they belong to the userset of all users related to the domain as "member".'}),(0,n.jsx)(t.p,{children:"In other words, users can be direct members of a domain."})]}),"\n",(0,n.jsxs)(t.p,{children:["Let's now create a domain, add members to it and make all members ",(0,n.jsx)(t.strong,{children:"viewers"})," of ",(0,n.jsx)(t.strong,{children:"document:2021-budget"}),"."]}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{_description:"make anne, beth, charles a member of the xyz domain",user:"user:anne",relation:"member",object:"domain:xyz"},{user:"user:beth",relation:"member",object:"domain:xyz"},{user:"user:charles",relation:"member",object:"domain:xyz"},{_description:"make members of xyz domain viewers of document:2021-budget",user:"domain:xyz#member",relation:"viewer",object:"document:2021-budget"}]}),"\n",(0,n.jsxs)(t.p,{children:["The last relationship tuple introduces a new ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})})," concept. A ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(s.OK,{section:"what-is-a-user",linkName:"userset"})}),". When the value of a user is formatted like this ",(0,n.jsxs)(t.strong,{children:["objectType",":objectId","#relation"]}),", ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm})," will automatically expand the userset into all its individual user identifiers:"]}),"\n",(0,n.jsx)(s.ou,{user:"user:charles",relation:"viewer",object:"document:2021-budget",allowed:!0}),"\n",(0,n.jsx)(t.h3,{id:"03-folder-permission-propagation",children:"03. Folder Permission Propagation"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://developers.google.com/drive/api/v3/manage-sharing#permission_propagation",children:"Permission propagation"})," happens between folders and files: if you are a viewer in a folder, you can view its documents. This applies even when you are not explicitly a viewer in a document.\n",(0,n.jsx)(t.img,{src:"https://pbs.twimg.com/media/Eme_FlYW4AEAYfi?format=jpg&name=large",alt:"Image"})]}),"\n",(0,n.jsxs)(t.p,{children:["At the end of this section we want to end up with the following permissions represented. Note that a folder is an object in the ",(0,n.jsx)(t.strong,{children:"document"})," type, as we do not need a separate type:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image showing permissions",src:i(50972).A+"",width:"940",height:"578"})}),"\n",(0,n.jsxs)(t.p,{children:["We need to add the notion that a ",(0,n.jsx)(t.strong,{children:"document"})," can be the ",(0,n.jsx)(t.strong,{children:"parent"})," of another ",(0,n.jsx)(t.strong,{children:"document"}),". We know how to do that:"]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{parent:{this:{}},owner:{this:{}},writer:{union:{child:[{this:{}},{computedUserset:{relation:"owner"}}]}},commenter:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}}]}},viewer:{union:{child:[{this:{}},{computedUserset:{relation:"commenter"}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"document"}]},owner:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},writer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},commenter:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},viewer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]}}}}]}}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:'Notice the newly added "parent" relation in the configuration above.'})}),"\n",(0,n.jsx)(t.p,{children:"We can indicate this relation by adding the following relationship tuples"}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{_description:"Diane is a viewer of document:2021-planning",user:"user:diane",relation:"viewer",object:"document:2021-planning"},{_description:"document:2021-planning is a parent of document:2021-budget",user:"document:2021-planning",relation:"parent",object:"document:2021-budget"}]}),"\n",(0,n.jsx)(t.p,{children:"What we still lack is the ability to propagate permissions from parent to children. We want to say that a user is a viewer of a document if either:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"[done] they have a viewer relationship (directly or through domain membership)"}),"\n",(0,n.jsx)(t.li,{children:"[pending] they have a viewer relationship with the parent document"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We need a way to consider the parent viewers, not just direct viewers of the document when getting a check for:"}),"\n",(0,n.jsx)(s.ou,{user:"user:diane",relation:"viewer",object:"document:2021-budget"}),"\n",(0,n.jsxs)(t.p,{children:["More details on this technique can be found in the section ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-784/docs/modeling/parent-child",children:"Modeling Parent-Child Objects"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"We express it like this:"}),"\n",(0,n.jsx)(s.pB,{configuration:{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"commenter"}},{tupleToUserset:{tupleset:{relation:"parent"},computedUserset:{relation:"viewer"}}}]}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]}}}},skipVersion:!0}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:'The users with a viewer relationship to a certain object of type "document" are any of:'}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['the "viewers": the set of users who are ',(0,n.jsx)(s.OK,{section:"what-are-direct-and-implied-relationships",linkName:"directly related"}),' to the document as a "viewer"']}),"\n",(0,n.jsx)(t.li,{children:'the "commenters": the set of users who are related to the object as "commenter"'}),"\n",(0,n.jsx)(t.li,{children:'the "viewers of the parents": from the objects who are related to the doc as parent, return the sets of users who are related to those objects as "viewer"'}),"\n"]}),(0,n.jsx)(t.p,{children:"What the added section is doing is:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"read all relationship tuples related to document:2021-budget as parent which returns:"}),"\n"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'[{ "object": "document:2021-budget", "relation": "parent", "user": "document:2021-planning" }]'})}),(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"for each relationship tuple read, return all usersets that match the following, returning tuples of shape:"}),"\n"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'{ "object": "document:2021-planning", "viewer", "user": ??? }'})}),(0,n.jsxs)(t.p,{children:["including: ",(0,n.jsx)(t.code,{children:'{ "object": "document:2021-planning", "viewer", "user": "user:diane" }'})]})]}),"\n",(0,n.jsx)(t.p,{children:"The updated authorization model looks like this:"}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{owner:{union:{child:[{this:{}},{tupleToUserset:{computedUserset:{relation:"owner"},tupleset:{relation:"parent"}}}]}},writer:{union:{child:[{this:{}},{computedUserset:{relation:"owner"}},{tupleToUserset:{computedUserset:{relation:"writer"},tupleset:{relation:"parent"}}}]}},commenter:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}},{tupleToUserset:{computedUserset:{relation:"commenter"},tupleset:{relation:"parent"}}}]}},viewer:{union:{child:[{this:{}},{computedUserset:{relation:"commenter"}},{tupleToUserset:{computedUserset:{relation:"viewer"},tupleset:{relation:"parent"}}}]}},parent:{this:{}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"document"}]},owner:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},writer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},commenter:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},viewer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]}}}},{type:"domain",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsx)(t.h3,{id:"04-sharing-files-and-folders-publicly",children:"04. Sharing Files And Folders Publicly"}),"\n",(0,n.jsxs)(t.p,{children:["Google Drive has a feature which allows ",(0,n.jsx)(t.a,{href:"https://support.google.com/a/users/answer/9308873?hl=en",children:"sharing a file or folder publicly"}),", and specifying the permissions a public user might have (writer/commenter/viewer)."]}),"\n",(0,n.jsxs)(t.p,{children:["Assume that ",(0,n.jsx)(t.code,{children:"Anne"})," has created a new document: ",(0,n.jsx)(t.code,{children:"2021-public-roadmap"}),", has shared it with commenter permissions to the ",(0,n.jsx)(t.code,{children:"xyz.com"}),", and has shared it as view only with the public at large."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image showing requirements",src:i(32547).A+"",width:"940",height:"649"})}),"\n",(0,n.jsxs)(t.p,{children:["Here's where another ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm})," feature, ",(0,n.jsx)(s.OK,{section:"what-is-type-bound-public-access",linkName:"type bound public access"})," (as in everyone), would come in handy."]}),"\n",(0,n.jsxs)(t.p,{children:["First, we will need to update our model to allow for public access with type ",(0,n.jsx)(t.code,{children:"user"})," for viewer relation."]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{owner:{union:{child:[{this:{}},{tupleToUserset:{computedUserset:{relation:"owner"},tupleset:{relation:"parent"}}}]}},writer:{union:{child:[{this:{}},{computedUserset:{relation:"owner"}},{tupleToUserset:{computedUserset:{relation:"writer"},tupleset:{relation:"parent"}}}]}},commenter:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}},{tupleToUserset:{computedUserset:{relation:"commenter"},tupleset:{relation:"parent"}}}]}},viewer:{union:{child:[{this:{}},{computedUserset:{relation:"commenter"}},{tupleToUserset:{computedUserset:{relation:"viewer"},tupleset:{relation:"parent"}}}]}},parent:{this:{}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"document"}]},owner:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},writer:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},commenter:{directly_related_user_types:[{type:"user"},{type:"domain",relation:"member"}]},viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}},{type:"domain",relation:"member"}]}}}},{type:"domain",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsx)(t.p,{children:"To mark Anne as the owner, the domain members as commenters and the public as viewers, we need to add the following relationship tuples:"}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{_description:"Anne is the owner of document:2021-public-roadmap",user:"user:anne",relation:"owner",object:"document:2021-public-roadmap"},{_description:"Members of the domain:xyz can comment on document:2021-public-roadmap",user:"domain:xyz#member",relation:"commenter",object:"document:2021-public-roadmap"},{_description:"Everyone with type `user` can view document:2021-public-roadmap",user:"user:*",relation:"viewer",object:"document:2021-public-roadmap"}]}),"\n",(0,n.jsx)(t.p,{children:"Anne is an owner of the document"}),"\n",(0,n.jsx)(s.ou,{user:"user:anne",relation:"owner",object:"document:2021-public-roadmap",allowed:!0}),"\n",(0,n.jsx)(t.p,{children:"Beth is a member of the xyz.com domain, and so can comment but cannot write"}),"\n",(0,n.jsx)(s.ou,{user:"user:beth",relation:"writer",object:"document:2021-public-roadmap",allowed:!1}),"\n",(0,n.jsx)(s.ou,{user:"user:beth",relation:"commenter",object:"document:2021-public-roadmap",allowed:!0}),"\n",(0,n.jsx)(t.p,{children:"Erik is NOT a member of the xyz.com domain, and so can only view the document"}),"\n",(0,n.jsx)(s.ou,{user:"user:erik",relation:"writer",object:"document:2021-public-roadmap",allowed:!1}),"\n",(0,n.jsx)(s.ou,{user:"user:erik",relation:"viewer",object:"document:2021-public-roadmap",allowed:!1}),"\n",(0,n.jsx)(s.QF,{title:"Google Drive",preset:"drive",example:"Google Drive",store:"gdrive"}),"\n",(0,n.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,n.jsx)(s.XQ,{description:"Take a look at the following sections for more information.",relatedLinks:[{title:"Search with permissions",description:"Give your users search results with objects that they have access to",link:"../../interacting/search-with-permissions"}]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},16894:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gdrive-gdrive1-22dac26c1f55a55daeb65acff88ee193.svg"},79517:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gdrive-gdrive2-abe697d20cfce6658d6a09aed7af8d97.svg"},50972:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gdrive-gdrive3-e82c9d5308de7d3b5e7b74b59d87044f.svg"},32547:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gdrive-gdrive4-9b75eafa345dde22742988b225671a69.svg"},56794:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gdrive-org-fe69008225e62f28ff2280708e875f09.svg"},72163:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/gdrive-roles-ac60dede6567bd76e873d1a81d642532.svg"}}]);