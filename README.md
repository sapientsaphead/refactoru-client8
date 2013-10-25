## Infinite Agenda

#### An infinite-scroll agenda which uses delegated events to handle events on agenda items even as new ones are added.

##### Skills
* DOM
* delegated events

##### Resources
* [Events Order](http://www.quirksmode.org/js/events_order.html) - Quirksmode
* [jQuery .on()](http://api.jquery.com/on/#direct-and-delegated-events) - Direct and delegated events
* [Continuous Scrolling](http://ui-patterns.com/patterns/ContinuousScrolling) - ui-patterns
* [Infinite Scrolling: Let’s Get To The Bottom Of This](http://uxdesign.smashingmagazine.com/2013/05/03/infinite-scrolling-get-bottom) - smashingmag
* [Infinite Scrolling Best Practices](http://uxmovement.com/navigation/infinite-scrolling-best-practices) - uxmastery
* [Infinite Scrolling that Works](http://eviltrout.com/2013/02/16/infinite-scrolling-that-works.html)

##### Requirements
1. Write a calendar app that displays the user’s appointments in an agenda format (that is, a linear list of days, not a calendar grid). Today should be at the top, tomorrow below, and so on.
2. The user can click on a day to add a new appointment.
  1. The form will appear inline when the user clicks an add button and disappear again after the user submits.
  2. The form should be empty again each time the user adds a new appointment.
  3. The user should be able to hit enter to submit the form.
3. The user can click on an appointment to edit it. Convert the appointment into a form with the fields prefilled for the user to edit. Convert it back to non-editable text when they are done editing.
4. The page should load with one week shown, but as the user scrolls down, new days should be added dynamically.
5. All events for adding/removing appointments should be functional for newly added days without re-adding event handlers ([delegation!](http://api.jquery.com/on/#direct-and-delegated-events)).

#####Bonus I

  Save the user's appointments to localStorage.

##### Bonus II

  Create a calendar view.
