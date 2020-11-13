// Mots-clés de la barre de recherche
function ouvrirPage()
{
  var a = document.getElementById("search").value;
  if (a === "")
  {
    alert("Veuillez remplir 🙈");
  }

  // Mots clés cable hdmi
  if (a === "cable hdmi")
  {
		window.open("cable_hdmi.html");
  }
  if (a === "hdmi")
  {
		window.open("cable_hdmi.html");
  }

  // Mots clés casque logitech
  if (a === "casque")
  {
		window.open("casque_logitech.html");
  }

  // Mots clés clavier
  if (a === "clavier")
  {
    window.open("clavier_rk918.html");
  }

   // Mots clés macbook
  if (a === "mac")
  {
		window.open("macbook.html");
  }
  if (a === "macbook")
  {
		window.open("macbook.html");
  }

   // Mots clés tapis de souris
  if (a === "tapis de souris")
  {
		window.open("mousepad.html");
  }
  if (a === "tapis")
  {
		window.open("mousepad.html");
  }

   // Mots clés ps4
  if (a === "ps4")
  {
		window.open("ps4_pro.html");
  }

   // Mots clés
  if (a === "razer")
  {
		window.open("razer_raptor.html");
  }

   // Mots clés souris
  if (a === "souris")
  {
		window.open("souris_alienware.html");
  }

   // Mots clés nintendo
  if (a === "nintendo")
  {
		window.open("switch.html");
  }
  if (a === "switch")
  {
		window.open("switch.html");
  }

   // Mots clés xbox  
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