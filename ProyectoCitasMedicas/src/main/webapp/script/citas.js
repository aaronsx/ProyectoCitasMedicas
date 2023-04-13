//No me dejaba pasar una variable de un js a otro 
var dniPaciente="aaaaaaaaaaa";
var identificadorPaciente="aaaaaaaaaaaa";
var nombre="aaaaaaaaaaaaaaaaaa";
var apellido="aaaaaaaaaaa";
var encontrado=true;

class Citas
{
	constructor(idCita,idPaciente,dni_paciente,nombre_paciente,apellidos_paciente,centro_medico,consulta,nombre_Medico,fechaCita)
	{
		this.idCita=idCita;
		this.idPaciente=idPaciente;
		this.dni_paciente=dni_paciente
		this.nombre_paciente=nombre_paciente;
		this.apellidos_paciente=apellidos_paciente;
		this.centro_medico=centro_medico;
		this.consulta=consulta;
		this.nombre_Medico=nombre_Medico;
		this.fechaCita=fechaCita;
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

class ImplementacionCitas
{
	
		/**
		*Metodo recibe una lista y añade un Objeto de tipo Citas a la lista con los parametros que se va pidiendo
		 */
		static CrearCita(listacitas)
		{
			//Se pide los atributos
			var identificadorCita=CalcularId.calculaidCitas(listacitas);
			var nombre_Medico;
			var centro_medico;
			var consulta;
			
			
			if(identificadorPaciente<=2)
			{
				nombre_Medico="Paca";
				centro_medico="La plata";
				consulta=3;
			}
			else if (identificadorPaciente>2&&identificadorPaciente>50)
			{
				nombre_Medico="Paco";
				centro_medico="Centro de salud Amate";
				consulta=2;
			}
			else
			{
				nombre_Medico="Juan";
				centro_medico="Centro de salud Amate";
				consulta=3;
			}
			var fechaCita=ImplementacionCitas.FechaHora();
			
			var cita= new Citas(identificadorCita,identificadorPaciente,dniPaciente,nombre,apellido,centro_medico,consulta,nombre_Medico,fechaCita);
			listacitas.push(cita);
			
			return listacitas;
			
		}
		
		/**
		*Metodo que genera un fecha
	 	*/

		static FechaHora()//Fecha Hora aleatoria
		{
			let fechaActual = new Date()
			let milisegundosFechaActual = fechaActual.getTime();
			
			
			
			//dias del 1 al 60
			
			let random = Math.random();
		        random = random * 16 + 8;
		        random = Math.trunc(random);
		  
		        
		    if(random>16)
		    	random=random-8
		        
		        
			let sumarDias = Math.floor((Math.random()*60)+1);
			
			let milisegundosUnDia= 1*24*60*60*1000;
			
			let milisegundosNuevaFecha=milisegundosFechaActual+(sumarDias*milisegundosUnDia);
			
			
			
			var nuevaFecha = new Date(milisegundosNuevaFecha);
			

			//horas del las 8 a las 18
			let horas = Math.trunc((Math.random()*18)+8);
			
			
			nuevaFecha.setHours(horas);
			
			return nuevaFecha;
		
		}
		
		
		/**
		*Metodo recibe una lista y elimina una cita de la lista pidiendo la id
	 	*/
		static BorrarCita(listacitas)
		{
		//Si esta vacia no entra
			if(listacitas.length!=0)
			{
				
				var borrar =prompt(ImplementacionCitas.MostrarCistas(listacitas));
				//Se recorre la lista
				for(var i=0;i<listacitas.length;i++)
				{
					if(listacitas[i].dni_paciente==dniPaciente)
						if(listacitas[i].idCita==borrar)
							delete(listacitas[i]);
						
					
					return listacitas;
				}
			}
		}
		/**
		*Metodo para mostrar citas
		 */
		static MostrarCistas(listacitas)
		{
			//Si no esta vacia
			if(listacitas.length!=0)
			{
				//Se recorre el Array
				for(var i=0;i<listacitas.length;i++)
				{
					if(listacitas[i].dni_paciente==dniPaciente)
					alert("Id: "+listacitas[i].idCita+"DNI: "+listacitas[i].dni_paciente+"\nNombre: "+listacitas[i].nombre_paciente+"\nApellidos: "+listacitas[i].apellidos_paciente+"\nCentro: "+listacitas[i].centro_medico+"\nConsulta: "+listacitas[i].consulta+"\nMedico: "+listacitas[i].nombre_Medico+"\nFecha: "+listacitas[i].fechaCita);
				}
					
			}
			else
				alert("No hay ninguna cita");
		}
			
}

class ImplementacionPaciente
{
	
		/**
		*Metodo recibe una lista y añade un Objeto de tipo paciente a la lista con los parametros que se va pidiendo
		 */
		static addPaciente(listapaciente)
		{
			//Se pide los atributos
				identificadorPaciente=CalcularId.calculaid(listapaciente);
				nombre =prompt("Introduzca su nombre:");
				apellido =prompt("Introduzca sus apellidos:");
			var DNI =prompt("Introduzca su DNI:");
			encontrado=false;
			var telefono =Number(prompt("Introduzca su telefono:"));
			//Buscar DNI
			for(var i=0;i<listapaciente.length;i++) 
			{
				if(listapaciente[i].DNI==DNI)
			{
				alert("tienes cuenta");
				encontrado=true;
			}
			}
			
			//Se crea el tipo paciente
			var paciente= new Pacientes(identificadorPaciente,DNI,nombre,apellido,telefono);
			
			if(!encontrado){listapaciente.push(paciente);}
			
			return listapaciente;
			
		}
		
		
		
		/**
	 	* Metodo Metodo para iniciar sesion 
	 	*/
		
		static IniciarSession(listapaciente)
		{
				if(dniPaciente=="aaaaaaaaaaa")
				{
					encontrado=false;
					dniPaciente =prompt("Introduzca su DNI:");
				//Si no esta vacia
				
					//Se recorre el Array
					for(var i=0;i<listapaciente.length;i++) 
						{
							if(listapaciente[i].DNI==dniPaciente)
							{
								alert("Hola "+listapaciente[i].nombre);
								encontrado=true;
								
							}
						}
				}
				else{MenuCitas(listapaciente);}
				

				//Encontrado es para saber si ha entontrado un usuario te manda al menu citas y si no lo o a encontrado te pide otra ves lo mismo	
			if(!encontrado)
			 {
				 cuenta=Number(prompt("¿Tienes Cuenta? Si no tienes quieres crearla?: 1-Si Tengo cuenta 2-No tengo cuenta y quiero crearla"));
				 switch(cuenta)
				 {
					 case 1:
						 ImplementacionPaciente.IniciarSession(listapaciente);						 
						 break;
						 
						 case 2:
						ImplementacionPaciente.addPaciente(listapaciente);
						break;
						 
				 }
			 }
			else{ MenuCitas(listapaciente);}
				
			
		 
		}
			
}





class CalcularId
{
		/**
	 	* Metodo para calcular las ids
	 	*/
		static calculaid(listapaciente)
		{
			
			//Si no esta vacia
			if(listapaciente.lenght!=0)
			{
				var id=0;
				//Se reccore la lista para comprobar que id tienen y darles el siguiente
					 for(var i=0;i<listapaciente.length;i++) 
					 {
						 var j=listapaciente[i].identificadorPaciente;
						 if(id<j)
							 id=j;
					 }
					 return id;
			}
			//Si esta vacia se le da el primero
			else
				return 0;
			}
			static calculaidCitas(listacitas)
		{
			
			//Si no esta vacia
			if(listacitas.lenght!=0)
			{
				var id=0;
				//Se reccore la lista para comprobar que id tienen y darles el siguiente
					 for(var i=0;i<listacitas.length;i++) 
					 {
						 var j=listacitas[i].idCita;
						 if(id<j)
							 id=j;
					 }
					 return id;
			}
			//Si esta vacia se le da el primero
			else
				return 0;
			}
}
/**
	 	* Metodo Menu de iniciar sesion
	 	*/
function MenuInicio()
{
	 var listapaciente=[];
	 var opcion;
	 menucita=4;
	 do
	 {
	  	opcion =Number(prompt("1-Iniciar Sesion\n 2-Crear Session"));
	 
	 	switch(opcion)
	 	{
			case 1:
				 ImplementacionPaciente.IniciarSession(listapaciente);
				 break;
			case 2:
				 ImplementacionPaciente.addPaciente(listapaciente);
				 break;
			
		 }
	
	 }while(opcion!=0);
 
}
/**
	 	* Metodo menu de citas
	 	*/
function MenuCitas(listapaciente)
{
	 var listacitas=[];
	 var menucita;
	 do
	 {
		 menucita =Number(prompt("1-Crear Citas \n2-Eliminar Citas \n3-Mostrar Citas"))
		
	  	
	 
	 	switch(menucita)
	 	{
			case 1:
				 ImplementacionCitas.CrearCita(listacitas,listapaciente);
				 break;
			case 2:
				 ImplementacionCitas.BorrarCita(listacitas,listapaciente);
				 break;
			case 3:
				 ImplementacionCitas.MostrarCistas(listacitas,listapaciente);
				 break;
			
		 }
	
	 }while(menucita!=0)
 
}

