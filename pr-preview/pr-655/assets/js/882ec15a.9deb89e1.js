"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[8128],{18764:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(85893),s=t(11151),o=t(5270);const i={title:"Authorization and OpenFGA",description:"Introduction to Authorization and OpenFGA",sidebar_position:1,slug:"/authorization-and-openfga"},r="Introduction to Authorization and ",c={id:"content/authorization-and-openfga",title:"Authorization and OpenFGA",description:"Introduction to Authorization and OpenFGA",source:"@site/docs/content/authorization-and-openfga.mdx",sourceDirName:"content",slug:"/authorization-and-openfga",permalink:"/docs/authorization-and-openfga",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/authorization-and-openfga.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Authorization and OpenFGA",description:"Introduction to Authorization and OpenFGA",sidebar_position:1,slug:"/authorization-and-openfga"},sidebar:"docs",next:{title:"Concepts",permalink:"/docs/concepts"}},d={},h=[{value:"What Is OpenFGA?",id:"what-is-openfga",level:2},{value:"Authentication vs Authorization",id:"authentication-vs-authorization",level:2},{value:"What Is Fine-Grained Authorization?",id:"what-is-fine-grained-authorization",level:2},{value:"What Are Role-Based Access Control And Attribute-Based Access Control?",id:"what-are-role-based-access-control-and-attribute-based-access-control",level:2},{value:"What Is Relationship-Based Access Control?",id:"what-is-relationship-based-access-control",level:2},{value:"What Is Zanzibar?",id:"what-is-zanzibar",level:2}];function l(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.h1,{id:"introduction-to-authorization-and-",children:["Introduction to Authorization and ",(0,n.jsx)(o.rZ,{format:o.v7.LongForm})]}),"\n",(0,n.jsx)(o.AH,{}),"\n",(0,n.jsxs)(a.p,{children:["OpenFGA reies on several understandings of ",(0,n.jsx)(a.a,{href:"#authentication-vs-authorization",children:"authorization"}),", including ",(0,n.jsx)(a.a,{href:"#what-is-fine-grained-authorization-fga",children:"fine-grained authorization"}),", ",(0,n.jsx)(a.a,{href:"#what-are-role-based-access-control-rbac-and-attribute-based-access-control-abac",children:"role-based access control"}),", ",(0,n.jsx)(a.a,{href:"#what-are-role-based-access-control-rbac-and-attribute-based-access-control-abac",children:"attribute-based access control"}),", and ",(0,n.jsx)(a.a,{href:"#what-is-relationship-based-access-control-rebac",children:"relationship-based access control"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"what-is-openfga",children:"What Is OpenFGA?"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"OpenFGA"})," is an open source solution to ",(0,n.jsx)(a.a,{href:"#what-is-fine-grained-authorization-fga",children:"Fine-Grained Authorization"}),", or ",(0,n.jsx)(a.strong,{children:"FGA"}),", that applies the concept of ",(0,n.jsx)(a.a,{href:"#what-is-relationship-based-access-control-rebac",children:"relationship-based access control"}),", or ",(0,n.jsx)(a.strong,{children:"ReBAC"}),". It was created by the ",(0,n.jsx)(a.a,{href:"https://docs.fga.dev/",children:"Okta FGA"})," team and inspired by ",(0,n.jsx)(a.a,{href:"#what-is-zanzibar",children:"Zanzibar"}),". Designed for reliability and low latency at a high scale, OpenFGA offers both HTTP and GRPC APIs, as well as SDKs for programming languages like ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/package/@openfga/sdk",children:"Node.js/JavaScript"}),", ",(0,n.jsx)(a.a,{href:"https://github.com/openfga/go-sdk",children:"GoLang"}),", ",(0,n.jsx)(a.a,{href:"https://www.nuget.org/packages/OpenFga.Sdk",children:".NET"}),", ",(0,n.jsx)(a.a,{href:"https://pypi.org/project/openfga-sdk",children:"Python"}),", and ",(0,n.jsx)(a.a,{href:"https://central.sonatype.com/artifact/dev.openfga/openfga-sdk",children:"Java"}),", with additional SDKs and integrations (including Rego) planned for future releases."]}),"\n",(0,n.jsx)(o.XQ,{intro:!0}),"\n",(0,n.jsx)(a.h2,{id:"authentication-vs-authorization",children:"Authentication vs Authorization"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://auth0.com/intro-to-iam/what-is-authentication/",children:(0,n.jsx)(a.strong,{children:"Authentication"})})," (or ",(0,n.jsx)(a.strong,{children:"AuthN"}),") ensures a user's identity. ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Authorization",children:(0,n.jsx)(a.strong,{children:"Authorization"})})," (or ",(0,n.jsx)(a.strong,{children:"AuthZ"}),") determines if a user can perform a certain action on a particular resource."]}),"\n",(0,n.jsxs)(a.p,{children:["For example, when you log in to Google, Authorization verifies that your username and password are correct. Authorization checks if you can access a given Google service. ",(0,n.jsx)(a.a,{href:"https://www.okta.com/identity-101/authentication-vs-authorization/",children:"For more information about AuthN vs AuthZ, click here."}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"what-is-fine-grained-authorization",children:"What Is Fine-Grained Authorization?"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Fine-Grained Authorization"})," (FGA) allows admininstrators to to grant individual users access to specific objects or resources in a system. Well-designed FGA systems allow millions of objects, users and relations to change rapidly as objects are added and access permissions are updated. A notable example of fine-grained authorization is Google Drive: access can be granted either to documents or to folders, as well as to individual users or users as a group, and access rights regularly change as new documents are created and shared with specific users or groups."]}),"\n",(0,n.jsx)(a.h2,{id:"what-are-role-based-access-control-and-attribute-based-access-control",children:"What Are Role-Based Access Control And Attribute-Based Access Control?"}),"\n",(0,n.jsxs)(a.p,{children:["In ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Role-based_access_control",children:(0,n.jsx)(a.strong,{children:"Role-Based Access Control"})})," (RBAC), permissions are assigned to users based on their role in a system. For example, a user needs the ",(0,n.jsx)(a.code,{children:"editor"})," role to edit content. ",(0,n.jsx)(a.a,{href:"https://auth0.com/docs/manage-users/access-control/rbac",children:"For more information about RBAC, click here."})]}),"\n",(0,n.jsxs)(a.p,{children:["In ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Attribute-based_access_control",children:(0,n.jsx)(a.strong,{children:"Attribute-Based Access Control"})})," (ABAC), permissions are granted based on a set of attributes that a user or resource possess. For example, a user assigned both ",(0,n.jsx)(a.code,{children:"marketing"})," and ",(0,n.jsx)(a.code,{children:"manager"})," attributes is entitled to publish and delete posts that have a ",(0,n.jsx)(a.code,{children:"marketing"})," attribute. ",(0,n.jsx)(a.a,{href:"https://www.okta.com/blog/2020/09/attribute-based-access-control-abac/",children:"For more information about ABAC, click here."})]}),"\n",(0,n.jsx)(a.h2,{id:"what-is-relationship-based-access-control",children:"What Is Relationship-Based Access Control?"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Relationship-Based Access Control"})," (ReBAC) allows user access rules to be conditional on relations that a given user has with a given object ",(0,n.jsx)(a.em,{children:"and"})," that object's relationship other objects. For example, a given user can view a given document if the user has access to the document's parent folder."]}),"\n",(0,n.jsx)(a.h2,{id:"what-is-zanzibar",children:"What Is Zanzibar?"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://research.google/pubs/pub48190/",children:"Zanzibar"})})," is Google's global authorization system across Google's product suite. It uses object-relation-user tuples to store relation data, then checks those relations for a match between a user and an object. ",(0,n.jsx)(a.a,{href:"https://zanzibar.academy",children:"For more information about Zanzibar, click here"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);