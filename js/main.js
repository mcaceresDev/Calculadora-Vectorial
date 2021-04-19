
//--------------------------- MENU DE NAVEGACION -------------------
var lanz = document.querySelector("#d-menu");
lanz.addEventListener("click", despliegaMenu, false);

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector('#menu');
	despl.classList.toggle("despliega");
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
				cajas3D[i].value="";
			}
			else {
				cajas3D[i].style.display="block";
			}
		}
  }

	function recogeDatos() {
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);

		var valida = document.querySelector("button");
		var operacion = valida.getAttribute("id");

		switch (operacion) {
			case 'sumar':
					Sumar(num1, num2, num3, num4, num5, num6);
				break;
			case 'restar':
					Restar(num1, num2, num3, num4, num5, num6);
				break;
			case 'punto':
					Punto(num1, num2, num3, num4, num5, num6);
				break;
			case 'cruz':
					Cruz(num1, num2, num3, num4, num5, num6);
				break;

			default:
				break;
		}

	}


//--------------------------- FUNCIONES DE LAS OPERACIONES MATEMATICAS -------------------
  function Sumar(num1, num2, num3, num4, num5, num6){

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


	function Restar(num1, num2, num3, num4, num5, num6){

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


	function Punto(num1, num2, num3, num4, num5, num6){

				if (isNaN(num1)||isNaN(num2)||isNaN(num4)||isNaN(num5)){
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

	function Cruz(num1, num2, num3, num4, num5, num6){

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

	function Escalar(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);

		if (isNaN(num1)||isNaN(num2)||isNaN(num3)) {
			alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		}
		else {
			var resul= (" <")+ (num1*num4) +(", ")+ (num2*num4) +(", ")+ (num3*num4) +(">");

			document.getElementById('resultado').value=resul;
		}
	}

	function modulo(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);

		if (isNaN(num1)||isNaN(num2)||isNaN(num3)) {
			alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		}
		else {
			var potencia=  Math.pow(num1,2);
			var potencia2=  Math.pow(num2,2);
			var potencia3=  Math.pow(num3,2);

			var resul= potencia+potencia2+potencia3;
			var raiz= Math.sqrt(resul);

			document.getElementById('resultado').value=raiz;
		}

	}

	function puntoPlano(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);
		var num7=parseFloat(document.getElementById('box7').value);

		if (isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)||isNaN(num5)||isNaN(num6)||isNaN(num7)) {
			alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		}
		else {
			var potencia=  Math.pow(num1,2);
			var potencia2=  Math.pow(num2,2);
			var potencia3=  Math.pow(num3,2);

			var resul= potencia+potencia2+potencia3;


			var mul=(num1*num5)+(num2*num6)+(num3*num7)+num4;
			var absoluto=Math.abs(mul);
			var raiz= Math.sqrt(resul);

			respuesta= absoluto/raiz;

			document.getElementById('resultado').value=respuesta;
		}
	}

	function Distancia(){
		var num1=parseFloat(document.getElementById('box1').value);
		var num2=parseFloat(document.getElementById('box2').value);
		var num3=parseFloat(document.getElementById('box3').value);
		var num4=parseFloat(document.getElementById('box4').value);
		var num5=parseFloat(document.getElementById('box5').value);
		var num6=parseFloat(document.getElementById('box6').value);
		var num7=parseFloat(document.getElementById('box7').value);
		var num8=parseFloat(document.getElementById('box8').value);

		if (isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)||isNaN(num5)||isNaN(num6)||isNaN(num7)||isNaN(num8)) {
			alert("Debes ingresar valores numéricos solamente. Verifica haber ingresado todos los valores y vuelve a intentarlo");
		}

		else if ((num1)==0||(num2)==0||(num3)==0||(num4)==0||(num5)==0||(num6)==0||(num7)==0||(num8)==0) {
			alert("Los coeficientes no pueden ser cero o no podras calcular la distancia");
		}

		else  {

			var cal1=num1/num5;
			var cal2=num2/num6;
			var cal3=num3/num7;

					if (cal1==cal2 && cal2==cal3 && cal3==cal1) {
						var rest= Math.abs(num8-num4);

						var potencia=  Math.pow(num1,2);
						var potencia2=  Math.pow(num2,2);
						var potencia3=  Math.pow(num3,2);
						/*bueno*/
						var resul= potencia+potencia2+potencia3;
						var raiz= Math.sqrt(resul);

						respuesta= rest/raiz;
						/*bueno*/
						document.getElementById('resultado').value=respuesta;
					}
					else {
						alert("Tus planos no son paralelos y por lo tanto no puedes calcular distancia entre ellos");
					}
			}
	}
