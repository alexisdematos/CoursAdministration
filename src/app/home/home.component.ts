import {OnInit, Component} from "@angular/core";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
cours=[
  {nom: 'LEE', professeur: 'Breuvart', etudiants: '80' , desc:"Apprenons pleins de choses pour programmer", dates:["01/01/2019","01/03/2019"]},
  {nom: 'JSAU', professeur: 'DARCHE', etudiants: '30' , desc:"Trop de puissance en JS", dates:["04/02/2019"]},
  {nom: 'TND', professeur: 'Bennani', etudiants: '80' , desc:"Le Big Data, c'est pas pour moi", dates:[]}];

cours_Desc=[];
sessions_cours=[];

var_nom="";
var_prof="";
var_et="";
var_desc="";

varA_nom="";
varA_prof="";
varA_et="";
varA_desc="";

var_date_session="";

ngOnInit() {
}




choixCours(c)
{
this.cours_Desc=[];
this.cours_Desc.push(c);
this.var_nom=c.nom;
this.var_prof=c.professeur;
this.var_et=c.etudiants;
this.var_desc=c.desc;
}

afficheSessions(c)
{
this.sessions_cours=[];
this.sessions_cours.push(c);
}


supprCours(c){
const index: number = this.cours.indexOf(c);
  if (index !== -1) {
      this.cours.splice(index, 1);
      this.cours_Desc=[];
  }
}

modCours(c,var_nom,var_prof,var_et,var_desc){
const index: number = this.cours.indexOf(c);
  if (index !== -1) {
      var co={nom:var_nom,professeur:var_prof,etudiants:var_et,desc:var_desc,dates:c.dates};
      this.cours.splice(index, 1, co);
      this.cours_Desc=[];
  }
}


ajoutCours(c,varA_nom,varA_prof,varA_et,varA_desc){
      var co={nom:varA_nom,professeur:varA_prof,etudiants:varA_et,desc:varA_desc,dates:[]};
      this.cours.push(co);
      this.varA_nom="";
      this.varA_prof="";
      this.varA_et="";
      this.varA_desc="";
}

ajoutSession(c,date){
      c.dates.push(date);
      this.var_date_session="";
}

supprSession(c,date){
const index: number = this.cours.indexOf(c);
  if (index !== -1) {
      const indexDate: number = this.cours[index].dates.indexOf(date);
        if (indexDate !== -1) {
            this.cours[index].dates.splice(indexDate, 1);
        }
  }
}

}
