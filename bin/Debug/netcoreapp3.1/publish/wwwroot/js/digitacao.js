function onDescricao() {
    {
        console.log('onDescricao: descrição start!')
        $("#board-descricao").removeClass("d-none");

        var typed = new Typed('#descricao', {
            stringsElement: '.typed-strings2',
            typeSpeed: 50,
            backSpeed: 0,
            fadeOut: true,
            cursorChar: '',
            cursorShow: true,
            loop: false,
            onComplete: function(self) { console.log('onDescricao: descrição finish!') }

        });
    };

}



export function onComando() {
    $("#board-descricao").addClass("d-none");

    console.log('onComando: Comando start!')

    var typed = new Typed('#usage', {
        stringsElement: '.typed-strings1',
        typeSpeed: 25,
        backSpeed: 0,
        fadeOut: true,
        startDelay: 100,
        cursorChar: '',
        cursorShow: false,
        loop: false,
        onComplete: function(self) {
                console.log('onComando: Comando finish');

                onDescricao();
            }
            //stringsElement: '#typed-strings0',
            //onBegin: function (self) { prettyLog('onBegin ' + self) },
            //onComplete: function (self) { prettyLog('onCmplete ' + self) },
            //preStringTyped: function (pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
            //onStringTyped: function (pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
            //onLastStringBackspaced: function (self) { prettyLog('onLastStringBackspaced ' + self) },
            //onTypingPaused: function (pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
            //onTypingResumed: function (pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
            //onReset: function (self) { prettyLog('onReset ' + self) },
            //onStop: function (pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
            //onStart: function (pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
            //onDestroy: function (self) { prettyLog('onDestroy ' + self) }
    });
}