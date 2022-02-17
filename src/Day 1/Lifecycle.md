# Lifecycle Events

Throughout the application, our components can do different things at different stages.
These events allow us to perform logic to the app at these different stages.

* _construct()
  * Creates an instance of a component OR something you ask it to create... whether that be an element, a request etc before spawing / displaying the template

* _build()
  * Creates an instance like construct but spawns / displays the template

* _setup()
  * Attach an element / thing to the render tree... top-down structure

* _init()
  * Attaches for the first time... similar to setup... but one stage later

* _attach(), _detach(), _enable(), _disable(), _firstEnable(), _active(), _inactive()
