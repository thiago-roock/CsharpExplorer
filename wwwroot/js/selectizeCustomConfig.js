import * as digitacao from "./digitacao.js";

var eventHandler = function(value) {
    return function() {
        console.log(value, arguments);
        $('.typed-strings1').remove();

        $('.typed-strings2').remove();
    };
};

$('#procurar').selectize({
    theme: 'links',
    maxItems: 1,
    valueField: 'descricao',
    searchField: 'titulo',
    options: [
        { titulo: 'add', descricao: 'add', comando: 'git add .' },
        { titulo: 'commit', descricao: 'commit', comando: 'git add .' },
        { titulo: 'revert', descricao: 'revert/reset', comando: 'git add .' },
        { titulo: 'initialize', descricao: 'initialize', comando: 'git add .' },
        { titulo: 'modify', descricao: 'modify', comando: 'git add .' },
        { titulo: 'show', descricao: 'show/view', comando: 'git add .' },
        { titulo: 'delete', descricao: 'delete/remove', comando: 'git add .' },
        { titulo: 'compareCommits', descricao: 'compare two commits', comando: 'git add .' },
        { titulo: 'configure', descricao: 'configure', comando: 'git add .' },
        { titulo: 'clone', descricao: 'clone', comando: 'git add .' },
        { titulo: 'ignore', descricao: 'ignore', comando: 'git add .' },
        { titulo: 'rename', descricao: 'rename', comando: 'git add .' },
        { titulo: 'merge', descricao: 'merge', comando: 'git add .' },
        { titulo: 'squash', descricao: 'squash', comando: 'git add .' },
        { titulo: 'stash', descricao: 'stash', comando: 'git add .' },
        { titulo: 'debug', descricao: 'debug', comando: 'git add .' },
        { titulo: 'recover', descricao: 'recover', comando: 'git add .' },
        { titulo: 'synchronize', descricao: 'synchronize', comando: 'git add .' },
        { titulo: 'rebase', descricao: 'rebase', comando: 'git add .' },
        { titulo: 'cherrypick', descricao: 'cherry-pick', comando: 'git add .' },
    ],
    render: {
        option: function(data, escape) {
            return '<div class="option">' +
                '<span class="titulo">' + escape(data.titulo) + '</span>' +
                '</div>';
        },
        item: function(data, escape) {
            return '<div class="item" id="' + escape(data.comando) +
                '"><a href="' + escape(data.titulo) + '">' + escape(data.descricao) +
                '</a></div>';
        }
    },
    create: function(input) {
        console.log(input);

        return {
            descricao: '',
            titulo: input,
            comando: ''
        };
    },

    onItemAdd: function(value, $item) {
        $item = this.getItem(this.getValue());

        console.log($item.text());
        $('#usage').append('<div class="typed-strings1"><span>' + $item[0].id + '</span></div>');
        digitacao.onComando();
        console.log($item[0]);
        $('#descricao').append('<div class="typed-strings2"><span>' + $item.text() + '</span></div>');

    },
    onItemRemove: eventHandler('onItemRemove'),
    onInitialize: function() {
        console.log("Pesquisa up!");
    },
});