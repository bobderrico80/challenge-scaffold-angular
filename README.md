# Chorus Connector

### Instructions

Chorus Connector is an exciting new product to help lovers of choral music find ensembles. Build an appealing application with the following features, and feel free to add your own creative twists!

Public Functionality:
- view all choruses
- search for choruses near me

Password-Protected Functionality:
- create, view, edit, and delete choruses

`data.json` contains an example data model and sample list of choruses. Feel free to modify any and all of it for your needs. You do not need to build long-term data persistence (it’s ok for everything to refresh on reload), and data can be stored in-memory however you prefer. 
Authentication can be as simple or complex as you feel appropriate for the purposes of this exercise.
Please take no more than 2 hours to develop your solution.

What We’re Looking For:
- does your code run?
- does your product fulfill the core feature requirements?
- is your code well-organized and readable?
- is the UI and UX pleasing?

Optional Considerations (be selective, given the time constraint):
- accessibility
- testing
- input validation

Fork this repository and expand upon it using your preferred folder structure, tooling, packages, libraries, etc.

This template provides a minimal setup for an Angular app. Note that the Angular CLI requires Node.js v14.20+, v16.14+ or v18.10+. To run the app:
```
cd chorus-connector
npm install
ng serve
```

The default route is the main display of choruses. To authenticate, click the 'Login' link in the header. The default username & password are:

```
test-user
gala2028
```

After successful login, you'll be taken to the administration page, with options to add, edit, and delete existing choruses.

To return to main chorus page, click the heading in the top-left of the header. To logout of administration functions, click 'Logout' in the header.

Implementation notes:
- Functionality-wise, this has been implemented per the spec defined above. Though I played a bit loose with the "search for choruses near me" requirement by implementing a city/state filter (I was originally looking into using the location API, but that deemed too complex for this exercise).
- Testing is not as complete as I'd like. I did fully test the Auth and Chorus services, which house the core business logic of the application. All other components have at least one "should create" test that passes, making it easy for tests to be added given more time.
- Input validation is very basic. All fields just have a 'required' validator, and the validation error message is hard-coded to be the same for all fields. Given more time, I'd make this more sophisticated by mapping validators to specific messaging, and include email validation on the Contact Email field. I also left the State field just a freeform input. Given more time, I'd use a `<select>` for this with a list of US state abbreviations as options.
- Accessibility was considered while implementing all components, though I did not do any testing of accessibility
- For a UI library, I went with Angular Material to quickly get a nice-enough UI going with a framework I was familiar with.

Looking forward to discussing this exercise further!