package variables;

public class TipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//byte, short, int, long
		byte numeroB = 100;
		System.out.println("Tamaño de un byte " + Byte.SIZE);
		System.out.println("valor maximo " + Byte.MAX_VALUE);
		System.out.println("valor minimo " + Byte.MIN_VALUE);
		System.out.println("-------------------------------");
		int entero = 5;
		System.out.println("tamaño de un entero " + Integer.BYTES);
		System.out.println(" tamaño " + Integer.SIZE);
		System.out.println("valor max " + Integer.MAX_VALUE);
		System.out.println("valor min " + Integer.MIN_VALUE);
		System.out.println("el valor de entero " + entero);
		System.out.println("---------------- Short ---------");
		short variableS = 6;
		System.out.println("tamaño de short " + Short.SIZE);
		System.out.println("tamaño bytes short " + Short.BYTES);
		System.out.println("valor max short " + Short.MAX_VALUE);
		System.out.println("valor min short " + Short.MIN_VALUE);
		System.out.println("-------------.long----------");
		long variableL = 656;
		System.out.println("tamaño de long " + Long.SIZE);
		System.out.println("tamaño bytes long " + Long.BYTES);
		System.out.println("valor max long " + Long.MAX_VALUE);
		System.out.println("valor min long " + Long.MIN_VALUE);
		System.out.println("--------------var---------");
		var num = 21474836 ;
		System.out.println(" esta es la variable con var " + num);
		var sistemNum = 0XFC;
		System.out.println(" ---> : " + sistemNum);
		System.out.println("--------------- float-------");
		System.out.println("------ primitivos float, double, Double");
		System.out.println("tamaño en bits " + Float.SIZE);
		System.out.println("tamaño en bytes " + Float.BYTES);
		System.out.println("valor max  " + Float.MAX_VALUE);
		System.out.println("valor min  " + Float.MIN_VALUE);
		System.out.println("--------------- Double-------");
		var comaF = 100.10f;
		System.out.println("tamaño de double " + Double.SIZE);
		System.out.println("tamaño bytes double " + Double.BYTES);
		System.out.println("valor max double " + Double.MAX_VALUE);
		System.out.println("valor min double " + Double.MIN_VALUE);
		var comaD = 1000.10E23;
		System.out.println("--> float " + comaF);
		System.out.println("--> double " + comaD);
		System.out.println("------- boolen-----------");
		boolean estado = false; //false
		System.out.println("--> boolean " + estado);
		System.out.println("-----> Boolean false " + Boolean.FALSE);
		System.out.println("--> Boolean true  " + Boolean.TRUE);
		if (estado) {
			System.out.println("-->  soy verdadero " );
		}
		else {
			System.out.println("--> soy falso ");
			}
		var edad = 10;
		//var adulto = edad >= 10;
		System.out.println("----> varBool si es edad es mayor igual " + edad);
		if (edad <= 10) {
			System.out.println("----> varBool la edad es mayor igual a > " + edad);
		}
		}
	}


