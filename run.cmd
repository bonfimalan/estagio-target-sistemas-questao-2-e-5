:: %1 = nome da classe principal, sem o .java
:: %2 = argumento para o programa, não precisa ser passado
javac %1.java
java %1 %2
del /s *.class