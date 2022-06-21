import java.util.Scanner;

public class Questao2 {
  public static void main(String[] args) {
    long number;

    if (args.length > 0) 
      number = Long.parseLong(args[0]);
    else {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Digite um numero: ");
      number = scanner.nextLong();
      scanner.close();
    }

    boolean isNumberInSequence = false;
    long fibonacciNumber = 0;
    long fibonacciNumber2 = 1;
    long temp;

    while(number >= fibonacciNumber) {
      if(number == fibonacciNumber) {
        isNumberInSequence = true;
        break;
      }
      temp = fibonacciNumber2;
      fibonacciNumber2 += fibonacciNumber;
      fibonacciNumber = temp;
    }

    if (isNumberInSequence) 
      System.out.println("O numero pertence a sequencia");
    else
      System.out.println("O numero nao pertence a sequencia");
  }
}