var dniPaciente="aaaaaaaaaaa";
var encontrado=true;
class Citas
{
	constructor(idCita,idPaciente,dni_paciente,nombre_paciente,apellidos_paciente,centro_medico,consulta,nombre_Medico,fechaCita)
	{
		this.idCita=idCita;
		this.idPaciente=idPaciente;
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
		*Metodo recibe una lista y añade un Objeto de tipo alumno a la lista con los parametros que se va pidiendo
		 */
		static CrearCita(listapaciente,listacitas)
		{
			//Se pide los atributos
			var identificadorCita=CalcularId.calculaid(listacitas);
			var nombre_paciente;
			var apellido_paciente;
			var idPaciente;
			for(var i=0;i<listapaciente.length;i++)
			{
				 
				if(listapaciente[i].DNI==dniPaciente)
				{
					 nombre_paciente=listapaciente[i].nombre;
					 apellido_paciente=listapaciente[i].apellidos;
					 idPaciente=listapaciente[i].identificadorPaciente;
				}
			}
			if(idPaciente<=2)
			{
				nombre_Medico="Paca";
				centro_medico="La plata";
				consulta=3;
			}
			else if (idPaciente>2&&idPaciente>50)
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
			var fechaCita=FechaHora();
			var cita= new Citas(identificadorCita,idPaciente,dniPaciente,nombre_paciente,apellido_paciente,centro_medico,consulta,nombre_Medico,fechaCita);
			listacitas.push(cita);
			return listacitas;
			
		}
		
		

		static FechaHora()//Fecha Hora aleatoria
		{
			let fechaActual = new Date()
			let milisegundosFechaActual = fechaActual.getTime();
			
			
			
			//dias del 1 al 60
			
			let random = Math.random();
		        random = random * 16 + 8;
		        random = Math.trunc(random);
		        console.log(random);
		        
		    if(random>16)
		    	random=random-8
		        
		        
			let sumarDias = Math.floor((Math.random()*60)+1);
			
			let milisegundosUnDia= 1*24*60*60*1000;
			
			let milisegundosNuevaFecha=milisegundosFechaActual+(sumarDias*milisegundosUnDia);
			
			
			
			nuevaFecha = new Date(milisegundosNuevaFecha);
			

			//horas del las 8 a las 18
			let horas = Math.trunc((Math.random()*18)+8);
			
			
			nuevaFecha.setHours(horas);
			
			return nuevaFecha;
		
		}
		
		
		static IniciarSession(listapaciente)
		{
				var cuenta;
				encontrado=false;
				dniPaciente =prompt("Introduzca su DNI:");
				//Si no esta vacia

					//Se recorre el Array
					for(var i=0;i<listapaciente.length;i++) 
						{
							console.log("La id que recorre"+listapaciente[i].DNI);
							console.log("La id que pìde"+dniPaciente);
							if(listapaciente[i].DNI==dniPaciente)
							{
								
								alert("tienes cuenta");
								encontrado=true;
							}
						}
				

					
			if(!encontrado)
			 {
				 cuenta=Number(prompt("¿Tienes Cuenta? Si no tienes quieres crearla?: 1-Si Tengo cuenta 2-No tengo cuenta y quiero crearla"));
				 switch(cuenta)
				 {
					 case 1:
						 break;
						 
						 case 2:
						ImplementacionPaciente.addPaciente(listapaciente);
						break;
						 
				 }
			 }
			else{ MenuCitas(listapaciente);}
				
			
		 
		}
			
}

class ImplementacionPaciente
{
	
		/**
		*Metodo recibe una lista y añade un Objeto de tipo alumno a la lista con los parametros que se va pidiendo
		 */
		static addPaciente(listapaciente)
		{
			//Se pide los atributos
			var identificadorPaciente=CalcularId.calculaid(listapaciente);
			var nombre =prompt("Introduzca su nombre:");
			var apellidos =prompt("Introduzca sus apellidos:");
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
			var paciente= new Pacientes(identificadorPaciente,DNI,nombre,apellidos,telefono);
			
			if(!encontrado){listapaciente.push(paciente);}
			
			return listapaciente;
			
		}
		
		
		
		
		
		static IniciarSession(listapaciente)
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
				

					
			if(!encontrado)
			 {
				 cuenta=Number(prompt("¿Tienes Cuenta? Si no tienes quieres crearla?: 1-Si Tengo cuenta 2-No tengo cuenta y quiero crearla"));
				 switch(cuenta)
				 {
					 case 1:
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
					 return id+2;
			}
			//Si esta vacia se le da el primero
			else
				return 0+1;
			}
}
function MenuInicio()
{
	 var listapaciente=[];
	 var opcion;
	 do
	 {
	  	opcion =Number(prompt("1-Iniciar Sesion/n 2-Crear Session"));
	 
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
function MenuCitas(listapaciente)
{
	 var listacitas=[];
	 var opcion;
	 do
	 {
	  	opcion =Number(prompt("1-Crear Citas/n 2-Eliminar Citas /n 3-Mostrar Citas"));
	 
	 	switch(opcion)
	 	{
			case 1:
				 ImplementacionCitas.CrearCita(listapaciente,listacitas);
				 break;
			case 2:
				 ImplementacionCitas.eliminarCita(listapaciente,listacitas);
				 break;
			case 3:
				 ImplementacionCitas.MostrarCistas(listapaciente,listacitas);
				 break;
		 }
	
	 }while(opcion!=0);
 
}





