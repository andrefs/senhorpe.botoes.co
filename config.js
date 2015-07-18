exports.config = {
    project:{
        title         : 'Botões Senhor Pé',
        description   : 'As melhores frases de Senhor Pé!',
        url           : 'http://senhorpe.botoes.co',
        external_link : 'http://www.facebook.com/brunoaleixo',
        facebook: {
            id: "1016048086"
        },
        google: {
            id: 'UA-65104930-1'
        },
    },
    partials: {
        footer: '<a href="mailto:andrefs@andrefs.com">andré santos, joão ferreira <i class="fa fa-envelope"></i></a> , baseado em <a href="http://www.facebook.com/brunoaleixo">bruno aleixo <i class="fa fa-external-link"></i></a>'
    },
    manifest : {
        version: 'v1',
        filePath: './',
        fileName: 'manifest.json'
    },
    sourcesPath       : './sources',
    soundsPath        : './sounds',
    tmpPath           : './tmp',
    defaultClipMargin : '2',
    soundEditCommand  : 'audacity',
    server: {
        port: 10117
    }
};
