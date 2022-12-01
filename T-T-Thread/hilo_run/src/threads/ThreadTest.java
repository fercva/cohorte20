package threads;

public class ThreadTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread1 t1 = new Thread1();
		Thread2 t2 = new Thread2();
		
		t1.start();
		t2.start();
		try {
			t1.join();
			t2.join();
		}catch (InterruptedException e) {
			//TODO: handle exception
		}
		System.out.println ("Se han ejecutado los 2 thread");
	}

}
