/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
//ouvrir l'accès au menu par défaut



//Création de l'objet Contacts
var Contact = {
  
    // Initialise le contact
    init: function ( nom, prenom, genre, age) {
       
        this.nom = nom;
        this.prenom = prenom;
        this.genre= genre;
        this.age= age;
    },
    
    // Renvoie la description du contact 
    decrire: function () {
        var description =  " -" + "Nom: " + this.nom +" Prénom: "  + this.prenom + " Genre: " + this.genre + " Âge: " + this.age + " ans.";
        return description;
    }
    };

//Création des  premiers contacts 
var contact1 = Object.create(Contact);
contact1.init( "Lévisse", "Carole", "Féminin", "151");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie", "Féminin", "45");
var contact3= Object.create(Contact);
contact3.init("Bouh","Dah", "Masculin", "76");

var contact4= Object.create(Contact);
contact4.init("bah", "Daboum", "", "3");

var contact5= Object.create(Contact);
contact5.init("Bidule", "Machine", "Féminin", "42");

var contact6= Object.create(Contact);
contact6.init("Bidule", "Bachine", "Féminin", "78");

var contact7= Object.create(Contact);
contact7.init("Boudille", "Burinette", "Féminin", "13");

var contact8= Object.create(Contact);
contact8.init("Binôme", "Boudeur", "Masculin", "14");

var contact9= Object.create(Contact);
contact9.init("Nelsonne", "Ollie", "", "19" );

var contact10= Object.create(Contact);
contact10.init("Arzus", "Biquet", "", "48");


// Les  premiers contacts entrent désormais dans un tableau
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);
contacts.push(contact3);
contacts.push(contact4);
contacts.push(contact5);
contacts.push(contact6);
contacts.push(contact7);
contacts.push(contact8);
contacts.push(contact9);
contacts.push(contact10);


//Message d'accueil
console.log("Bienvenue dans ce gestionnaire de contacts!")

