# Errepar web app

Boilerplate created with [create-react-app](https://github.com/facebook/create-react-app) and [material ui](https://material-ui.com/).
The main propuse is simplify and agilize components creation.
Material UI provides a large amount of out-of-the-box tools which with a little of customization we can adapt to our needs.

For example colors, using themes, we can change all the instances of color "primary" and "secondary" in the whole application. 

![theme colors](https://i.imgur.com/mNkYH8A.jpg)

## Installation

[NodeJs](https://nodejs.org/) (lastest version) is required. 
After download, open a terminal in root localation a execute the following command:

    npm install

Once finished:

    npm start
  A new window should be open in [http://localhost:3000/](http://localhost:3000/)

## Components

All the components are based in [material ui](https://material-ui.com/) components.  
You can use api documentation from there in order to check properties and basic examples. 
#### BreadcrumbCustom
Implementation using [Breacrumbs](https://material-ui.com/components/breadcrumbs/) component. 
Include anywhere. Will display location tree with link(s) to the parent(s) page(s).
By default is hidden in home page *(href = "/")*.

#### Navigation (desktop menu)
Using [ButtonGroup](https://material-ui.com/components/button-group/) and [Menu](https://material-ui.com/components/menus/#menus) components. 
Dynamic menu display, recevies a json with the format

    topLevel: [
	           {
		      name:  String,
		      id:  Number,
		      children: [
				 {
				   name:  String,
				   id:  Number,
				   link:  String,
				  },
				 ...
				 ]
		     },
		     ...
		   ]

#### MobileMenu
This a straight out-of-the-box implementation of [drawer](https://material-ui.com/components/drawers/#drawer) component (persistent option).
Has a [Hidden](https://material-ui.com/components/hidden/#hidden) component wrapping all the content, in order to no overlap with Navigation. 
If lower to 'md' (medium devices: >768px width) will be displayed. 

#### TextEditor
This component has a couple of libraries. Is an implementation of [mui-rte](https://github.com/niuware/mui-rte) (Material UI Rich Text Editor). 
Who itself is an implementation of [DraftJs](https://draftjs.org/).

For some options like disable toolbar, will come from mui-rte and others like get editor content on demand, will come from draftjs.

Sandbox: https://codesandbox.io/s/mui-rte-basic-ypfdo?fontsize=14

The editor content is storaged as a plain text json when saved. So it can be persisted in database as "text" type. 

Basic usage, click on edit button, write your text, click on save button on toolbar or button below to save.
