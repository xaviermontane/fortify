import re

no_format = True

while no_format:
    try:
        user_pwd = input("\nEnter your password: ")
        if user_pwd == "":
            raise SyntaxError
        format_pwd = user_pwd.replace(" ", "")
        format_pwd = format_pwd[:63]
        if not format_pwd.isprintable() or re.search(r'[^\w\s!@#$%^&*(),.?":{}|<>]', format_pwd):
            raise UnicodeError
    except UnicodeError:
        print("Password contains uncommon special symbols or spaces, please try again.")
        continue
    except SyntaxError:
        print("Password can't be blank, please try again.")
        continue

    print() if format_pwd == user_pwd else print(f"Password formatted to: {format_pwd}\n") #Omit formatting if unnecessary
    no_format = False

def fortify_pass(pwd):
    pattern = re.compile(r'^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z]).+$')
    if pattern.match(pwd):
        print("[√] - Your password meets the minimum requirements\n")
        minimum_req = True
    else:
        print("[X] - Your password doesn't meet the minimum requirements\n")
        minimum_req = False

    #Security checks begin
    while not minimum_req:
        if len(pwd) < 12:
            pwd = input("Include at least 12 characters: ")
        elif not re.search(r'[0-9]', pwd):
            pwd = input("Include at least one number: ")
        elif not re.search(r'[!@#$%^&*(),.?":{}|<>]', pwd):
            pwd = input("Include at least one symbol: ")
        elif not re.search(r'[a-z]', pwd):
            pwd = input("Include uppercase letters: ")
        elif not re.search(r'[A-Z]', pwd):
            pwd = input("Include lowercase letters: ")

        #Re-check if the password now meets the requirements
        if len(pwd) >= 12 and re.search(r'[0-9]', pwd) and re.search(r'[!@#$%^&*(),.?":{}|<>]', pwd) and re.search(r'[a-z]', pwd) and re.search(r'[A-Z]', pwd):
            minimum_req = True
    return pwd
fortify_pass(format_pwd)

print(f"Your old password was: {user_pwd}")
print(f"Your secure password is: {format_pwd}\n")