//Tant que l'utilisateur n'a pas choisi de quitter le programme(en tapant 5)...
while(opt!=="5")  
    {
    
    //La console affiche les options disponibles
    console.log("Voici vos options:\n1-Lister les contacts.\n2-Ajouter un contact.\n3-Supprimer un contact\n4-Statistiques\n5-Quitter.");
        
    //Une fenêtre invite l'utilisateur à choisir une option parmi celles proposées en console
    var opt= prompt("Veuillez choisir une option :");
         //si les options ne sont pas les bonnes...  
      if(opt!=="1" && opt!=="2" && opt!=="3" && opt!=="4" && opt!=="5")
        //une fenêtre indique à l'utilisateur qu'il doit bien taper 1 2 ou 3 4 ou 5
        { 
            alert("je n'ai pas compris votre choix, merci de taper le chiffre correspondant à l'option choisie.");
        }
        else
        {
        
       switch(opt)
        {

            //Si l'utilisateur choisit 1 ( afficher les contacts)
            case"1":
            
                //En console, un message confirme ce qu'il va afficher
                console.log("Voici les contacts présents dans votre gestionnaire: ")
                //Méthode forEach(): on l'utilise pour afficher la description des contacts présents dans le tableau en console(grâce à la méthode decrire)
                contacts.forEach(function (contact) {
                console.log(contact.decrire());
                });
            break;
            
            //Si l'utilisateur choisit 2 (ajouter un contact)
            case"2":
            
                //on crée une variable tapNom qui contient le nom que va taper l'utilisateur
                var tapNom= prompt("Veuillez taper un nom:");
                //Puis on crée une variable tapPrénom qui contient le prénom que va taper l'utilisateur
                var tapPrenom= prompt("Veuillez taper un prénom:");
            
                //on crée une variable tapGenre qui va essayer de déterminer si le nouveau contact est féminin ou masculin ( ou ne souhaite pas se déterminer ainsi)
                //on demande si le nouveau contact est féminin
                var tapGenre= prompt("Votre nouveau contact est-il Féminin?");
                    if(tapGenre=="oui")
                    {
                        tapGenre= "Féminin";
                    }
                    //s'il n'est pas féminin... 
                    else if (tapGenre=="non")
                    {
                    //on demande s'il est masculin
                        tapGenre= prompt("Votre nouveau contact est-il Masculin?" );
                            if (tapGenre=="oui")
                                {
                                tapGenre="Masculin";
                                }
                        //s'il n'a répondu oui ni à féminin, ni à masculin, on déclare qu'il ne souhaite pas être déterminé selon son genre
                    else {
                        tapGenre= " genre non déterminé par ce formulaire ";
                         }
                     }
                
                //on crée une variable tapAge qui contient l'âge que va taper l'utilisateur
                var tapAge = prompt("Quel âge a votre contact?");
                //On affiche en console la confirmation que le nouveau contact a bien été validé
                console.log("Merci, votre nouvelle entrée "+ tapNom + " " + tapPrenom + ", " + tapGenre + ", " + tapAge + " ans" + " a bien été validée!");
        
                //on crée un nouvel objet contact 
                var contactx= Object.create(Contact);
                //on met dans ce nouveau contact la variable que vient de taper l'utilisateur
                contactx.init(tapNom, tapPrenom, tapGenre, tapAge);
                //on ajoute ce contact au tableau
                contacts.push(contactx);
                break;
            
            //si l'utilisateur choisit l'option 3 (supprimer un contact)
            case"3":
            
                //en console, on lui affiche les contacts 
                for (var i = 0; i < contacts.length; i++) 
                    {
                        console.log(i+1), console.log(contacts[i]);
                    }
            
                //une fenêtre lui demande quel est le numéro du contact à supprimer
                var tapSup = prompt("veuillez choisir le n° du contact à supprimer");    
                var  sup = contacts.splice((tapSup-1),1);
                //On affiche en console la confirmation que le nouveau contact a bien été supprimé
                console.log("Merci, votre contact n°"+ tapSup +" a bien été supprimé!");
            break;
                
             //si l'utilisateur choisit l'option 4 (statistiques)
            case"4":
                
                //on lui annonce les options
                console.log("Quelles statistiques voulez-vous consulter?");
                //les options statistiques disponibles
                console.log("1-Nombre de contacts\n2-Le genre de mes contacts\n3-l'âge moyen de mes contacts\n4-Recherche de contacts\n5-Quitter les statistiques");
                
                    
                
                    //il choisit la valeur de stat
                        var stat = prompt("Veuillez choisir une option:");
                        
                            //s'il tape bien le numéro d'une option 
                            if(stat!="1" && stat!="2" && stat!="3" && stat!="4" && stat!="5")
                                {
                                //une fenêtre indique à l'utilisateur qu'il doit bien taper 1 2 ou 3 ou 4  
                                    alert("je n'ai pas compris votre choix, merci de taper le chiffre correspondant à l'option choisie.");
                                }
                            else
                                {
                                    //zoom sur son choix:
                                    switch(stat)
                                        {
                                            //cas n°1: il a veut connaitre le nombre de ses contacts
                                            case"1":
                                                var nb = contacts.length;
                                                console.log("Votre gestionnaire contient pour le moment " + nb + " contacts.");
                                            break;
                                                
                                            //cas n°2: il veut connaître le genre de ses contacts    
                                            case"2":
                                                //je crée 3 variables qui valent 0
                                                var f=0;
                                                var m=0;
                                                var n=0;
                                                
                                                //Il parcourt tous mes contacts présents dans le tableau et à chaque fois qu'un contact correspond à un genre, il incrémente la variable correspondante      
                                                contacts.forEach(function(contact)
                                                    {
                                                    if(contact.genre=="Féminin"){f++;} 
                                                    else if(contact.genre=="Masculin"){m++;}
                                                    else{n++;}});
                                                //retourne en console le résultat de ses calculs
                                                console.log ("Votre formulaire contient " + f + " membres féminins, " + m + " membres masculins et " + n + " membres qui ne souhaitent pas définir leur genre.");
                                            break;
                                                
                                            //cas n°3: il veut savoir l'âge moyen de ses contacts    
                                            case"3":
                                                totAge=0
                                                ind=0
                                                contacts.forEach( function(contact){contact.age= +(contact.age);totAge+=contact.age;ind++});
                                                var moyAge = totAge/ind;
                                                console.log("Les contacts de votre gestionnaire ont en moyenne " + +moyAge + " ans.");
                                                break;
                                                
                                            //cas n°4 chercher un contact
                                           case"4":
                                                //variables du moteur de recherches initialisées à 0
                                                var loose=0;
                                                var bingo=0;
                                                var qf=0;
                                                var qm=0;
                                                var qn=0;
                                                var ql=0;
                                                var qp=0;
                                                var qfl=0;
                                                var qml=0;
                                                var qnl=0;
                                                var qp=0;
                                                var qflp=0;
                                                var qmlp=0;
                                                var qnlp=0;
                                                var qa=0;
                                                var qflpa=0;
                                                var qmlpa=0;
                                                var qnlpa=0;
                                                var qb=0;
                                                var qflpb=0;
                                                var qmlpb=0;
                                                var qnlpb=0;
                                                    //tant que l'on a pas trouvé ce qu'on cherchait ou raté sa recherche...
                                                    while(bingo!==1 && loose!==1) 
                                                           {
                                                               //on demande si le contact recherché est féminin
                                                                var aki1 = prompt("Est ce que le contact que vous recherchez est féminin?");
                                                                    //s'il est féminin...
                                                                    if (aki1=="oui")
                                                                        {
                                                                            // on compte le nombre de contacts féminins
                                                                            contacts.forEach(function(contact)
                                                                                {
                                                                                    if (contact.genre=="Féminin")
                                                                                        {
                                                                                            qf++;
                                                                                        }
                                                                                }           );
                    
                                                    


   
        
          
                                                                                        //s'il n'y a qu'un contact féminin...
                                                                                        if (qf==1)
                                                                                            {
                                                                                                contacts.forEach(function(contact)
                                                                                                    {
                                                                                                        if (contact.genre=="Féminin")
                                                                                                            {
                                                                                                                //on affiche le nom du contact trouvé
                                                                                                                console.log("le contact que vous cherchez est " + contact.decrire());
                                                                                                                //on a gagné, bingo on retourne au menu des options
                                                                                                                bingo=1;
                                                    
                                                                                                            }
                                                                                                        }
                                                            
                                                                                                                    )
                                                
                                                                                                }
                                                                            
                                                                            
                                                                                            //si vous n'avez aucun contact féminin
                                                                                            else if (qf==0)
                                                                                                {
                                                                                                    //message d'erreur
                                                                                                        console.log("Vous n'avez aucun contact féminin dans votre gestionnaire désolé.");
                                                                                                    //perdu, retour au menu
                                                                                                        loose=1;
                                    
                                                                                                }
                                                                        }
                                                               //si vous ne cherchez pas un contact féminin
                                                                    else
                                                                        {
                                                                            //on demande si le contact recherché est masculin
                                                                            var aki2 = prompt("Est ce que le contact que vous recherchez est masculin?");
                                                    
                                                                                //s'il est masculin...
                                                                                if (aki2=="oui")
                                                                                    {
                                                                                        // on compte le nombre de contacts masculins
                                                                                        contacts.forEach(function(contact)
                                                                                            {
                                                                                                if (contact.genre=="Masculin")
                                                                                                    {
                                                                                                        qm++;
                                                                                                    }
                                                                                            }           );
                    
                                                                                                //s'il n'y a qu'un contact masculin...
                                                                                                if (qm==1)
                                                                                                    {
                                                                                                        contacts.forEach(function(contact)
                                                                                                            {
                                                                                                                if (contact.genre=="Masculin")
                                                                                                                    {
                                                                                                                        //on affiche le nom du contact trouvé
                                                                                                                            console.log("le contact que vous cherchez est " + contact.decrire());
                                                                                                                        //on a gagné, bingo on retourne au menu des options
                                                                                                                        bingo=1;
                                                    
                                                                                                                    }
                                                                                                            }
                                                            
                                                                  )
                                                
                                                                                                        }
                                                                                //si vous n'avez aucun contact masculin
                                                                                else if (qm==0)
                                                                                    {
                                                                                        //message d'erreur
                                                                                        console.log("Vous n'avez aucun contact féminin dans votre gestionnaire désolé.");
                                                                                        //perdu, retour au menu
                                                                                        loose=1;
                                    
                                                                                    }
                        
                                                                                    }
                                                                    //si le contact n'est ni masculin ni féminin
                                                                    else
                                                                        {
                                                                            // on compte le nombre de contacts autres
                                                                                contacts.forEach(function(contact)
                                                                                    {
                                                                                        if (contact.genre!=="Masculin" && contact.genre !=="Féminin")
                                                                                            {
                                                    
                                                                                                qn++;
                                                                                            }
                                                                                    }           );
                                                                            
                    
                                                                                        //s'il n'y a qu'un contact autre...
                                                                                        if (qn==1)
                                                                                            {
                                                                                                contacts.forEach(function(contact)
                                                                                                    {
                                                                                                        if (contact.genre!=="Masculin"&& contact.genre!=="Féminin")
                                                                                                            {
                                                                                                                //on affiche le nom du contact trouvé
                                                                                                                console.log("le contact que vous cherchez est " + contact.decrire());
                                                                                                                //on a gagné, bingo on retourne au menu des options
                                                                                                                bingo=1;
                                                    
                                                                                                            }
                                                                                                        }
                                                            
                                                                                                                )
                                                
                                                                                            }
                                                                                        //si vous n'avez aucun contact autre
                                                                                        if (qn==0)
                                                                                            {
                                                                                                //message d'erreur
                                                                                                console.log("Vous n'avez aucun contact correspondant dans votre gestionnaire désolé.");
                                                                                                //perdu, retour au menu
                                                                                                loose=1;
                                    
                                                                                            }
                                    
                                                                        }
                                                                        }
                //si le genre n'a pas suffi à déterminer le contact choisi ( il y en a plus d'un), 
                if(qf>=2 || qm>=2 ||  qn>=2 )  
                  {
                    //on tente de les départager avec l'initiale de leur nom
                    var aki3 = prompt("Quelle est la première lettre du nom de votre contact?");
                      
                    //pour ça on compte combien de contacts ont l'initiale qu'ils ont tapée
                    contacts.forEach(function(contact)
                        {
                            if (contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase())
                                {
                                    ql++;
                                }
                                                
                                                   
                        }           );
                         
                      
                                //s'il y en a qui sont à la fois féminins et qui ont la bonne initiale, on les compte 
                               if(qf!==0 && ql!==0)
                                {
                                  contacts.forEach(function(contact)
                                    {
                                      if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase())
                                          {
                                            
                                                            qfl++;
                                          }
                                      
                                    });
                                }
                      
                                //idem pour les masculins qui ont la bonne initiale
                                if(qm!==0 && ql!==0)
                                    {
                                        contacts.forEach(function(contact)
                                            {
                                                if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase())
                                                    {
                                            
                                                        qml++;
                                                    }
                                      
                                            });
                                    }
                      
                      
                                //idem pour les neutres ( ni f ni m)
                                if(qn!==0 && ql!==0)
                                    {
                                        contacts.forEach(function(contact)
                                            {
                                                if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase())
                                                    {
                                            
                                                        qnl++;
                                                    }
                                      
                                            });
                                    }
                      
                      
                                    //s'il on en a trouvé aucun dans un genre ou dans un autre, on signale que la recherche a échoué
                                    if(qfl==0 && qml==0 && qnl==0)
                                        {
                                          //message d'erreur
                                        console.log("Vous n'avez aucun contact correspondant dans votre gestionnaire désolé.");
                                        //perdu, retour au menu
                                        loose=1;  
                                        }
                      
                      
                                    //si 1 seul contact est à la fois féminin et a la bonne initiale, c'est bon!
                                    if(qfl==1)
                                        {
                                            contacts.forEach(function(contact)
                                                {
                                                    if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase()) 
                                                        {
                                                            console.log("le contact que vous cherchez est " + contact.decrire());
                                                            bingo=1;
                                                        }
                                                });
                                        }
                            
                                    //idem s'il n'y a qu'un membre masculin avec la bonne initiale
                                    if(qml==1)
                                        {
                                            contacts.forEach(function(contact)
                                                {
                                                    if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase()) 
                                                        {
                                                            console.log("le contact que vous cherchez est " + contact.decrire());
                                                            bingo=1;}
                                                });
                                        }
                      
                      
                                    //ou si un seul neutre a la bonne initiale
                                    if(qnl==1)
                                        {
                                            contacts.forEach(function(contact)
                                                {
                                                    if(contact.genre=="Féminin" && contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase()) 
                                                        {
                                                            console.log("le contact que vous cherchez est " + contact.decrire());
                                                            bingo=1;
                                                        }
                                                });
                                        }
                      
                      
                  }
                                                               
        //si la recherche n'a toujours pas réussi à départager les contacts, on passe aux initiales du prénom                                                       
        if(qfl>=2 || qml >=2 || qnl >=2)
            {
                var aki4 = prompt("Quelle est la première lettre du prénom de votre contact?");
                 
                    //on compte les prénoms qui ont la bonne initiale
                    contacts.forEach(function(contact)
                        {
                            if (contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase())
                                    {
                                        qp++;
                                    }
                                                
                                                   
                        }           );
                
                
                //on compte les prénoms féminins ayant la bonne initiale
                if(qfl!==0 && qp!==0)
                    {
                        contacts.forEach(function(contact)
                            {
                                if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase())
                                    {
                                            
                                        qflp++;
                                    }
                                      
                            });
                    }
                
                
                
                //pareil pour les masculins 
                if(qml!==0 && qp!==0)
                    {
                        contacts.forEach(function(contact)
                            {
                                if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase())
                                    {
                                            
                                        qmlp++;
                                    }
                                      
                            });
                    }
                
                //et pour les neutres
                if(qnl!==0 && qp!==0)
                    {
                        contacts.forEach(function(contact)
                            {
                                if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase())
                                    {
                                            
                                        qnlp++;
                                    }
                                      
                            });
                    }
                                   
                
                
                //si dans un genre ou dans un autre, il n'y a pas de résultats
                if(qflp==0 && qmlp==0 && qnlp==0)
                    {
                        //message d'erreur
                        console.log("Vous n'avez aucun contact correspondant dans votre gestionnaire désolé.");
                        //perdu, retour au menu
                        loose=1;  
                    }
                
                
                //si parmi les membres féminins un seul remplit toutes les conditions, c'est bon!                
                if(qflp==1)
                    {
                        contacts.forEach(function(contact)
                            {
                                if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()) 
                                    {
                                        console.log("le contact que vous cherchez est " + contact.decrire());
                                        bingo=1;
                                    }
                            });
                    }
                
                
                            
                //idem chez les masculins 
                if(qmlp==1)
                    {
                        contacts.forEach(function(contact)
                            {
                                if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()) 
                                    {
                                        console.log("le contact que vous cherchez est " + contact.decrire());
                                        bingo=1;
                                    }
                            });
                    }
                
                
                //et chez les neutres
                if(qnlp==1)
                    {
                        contacts.forEach(function(contact)
                            {
                                if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()) 
                                    {
                                        console.log("le contact que vous cherchez est " + contact.decrire()) ;
                                        bingo=1;
                                    }
                            });
                    }
            }
                                                               
                            
                
            
        //Si tout ça n'a pas suffi, un ultime arbitrage, + ou - de 50 ans (je sais c pas terrible, mais j'avais la flemme de faire plus fin)
    if(qflp>=2 || qmlp >=2 || qnlp >=2)
            {
    
                var  aki5= prompt("Est-ce que votre contact a plus de 50 ans ?");

                    //si le contact a plus de 50 ans, on le compte
                    if (aki5 == "oui")
                        {
                            contacts.forEach(function(contact)
                                {
                                    if (+contact.age>=51 )
                                        {
                                            qa++;
                                        }
                                                
                                                   
                                }           );
                
                
                        }
    //s'il a moins de 50 ans; on le compte également            
    else 
        {
           contacts.forEach(function(contact)
                {
                    if (+contact.age<=50 )
                        {
                            qb++;
                        }
                                                
                                                   
                }           );
                
                 
        }
                
                
        //on compte les membres féminins qui  remplissent tous les critères et ont + de 50 ans 
        if(qflp!==0 && qa!==0)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age>=51 )
                            {
                                            
                                qflpa++;
                            }
                                      
                    });
            }
                
                
        //puis celles qui ont moins de 50 ans...
        if(qflp!==0 && qb!==0)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age<=51 )
                            {
                                            
                                qflpb++;
                            }
                                      
                    });
            }
                
        // idem pour les hommes + de 50 ans        
        if(qmlp!==0 && qa!==0)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age>=51 )
                            {
                                            
                                qmlpa++;
                            }
                                      
                    });
            }
                
        // hommes moins de 50 ans        
        if(qmlp!==0 && qb!==0)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age<=51 )
                            {
                                            
                                qmlpb++;
                            }
                                      
                    });
            }
                
                
         //neutre+50       
        if(qnl!==0 && qa!==0)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age>=51 )
                            {
                                            
                                qnlpa++;
                            }
                                      
                    });
            }
                
        //neutre -50
        if(qnl!==0 && qb!==0)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age<=51 )
                            {
                                            
                                qnlpb++;
                            }
                                      
                    });
            }
                
                
            //s'il y en a pour qui la recherche n'a rien donné 
            if(qflpa==0 && qmlpa==0 && qnlpa==0 && qflpb==0 && qmlpb==0 && qnlpb==0)
                {
                    //message d'erreur
                    console.log("Vous n'avez aucun contact correspondant dans votre gestionnaire désolé.");
                    //perdu, retour au menu
                    loose=1;  
                }
                
                
                //femmes +50 1 seul résultat c bon!
            if(qflpa==1)
                {
                    contacts.forEach(function(contact)
                        {
                            if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age>=51) 
                                {
                                 console.log("le contact que vous cherchez est " + contact.decrire());
                                    bingo=1;
                                }
                        });
                }
                
             //femmes -50ok      
        if(qflpb==1)
                {
                    contacts.forEach(function(contact)
                        {
                            if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age<=51) 
                                {
                                    console.log("le contact que vous cherchez est " + contact.decrire());
                                    bingo=1;}
                        });
                }
                
                
            //hommes+50 ok                
        if(qmlpa==1)
            {
                contacts.forEach(function(contact)
                    {
                        if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()&& +contact.age>=51) 
                                {
                                    console.log("le contact que vous cherchez est " + contact.decrire());
                                    bingo=1;
                                }
                        });
                }
                
             //hommes -50 ok   
            if(qmlpb==1)
                {
                    contacts.forEach(function(contact)
                        {
                            if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()&& +contact.age<=51) 
                                {
                                    console.log("le contact que vous cherchez est " + contact.decrire());
                                    bingo=1;
                                }
                        });
                }
                
                
                
        //neutre + 50 ok
            if(qnlpa==1)
                {
                    contacts.forEach(function(contact)
                        {
                            if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()) 
                                {
                                    console.log("le contact que vous cherchez est " + contact.decrire()&& +contact.age>=51) ;
                                    bingo=1;
                                }
                        });
                }
                
            //neutre -50ok                   
            if(qnlpb==1)
                {
                    contacts.forEach(function(contact)
                        {
                            if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()) 
                            {
                                    console.log("le contact que vous cherchez est " + contact.decrire()&& +contact.age<=51) ;
                                    bingo=1;
                            }
                        });
                }
                               
            // s'il y a toujours trop de résultats dans une catégorie ou l'autre on affiche quand même ceux trouvés
            if(qflpa>=2)
            {
                console.log( "Le contact que vous recherchez peut être parmi ceux-là. Ce gestionnaire ne peut pas aller plus loin dans la recherche");
                contacts.forEach(function(contact)
                                            {
                                           if(contact.genre=="Féminin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase() && +contact.age>=51) 
                                               {console.log("le contact que vous cherchez est " + contact.decrire());
                                                            loose=1;}
                                            });
                                        }
                
                
            
            

            if(qmlpa>=2)
            
             {
                 
                console.log( "Le contact que vous recherchez  parmi ceux-là. Ce gestionnaire ne peut pas aller plus loin dans la recherche");
                                    contacts.forEach(function(contact)
                                            {
                                           if(contact.genre=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()&& +contact.age>=51) 
                                               {console.log("le contact que vous cherchez est " + contact.decrire());
                                                            loose=1;}
                                            });
                                }

            if(qnlpa>=2)
            {
                console.log( "Le contact que vous recherchez  parmi ceux-là. Ce gestionnaire ne peut pas aller plus loin dans la recherche");
                                    contacts.forEach(function(contact)
                                            {
                                           if(contact.genre!=="Féminin" && contact.genre!=="Masculin" && contact.nom.toLowerCase().charAt(0)== aki3.toLowerCase() && contact.prenom.toLowerCase().charAt(0)== aki4.toLowerCase()) 
                                               {console.log("le contact que vous cherchez est " + contact.decrire()&& +contact.age>=51) ;
                                                            loose=1;}
                                            });
                                
                               
              }}
            
            }      
    
  
                               
                                
                        }
            
            
                                
                                }
        }
                
   
        
        }
        
    }
        
//sortie de la boucle: l'utilisateur a tapé 5, il veut quitter le programme, message d'au revoir en console
console.log("Merci de votre visite sur ce gestionnaire de contact, à bientôt!");


   







