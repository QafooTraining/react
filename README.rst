=================
React.js Workshop
=================

Simple setup for a React.js workshop

Initialize
==========

Clone: https://github.com/QafooTraining/react.git / git@github.com:QafooTraining/react.git

Initialize (requires working node.js & npm)::

    npm install
    sudo npm install -g grunt-cli

Or (requires vagrant & ansible)::

    vagrant up --provision

Add new dependecies (See: https://www.npmjs.com/)::

    npm install --save <packageName>

Remove "^" from ``package.json`` afterwards.

Agenda
======

* Setup

* JSX

  * https://facebook.github.io/react/docs/displaying-data.html

* State

* Props

* Lifecycle

  * https://facebook.github.io/react/docs/component-specs.html

* Ajax

* Router

* Filter

Deatiled VM Setup
=================

Run the following command in the root of the checkout (Requires vagrant &
ansible)::

    vagrant up --provision

Then add the following line to you hosts configuration (eg. ``/etc/hosts``)::

    33.33.33.20 react.js react.vm

The provisioning also installs all required NPM packages and you should be able
to view the demo stub under http://react.vm/

Build Commands
==============

The box contains a basic environment to build React applications with all
required tools. Thus you can run the following commands in
``/var/www/react.js/``:

* Builds development assets::

    grunt prepare

* Run linting checks::

    grunt test-static

* Run tests, once you defined some and enabled them::

    grunt test-unit

* Build production assets::

    grunt package

The box also has PHP installed so that you can create a simple webservice to
interact with you React application.

..
   Local Variables:
   mode: rst
   fill-column: 79
   End: 
   vim: et syn=rst tw=79
