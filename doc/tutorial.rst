========
Tutorial
========

:Author:    Stefan Eletzhofer

Prerequisites
=============

- *sphinx* installed -- please refer to `their docs <http://sphinx.pocoo.org/index.html>`_.
  basically, it boils down to do::

    $ workon my_project
    $ pip install sphinx

- You need to have the `NxSphinx` project cloned to
  `$HOME/develop/nexiles`.  This allows for unified theme configuration and
  is a single place where you can pull for theme updates::

    $ cd
    $ mkdir -p ~/develop/nexiles
    $ cd ~/develop/nexiles
    $ git clone git@github.com:nexiles/NxSphinx.git

- Get to your administrator and have him create the directory where you
  internally publish the documentation for your project.  This is a standard
  path and it is `silverdwarf:/srv/static/nxyourprojectnamehere`.

  Have him set the directory to group-writable, the group must be `staff`,
  and the owner of the directory should be you.

Getting Started
===============

Bootstrap Sphinx
----------------

Switch to your repository, make a `doc` top-level directory and use
`sphinx-quickstart` to bootstrap::

    $ cd my_repo
    $ mkdir doc
    $ cd doc
    $ sphinx-quickstart
    ...answer interactive questions...
    $ git add conf.py Makefile *.rst
    $ git ci -m "sphinx quickstart output"

Configure Python Path
---------------------

You then need to adapt `conf.py`.  You need to edit:

- Your *project name*
- Set the *author* to be `nexiles GmbH`
- set up the `python path` in `conf.py` to include your *python source* if
  you have -- e.g, in a standard setup where the source is in the top-level
  `src` directory::

        sys.path.insert(0, os.path.abspath('../src'))

Set nexiles theme
-----------------

Add / edit the following in `conf.py`::

    html_theme = 'nexiles_theme'
    html_theme_path = [os.path.expanduser("~/develop/nexiles/NxSphinx/doc")]
    html_logo = "nexiles_theme/static/nexiles_logo_white.png"

Amend Makefile
--------------

Copy the `Makefile` over from the `NxSphinx` package, and edit the
paths used for the `publish` and `public` targets.  You should be able
to just search and replace `NxSphinx` and `nxsphinx` with your project
codename.

Create Mandatory Pages
======================

Copy these `.rst` files over from the `NxSphinx` project:

- index.rst
- introduction.rst
- requirements.rst
- deliverables.rst
- changelog.rst
- template.rst

Use `template.rst`  for all new pages.  Have a look at the `nxtools`,
`nxworker` and `nxsaveas` projects for inspiration.

Makefile Targets
================

The makefile provides these useful targets:

**make html**
    Create html pages from documentation to `_build/html`

**make preview**
    Open a browser viewing your local documentation

**make view**
    Open a browser viewing the **internally published** version of your
    documentation.

**make publish**
    Recreates local html and publishes internally.  Uses `scp` -- you may
    want to add your ssh keys to your account on `silverdwarf`, ask your
    administrator for help.

**make clean**
    Remove the generated local html.

Links
=====

- The `Sphinx rst cheatsheet <http://sphinx.pocoo.org/rest.html>`_

..  
 vim: set spell spelllang=en ft=rst tw=75 nocin nosi ai sw=4 ts=4 expandtab:
