package mis_clases.clases_publicas;

public class Clase_3 {
	private int valor = 2357;
	
	public Clase_3(int valor) {
		this.valor =valor;
	}
	
	public void setValue(int valor) {
		this.valor = valor;
	}
	
	public static void main (String [] args ) {
		Clase_3 obj3 = new Clase_3(2357);
		//obj3.setValor(14689);
		
		System.out.println(obj3.valor);
	}
}
