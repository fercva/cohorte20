package operadores;

import java.util.Scanner;

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner (System.in);
		//System.out.println("---- Da un dato:  -------");
		//String dato = scanner.nextLine();
		//System.out.println("El dato es: " + dato);
		
		System.out.println("Introduce valor 1 ");
		int valor1 = scanner.nextInt();
		
		System.out.println("Introduce valor 0 ");
		int valor0 = scanner.nextInt();

		//int valor = 6;
		//int valor0 = 5;
		
		int suma = valor1 + valor0;
		System.out.println("Suma: " + suma);
		
		int rest = valor1 - valor0;
		System.out.println("Resta: " + rest);
		
		int mul = valor1 * valor0 ;
		System.out.println("Multiplicacion: " + mul);

		int div = valor1 / valor0;
		System.out.println("division: " + div );
		
		int modulo = valor1 % valor0;
		System.out.println("Residuo de la division: " + modulo);



	}
		
}