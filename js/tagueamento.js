// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

dataLayer = [{'projeto': 'case-dp6'}];

// no GTM faço o "de/para" para envio correto do PATH pro GA associado (UA-12345-6)
function send_pageview(path){
    dataLayer.push({
    'event': 'virtual-pageview',
    'path': path,
    });
}

// no GTM faço o "de/para" dos atributos para envio correto dos EVENTOS pro GA associado (UA-12345-6)
function send_event(type, category, action, label){
    dataLayer.push({
    'event': type,
    'event-category': category,
    'event-action'  : action,
    'event-label'   : label,
    });
}

// Contato
$( ".menu-lista-link.menu-lista-contato" ).click(function(){
    send_event('interaction', 'menu', 'entre_em_contato', 'link_externo');
});

// Download
$( ".menu-lista-link.menu-lista-download" ).click(function(){
    send_event('interaction', 'menu', 'download_pdf', 'download_pdf');
});

// Cards
$( ".card.card-montadoras" ).click(function(){
    cardname = $(this).attr('data-name');
    send_event('interaction', 'analise', 'ver_mais', cardname);
});

// form
$( "input#nome,input#email,input#telefone,input#aceito").change(function(){
    id = $(this).attr("id");
    send_event('interaction', 'contato', id, 'preencheu');
});





    