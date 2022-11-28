package ejecutar_h;

import herencia.*;

public class EjecutarHerencia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Padre p =  new Padre("Juan", "Pachuca");
		p.mostrarDatos();
		Hija h = new Hija ("Dora", "CDMX",20);
		h.mostrarDatos();
		
		Hija h1 = new Hija ("Diego", "Tulancingo", 18);
		h1.mostrarDatos("Cruz");
	}

	

}
