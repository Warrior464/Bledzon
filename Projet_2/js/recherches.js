// Mots-clés de la barre de recherche//
function ouvrirPage()
{
  var a = document.getElementById("search").value;
  if (a === "")
  {
    alert("Veuillez remplir 🙈");
  }
     
  if (a === "cable hdmi")
  {
		window.open("cable_hdmi.html");
  }
  if (a === "casque")
  {
		window.open("casque_logitech.html");
  }
  if (a === "clavier")
  {
    window.open("clavier_rk918.html");
  }
  if (a === "mac")
  {
		window.open("macbook.html");
  }
  if (a === "tapis de souris")
  {
		window.open("mousepad.html");
  }
  if (a === "ps4")
  {
		window.open("ps4_pro.html");
  }
  if (a === "razer")
  {
		window.open("razer_raptor.html");
  }
  if (a === "souris")
  {
		window.open("souris_alienware.html");
  }
  if (a === "nintendo")
  {
		window.open("switch.html");
  }
  if (a === "xbox")
  {
		window.open("xbox_one_s.html");
  }
}

function initElement()
{
  var p = document.getElementById("add-to-cart");
  p.onclick = showAlert;
};

function showAlert()
{
  alert("Indisponible pour le moment 👷‍♂️🚧 \nJuste pour faire joli :)");
}