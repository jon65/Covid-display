"""
Complete the method/function so that it converts dash/underscore delimited words 
into camel casing. The first word within the output should be capitalized only 
if the original word was capitalized (known as Upper Camel Case, also often
referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"""


def to_camel_case(text):
    if len(text)==0:
        return text
    s = text.replace("_", " ").replace("-", " ").split(" ",1)
    return s[0] + s[1].title().replace(" ", "")

def to_camel_case(text):
    s = text.replace("-", " ").replace("_", " ")
    s = s.split()
    if len(text) == 0:
        return text
    return s[0] + ''.join(i.capitalize() for i in s[1:])


print(to_camel_case("the_stealth_warrior"))

"""
Use a mapping table to replace "S" with "P":

txt = "Hello Sam!"
mytable = txt.maketrans("S", "P")
print(txt.translate(mytable))
"""
def to_camel_case(s):
    return s[0] + s.title().translate(None, "-_")[1:] if s else s


def find_it(seq):
    for i in seq:
        print(i)
        if seq.count(i)%2!=0:
            return i



print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

num1=111
def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))
    
print(Descending_Order(num1))

def order(words):
  return ' '.join(sorted(words.split(), key=lambda w:sorted(w)))
order("is2 Thi1s T4est 3a")
print(order("is2 Thi1s T4est 3a"))