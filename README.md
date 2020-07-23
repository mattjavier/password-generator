# Password Generator

A program that takes in user input to generate a password with constraints.
The process includes:

* Asking the user for a number of characters the password can be (no less than 8 and no more than 128)
* Asking the user what kind of characters to include (lowercase or uppercase letters, numerics or special characters)

Dialogue boxes appear prompting the user for input. If it requires text, the user inputs text. If it requries a 'yes' or 'no' answer, the user clicks 'OK' for 'yes' or 'Cancel' for 'no'.

* If the user puts less than 8 characters or more than 128 characters for the password length, the user will be prompted continuously until they put a valid number for length.

* If the user refuses to put a password length, they will continuously be prompted to do so.

* To ensure the password has at least one constraint, the user will be prompted again if they chose not to select any character constraints until at least one is selected.

The program then generates a password of the specified length and consists of the type of characters the user decided to include. 