import java.util.Scanner;

public class Questao5 {
  public static void main(String[] args) {
    String string;

    if (args.length > 0) 
      string = args[0];
    else {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Digite uma string: ");
      string = scanner.nextLine();
      scanner.close();
    }

    System.out.println(reverse(string));
  }

  /**
   * Inverte os carateres de uma string
   * 
   * @param string uma frase ou palavra
   * @return a frase ou palavra em ordem inversa
   */
  public static String reverse(String string) {
    int stringSize = string.length();
    char[] reversedString = new char[stringSize];
    stringSize--; // a variável agora tem o valor do último indice do vetor de caracteres

    for (char c : string.toCharArray()) {
      reversedString[stringSize] = c;
      stringSize--;
    }

    return new String(reversedString);
  }
}
