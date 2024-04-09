import random

ListeT=["eul pilom","eul lom","l'ĕoagĕ","la seinĕriyĕ","la vilĕ de noaquicencĕ","eul chaisiau","eul minquier"];
ListeF=["le prénom","le nom","l'âge","le surnom","la ville de naissance","l'adresse","le métier"]
condition=0
nombre=7

while condition==0:
    Liste1=[]
    Liste2=[]
    Liste3=[]
    Liste4=[]
    Liste_BR=[]
    occurence = [0] * nombre
    c=0
    for i in range(nombre):
        liste_mr=[i]
        occurence[i]+=1
        if c==1000:
            print("fin")
            break
        c=0
        while len(liste_mr)<4  and c<1000:
            a=random.randint(0,nombre-1)
            c+=1
            if a!=i and a not in liste_mr and occurence[a]!=4:
                if a>i:
                    if occurence[a]!=3:
                        liste_mr.append(a)
                        occurence[a]+=1
                else:
                    liste_mr.append(a)
                    occurence[a]+=1
        random.shuffle(liste_mr)
        #print(liste_mr)
        if c<1000:
            Liste1.append(ListeT[liste_mr[0]])
            Liste2.append(ListeT[liste_mr[1]])
            Liste3.append(ListeT[liste_mr[2]])
            Liste4.append(ListeT[liste_mr[3]])
            Liste_BR.append(liste_mr.index(i)+1)
    print(occurence)
    if len(Liste_BR)==nombre:
        condition=1

print(occurence)
print(Liste1)
print(Liste2)
print(Liste3)
print(Liste4)
print(Liste_BR)
    
