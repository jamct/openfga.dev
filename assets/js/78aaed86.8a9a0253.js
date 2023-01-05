"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[569],{58721:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=i(87462),n=(i(67294),i(3905)),o=i(5270);const s={sidebar_position:3,slug:"/modeling/public-access"},l="Public Access",r={unversionedId:"content/modeling/public-access",id:"content/modeling/public-access",title:"Public Access",description:"In this guide you will learn how to grant public access to an , such as a certain document, using .",source:"@site/docs/content/modeling/public-access.mdx",sourceDirName:"content/modeling",slug:"/modeling/public-access",permalink:"/docs/modeling/public-access",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/public-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/modeling/public-access"},sidebar:"docs",previous:{title:"Blocklists",permalink:"/docs/modeling/blocklists"},next:{title:"Multiple Restrictions",permalink:"/docs/modeling/multiple-restrictions"}},c={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Create A Relationship Tuple",id:"01-create-a-relationship-tuple",level:3},{value:"02. Check That The Relationship Exists",id:"02-check-that-the-relationship-exists",level:3},{value:"Related Sections",id:"related-sections",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"public-access"},"Public Access"),(0,n.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,n.kt)("p",null,"In this guide you will learn how to grant public access to an ",(0,n.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),", such as a certain document, using ",(0,n.kt)(o.uH,{section:"what-is-type-bound-public-access",linkName:"type bound public access",mdxType:"ProductConcept"}),"."),(0,n.kt)(o.S1,{title:"When to use",appearance:"filled",description:(0,n.kt)("div",null,(0,n.kt)("p",null,"Public access allows your application to grant every user in the system access to an object. You would add a relationship tuple with type-bound public access when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sharing a ",(0,n.kt)("inlineCode",{parentName:"li"},"document")," publicly to indicate that everyone can ",(0,n.kt)("inlineCode",{parentName:"li"},"view")," it"),(0,n.kt)("li",{parentName:"ul"},"a public ",(0,n.kt)("inlineCode",{parentName:"li"},"poll")," is created to indicate that anyone can ",(0,n.kt)("inlineCode",{parentName:"li"},"vote")," on it"),(0,n.kt)("li",{parentName:"ul"},"a blog ",(0,n.kt)("inlineCode",{parentName:"li"},"post")," is published and anyone should be able to ",(0,n.kt)("inlineCode",{parentName:"li"},"read")," it"),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("inlineCode",{parentName:"li"},"video")," is made public for anyone to ",(0,n.kt)("inlineCode",{parentName:"li"},"watch")))),mdxType:"CardBox"}),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,n.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("p",null,"Assume that you have the following ",(0,n.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,n.kt)("br",null),"\nYou have a ",(0,n.kt)(o.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,n.kt)("inlineCode",{parentName:"p"},"document")," that can have a ",(0,n.kt)("inlineCode",{parentName:"p"},"view")," relation.")),(0,n.kt)(o.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{view:{this:{}}},metadata:{relations:{view:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In addition, you will need to know the following:"),(0,n.kt)("h3",{id:"direct-access"},"Direct Access"),(0,n.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,n.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,n.kt)("h3",{id:"-concepts"},(0,n.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,n.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(o.uH,{section:"what-is-type-bound-public-access",linkName:"Type Bound Public Access",mdxType:"ProductConcept"}),": is a special ",(0,n.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," concept (represented by ",(0,n.kt)("inlineCode",{parentName:"li"},"<type>:*"),") can be used in relationship tuples to represent every object of that type"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to use unique ids for each object and user within your application domain when creating relationship tuples for ",(0,n.kt)(o.rZ,{format:o.v7.LongForm,mdxType:"ProductName"}),". We are using first names and simple ids to just illustrate an easy-to-follow example.")),(0,n.kt)(o.XQ,{mdxType:"Playground"}),(0,n.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,n.kt)("p",null,"In previous guides, we have shown how to indicate that objects are related to users or objects. In some cases, you might want to indicate that everyone is related to an object (for example when sharing a document publicly)."),(0,n.kt)("h3",{id:"01-create-a-relationship-tuple"},"01. Create A Relationship Tuple"),(0,n.kt)("p",null,"To do this we need to create a relationship tuple using the ",(0,n.kt)(o.uH,{section:"what-is-type-bound-public-access",linkName:"type bound public access",mdxType:"ProductConcept"}),". The type bound public access syntax is used to indicate that all users of a particular type have a relation to a specific object."),(0,n.kt)("p",null,"Let us create a relationship tuple that states: ",(0,n.kt)("strong",{parentName:"p"},"any user can view document:company-psa.doc")),(0,n.kt)(o.Gb,{relationshipTuples:[{_description:"user:* denotes every object of type user",user:"user:*",relation:"view",object:"document:company-psa.doc"}],mdxType:"WriteRequestViewer"}),(0,n.kt)("admonition",{title:"Wildcard syntax usage",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please note that type-bound public access is not a wildcard or a regex expression."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"You cannot use the ",(0,n.kt)("inlineCode",{parentName:"strong"},"<type>:*")," syntax in the tuple's object field.")),(0,n.kt)("p",{parentName:"admonition"},"The following syntax is invalid:"),(0,n.kt)(o.Wz,{relationshipTuples:[{_description:"It is invalid to use this syntax in the object field. The below relationship tuple is invalid and does not mean that Bob can view all documents.",user:"user:bob",relation:"view",object:"document:*"}],mdxType:"RelationshipTuplesViewer"})),(0,n.kt)("admonition",{title:"Wildcard syntax usage",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"You cannot use ",(0,n.kt)("inlineCode",{parentName:"strong"},"<type>:*")," as part of a userset in the tuple's user field.")),(0,n.kt)("p",{parentName:"admonition"},"The following syntax is invalid:"),(0,n.kt)(o.Wz,{relationshipTuples:[{_description:"It is invalid to use this syntax as part of a userset. The below relationship tuple is invalid and does not mean that members of any org can view the company-psa document.",user:"org:*#member",relation:"view",object:"document:company-psa.doc"}],mdxType:"RelationshipTuplesViewer"})),(0,n.kt)("h3",{id:"02-check-that-the-relationship-exists"},"02. Check That The Relationship Exists"),(0,n.kt)("p",null,"Once the above ",(0,n.kt)("em",{parentName:"p"},"relationship tuple")," is added, we can ",(0,n.kt)(o.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," if ",(0,n.kt)("strong",{parentName:"p"},"bob")," cab ",(0,n.kt)("inlineCode",{parentName:"p"},"view")," ",(0,n.kt)("inlineCode",{parentName:"p"},"document"),":",(0,n.kt)("strong",{parentName:"p"},"company-psa.doc"),". ",(0,n.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,n.kt)("inlineCode",{parentName:"p"},'{ "allowed": true }')," even though no relationship tuple linking ",(0,n.kt)("strong",{parentName:"p"},"bob")," to the document was added. That is because the relationship tuple with ",(0,n.kt)("inlineCode",{parentName:"p"},"user:*")," as the user made it so every object of type user (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"user:bob"),") can ",(0,n.kt)("inlineCode",{parentName:"p"},"view")," the document, making it public."),(0,n.kt)(o.uT,{user:"user:bob",relation:"view",object:"document:company-psa.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,n.kt)("h2",{id:"related-sections"},"Related Sections"),(0,n.kt)(o.$q,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"Modeling: Getting Started",description:"Learn about how to get started with modeling.",link:"./getting-started",id:"./getting-started"},{title:"Configuration Language",description:"Learn about {ProductName} Configuration Language.",link:"../configuration-language",id:"../configuration-language"},{title:"Modeling Blocklists",description:"Learn about model block lists.",link:"./blocklists",id:"./blocklists"}],mdxType:"RelatedSection"}))}u.isMDXComponent=!0}}]);