const dniPaciente="aaaaaaaaaaa";
const encontrado=true;
class citas
{
	constructor(idCita, idPaciente,idMedico,IdPlanta,Motivo,idCentroMedico){

		this.idCita = idCita;

		this.idPacientes = idPaciente;

		this.idMedico=idMedico;
		
		this.IdPlanta=IdPlanta;
		
		this.Motivo=Motivo;
		
		this.idCentroMedico=idCentroMedico;


	}
	
	
	
}
class Pacientes
{
	constructor(idPaciente, DNI,nombre,apellido,telefono)
	{

		this.idPaciente = idPaciente;

		this.DNI = DNI;

		this.telefono=telefono;
		
		this.nombre=nombre;
		
		this.apellido=apellido;

	}
}
class Medicos
{
	constructor(idMedico,nombre,apellido,idDespacho)
	{

		this.idMedico = idMedico;

		this.nombre = nombre;

		this.apellido=apellido;
		
		this.idDespacho = idDespacho;

	}
}


class Despacho
{
	constructor(idDespacho,Planta,etiquetaPuerta,idCentroMedico){

		this.idDespacho = idDespacho;

		this.Planta = Planta;

		this.etiquetaPuerta=etiquetaPuerta;
		
		this.idDespacho = idDespacho;

	}
}

class CentroMedico
{
	constructor(idCentroMedico,Planta,etiquetaPuerta)
	{

		this.idCentroMedico = idCentroMedico;

		this.Planta = Planta;

		this.etiquetaPuerta=etiquetaPuerta;
		
		this.idDespacho = idDespacho;

	}
	
}

class ImplementacionPaciente
{
	
		/**
		*Metodo recibe una lista y añade un Objeto de tipo alumno a la lista con los parametros que se va pidiendo
		 */
		static addPaciente(bd)
		{
			//Se pide los atributos
			var identificadorPaciente=CalcularId.calculaid(bd);
			var nombre =prompt("Introduzca su nombre:");
			var apellidos =prompt("Introduzca sus apellidos:");
			var DNI =prompt("Introduzca su DNI:");
			
			var telefono =Number(prompt("Introduzca su telefono:"));
			//Buscar DNI
			for(var i=0;i<bd.length;i++) 
			if(bd[i].DNI==DNIPaciente)
			{
				alert("tienes cuenta");
				encontrado=true;
			}
			//Se crea el tipo paciente
			if(!encontrado){bd.push(paciente);}
			else{IniciarSession(bd)}
			//Se añade al array
			
			return bd;
			
		}
		
		
		
		
		
		static IniciarSession(bd)
		{
			var cuenta;
			encontrado=false;
			dniPaciente =prompt("Introduzca su DNI:");
			//Si no esta vacia
			if(bd.length!=0)
			{
				//Se recorre el Array
				for(var i=0;i<bd.length;i++) 
					if(bd[i].DNI==DNIPaciente)
					{
						alert("tienes cuenta");
						encontrado=true;
					}
			}
			else
				alert("No hay ningun paciente");
				
		if(!encontrado)
		 {
			 cuenta=Number(prompt("¿Tienes Cuenta? Si no tienes quieres crearla?: 1-Si Tengo cuenta 2-No tengo cuenta y quiero crearla"));
			 switch(cuenta)
			 {
				 case 1:
					 break;
					 
					 case 2:
					addPaciente(bd);
					break;
					 
			 }
		 }
		 else{ document.location.assing('../Citas.html');}
		 
		}
			
}





class CalcularId
{
		/**
	 	* Metodo para calcular las ids
	 	*/
		static calculaid(bd)
		{
			
			//Si no esta vacia
			if(bd.length!=0)
			{
				var id=0;
				//Se reccore la lista para comprobar que id tienen y darles el siguiente
					 for(var i=0;i<bd.length;i++) 
					 {
						 var j=bd[i].idAlumno;
						 if(id<j)
							 id=j;
					 }
					 return id+2;
			}
			//Si esta vacia se le da el primero
			else
				return 0+1;
			}
}






