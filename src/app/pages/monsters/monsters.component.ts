import {Component, OnInit} from '@angular/core';
import {MonsterService} from '../../services/monster.service';
import {APIMonsterResult, APIMonstersResult} from '../../features/monsters/forms/APIMonstersResult';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss'
})
export class MonstersComponent implements OnInit {
  allMonsters: APIMonsterResult[] = [];
  displayedMonsters: APIMonsterResult[] = [];
  currentPage = 1;
  monstersPerPage = 30;
  totalPages = 0;

  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.monsterService.getMonsters().subscribe({
      next: (monsters) => {
        this.allMonsters = monsters;
        this.totalPages = Math.ceil(this.allMonsters.length / this.monstersPerPage);
        this.updateDisplayedMonsters();
        console.log(monsters)
      },
      error: (err) => console.error('Failed to fetch monsters:', err),
    });
  }

  updateDisplayedMonsters(): void {
    const startIndex = (this.currentPage - 1) * this.monstersPerPage;
    const endIndex = startIndex + this.monstersPerPage;
    this.displayedMonsters = this.allMonsters.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedMonsters();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedMonsters();
    }
  }

}
