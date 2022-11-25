package colecciones;

import java.util.Arrays;

public class Arreglos {
public static void main (String[]args) {
	//Arrays- Arreglo - matices
	//Solo permiten un tipo de dato
	//Se tiene que especificar su tamaño
	/*
	 * string
	 * int
	 * double
	 * long
	 */
	
	String []miArreglo = new String[6];//a partir del 1
	
	miArreglo[0]= "Fernanda";// a partir del 0
	miArreglo[1]= "Frida";
	miArreglo[2]= "Manne";
	miArreglo[3]= "Matias";
	miArreglo[4]= "Marcelo";
	miArreglo[5]= "Abisai";
	System.out.println(miArreglo);
	//for
	for(int i=0; i<miArreglo.length;i++) {
		System.out.println("ciclo for : " + miArreglo[i]);
	}
	
	System.out.println("------------");
	//forEach
	for(String nombre : miArreglo) {
		System.out.println("For Each: " + nombre);
	}
	//Math.pow();
	//Arrays
	System.out.println(Arrays.toString(miArreglo));
	
	//tipos de valores
	int numeros []= new int [5];
	

	numeros[0]= 3;
	numeros[1]= -3;
	numeros[2]= (int) 3.45; //casteo= cambiar la clase del valor
	numeros[3]= Integer.parseInt("2");//parseo== cambiar la clase del valor
	
	for (int numero : numeros) {
		System.out.println("Valores del arreglo numeros: " + numero);
	}
	//arreglos de objetos 

	persona persona1 = new persona ("Sofia", 27);
	persona persona2 = new persona ("Natalia", 92);
	
	persona [] arrPersonas = new persona[3];
	
	arrPersonas [0]= persona1;
	arrPersonas [1]= persona2;
	arrPersonas [2]= new persona ("Luis", 18);
	
	System.out.println(arrPersonas[0].nombre);
	System.out.println(arrPersonas[1].nombre);
	System.out.println(arrPersonas[2].nombre);
	
	for(persona persona : arrPersonas) {
		System.out.println("Nombre: " + persona.nombre + " Edad: " + persona.edad);
	}
	//Arreglos literales
	
	String [] arrString = {"manzana", "pera", "24", "hola"};
	System.out.println(Arrays.toString(arrString));
}
}
