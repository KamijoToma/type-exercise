# Section A: Computer Program

## I. Introduction

A computer program is a set of instructions that directs a computer to
perform some processing function or combination of functions. For the
instructions to be carried out, a computer must execute a program,
that is, the computer reads the program, and then follows the steps
encoded in the program in a precise order until completion. A program
can be executed many different times, with each execution yielding a
potentially different result depending upon the options and data that
the user gives the computer.

Programs fall into two major classes: application programs and
operating systems. An application program is one that carries out some
function directly for a user, such as word processing or game playing.
An operating system is a program that manages the computer and the
various resources and devices connected to it, such as RAM (random
access memory), hard drives, monitors, keyboards, printers, and
modems, so that they may be used by other programs.

## II. Program Development

Software designers create new programs by using special applications
programs, often called **utility programs** or development programs. A
programmer uses another type of program called a text editor to write
the new program in a special **notation** called a programming
language. With the text editor, the programmer creates a text file,
which is an ordered list of instructions, also called the program
source file. The individual instructions that make up the program
source file are called source code. At this point, a special
applications program translates the source code into machine language,
or object code-a format that the operating system will recognize as a
proper program and be able to execute.

Three types of applications programs translate from source code to
object code: compilers, interpreters, and assemblers. The three
operate differently and on different types of programming language
into machine language.

A compiler translates text files written in a high-level programming
language-such as Fortran, C, or Pascal-from the source code to the
object code all at once. This differs from the approach taken by
interpreted languages such as BASIC, in which a program is translated
into object code statement by statement as each instruction is
executed. The advantage of interpreted languages is that they can
begin executing the program immediately instead of having to wait for
all of the source code to be compiled. Changes can also be made to the
program fairly quickly without having to wait for it to be compiled
again. The disadvantage of interpreted languages is that they are
slow to execute, since the entire program must be translated one
instruction at a time, each time the program is run. On the other
hand, compiled languages are compiled only once and thus can be
executed by the computer much more quickly than interpreted languages.
For this reason, compiled languages are more common and are almost
always used in professional and scientific applications.

Another type of translator is the assembler, which is used for
programs or parts of programs written in assembly language. Assembly
language is another programming language, but it is much more similar
to machine language than other types of high-level languages. In
assembly language, a single statement can usually be translated into a
single instruction of machine language. Today, assembly language is
rarely used to write an entire program, but is instead most often when
the programmer needs to directly control some aspect of the computer's
function.

Programs seldom work correctly the first time, so a program called a
debugger is often used to help find problems called bugs. Debugging
programs usually detect an event in the executing program and point
the programmer back to the origin of the event in the program code.

Recent programming systems, such as Java, use a combination of
approaches to create and execute programs. A compiler takes a Java
source program and translates it into an intermediate form. Such
intermediate programs are then transferred over the Internet into
computers where an interpreter program then executes the intermediate
form as an application program.

## III. Program Elements

Most programs are built from just a few kinds of steps that are
repeated many times in different contexts and in different
combinations throughout the program. The most common step performs
some computation, and then proceeds to the next step in the program,
in the order specified by the programmer.

Programs often need to repeat a short series of steps many times, for
instance in looking through a list of game scores and finding the
highest score. Such repetitive sequences of code are called loops.

One of the capabilities that make computers so useful is their ability
to make conditional decisions and perform different instructions based
on the values of data being processed. If-then-else statements
implement this function by testing some piece of data and then
selecting one of two sequences of instructions on the basis of the
result. One of the instructions in there alternatives may be a goto
statement that directs the computer to select its next instruction
from a different part of the program. For example, a program might
compare two numbers and branch to a different part of the program
depending on the result of the comparison.

```
If x is greater than y:
    then
goto instruction #10
    else continue
```

Programs often use a specific sequence of steps more than once. Such a
sequence of steps can be grouped together into a subroutine, which can
then be called, or accessed, as needed in different parts of the main
program. Each time a subroutine is called, the computer remembers
where it was in the program when the call was made, so that it can
return there upon completion of the subroutine. Preceding each call, a
program can specify that different data be used by the subroutine,
allowing a very general piece of code to be written once and used in
multiple ways.

Most programs use several varieties of subroutines. The most common of
these are functions, procedures, library routines, system routines,
and device drivers. Functions are short subroutines that compute some
value, such as computations of angles, which the computer cannot
compute with a single basic instruction. Procedures perform a more
complex function, such as sorting a set of names. Library routines are
subroutines that are written for use by many different programs.
System routines are similar to library routines but are actually found
in the operating system. They provide some service for the application
programs, such as printing a line of text. Device drivers are system
routines that are added to an operating system to allow the computer
to communicate with a new device, such as a scanner, modem, or
printer. Device drivers often have features that can be executed
directly as applications programs. This allows the user to directly
control the device, which is useful if, for instance, a color printer
needs to be realigned to attain the best printing quality after
changing an ink cartridge.

## IV. Program Function

Modern computers usually store programs on some form of magnetic
storage media that can be accessed randomly by the computer, such as
the hard drive disk permanently located in the computer. Additional
information on such disks, called directories, indicates the names of
the carious programs on the disk, when they were written to the disk,
and where the program begins on the disk media. When a user directs
the computer to execute a particular application program, the
operating system looks through these directories, locates the program,
and reads a copy into RAM. The operating system then directs the CPU
(central processing unit) to start executing the instructions at the
beginning of the program. Instructions at the beginning of the program
prepare the computer to process information by locating free memory
locations in RAM to hold working data, retrieving copies of the
standard options and defaults the user had indicated from a disk, and
drawing initial displays on the monitor.



