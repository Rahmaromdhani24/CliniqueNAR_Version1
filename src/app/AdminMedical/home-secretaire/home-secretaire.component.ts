import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home-secretaire',
  templateUrl: './home-secretaire.component.html',
  styleUrl: './home-secretaire.component.css'
})
export class HomeSecretaireComponent  /*implements OnInit */{
  sideBar: any;
  menuIcon: any;
  mainContent : any ;
  constructor() { }

  /*ngOnInit(): void {
    // Accéder aux éléments DOM après le chargement de la vue
    setTimeout(() => {
      // Récupérer les éléments du DOM
      this.sideBar = document.getElementById('sidebar');
      this.menuIcon = document.getElementById('menu-icon');
      this.mainContent = document.getElementById('main-content');

      // Vérifier si sideBar, menuIcon et mainContent sont null
      if ( this.sideBar &&  this.menuIcon &&  this.mainContent) {
        // Attacher un gestionnaire d'événements au clic sur menuIcon
        this.menuIcon.onclick = () => {
          // Basculer les classes CSS pour le menu et le contenu principal
          this.sideBar.classList.toggle('toggleMenu');
          this.mainContent.classList.toggle('toggleContent');
        };
      }
    });
  }*/
}
