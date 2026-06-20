
let rubrica = {
    contatti : [
        {nome : 'Nicola', telefono : '3331111111'},
        {nome : 'Lorenzo', telefono : '3332222222'},
        {nome : 'Paola', telefono : '3333333333'},
        {nome : 'Jenny', telefono : '3334444444'}
    ],

    mostra_tutti_contatti : function(){

       this.contatti.forEach( (contatto)=> {
            console.log(`${contatto.nome} ${contatto.telefono}`);
       }
    )
    },

    mostra_singolo_contatto : function(NomeDaMostrare){

        let check = this.contatti.find( (contatto) => contatto.nome == NomeDaMostrare );
        
        if(check){
            console.log(`Contatto ${check.nome} ${check.telefono} trovato`);
        }else{
            console.log(`Contatto ${NomeDaMostrare} non trovato`);
        }
    },

    elimina_contatto : function(NomeDaEliminare){

        let check = this.contatti.find( (contatto) => contatto.nome == NomeDaEliminare );
        let index = this.contatti.indexOf(check);

        if(check){
            this.contatti.splice(index, 1);
            console.log('Contatto eliminato');
            
        }else{
            console.log('Contatto non presente');
            
        }
    },

    aggiungi_contatto : function(nomeDaInserire, telefonoDaInserire){

        let check_nome = this.contatti.find( (contatto)=> contatto.nome == nomeDaInserire );
        let check_telefono = this.contatti.find( (contatto)=> contatto.telefono == telefonoDaInserire );

        if( check_nome && check_telefono ){
            console.log('contatto esistente');
        }else{

            this.contatti.push({nome : nomeDaInserire, telefono : telefonoDaInserire});
        }
    },

    modifica_contatto : function(nome, telefonoDaModificare){
        let check = this.contatti.find( (contatto)=> contatto.nome == nome);

        if(check){

            check.telefono = telefonoDaModificare;
            console.log('Contatto modificato');
        }else{
            console.log('Contatto non trovato');
        }
    }
}

rubrica.mostra_tutti_contatti();

rubrica.mostra_singolo_contatto('Paola');

rubrica.elimina_contatto('Paola');
rubrica.mostra_tutti_contatti();

rubrica.aggiungi_contatto('Giancarlo', '1111111111');
rubrica.mostra_tutti_contatti();
rubrica.aggiungi_contatto('Giancarlo', '1111111111');
rubrica.aggiungi_contatto('Giancarlo', '2222222222');
rubrica.mostra_tutti_contatti();

rubrica.modifica_contatto('Jenny', '8888888888');
rubrica.mostra_tutti_contatti();
rubrica.modifica_contatto('Mario', '8888888888');
rubrica.mostra_tutti_contatti();
