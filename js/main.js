//--------------------------- MENU DE NAVEGACION -------------------
/* id del menú que será desplegado */
var desplegable = "#menu";
/* clase que será agregada*/
var despliegaClase = "despliega";
/* id del enlace que despliega el menú */
var lanz = document.querySelector("#d-menu");
lanz.addEventListener("click", despliegaMenu, false);

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector(desplegable);
	despl.classList.toggle(despliegaClase);
}


//--------------------------- VALIDACIÓN 3D -------------------
//Boton que hace aparecer la caja 3D
var muestra = document.querySelector('#btn3D');
muestra.addEventListener("click", muestra3D);

var oculta = document.querySelector('#btn2D');
oculta.addEventListener("click", oculta3D);

  function muestra3D(e) {
		e.preventDefault();
		muestra.style.display="none";
		oculta.style.display="block";
		var cajas3D = document.querySelectorAll('.caja3D');

		for (var i = 0; i < cajas3D.length; i++) {
			if (cajas3D[i].style.display="none") {
				cajas3D[i].style.display="block";
			}
			else {
				cajas3D[i].style.display="none";
			}
		}
  }
	function oculta3D(e) {
		e.preventDefault();
		oculta.style.display="none";
		muestra.style.display="block";
		var cajas3D = document.querySelectorAll('.caja3D');

		for (var i = 0; i < cajas3D.length; i++) {
			if (cajas3D[i].style.display="block") {
				cajas3D[i].style.display="none";
			}
			else {
				cajas3D[i].style.display="block";
			}
		}
  }


	//--------------------------- VARIABLES REUTILIZABLES -------------------

//-------------------------------------------------------------------------



//--------------------------- FUNCIONES DE LAS OPERACIONES MATEMATICAS -------------------
  function Sumar(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);

		    if (isNaN(num1)||isNaN(num2)||isNaN(num4)||isNaN(num5))  {
		      alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		    }
		    else if (muestra3D && !isNaN(num3)||!isNaN(num6)) {
		      if (isNaN(num3)||isNaN(num6)) {
		        alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		      }
		      else {
		        var resul= (" <")+ (num1+num4) +(", ")+ (num2+num5) +(", ")+ (num3+num6) +(">");
		        document.getElementById('resultado').value=resul;
		      }
		    }
		    else {
		      var resul= (" <")+ (num1+num4) +(", ")+ (num2+num5) +(">");
		      document.getElementById('resultado').value=resul;
		    }
  }


	function Restar(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);

		    if (isNaN(num1)||isNaN(num2)||isNaN(num4)||isNaN(num5))  {
		      alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		    }
		    else if (muestra3D && !isNaN(num3)||!isNaN(num6)) {
		      if (isNaN(num3)||isNaN(num6)) {
		        alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		      }
		      else {
		        var resul= (" <")+ (num1-num4) +(", ")+ (num2-num5) +(", ")+ (num3-num6) +(">");
		        document.getElementById('resultado').value=resul;
		      }
		    }
		    else {
		      var resul= (" <")+ (num1-num4) +(", ")+ (num2-num5) +(">");
		      document.getElementById('resultado').value=resul;
		    }
  }

	function Punto(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);

		    if (isNaN(num1)||isNaN(num2)||isNaN(num4)||isNaN(num5))  {
		      alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		    }
		    else if (muestra3D && !isNaN(num3)||!isNaN(num6)) {
		      if (isNaN(num3)||isNaN(num6)) {
		        alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		      }
		      else {
		        var resul= (" <")+ (num1*num4) +(", ")+ (num2*num5) +(", ")+ (num3*num6) +(">");
		        document.getElementById('resultado').value=resul;
		      }
		    }
		    else {
		      var resul= (" <")+ (num1*num4) +(", ")+ (num2*num5) +(">");
		      document.getElementById('resultado').value=resul;
		    }
  }

	function Cruz(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);

		if (isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)||isNaN(num5)||isNaN(num6)) {
			alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		}
		else {
			var mul1=  (num2*num6)-(num3*num5);
			var mul2=  (num3*num4)-(num1*num6);
			var mul3= (num1*num5)-(num2*num4);
			var resul= ("<")+ mul1 +(",")+ mul2 +(",")+ mul3 +(">");

			document.getElementById('resultado').value=resul;
		}

	}
