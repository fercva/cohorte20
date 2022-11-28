package polimorfismo;

import java.util.Scanner;

public abstract class FigurasGeometricas {
	
	protected double pValor;
	protected double sValor;
	protected double resultado;
	Scanner s;
	public void pedirDatos() {
		s= new Scanner (System.in);
		System.out.print("Introduzca el primer valor: ");
		pValor = s.nextDouble();
		System.out.print("Introduzca el segundo valor: ");
		pValor = s.nextDouble();
	}
	public abstract void area();
	
	public void visualizar() {
		System.out.println("El resultado es:  " + resultado);
	}
	
	}
