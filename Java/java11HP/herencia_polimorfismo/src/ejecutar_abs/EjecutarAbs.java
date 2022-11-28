package ejecutar_abs;

import polimorfismo.Cuadrado;
import polimorfismo.FigurasGeometricas;
import polimorfismo.Triangulo;

public class EjecutarAbs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FigurasGeometricas t = new Triangulo();
		FigurasGeometricas c = new Cuadrado();
		t.pedirDatos();
		t.area();
		t.visualizar();
		
		c.pedirDatos();
		c.area();
		c.visualizar();
		
		
	}

}
