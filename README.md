### How to use this:

* Clone this repository: `git clone https://github.com/luiemilio/of-logging`
* Install the dependencies: `cd of-loggin` & `npm install`
* Start the live-server and launch the application: `npm start`
* Verify that the app.log file in: `%localappdata%\OpenFin\apps\OpenfinPOC_<random number>\` has all the appropriate console logging from both apps. You should see:

- INFO - Live reload enabled.
- INFO - App1: console.log
- ERROR - App1: console.error
- INFO - App1: console.info
- WARN - App1: console.warn
- INFO - Live reload enabled.
- INFO - App2: console.log
- ERROR - App2: console.error
- INFO - App2: console.info
- WARN - App2: console.warn
