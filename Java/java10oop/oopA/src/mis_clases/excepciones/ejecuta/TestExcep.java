package mis_clases.excepciones.ejecuta;
import mis_clases.excepciones.operacion.Division;
import mis_clases.excepciones.operacion.OpExcep;
public class TestExcep {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		Division d = new Division (4,0);
		d.visualizarD();
	}catch (OpExcep e) {
		//TODO: handle exception
		System.out.println(e.getMessage());
		e.getStackTrace();
	}
		
		System.out.println("Continua...");
		}
		

}
