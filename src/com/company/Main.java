package com.company;

public class Main {

    public static void main(String[] args) {
        int	sum	=	0;
        int	number;
        Scanner	scanner	=	new	Scanner(System.in);
        do{
            System.out.print("Enter	a	number:	");
            number	=	scanner.nextInt();
            sum	+=	number;
        }	while	(number	!=	0);
        System.out.println("The	sum	is:	"	+	sum);
    }
}
