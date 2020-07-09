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
    options: [{
            titulo: 'Switch case',
            descricao: 'Switch case simplificado',
            comando: 'Color GetColor(MyColor myColor) => \nmyColor switch \n{ \nMyColor.Black => Color.Black,\nMyColor.Yellow => Color.Yellow,\nMyColor.Red => Color.Red,\n_ =>throw new Exception("Cor não implementada!")\n};'
        },
        { titulo: 'Tupla', descricao: 'Padrões de tupla', comando: 'GetTax(string state, string city) =>\n(state, city)switch\n{\n( "SP", "Sorocaba" ) => 10,\n( "SP", "Ourinhos" ) => 12,\n( "PR", "Londrina" ) => 13,\n( _, _ ) => 5\n};' },
        { titulo: 'Using', descricao: 'Using a partir do c# 8.0 usa o contexto do método\n e da dispose assim que sai dele', comando: 'private MyFile myFile;\nprivate void writeLines(IEnumerable<string> lines)\n{\nusing var file = new MyFile("test.txt");\nforeach (var line in lines)\nfile.WriteLine(line);\nmyFile = file;\n}' },
        { titulo: 'Git add', descricao: 'Adicionar novos arquivos ao commit', comando: 'git add .' },
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