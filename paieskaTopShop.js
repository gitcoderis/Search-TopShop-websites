let searchLink = "/catalogsearch/result/?q=";

let query;

let domains = [
  {name: "Albania", url: "topshop.al"},
  {name: "Bosnia & Herzegovina", url: "topshop.ba"},
  {name: "Bulgaria", url: "topshop.bg"},
  {name: "Croatia", url: "topshop.com.hr"},
  {name: "Czech Republic", url: "topshop.cz"},
  {name: "Estonia", url: "topshop.ee"},
  {name: "Hungary", url: "topshop.hu"},
  {name: "Kosovo", url: "topshop-ks.com"},
  {name: "Latvia", url: "top-shop.lv"},
  {name: "Lithuania", url: "topshop.lt"},
  {name: "Kazachstan", url: "top-shop.kz"},
  {name: "Macedonia", url: "topshop.com.mk"},
  {name: "Moldova", url: "top-shop.md"},
  {name: "Montenegro", url: "top-shop.me"},
  {name: "Poland", url: "topshop.pl"},
  {name: "Romania", url: "top-shop.ro"},
  {name: "Serbia", url: "top-shop.rs"},
  {name: "Slovakia", url: "topshop.sk"},
  {name: "Slovenia", url: "topshop.si"},
  {name: "Ukraine", url: "topshoptv.com.ua"}
];

function getDomains() {

  query = document.getElementById('searchTerm').value;
  //searchURL();
  for(let i = 0; i < domains.length; i++){
    openInNewTab(searchURL(i));

  }
}


function searchURL(i){
//  window.location = "http://" + domains[0] + searchLink + query;
    let siteUrl = "http://" + domains[i].url + searchLink + query;
    return siteUrl;
  }


  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

// console.log(domains[0].name + "  " + domains[0].url);
