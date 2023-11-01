# Planning.

### Explanation

In order to work effective I decided to split up the assignment in features to archive the end result.

### Features

1. `Report UI`. This is an Interface to create a new report. It should allow to and upload .xml, .csv files and send them for processing.
1. `Process Data`. Feature where data is processed and validated. The validating should be done best server side.
1. `View Report`. Option to view the processed result in an interface.

## 1. Report UI

1. Design of UI with minimal navigation and explanation. Form with upload file option.
1. Data layer concerned with retrieving and storing data.
1. Components used for making the interface.
1. Page with all the components.

## 2. Proccess Data

1. An endpoint with some logic to process the different files.
1. A process that validates the references.
1. A process that validates balances.

## 3. View Report

1. Design of report page where found expetions are displayed.
1. Table with all exeptions displaying transaction reference and description.
1. Option to go back to do another validation.
