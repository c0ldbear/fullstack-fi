0.6 -  New note in Single page app diagram
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user types something in the textfield of the form and presses the button Save
    Note right of browser: The script in spa.js runs and saves the new note to the variable notes, redraws the HTML document, and sends the new note to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser:  '201 Created' is sent from the server to the browser
    deactivate server

```