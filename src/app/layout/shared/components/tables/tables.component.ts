import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @Input() header: any;
  @Input() data$: any;
  @Input() theme = 'table-dark'
  @Input() title = ''
  @Input() minimumAge = ''
  @Input() duration = ''
  @Input() durationMovie = ''
  @Input() releaseDate = ''
  @Input() releaseDateMovie = ''
  @Input() director = ''
  @Input() directorMovie = ''
  @Input() cast = ''
  @Input() castMovie = ''
  @Input() synopsis = ''
  @Input() synopsisMovie = ''
  @Input() image = ''
  @Input() delete = ''
  @Input() setTrueOrFalse = "true"
  constructor() { }

  ngOnInit() {
  }
  getMovieDetails(row){
    this.title = row.title;
    this.duration = "Duration: ";
    this.durationMovie = row.duration + " min."
    this.minimumAge= row.minimumAge;
    this.releaseDate= "Release Date: ";
    this.releaseDateMovie= row.releaseDate;
    this.director= "Director: ";
    this.directorMovie= row.director;
    this.cast= "Cast: ";
    this.castMovie= row.cast;
    this.synopsis= "Synopsis: ";
    this.synopsisMovie= row.synopsis;
    this.image= row.image;
    this.delete= "Delete Movie";
    this.setTrueOrFalse="false";
  }
  
}
