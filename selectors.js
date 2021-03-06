//wszystkie <div> posiadające klasę "grid" oraz "grid-12":   

$(".grid .grid-12 div")

//wszystkie elementy <a> których atrybut "href" zaczyna się od "htpp" i znajdują się w elemencie "nav":

$("a[href^='http']:parent(nav)")

//wszystkie elementy <input> których typ to "radio" lub "checkbox" oraz dodatkowo nie są aktualnie zaznaczone (checked):

$("input:radio:not(:checked), input:checkbox:not(:checked)")

//wyłącznie pierwszy element <p> który jest pusty (nie zawiera dzieci) oraz znajduje się w <div> z identyfikatorem "text":

$("p:first:empty:parent(div #text)")

//wszystkie elementy z klasą "pagination-item" które nie są elementem <span> :

$(".pagination-item:not(span)")