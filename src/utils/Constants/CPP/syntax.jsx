
export const cppSyntax = {
    syntax : [
        {
            "text" : "Let's break up the following code to understand it better:",

            "Example" :`//C++ program to display “Hello World”\n\n//Header file for input output functions\n\n#include <iostream>\n using namespace std;\n\n//Main() function: where the execution of program begins\n\nint main() \n{\n //Prints Hello World\n cout << \"Hello World!\";\n return 0;\n}`,

            "problem" : `This line is a comment line. A comment is used to display additional information
                          about the program. A comment does not contain any programming logic.
                          When a comment is encountered by a compiler, the compiler simply skips that
                          line of code. Any line beginning with ‘//’ without quotes OR in between /*…*/ in
                          C++ is a comment.`,

            "include" : `This is a preprocessor directive(set of instructions you give to the compiler before\nit translates your code into a program.). The #include in C++ is a command that\ntells the compiler to take the contents of another file and insert them into your\ncurrent file. For example, #include<iostream> tells the compiler to include the standard\niostream file which contains declarations of all the standard input/output library\nfunctions.`,

            "using_namespace_std" : `Using namespace std means that we can use names for objects and variables
                                      from the standard library or we can say that it is way to tell the compiler that
                                     you’ll be using a bunch of tools(functions and objects) from the standard
                                     library(std).
                                     It saves you from typing ‘std::’ before every standard library function or object.It’s
                                     like having a shortcut,making your code shorter and easier to understand.`,

            "A_blank_line_or_white_space" : `A blank line or white space. C++ ignores white space. But we use it to 
                                             make the code more readable.`,

            "int_main" : `This is called a function. A function is a group of statements that are designed 
                            to perform a specific task.’int main()’ is where your program starts running.
                            It’s like the entry point where the computer begins executing the instructions you 
                            have written.
                            The opening braces ‘{‘ indicates the beginning of the main function and the 
                            closing braces ‘}’ indicates the ending of the main function.`,

            "cOut" : `cout (pronounced “see-out”) is an object used together with the insertion 
                        operator (<<) to print output. Everything followed by the character << in double 
                        quotes ” ” is displayed on the output device.
                        It's used to print things out, like words, numbers, or other information, so you 
                        can see what your program is doing as it runs.`,

            "return" : `In C++, "return 0" is a statement used to indicate that a program has successfully 
                        finished running. It's like saying "everything went well" or "no problems 
                        occurred." It's commonly used as the last line of code in a C++ program.`,

            "Note_1" : `Note: Every C++ statement ends with a semicolon “;”\nNote: The body of int main() could be written as:\nint main() { cout << “Hello World!”;return 0; }`,

            "Note_2" : `Note: Do not forget to add the closing curly bracket ” } “ to actually end the main function.`,

            "Imp_points" : `1.Always include the necessary header files for the smooth execution of functions. For example, <iostream> must be included to use std::cin and std::cout.

2.The execution of code begins from the main() function.

3.It is a good practice to use blank line and comments in programs fo easy understanding and make the code more readable.

4.cout is used to print statements and cin is used to take inputs.`




        }
    ]
}