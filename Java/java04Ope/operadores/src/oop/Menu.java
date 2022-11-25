package oop;

import java.util.Scanner;

public class Menu {
	
	Scanner s = new Scanner(System.in);
	void menuOp() {
		
	int numero = s.nextInt();
	System.out.println("\t\t ----- Menu-----");
	System.out.println(" \t\t1: tablas de multiplicar");
	System.out.println(" \t\t2: Resta");
	System.out.println(" \t\t3: Multiplicacion");
	System.out.println(" \t\t4: Division");
	System.out.println(" \t\t5: Modulo");
	System.out.println(" \t\t6: Booleans");
	System.out.println(" \t7: Salir");
	
	System.out.print(" introduzca la opcion: ");
	 numero = s.nextInt();	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
