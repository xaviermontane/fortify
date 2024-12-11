import string
import secrets

user_pwd = input("\nEnter your password: ")

no_format = True
while no_format: #Formatting checks [Add more...]
    format_pwd = user_pwd.replace(" ", "")
    print() if format_pwd == user_pwd else print(f"Your password has been formatted to: {format_pwd}") #Omit formatting if unnecessary
    no_format = False

def secure_pass(pwd):
    pwd = format_pwd
    minimum_req = [len(pwd) < 12]
    #Security checks begin
    for x in minimum_req:
        if x is True:
            print("Your password doesn't meet the minimum requirements")
        elif x is False:
            print("Your password meets the minimum requirements")
    else:
        pass
    global secure_pwd
    secure_pwd = pwd
secure_pass(user_pwd)

print(f"\nYour old password was: {user_pwd}")
print(f"Your secure password is: {secure_pwd}")