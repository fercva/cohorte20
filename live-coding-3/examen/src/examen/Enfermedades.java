package examen;

public class Enfermedades {
	{System.out.println("A");}
	public Enfermedades() {System.out.println("B");}
}
class gripe extends Enfermedades{
	static {System.out.println("C");}
	public gripe () {System.out.println("D");}
	{System.out.println("E");}
	static {System.out.println("F");}
}
class fiebre extends gripe{
	public static void main (String [] args)
	{System.out.println("G");
	new fiebre ();
	System.out.println("H");
	}
}