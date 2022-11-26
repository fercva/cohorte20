package mis_clases.colecciones;

import java.util.*;

public class ColeccionesOp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		ArrayList<String> list = new ArrayList<String>();
		  
	       
        list.add(null);
        list.add(null);
        list.add(null);
        list.add(null);
  
       
        System.out.println("ArrayList: " + list);
        //System.out.println("ArrayList: " + list.get(2));
       
        HashMap<Integer, String> hm  = new HashMap<Integer, String>();
  
       
        hm.put(null, "A");
        hm.put(2, null);
        hm.put(3, "C");
        hm.put(4, "D");
        hm.put(5, "F");
  
        
        System.out.print("HashMap: " + hm);
        
        //System.out.print("HashMap: " + hm.get(5));

	}

}
