from random import shuffle

Propositions = [
    ["Queique-dung","que","t'agrĕyĕs-ti","faizĕr","?","t'hoas-ti","tu","rĕssĕs-ti"],
    ["J'agrĕyĕ","ben","saighlir","d'anque","les","meuns","d'amiys","faizĕr"],
    ["J'agrĕyĕ","ben","terhlutrair","de","la","meusiquĕ","J'hag","saighlir"],
    ["T'haguis-ti-dung","d'auquieunĕs","accions","?","t'hoas-ti","tu","rĕssĕs-ti","que"],
    ["J'haguig","vadair","loa ","alosierĕ","Jĕ","rĕssĕ","la","sus"],
    ["J'haguig","faizĕr","de","la","quieulturĕ","pherucalĕ","ben","J'agrĕyĕ"],
    ["E","toue-dung,","queique-dung","que","t'agrĕyĕs-ti","faizĕr","?","T'haguis-ti-dung"],
    ["J'agrĕyĕ","ben","vadair","loa","falosierĕ","J'haguig","terhlutrair","J'hag"],
    ["J'agrĕyĕ","ben","faizĕr","de","la","quieulturĕ","pherucalĕ","vadair"],
    ["E","t'haguis-ti-dung","d'auquieunĕs","accions","?","t'hoas-ti","tu","rĕssĕs-ti"],
    ["J'haguig","terhlutrair","de","la","meusiquĕ","saighlir","faizĕr","ersghlentir"],
    ["J'haguig","saighlir","d'anque","les","meuns","d'amiys","ben","J'agrĕyĕ"],
  ];

# Mélanger l'ordre des éléments dans chaque sous-liste
for sublist in Propositions:
    shuffle(sublist)

# Afficher les propositions
for sublist in Propositions:
    print(sublist)
