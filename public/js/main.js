//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    } else {
        ofVersion.innerText =
            'OpenFin is not available - you are probably running in a browser.';
    }
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
    //get a reference to the current Application.
    const app = fin.desktop.Application.getCurrent();

    //we get the current OpenFin version
    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

    console.log('App1: console.log');
    console.error('App1: console.error');
    console.info('App1: console.info');
    console.warn('App1: console.warn');

    const app2 = new fin.desktop.Application({
        name: 'app2-name',
        uuid: 'app2-uuid',
        url: 'http://localhost:5555/index2.html',
        enableAppLogging: true,
        autoShow: true
    }, () => {
        app2.run();
    });
}
