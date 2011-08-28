============
Introduction
============

:Author:    Stefan Eletzhofer

Goals
=====

Professional software needs documentation.  Here, we'll outline the rules
we are to follow at *nexiles GmbH* when it comes to documentation.

We need these rules, such that there's no doubt what a developer is
expected to document  -- and more generally, what we expect of all the
participants of a software project when it comes to *documentation*


Participants and Roles
======================

There are several *roles* which are involved in *writing* and *reviewing*
the documentation:

**The Developer Team**
    The guys who actually develop the software or methods -- in *SCRUM*
    terms **the team** or **the pigs**.

**The Team Lead -- AKA The Master Of Disaster**
    The guy who's responsible for the software project in question.  In
    *SCRUM* terms this would be the **scrum master**, better known as **the
    single neck to wring**

**The Customer Rep**
    The customer representative -- in *SCRUM* terms this would perhaps be
    the **product owner** 

**Power Users and/or Administrators**
    Users, administrators, deployment guys.  **customers**


Documentation Contents
======================

What parts *MUST* be in present a documentation:

**start page**
    Gives an *abstract* of the project and lists the main table of
    contents.

**introduction page**
    An introduction to the project, listing its goals, components and
    perhaps the current state.
    
**requirements page**
    A list *numbered* of *requirements* as identified by the *customer rep* and
    the *team lead*.  The requirements are high-level and represent the
    **customer's views and expectations** on the outcome of the project.

**deliverables**
    A list of *deliverables* -- that is, a list of artifacts which the
    **team** needs to deliver.  These artifacts need to implement the
    *requirements* as listed.

    Note that the *documentation* itself is a **mandatory deliverable**, even
    if it's not in the list of requirements.

**change log**
    A log of changes to the project -- including *bug fixes*, *feature
    additions*, *documentation changes* and so on.



Tools Used
==========

We use the following tools to document our projects:

**sphinx**
    A documentation system using *restructured text* as source format and
    generates many output formats.

    http://sphinx.pocoo.org

**GitHup Pages**
    We host our code at **GitHub** and we'll use their *Github Pages*
    feature to host **public** documentation.

.. warning:: Even though we can have **private** git repos at GitHub, we
    **cannot** have private **documentation** -- all Github Pages are
    **public**.

..  
 vim: set spell spelllang=en ft=rst tw=75 nocin nosi ai sw=4 ts=4 expandtab:
